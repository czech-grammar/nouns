You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/n-home.js and /home/melvin/ideas/czech/words/b1/n-leisure.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: dvojice (pair, couple), kolega (colleague), kolej (hall of residence), koleno (knee), mládí (youth), objezd (roundabout).

These are NEUTER B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: family (neuter)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'n', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/n-family.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- dvojče | twin | kuře (dvojčete, pl. dvojčata) | family — Two identical children side by side in matching striped T-shirts, same haircut, holding hands; the mirror-image pose is the point, unlike the single child on dítě.
- objetí | hug, embrace | stavení | family — A parent and a small child hugging, arms wrapped round each other, eyes closed, a little heart above them; a different idea from the mouth-only pusa card.
- hnízdo | nest | město (gen. pl. hnízd) | animals — A round twig nest on a forked branch with three pale-blue eggs in it and a small bird perched on the rim; zoomed in, no whole tree.
- mládě | young animal, cub | kuře (mláděte, pl. mláďata) | animals — A big brown bear with a much smaller cub beside it, the cub circled or lit; the size contrast carries the meaning (kotě, štěně and tele already cover the named young).
- stádo | herd, flock | město (gen. pl. stád) | animals — Six or seven black-and-white cows crowded together on a green meadow with a fence behind; the crowd is the point, unlike the single kráva.
- hejno | flock (of birds); shoal (of fish) | město (gen. pl. hejn) | animals — A V-formation of a dozen small black birds crossing a pale sky, with a tiny second sense in the corner: a cluster of fish; differs from pták (one bird).
- vodítko | dog lead; clue, guide | město (gen. pl. vodítek) | animals — A hand holding a red lead clipped to the collar of a walking dog, the lead drawn as a clear taut line; the lead is highlighted, not the dog.
- akvárium | aquarium, fish tank | město (akvária) | animals — A rectangular glass tank on a table with blue water, two orange fish, gravel, a green plant and rising bubbles; indoor and small, unlike the ryba and zoo cards.
- peří | feathers, plumage | stavení (sg. only) | animals — A soft heap of small white and grey feathers with one large striped quill on top and a couple floating down; differs from křídlo (a whole wing).
- kolečko | wheelbarrow; small wheel, caster | město (gen. pl. koleček) | home — A green garden wheelbarrow with one front wheel and two handles, heaped with soil, a small caster wheel drawn in the corner for the second sense; not the bicycle of kolo.
- zábradlí | railing, banister | stavení | home — A short staircase with a wooden handrail and vertical bars along its side, a hand resting on the rail; the rail is the coloured part, the stairs stay grey (schodiště is a separate card).
- pouzdro | case, holder (glasses, pencil, phone) | město (gen. pl. pouzder) | home — An open hard case with a pair of glasses inside, and beside it a zipped pencil case with two pencils sticking out; both are cases, nothing else.
- vrata | gate, double doors (barn, yard) | plural only (gen. vrat) | home — Big brown double doors of a barn or yard, one leaf swinging open, iron hinges and a bar; wooden and wide, unlike the arched stone brána and the house dveře.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py dvojče objetí hnízdo mládě stádo hejno  then  python3 tools/render.py vodítko akvárium peří kolečko zábradlí pouzdro vrata — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
