#!/usr/bin/env python3
"""Render a contact sheet PNG of cards. Usage: render.py <topic|all|word ...>"""
import os, subprocess, sys, html
sys.path.insert(0, os.path.dirname(__file__))
from validate import entries, S
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUT = os.path.join(ROOT, 'tools', 'out')
os.makedirs(OUT, exist_ok=True)
CHROME = '/snap/bin/chromium'

def main():
    args = sys.argv[1:] or ['all']
    es = entries()
    if args == ['all']:
        sel = es; name = 'all'
    elif len(args) == 1 and any(e['topic'] == args[0] for e in es):
        sel = [e for e in es if e['topic'] == args[0]]; name = args[0]
    else:
        sel = [e for e in es if e['cs'] in args]; name = 'sel-' + '-'.join(args)[:40]
    if not sel:
        print('nothing matched', args); sys.exit(1)
    cols = 5; w = 220; h = 250
    rows = (len(sel) + cols - 1) // cols
    cards = ''.join(f'''<div class="c"><svg viewBox="0 0 120 100">{e['svg'].replace('${S}', S)}</svg>
      <b>{html.escape(e['cs'])}</b><i>{html.escape(e['en'])}</i></div>''' for e in sel)
    page = f'''<!doctype html><meta charset="utf-8"><style>
      body{{margin:0;background:#fff7ea;font-family:sans-serif}}
      .g{{display:grid;grid-template-columns:repeat({cols},{w}px)}}
      .c{{width:{w}px;height:{h}px;box-sizing:border-box;padding:10px;text-align:center}}
      svg{{width:180px;height:150px;background:#fff;border-radius:16px;padding:6px;box-sizing:border-box}}
      b{{display:block;font-size:20px;margin-top:4px}} i{{display:block;color:#777;font-size:14px}}
    </style><div class="g">{cards}</div>'''
    hp = os.path.join(OUT, name + '.html'); pp = os.path.join(OUT, name + '.png')
    open(hp, 'w', encoding='utf8').write(page)
    r = subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars',
                        f'--window-size={cols*w},{rows*h}', f'--screenshot={pp}', 'file://' + hp],
                       capture_output=True, text=True, timeout=120)
    if not os.path.exists(pp):
        print(r.stderr[-800:]); sys.exit(1)
    print(pp, f'({len(sel)} cards)')

if __name__ == '__main__':
    main()
