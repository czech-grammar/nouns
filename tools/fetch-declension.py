#!/usr/bin/env python3
"""Fetch declension tables for every card from the Czech Wiktionary (CC BY-SA).

Writes declension.json: { word: { sg: [7 forms], pl: [7 forms], source } }.
Forms are strings; alternatives are joined with " / "; a missing number is [].
Words without a table are listed in tools/declension-missing.json.
"""
import json, os, re, sys, time, urllib.request, urllib.parse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from validate import entries
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
UA = {"User-Agent": "czech-nouns-deck/0.1 (https://github.com/czech-grammar/nouns; melvincarvalho@gmail.com)"}
CASES = ['nom', 'gen', 'dat', 'acc', 'voc', 'loc', 'ins']
GENDER_WORDS = {'ma': 'mužský životný', 'mi': 'mužský neživotný', 'f': 'ženský', 'n': 'střední'}

def wikitext(word):
    url = "https://cs.wiktionary.org/w/api.php?action=parse&prop=wikitext&format=json&redirects=1&page=" + urllib.parse.quote(word)
    for attempt in range(3):
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30))
            return d.get('parse', {}).get('wikitext', {}).get('*', '')
        except Exception:
            time.sleep(2 * (attempt + 1))
    return ''

def clean(v):
    v = re.sub(r'<ref[^>]*>.*?</ref>', '', v, flags=re.S)
    v = re.sub(r'<ref[^>]*/>', '', v)
    v = re.sub(r'\[\[([^\]|]*\|)?([^\]]*)\]\]', r'\2', v)
    v = re.sub(r"''+", '', v)
    v = v.replace('*', '').strip()
    v = re.sub(r'\s*/\s*', ' / ', v)
    return v

def tables(text):
    out = []
    for m in re.finditer(r'\{\{Substantivum \(cs\)(.*?)\n\}\}', text, re.S):
        forms = {}
        for k, v in re.findall(r'\|\s*([sp](?:nom|gen|dat|acc|voc|loc|ins))\s*=\s*([^\n]*)', m.group(1)):
            forms[k] = clean(v.rstrip('|').strip())
        before = text[max(0, m.start() - 600):m.start()]
        rod = re.findall(r"rod (mužský životný|mužský neživotný|mužský|ženský|střední)", before)
        out.append((rod[-1] if rod else '', forms))
    return out

def pick(tabs, gender):
    want = GENDER_WORDS[gender]
    for rod, forms in tabs:
        if rod == want or (gender in ('ma', 'mi') and rod == 'mužský'):
            return forms
    return tabs[0][1] if tabs else None

MODELS = ['žena','růže','píseň','kost','město','moře','kuře','stavení','pán','muž','předseda','soudce','hrad','stroj']
MODEL_GENDER = {'žena':'f','růže':'f','píseň':'f','kost':'f','město':'n','moře':'n','kuře':'n','stavení':'n','pán':'ma','muž':'ma','předseda':'ma','soudce':'ma','hrad':'mi','stroj':'mi'}

def main():
    es = entries()
    # the model words (vzory) are needed for the comparison column even when not in the deck
    es = es + [{'cs': m, 'gender': MODEL_GENDER[m]} for m in MODELS if m not in {e['cs'] for e in es}]
    out = json.load(open('declension.json', encoding='utf8')) if os.path.exists('declension.json') else {}
    missing = []
    for i, e in enumerate(es):
        w = e['cs']
        if w in out and out[w].get('source') == 'cs.wiktionary':
            continue
        text = wikitext(w)
        forms = pick(tables(text), e['gender']) if text else None
        if forms:
            sg = [forms.get('s' + c, '') for c in CASES]
            pl = [forms.get('p' + c, '') for c in CASES]
            out[w] = {'sg': sg if any(sg) else [], 'pl': pl if any(pl) else [], 'source': 'cs.wiktionary'}
        else:
            missing.append(w)
        if i % 50 == 0:
            print(f'{i}/{len(es)} ok={sum(1 for k in out if out[k].get("source")=="cs.wiktionary")} missing={len(missing)}', flush=True)
            json.dump(out, open('declension.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
        time.sleep(0.15)
    json.dump(out, open('declension.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
    json.dump(missing, open('tools/declension-missing.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
    print(f'done: {len(out)} tables, {len(missing)} missing -> tools/declension-missing.json')

if __name__ == '__main__':
    main()
