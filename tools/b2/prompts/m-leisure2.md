You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-nature.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: led (ice), pokladna (checkout, till).

These are MASCULINE INANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: leisure (masculine inanimate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'mi', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-leisure2.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- golf | golf | hrad | leisure — Golfer swinging at a ball on a tee, flag in the hole on the green.
- poklad | treasure | hrad | other — Open wooden chest overflowing with gold coins and jewels, a map with an X.
- obzor | horizon | hrad | other — Flat sea horizon with a setting sun and a sail just visible on the line.
- lom | quarry | hrad | other — Open pit with stepped rock terraces, a yellow digger and a lorry.
- řetěz | chain | hrad | other — Heavy iron chain with big links, a bicycle chain beside it.
- uzel | knot | hrad (uzlu) | other — Thick rope tied in a big knot, ends hanging.
- popel | ash | hrad (popela/popelu) | other — Grey ash heap in a fireplace with a small shovel; oheň (B1) is the fire itself.
- mlýn | mill | hrad (mlýna) | other — Water mill with a big wooden wheel by a stream, a windmill silhouette on a hill behind.
- oltář | altar | stroj | other — Church altar with a white cloth, candles and a cross under a stained-glass window.
- ledovec | glacier; iceberg | stroj (ledovce) | other — Iceberg with its small tip above the water and a huge blue mass below.
- trůn | throne | hrad | other — Golden high-backed throne with red velvet on a dais, empty.
- dub | oak | hrad | other — Broad oak tree with lobed leaves and acorns.
- prales | primeval forest, jungle | hrad (pralesa) | other — Dense jungle with lianas, giant leaves and a parrot; les (A1) is the tidy pine forest.
- příkop | ditch; moat | hrad | other — Roadside ditch with water, and a castle with a moat and drawbridge in the corner.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py golf poklad obzor lom řetěz uzel popel  then  python3 tools/render.py mlýn oltář ledovec trůn dub prales příkop — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
