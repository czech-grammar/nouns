#!/usr/bin/env python3
"""Build og.png (1200x630 social preview) and favicon.svg from the deck."""
import os, subprocess, sys, html
sys.path.insert(0, os.path.dirname(__file__))
from validate import entries, S
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUT = os.path.join(ROOT, 'tools', 'out'); os.makedirs(OUT, exist_ok=True)
CHROME = '/snap/bin/chromium'
COLOUR = {'ma': '#11457e', 'mi': '#4fa3e3', 'f': '#d7141a', 'n': '#2e9e4f'}
# two rows of six, one gender block per pair, in grammar order
PICK = ['muž', 'pes', 'dům', 'vlak', 'žena', 'kočka', 'kniha', 'škola', 'dítě', 'auto', 'jablko', 'slunce']

by = {e['cs']: e for e in entries()}
cards = ''.join(f'''<div class="c" style="--g:{COLOUR[by[w]["gender"]]}">
  <svg viewBox="0 0 120 100">{by[w]["svg"].replace("${S}", S)}</svg><b>{html.escape(w)}</b></div>''' for w in PICK)
page = f'''<!doctype html><meta charset="utf-8"><style>
  body{{margin:0;width:1200px;height:630px;background:#fff7ea;font-family:"Nunito","Segoe UI","Trebuchet MS",sans-serif;color:#2b2b2b;overflow:hidden}}
  h1{{margin:0;font-size:64px;letter-spacing:-1px}} p{{margin:6px 0 0;font-size:28px;color:#6b6b6b;font-weight:700}}
  .head{{padding:38px 60px 0}}
  .g{{display:grid;grid-template-columns:repeat(6,168px);gap:18px;padding:26px 60px 0}}
  .c{{background:#fff;border-radius:22px;border-top:9px solid var(--g);padding:10px 8px 10px;text-align:center;box-shadow:0 8px 22px rgba(80,50,20,.12)}}
  svg{{width:150px;height:125px;display:block;margin:0 auto}} b{{display:block;font-size:26px;color:var(--g);margin-top:2px}}
  .dots{{position:absolute;right:60px;top:52px;display:flex;gap:10px}} .dots span{{width:26px;height:26px;border-radius:8px;display:block}}
</style>
<div class="head"><h1>Česká slovíčka</h1><p>A1 and A2 Czech nouns as picture cards &middot; {len(by)} words &middot; colour-coded by gender</p></div>
<div class="dots"><span style="background:#11457e"></span><span style="background:#4fa3e3"></span><span style="background:#d7141a"></span><span style="background:#2e9e4f"></span></div>
<div class="g">{cards}</div>'''
hp = os.path.join(OUT, 'og.html'); open(hp, 'w', encoding='utf8').write(page)
pp = os.path.join(ROOT, 'og.png')
subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=1200,630',
                f'--screenshot={pp}', 'file://' + hp], capture_output=True, text=True, timeout=120)
print(pp)

fav = by['kočka']['svg'].replace('${S}', S)
open(os.path.join(ROOT, 'favicon.svg'), 'w', encoding='utf8').write(
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">'
    f'<rect x="0" y="0" width="120" height="100" rx="18" fill="#fff7ea"/>{fav}</svg>\n')
print(os.path.join(ROOT, 'favicon.svg'))
