#!/usr/bin/env python3
"""Verify B1 noun candidates against the Czech Wiktionary: keep words whose
first part-of-speech section is a noun, record gender and whether a
declension table exists. Reads candidates.json, writes candidates-checked.json."""
import json, os, re, time, urllib.request, urllib.parse
os.chdir(os.path.dirname(os.path.abspath(__file__)))
UA = {"User-Agent": "czech-nouns-deck/0.1 (https://github.com/czech-grammar/nouns; melvincarvalho@gmail.com)"}
ROD = {'mužský životný': 'ma', 'mužský neživotný': 'mi', 'ženský': 'f', 'střední': 'n'}
MAX_RANK = 8000

def wikitext(w):
    u = "https://cs.wiktionary.org/w/api.php?action=parse&prop=wikitext&format=json&redirects=1&page=" + urllib.parse.quote(w)
    for a in range(3):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30)).get('parse', {}).get('wikitext', {}).get('*', '')
        except Exception:
            time.sleep(2 * (a + 1))
    return ''

def analyse(t):
    cz = re.search(r'== čeština ==(.*?)(?=\n== |\Z)', t, re.S)
    sec = cz.group(1) if cz else t
    heads = re.findall(r'\n=== ([^=\n]+?) ===', sec)
    heads = [h.strip() for h in heads if h.strip() not in ('výslovnost', 'dělení', 'etymologie', 'varianty', 'externí odkazy', 'poznámky', 'reference')]
    first = heads[0] if heads else ''
    rod = re.search(r"rod (mužský životný|mužský neživotný|ženský|střední)", sec)
    return first, (ROD.get(rod.group(1)) if rod else None), '{{Substantivum (cs)' in sec

def main():
    cand = [c for c in json.load(open('candidates.json', encoding='utf8')) if c['rank'] <= MAX_RANK]
    out = json.load(open('candidates-checked.json', encoding='utf8')) if os.path.exists('candidates-checked.json') else {}
    for i, c in enumerate(cand):
        if c['cs'] in out: continue
        t = wikitext(c['cs'])
        first, rod, decl = analyse(t) if t else ('', None, False)
        out[c['cs']] = {**c, 'first_pos': first, 'rod': rod, 'has_decl': decl, 'found': bool(t)}
        if i % 100 == 0:
            print(f'{i}/{len(cand)}', flush=True)
            json.dump(out, open('candidates-checked.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
        time.sleep(0.12)
    json.dump(out, open('candidates-checked.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
    nouns = [v for v in out.values() if v['first_pos'].startswith('podstatné jméno')]
    print(f'done: {len(out)} checked, {len(nouns)} noun-first')

if __name__ == '__main__':
    main()
