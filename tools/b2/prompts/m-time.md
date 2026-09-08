You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-nature.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: zlomenina (fracture).

These are MASCULINE INANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: time (masculine inanimate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'mi', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-time.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- kalendář | calendar | stroj | time — Wall calendar showing a month grid with one day circled in red.
- soumrak | dusk, twilight | hrad | time — Sun just below the horizon, purple sky, first star and a bat, streetlamp coming on.
- úsvit | dawn | hrad | time — Pale pink sky with the sun's rim rising and a crowing rooster on a fence, the mirror of soumrak.
- vitamín | vitamin | hrad | body — Orange with a big letter C next to a jar of vitamin tablets.
- křik | shouting, screaming | hrad | body — Child with mouth wide open and hands cupped, big sound lines; smích (B1) is the laughing face.
- pláč | crying, weeping | stroj | body — Crying face with tears streaming and a handkerchief; slza (B1) is a single tear.
- vir | virus | hrad (viru) | body — Spiky green virus ball under a magnifying glass, a sneezing person behind.
- účes | hairstyle | hrad | body — Head with an elaborate up-do and pins, comb and mirror; střih (A2) shows scissors cutting.
- knoflík | button (on clothing) | hrad (knoflíku) | clothes — Four-hole coat button with thread and a needle; tlačítko (B1) is the push button.
- náramek | bracelet | hrad (náramku) | clothes — Wrist with a beaded bracelet and a bangle.
- límec | collar | stroj (límce) | clothes — Shirt collar turned up with a tie loosely around it, collar highlighted.
- vzorec | formula | stroj (vzorce) | school — Blackboard with a+b=c and H2O written on it, a flask beneath.
- graf | graph, chart | hrad | school — Sheet with a rising bar chart and a line graph, axes labelled.
- zlomek | fraction | hrad (zlomku) | school — Board with 1/2 and 3/4 written large, a pizza cut into quarters beside.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py kalendář soumrak úsvit vitamín křik pláč vir  then  python3 tools/render.py účes knoflík náramek límec vzorec graf zlomek — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
