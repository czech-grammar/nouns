You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: koupaliště (open-air swimming pool), koupelna (bathroom), porcelán (porcelain, china), tyč (pole, rod).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: home (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-home2.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- bouda | shed, hut; kennel | žena | home — Wooden dog kennel with a dog's head poking out of the arched door.
- koupel | bath (the act) | píseň (gen. koupele) | home — Child sitting in a bathtub with a rubber duck and a towel ready; the A1 vana card is an empty tub.
- váza | vase | žena | home — Blue patterned vase with three tulips on a table.
- čočka | lentil; lens | žena | food — Bowl of brown lentils with a spoon, and a small magnifying-glass lens beside it.
- bylinka | herb | žena | food — Pot of basil and a sprig of parsley on a windowsill with scissors.
- plechovka | can, tin | žena | food — Aluminium drink can with a ring-pull, next to a tin of peas.
- tyčinka | (pretzel) stick; (chocolate) bar | žena | food — Glass of salted pretzel sticks and a wrapped chocolate bar.
- slupka | peel, skin | žena | food — Banana peel lying on the floor and a curl of apple peel from a knife.
- kukuřice | maize, corn | růže | food — Corn cob with the green husk pulled back showing yellow kernels.
- sušenka | biscuit, cookie | žena | food — Round chocolate-chip biscuit with a bite taken out, crumbs on the plate.
- plíseň | mould | píseň (gen. plísně) | food — Slice of bread with a fuzzy green-blue patch and a wrinkled nose beside it.
- mísa | (large) bowl, dish | žena | meals — Big salad bowl with serving spoons in the middle of the table; the B1 miska is a small single bowl.
- lžička | teaspoon | žena | meals — Teaspoon resting on a coffee-cup saucer next to a sugar lump.
- porce | portion, serving, helping | růže | meals — Plate with one neat portion of schnitzel and potatoes, a second plate with a double helping.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py bouda koupel váza čočka bylinka plechovka tyčinka  then  python3 tools/render.py slupka kukuřice sušenka plíseň mísa lžička porce — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
