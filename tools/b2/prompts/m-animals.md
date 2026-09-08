You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-people.js and /home/melvin/ideas/czech/words/b1/f-leisure.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: cesta (road, journey), chod (course (of a meal)), chodba (corridor), chodník (pavement), cyklistika (cycling), cyklostezka (cycle path), model (model (kit)), pas (passport), sklad (warehouse, storeroom), společnost (society, company), záchod (toilet), záchranka (ambulance).

These are MASCULINE ANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: animals (masculine animate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'ma', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-animals.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- jelen | stag, deer | pán | animals — Stag with branching antlers standing at the edge of a forest.
- pavouk | spider | pán | animals — Eight-legged spider hanging from a thread in the middle of its web.
- chodec | pedestrian | muž (chodce) | town — Person crossing on a zebra crossing under a green walking-man light; the přechod card (A2) shows the stripes without a person in focus.
- cestovatel | traveller, explorer | muž (pl. cestovatelé) | travel — Person with a huge backpack, wide hat and a world map with a dotted route; the turista card has a camera and a small daypack.
- pasažér | passenger | pán | travel — Person seated in a plane seat with a ticket in hand, looking out of the window.
- námořník | sailor | pán | travel — Sailor in a striped top and white cap on the deck of a ship, coiled rope at his feet.
- záchranář | rescuer, paramedic | muž | body — Paramedic in an orange and reflective uniform carrying one end of a stretcher towards an ambulance.
- spolužák | classmate | pán (pl. spolužáci) | school — Two pupils sharing one school desk, the one beside the main figure highlighted.
- absolvent | graduate | pán | school — Young person in a mortarboard and gown holding a rolled diploma with a ribbon.
- cyklista | cyclist | předseda | leisure — Rider in helmet and lycra bent low over a racing bike; the kolo card is the bike alone.
- skladatel | composer | muž (pl. skladatelé) | leisure — Man at a piano writing notes onto sheet music with a pen.
- muzikant | musician | pán | leisure — Street musician playing an accordion, a hat with coins on the ground.
- záložník | midfielder | pán | leisure — Footballer in the centre circle passing the ball, between the útočník and obránce cards.
- rybář | fisherman, angler | muž | leisure — Man in a hat sitting on a pond bank with a rod, a float on the water and a bucket.
- moderátor | presenter, host | pán | leisure — TV host with a microphone and cue cards under studio lights.
- běžec | runner | muž (běžce) | leisure — Runner with a race number bib mid-stride on a track.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py jelen pavouk chodec cestovatel pasažér námořník záchranář spolužák  then  python3 tools/render.py absolvent cyklista skladatel muzikant záložník rybář moderátor běžec — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
