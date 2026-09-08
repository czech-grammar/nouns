You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: dvojice (pair, couple), klávesnice (keyboard), nůž (knife).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: school (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-school.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- tečka | dot, full stop | žena | school — A short sentence on lined paper with a huge red full stop at the end.
- klávesa | key (keyboard, piano) | žena | school — One big keyboard key marked A popping out, and a single piano key.
- němčina | German (language) | žena | school — German flag on a textbook with "Guten Tag" in a speech bubble.
- nůžky | scissors | plural only | school — Open pair of orange-handled scissors cutting a sheet of paper.
- čtečka | e-reader | žena | school — Flat grey e-reader showing a page of text, held in a hand; differs from tablet by the paper-white screen.
- dvojka | number two; grade two; the number 2 (tram, bus) | žena | school — A big "2" on an exercise book with a teacher's red pen; the B1 jednička is the "1".
- panenka | doll; pupil (of the eye) | žena | leisure — Rag doll with plaits in a child's arms, and a big eye with the pupil marked.
- pouť | fair, funfair; pilgrimage | kost (gen. pouti/poutě) | leisure — Village funfair with a carousel, a stall of gingerbread hearts and balloons, a small church spire behind for the pilgrimage sense.
- trubka | trumpet; pipe, tube | žena | leisure — Golden trumpet with three valves, and a plain metal pipe beside it.
- kytara | guitar | žena | leisure — Acoustic guitar leaning on a chair.
- figura | chess piece; figure | žena | leisure — Chess knight standing on a board.
- varhany | organ (instrument) | plural only | leisure — Church organ with rows of tall pipes and a keyboard.
- kulisa | stage set, backdrop | žena | leisure — Theatre stage with a painted forest backdrop on wheels being pushed in by a stagehand.
- struna | string (of an instrument) | žena | leisure — Close-up of guitar strings with one snapped and curling.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py tečka klávesa němčina nůžky čtečka dvojka panenka  then  python3 tools/render.py pouť trubka kytara figura varhany kulisa struna — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
