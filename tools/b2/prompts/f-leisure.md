You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: pas (passport), pasta (toothpaste), pás (seat belt; strip).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: leisure (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-leisure.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- loutka | puppet, marionette | žena | leisure — Wooden marionette on strings held by a cross bar, Czech puppet-theatre style.
- penalta | penalty (kick) | žena | leisure — Footballer running up to a ball on the penalty spot with a goalkeeper braced.
- figurka | figurine; game piece | žena | leisure — Coloured pawns from Člověče, nezlob se! on the board, and a small toy figurine.
- sjezdovka | ski slope, piste | žena | leisure — Groomed snowy slope with a skier and a chairlift, a blue piste sign.
- mozaika | mosaic | žena | leisure — Picture of a fish made of small square tiles, one tile being placed.
- nota | (musical) note | žena | leisure — One large quaver on a stave.
- pozvánka | invitation | žena | leisure — Card with a balloon and "Pozvánka" written on it, in an opened envelope.
- hůl | stick, cane; (hockey) stick | píseň (gen. hole, pl. hole) | other — Walking stick with a curved handle, and a hockey stick beside it.
- páska | tape; ribbon | žena | other — Roll of sticky tape and a finish-line ribbon being broken by a runner.
- past | trap | kost (gen. pasti) | other — Wooden mousetrap with a piece of cheese, mouse looking at it.
- cihla | brick | žena | other — Single red brick with holes, a small stack behind it and a trowel.
- jáma | pit, hole (dug) | žena | other — Rectangular hole in the ground with a spade and a pile of earth; the B1 díra is a hole in a sock.
- vlajka | flag | žena | other — Czech flag on a pole waving in the wind.
- bible | Bible | růže | other — Thick black book with a gold cross and a ribbon bookmark.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py loutka penalta figurka sjezdovka mozaika nota pozvánka  then  python3 tools/render.py hůl páska past cihla jáma vlajka bible — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
