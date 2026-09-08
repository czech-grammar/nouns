You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-nature.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: policie (police), policista (policeman), polička (shelf).

These are MASCULINE INANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: family (masculine inanimate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'mi', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-family2.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- polibek | kiss | hrad (polibku) | family — Mother kissing a child's cheek with a big red heart between them.
- kočárek | pram, pushchair | hrad (kočárku) | family — Pram with a baby peeking out under the hood, pushed by a parent; vozík (A2) is the shopping trolley.
- ocas | tail | hrad | animals — Dog seen from behind with its wagging tail highlighted and motion lines.
- dobytek | cattle, livestock | hrad (dobytka) | animals — Herd of cows and a bull behind a wooden fence in a field; kráva (A1) is a single cow.
- práh | threshold, doorstep | hrad (prahu) | home — Open front door seen from low down, a wooden threshold strip across the doorway and a foot stepping over it.
- závěs | curtain (heavy); hinge | hrad | home — Thick dark curtains on a rod drawn to one side; záclona (A2) is the thin white net. A small door hinge in the corner.
- návod | instructions, manual | hrad | home — Folded leaflet with numbered steps 1-2-3 and small diagrams beside a half-built flat-pack shelf.
- komín | chimney | hrad | home — Red-brick chimney on a roof with a curl of smoke and a sweep's brush sticking out of the top.
- ovladač | remote control | stroj | home — Hand pointing a TV remote with coloured buttons at a television.
- úklid | cleaning, tidying up | hrad | home — Person with a mop, bucket and broom, dust clouds and a neat stack of things behind.
- zvonek | doorbell; bluebell | hrad (zvonku) | home — Doorbell button beside a door with a name plate and ding lines; a small bluebell flower in the corner.
- záhon | flower bed | hrad | home — Rectangular garden bed with neat rows of tulips and a small rake, lawn around it.
- odpadky | rubbish, garbage | plural only | home — Overflowing bin bag with a banana peel, a fish bone and a tin can spilling out; koš (B1) is the empty bin.
- žebřík | ladder | hrad | home — Wooden ladder leaning against a wall with a person on the top rung reaching a window.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py polibek kočárek ocas dobytek práh závěs návod  then  python3 tools/render.py komín ovladač úklid zvonek záhon odpadky žebřík — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
