You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: baterie (battery), policie (police), policista (policeman), polička (shelf), pár (couple; pair).

These are FEMININE B2 nouns, topic 'home'. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: home (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-home.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- mříž | bars, grille | píseň (gen. mříže) | home — Ground-floor window with an iron grille of vertical bars, flower pot behind it.
- pára | steam | žena | home — Kettle on a stove with a thick plume of white steam rising from the spout.
- klika | door handle; (colloq.) luck | žena | home — Close-up of a door with a lever handle being pressed down by a hand.
- fólie | foil, cling film | růže | home — Roll of kitchen foil in its box with a torn-off sheet wrapping a sandwich.
- police | shelf | růže | home — Long wall shelf with books and a plant; the A2 polička card is a small single shelf with one cup.
- pěna | foam | žena | home — Bathtub overflowing with bubble-bath foam, a foam beard on the child in it.
- ozdoba | decoration, ornament | žena | home — Red glass bauble and a star hanging on a Christmas-tree branch.
- šňůra | cord, line, string | žena | home — Washing line strung between two poles with socks pegged on it, a plug lead coiled below.
- žárovka | light bulb | žena | home — Single classic light bulb glowing yellow, screw base visible.
- bedna | crate, chest | žena | home — Wooden slatted crate of apples; the A2 krabice card is a cardboard box.
- pec | oven, furnace, kiln | píseň (gen. pece) | home — Old brick bread oven with a fire glowing inside and a baker pushing in a loaf on a peel; the B1 trouba is a modern kitchen oven.
- matrace | mattress | růže | home — Bare striped mattress leaning against a wall next to a bed frame.
- baterka | torch, flashlight | žena | home — Hand-held torch shining a cone of light into a dark room; the B1 baterie card shows a battery cell.
- klimatizace | air conditioning | růže | home — White wall-mounted air-conditioning unit blowing blue cool-air lines with a remote control.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py mříž pára klika fólie police pěna ozdoba  then  python3 tools/render.py šňůra žárovka bedna pec matrace baterka klimatizace — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
