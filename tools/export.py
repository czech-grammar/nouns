#!/usr/bin/env python3
"""Export every card as a JSON object to words.json and check the structure."""
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from validate import entries, S
os.chdir(os.path.join(os.path.dirname(__file__), '..'))
FIELDS = ['cs', 'en', 'pattern', 'gender', 'level', 'official', 'topic', 'svg']
es = entries()
out, problems, seen = [], 0, set()
for e in es:
    obj = {k: e[k] for k in FIELDS}
    obj['svg'] = ' '.join(obj['svg'].replace('${S}', S).split())
    missing = [k for k in FIELDS if k != 'official' and not obj.get(k)]
    if missing:
        print('MISSING', e['cs'], missing); problems += 1
    if obj['cs'] in seen:
        print('DUPLICATE', obj['cs']); problems += 1
    seen.add(obj['cs'])
    out.append(obj)
json.dump(out, open('words.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print(f'{len(out)} objects written to words.json, {len(seen)} unique words, problems: {problems}')
sys.exit(1 if problems else 0)
