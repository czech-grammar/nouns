You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-nature.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: mikrovlnka (microwave).

These are MASCULINE INANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: school (masculine inanimate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'mi', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-school.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- válec | cylinder; roller | stroj (válce) | school — Geometric cylinder in the style of the kruh and čtverec cards (A2), with a small road roller in the corner.
- dotazník | questionnaire | hrad | school — Form with tick boxes and a pen ticking one.
- zápisník | notebook | hrad (zápisníku) | school — Small black notebook with an elastic band and a pencil, closed; sešit (A1) is the thin school exercise book.
- trojúhelník | triangle | hrad | school — Geometric triangle beside a wooden set square, matching kruh and čtverec (A2).
- kužel | cone | hrad (kužele/kuželu) | school — Geometric cone with an orange traffic cone beside it.
- box | boxing; box, compartment | hrad | leisure — Red boxing gloves in a ring; a small cardboard box in the corner.
- průvod | procession, parade | hrad | leisure — Carnival procession of masked figures with a brass band walking down a street; přehlídka (B1) is on a stage.
- trik | trick | hrad | leisure — Magician pulling a rabbit out of a top hat, cards fanned in the other hand.
- plakát | poster | hrad | leisure — Large concert poster pasted on a wall with a date and a guitar.
- reproduktor | loudspeaker | hrad | leisure — Black speaker box with a cone and sound waves.
- mikrofon | microphone | hrad | leisure — Stage microphone on a stand with a cable.
- můstek | ski jump; footbridge | hrad (můstku) | leisure — Ski jumper leaving a big ramp in the air; a small wooden footbridge over a stream in the corner.
- terč | target | stroj | leisure — Archery target with rings and an arrow in the bullseye; cíl (B1) is the finish tape.
- dalekohled | binoculars; telescope | hrad | leisure — Pair of binoculars with a small telescope on a tripod beside them.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py válec dotazník zápisník trojúhelník kužel box průvod  then  python3 tools/render.py trik plakát reproduktor mikrofon můstek terč dalekohled — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
