#!/usr/bin/env python3
"""Validate all card entries: XML well-formedness, duplicates, coordinate range."""
import glob, json, re, sys, os, xml.dom.minidom
os.chdir(os.path.join(os.path.dirname(__file__), '..'))
S = 'stroke="#333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"'
ENTRY = re.compile(r"\{\s*cs:\s*'([^']+)',\s*en:\s*'([^']+)',\s*pattern:\s*'([^']+)',\s*gender:\s*'(f|ma|mi|n)',\s*level:\s*'(A1|A2|B1|B2)',\s*official:\s*(?:'(A1|A2)'|null),\s*topic:\s*'([^']+)',\s*svg:\s*`(.*?)`\s*\}", re.S)
NUM = re.compile(r'(?<![\w.-])(-?\d+(?:\.\d+)?)')

def entries(files=None):
    out = []
    for f in files or ['words.js'] + sorted(glob.glob('words/*.js')) + sorted(glob.glob('words/a2/*.js')):
        src = open(f, encoding='utf8').read()
        for m in ENTRY.finditer(src):
            out.append(dict(file=f, cs=m.group(1), en=m.group(2), pattern=m.group(3), gender=m.group(4), level=m.group(5), official=m.group(6), topic=m.group(7), svg=m.group(8)))
    return out

def main():
    es = entries()
    bad = 0; seen = {}
    per_topic = {}
    for e in es:
        per_topic[e['topic']] = per_topic.get(e['topic'], 0) + 1
        if e['cs'] in seen:
            print(f"DUPLICATE {e['cs']} in {e['file']} and {seen[e['cs']]}"); bad += 1
        seen[e['cs']] = e['file']
        frag = e['svg'].replace('${S}', S)
        try:
            xml.dom.minidom.parseString('<svg xmlns="http://www.w3.org/2000/svg">' + frag + '</svg>')
        except Exception as ex:
            print(f"BAD XML {e['cs']} ({e['file']}): {ex}"); bad += 1; continue
        if '${' in frag:
            print(f"UNKNOWN PLACEHOLDER in {e['cs']}"); bad += 1
        # rough coordinate check: look at x/y/cx/cy attributes and path numbers
        frag_nt = re.sub(r'<g[^>]*transform=[^>]*>.*?</g>', '', frag, flags=re.S)
        for tag_attrs in re.findall(r'<\w+([^>]*)>', frag_nt):
            if 'transform=' in tag_attrs:
                continue
            for attr, val in re.findall(r'\b(x|y|x1|x2|y1|y2|cx|cy)="(-?[\d.]+)"', tag_attrs):
                v = float(val)
                lim = 120 if 'x' in attr else 100
                if v < -2 or v > lim + 2:
                    print(f"OUT OF RANGE {e['cs']}: {attr}={val}"); bad += 1
        if e['level'] == 'A1' and 'a2/' in e['file']:
            print(f"WRONG LEVEL {e['cs']}: A1 entry in the a2 folder"); bad += 1
        if not e['pattern'].startswith(('žena', 'růže', 'píseň', 'kost', 'město', 'moře', 'kuře', 'stavení', 'pán', 'muž', 'předseda', 'soudce', 'hrad', 'stroj', 'irregular', 'adjective', 'plural', 'indeclinable')):
            print(f"ODD PATTERN {e['cs']}: {e['pattern']}"); bad += 1
    if os.path.exists('declension.json'):
        decl = json.load(open('declension.json', encoding='utf8'))
        nodecl = [e['cs'] for e in es if e['cs'] not in decl or not (decl[e['cs']].get('sg') or decl[e['cs']].get('pl'))]
        if nodecl:
            print('NO DECLENSION TABLE:', ', '.join(nodecl)); bad += len(nodecl)
    print('entries:', len(es), '| by topic:', ', '.join(f'{k} {v}' for k, v in sorted(per_topic.items())))
    print('problems:', bad)
    sys.exit(1 if bad else 0)

if __name__ == '__main__':
    main()
