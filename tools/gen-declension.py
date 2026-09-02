#!/usr/bin/env python3
"""Generate declension tables from the pattern (vzor) for words the Czech
Wiktionary lacks. Output is marked source "generated" and needs a native check.

Usage: gen-declension.py            # fill every deck word missing from declension.json
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from validate import entries
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

V = 'aeiouyáéěíóúůý'
SOFT = {'k': 'c', 'h': 'z', 'g': 'z', 'ch': 'š', 'r': 'ř'}          # before -i / -ě
DATLOC_E = {'k': 'ce', 'h': 'ze', 'g': 'ze', 'ch': 'še', 'r': 'ře', 'c': 'ci', 'j': 'ji', 'č': 'či', 'š': 'ši', 'ž': 'ži', 'ř': 'ři',
            's': 'se', 'z': 'ze', 'l': 'le', 'd': 'dě', 't': 'tě', 'n': 'ně', 'b': 'bě', 'p': 'pě', 'v': 'vě', 'f': 'fě', 'm': 'mě'}

def last_cons(stem):
    return 'ch' if stem.endswith('ch') else stem[-1]

def soften(stem):
    c = last_cons(stem)
    return stem[:-len(c)] + SOFT[c] if c in SOFT else stem

def dat_loc_fem(stem):
    c = last_cons(stem)
    return stem[:-len(c)] + DATLOC_E.get(c, c + 'ě')

def gen_pl_zero(stem):
    """Zero ending with an epenthetic -e- inside a final consonant cluster (matka -> matek)."""
    if len(stem) >= 2 and stem[-1] not in V and stem[-2] not in V and not stem.endswith(('st', 'zd', 'sk', 'nk', 'rt', 'lk', 'rn', 'jd')):
        return stem[:-1] + 'e' + stem[-1]
    return stem

def voc_masc_hard(stem):
    c = last_cons(stem)
    if c in ('k', 'h', 'g', 'ch'):
        return stem + 'u'
    if c == 'r':
        return stem[:-1] + 'ře'
    return stem + 'e'

def tables(word, pattern, gender, note):
    """Return (sg, pl) lists of 7 forms, or None if the pattern can't be generated."""
    name = re.split(r'[ (]', pattern)[0]
    w = word
    # oblique stem from a genitive given in the note, e.g. "hrad (koberce)" or "kost (gen. zdi)"
    gen = None
    if note:
        m = re.search(r'(?:gen\.\s*)?([a-záčďéěíňóřšťúůýž]+)\)?$', note)
        if m and not re.search(r'pl\.|dat\.|loc\.|like|irregular', note):
            gen = m.group(1)
    if name == 'hrad':
        st = gen[:-1] if gen and gen.endswith('u') else w
        return ([w, st+'u', st+'u', w, voc_masc_hard(st), st+'u', st+'em'],
                [st+'y', st+'ů', st+'ům', st+'y', st+'y', st+'ech', st+'y'])
    if name == 'stroj':
        st = gen[:-1] if gen and gen.endswith('e') else w
        return ([w, st+'e', st+'i', w, st+'i', st+'i', st+'em'],
                [st+'e', st+'ů', st+'ům', st+'e', st+'e', st+'ích', st+'i'])
    if name == 'pán':
        st = gen[:-1] if gen and gen.endswith('a') else w
        return ([w, st+'a', st+'ovi', st+'a', voc_masc_hard(w), st+'ovi', st+'em'],
                [soften(st)+'i', st+'ů', st+'ům', st+'y', soften(st)+'i', st+'ech', st+'y'])
    if name == 'muž':
        st = gen[:-1] if gen and gen.endswith('e') else w
        voc = st[:-1] + 'če' if st.endswith('c') else st + 'i'
        return ([w, st+'e', st+'i', st+'e', voc, st+'i', st+'em'],
                [st+'i', st+'ů', st+'ům', st+'e', st+'i', st+'ích', st+'i'])
    if name == 'předseda':
        st = w[:-1]
        return ([w, st+'y', st+'ovi', st+'u', st+'o', st+'ovi', st+'ou'],
                [st+'ové', st+'ů', st+'ům', st+'y', st+'ové', st+'ech', st+'y'])
    if name == 'soudce':
        st = w[:-1]
        return ([w, st+'e', st+'i', st+'e', st+'e', st+'i', st+'em'],
                [st+'i', st+'ů', st+'ům', st+'e', st+'i', st+'ích', st+'i'])
    if name == 'žena':
        st = w[:-1]
        return ([w, st+'y', dat_loc_fem(st), st+'u', st+'o', dat_loc_fem(st), st+'ou'],
                [st+'y', gen_pl_zero(st), st+'ám', st+'y', st+'y', st+'ách', st+'ami'])
    if name == 'růže':
        st = w[:-1]
        gp = st if w.endswith('ice') else st + 'í'
        return ([w, st+'e', st+'i', st+'i', st+'e', st+'i', st+'í'],
                [st+'e', gp, st+'ím', st+'e', st+'e', st+'ích', st+'emi'])
    if name == 'píseň':
        st = gen[:-1] if gen and gen[-1] in 'eě' else w
        e = 'ě' if st[-1] in 'dtn' and not gen else (gen[-1] if gen else 'e')
        return ([w, st+e, st+'i', w, st+'i', st+'i', st+'í'],
                [st+e, st+'í', st+'ím', st+e, st+e, st+'ích', st+e+'mi'])
    if name == 'kost':
        st = gen[:-1] if gen and gen.endswith('i') else w
        return ([w, st+'i', st+'i', w, st+'i', st+'i', st+'í'],
                [st+'i', st+'í', st+'em', st+'i', st+'i', st+'ech', st+'mi'])
    if name == 'město':
        st = gen[:-1] if gen and gen.endswith('a') else w[:-1] if w.endswith('o') else w[:-2] if w.endswith('um') else w
        return ([w, st+'a', st+'u', w, w, st+'u', st+'em'],
                [st+'a', gen_pl_zero(st), st+'ům', st+'a', st+'a', st+'ech', st+'y'])
    if name == 'moře':
        st = w[:-1]
        return ([w, st+'e', st+'i', w, w, st+'i', st+'em'],
                [st+'e', st+'í', st+'ím', st+'e', st+'e', st+'ích', st+'i'])
    if name == 'kuře':
        st = w[:-1]
        return ([w, st+'ete', st+'eti', w, w, st+'eti', st+'etem'],
                [st+'ata', st+'at', st+'atům', st+'ata', st+'ata', st+'atech', st+'aty'])
    if name == 'stavení':
        st = w[:-1]
        return ([w, w, w, w, w, w, st+'ím'],
                [w, w, st+'ím', w, w, st+'ích', st+'ími'])
    if name == 'indeclinable':
        return ([w]*7, [w]*7)
    return None

def main():
    decl = json.load(open('declension.json', encoding='utf8'))
    todo = [e for e in entries() if e['cs'] not in decl or not (decl[e['cs']]['sg'] or decl[e['cs']]['pl'])]
    done, manual = [], []
    for e in todo:
        note = (re.search(r'\((.*)\)', e['pattern']) or [None, None])[1]
        t = tables(e['cs'], e['pattern'], e['gender'], note)
        if t:
            decl[e['cs']] = {'sg': t[0], 'pl': t[1], 'source': 'generated'}
            done.append(e['cs'])
        else:
            manual.append((e['cs'], e['pattern']))
    json.dump(decl, open('declension.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
    print('generated', len(done), ':', ', '.join(done))
    print('need manual tables', len(manual), ':', ', '.join(f'{w} [{p}]' for w, p in manual))

if __name__ == '__main__':
    main()
