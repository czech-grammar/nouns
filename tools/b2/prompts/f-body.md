You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: kalhoty (trousers), kost (bone), kostel (church), kostka (cube; dice; sugar lump), kostým (costume; (woman’s) suit), stolek (small table, side table).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: body (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-body.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- vráska | wrinkle | žena | body — Smiling old face with wrinkle lines around the eyes and forehead.
- kostra | skeleton | žena | body — Friendly white skeleton standing with one hand raised, like a classroom model.
- jizva | scar | žena | body — Knee with a pink scar line, plaster being taken off.
- hrst | handful | kost (gen. hrsti) | body — Open cupped hand holding a heap of nuts.
- křeč | cramp | píseň (gen. křeče) | body — Runner sitting on the track clutching a calf with pain lines.
- slina | saliva, spit | žena | body — Dog staring at a sausage with a drip of drool from its mouth.
- stolička | molar; stool | žena | body — Big back tooth with two roots and a small three-legged stool beside it.
- jehla | needle | žena | clothes — Sewing needle with thread through the eye stuck in a pincushion.
- perla | pearl | žena | clothes — Open oyster with a shining pearl inside and a pearl necklace.
- nit | thread | kost (gen. niti/nitě) | clothes — Spool of red thread unwinding towards a needle.
- kalhotky | knickers, panties | plural only | clothes — Pair of pink cotton knickers on a washing line beside the socks.
- vesta | waistcoat, vest, gilet | žena | clothes — Sleeveless buttoned waistcoat over a shirt, and a puffy outdoor gilet.
- helma | helmet | žena | clothes — Red bicycle helmet with strap, and a firefighter's helmet beside it.
- tiskárna | printer | žena | school — Desktop printer with a page coming out, sitting next to the computer.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py vráska kostra jizva hrst křeč slina stolička  then  python3 tools/render.py jehla perla nit kalhotky vesta helma tiskárna — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
