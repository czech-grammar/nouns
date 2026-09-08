#!/usr/bin/env python3
"""Turn the b2-*.md picturable tables into drawing-agent prompts.
Writes tools/b2/prompts/<file>.md (one per output js file) and tools/b2/plan.json.
Usage: make-prompts.py [feminine|masculine|neuter ...]"""
import json, os, re, sys, glob
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
TOPIC_KEYS = ['family','animals','home','food','meals','shopping','town','travel','time','body','clothes','school','leisure','other']
TOPIC_CS = {'family':'lidé','animals':'zvířata','home':'dům a byt','food':'jídlo a pití','meals':'u stolu','shopping':'nakupování','town':'město','travel':'cestování a příroda','time':'čas','body':'tělo a zdraví','clothes':'oblečení','school':'škola a práce','leisure':'volný čas','other':'ostatní'}
GNAME = {'f':'FEMININE','ma':'MASCULINE ANIMATE','mi':'MASCULINE INANIMATE','n':'NEUTER'}
EXAMPLES = {'f':['words/b1/f-leisure.js','words/b1/f-home.js'],'ma':['words/b1/m-people.js','words/b1/f-leisure.js'],'mi':['words/b1/m-nature.js','words/b1/f-home.js'],'n':['words/b1/n-home.js','words/b1/n-leisure.js']}
CHUNK = 15

def parse(md, gender_letter):
    """Yield (gender, topic, cs, en, pattern, picture) from the picturable core section."""
    core = md.split('## Picturable core')[1].split('\n## ')[0]
    gender = None; topic = None
    for line in core.splitlines():
        h = re.match(r'### (Ma|Mi)?\s*\d+\.\s*(.*)', line)
        if h:
            gender = {'Ma':'ma','Mi':'mi'}.get(h.group(1)) or gender_letter
            title = h.group(2).lower()
            topic = next((k for k in TOPIC_KEYS if re.search(r'\b'+k+r'\b', title)), None)
            if not topic: raise SystemExit('no topic key in heading: '+line)
            continue
        m = re.match(r'\| ([^|]+?) \| ([^|]+?) \| ([^|]+?) \| (\d+) \| (.+?) \|\s*$', line)
        if m and gender:
            yield gender, topic, m.group(1).strip(), m.group(2).strip(), m.group(3).strip(), m.group(5).strip()

def main():
    which = sys.argv[1:] or ['masculine','feminine','neuter']
    os.makedirs('tools/b2/prompts', exist_ok=True)
    deck = {}
    for f in ['words.json','words-a2.json','words-b1.json']:
        for o in json.load(open(f, encoding='utf8')): deck[o['cs']] = o['en']
    existing = sum(1 for _ in deck)
    plan = []
    for g in which:
        rows = list(parse(open(f'b2-{g}.md', encoding='utf8').read(), g[0]))
        # keep topic order, chunk each gender into files of 12-16 words
        order = {k: i for i, k in enumerate(TOPIC_KEYS)}
        files = []
        for gd in ('ma', 'mi', 'f', 'n'):
            rs = sorted([r for r in rows if r[0] == gd], key=lambda r: order[r[1]])
            if not rs: continue
            n = max(1, round(len(rs) / 14))
            size = -(-len(rs) // n)
            for i in range(0, len(rs), size):
                files.append((gd, rs[i][1], rs[i:i+size]))
        seen = {}
        for gd, tp, chunk in files:
            key = f'{gd[0]}-{tp}'
            seen[key] = seen.get(key, 0) + 1
            fname = f'words/b2/{key}' + (str(seen[key]) if seen[key] > 1 else '') + '.js'
            words = [r[2] for r in chunk]
            lines = '\n'.join(f'- {r[2]} | {r[3]} | {r[4]} | {r[1]} — {r[5]}' for r in chunk)
            topics = sorted({r[1] for r in chunk})
            topic_note = f"topic '{topics[0]}'" if len(topics) == 1 else 'topics as given per word'
            neighbours = []
            for r in chunk:
                w = r[2]
                for d, en in deck.items():
                    if d != w and (d.startswith(w[:4]) or w.startswith(d[:4])) and len(w) > 3:
                        neighbours.append(f'{d} ({en})')
            nb = ('Existing cards with similar names, draw yours clearly differently: ' + ', '.join(sorted(set(neighbours))[:25]) + '.') if neighbours else ''
            half = len(words) // 2
            render = (f'python3 tools/render.py {" ".join(words)}' if len(words) <= 10 else
                      f'render in two halves: python3 tools/render.py {" ".join(words[:half])}  then  python3 tools/render.py {" ".join(words[half:])}')
            prompt = f"""You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples {' and '.join('/home/melvin/ideas/czech/'+x for x in EXAMPLES[gd])} (flat cartoon, thick #333 outlines via the ${{S}} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the {existing:,} existing cards. {nb}

These are {GNAME[gd]} B2 nouns, {topic_note}. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: {tp} ({GNAME[gd].lower()})
    WORDS.push(
      {{ cs: '...', en: '...', pattern: '...', gender: '{gd}', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` }},
      ...
    );

File: {fname}. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
{lines}

Rules recap: use ${{S}} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${{S}}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) {render} — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
"""
            pf = f'tools/b2/prompts/{os.path.basename(fname)[:-3]}.md'
            open(pf, 'w', encoding='utf8').write(prompt)
            plan.append({'file': fname, 'prompt': pf, 'gender': gd, 'topic': tp, 'words': words})
    json.dump(plan, open('tools/b2/plan.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
    for p in plan: print(f"{p['file']:28} {len(p['words']):3} {p['gender']:2} {p['topic']}")
    print(len(plan), 'files,', sum(len(p['words']) for p in plan), 'words')

if __name__ == '__main__':
    main()
