You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: pátek (Friday), rozhodčí (referee), student (student), studentka (student (f)), studio (studio), studovna (study room).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: travel (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-travel2.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- stodola | barn | žena | travel — Big red-brown wooden barn with wide open double doors and hay inside.
- sláma | straw | žena | travel — Rolled straw bales in a stubble field, a straw hat on top of one.
- studna | well | žena | travel — Stone well with a little roof, winch and bucket on a rope.
- džungle | jungle | růže | travel — Dense green tangle of trees and lianas with a parrot and a monkey.
- vinice | vineyard | růže | travel — Rows of vines on a sunny slope with bunches of grapes and a picker's basket.
- lokomotiva | locomotive | žena | travel — Old black steam engine with a red wheel and a puff of smoke, no carriages; the A1 vlak card shows the whole train.
- borovice | pine | růže | travel — Tall pine with a bare reddish trunk, tufts of long needles and cones.
- rozhledna | lookout tower | žena | travel — Wooden observation tower on a hilltop with people waving from the platform.
- příď | bow (of a ship) | píseň (gen. přídě) | travel — Front of a ship cutting through waves, seen from the side, with an anchor and a figure standing at the tip.
- sopka | volcano | žena | travel — Cone-shaped mountain erupting red lava and grey smoke.
- ručička | (clock) hand; little hand | žena | time — Clock face with a big highlighted minute hand and a small hour hand, drawn extra large.
- řasa | eyelash; alga, seaweed | žena | body — Closed eye with long curling lashes, a mascara wand beside it, and a strand of green seaweed.
- čelist | jaw | kost (gen. čelisti) | body — Side view of a face with the lower jaw outlined and the teeth showing, dentist's pointer on it.
- páteř | spine, backbone | píseň (gen. páteře) | body — Back view of a person with the spine drawn as a chain of vertebrae.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py stodola sláma studna džungle vinice lokomotiva borovice  then  python3 tools/render.py rozhledna příď sopka ručička řasa čelist páteř — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
