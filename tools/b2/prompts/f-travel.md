You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: pas (passport), pasta (toothpaste), propiska (ballpoint pen), přehlídka (parade, show), recept (recipe, prescription), železo (iron).

These are FEMININE B2 nouns, topic 'travel'. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: travel (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-travel.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- poušť | desert | píseň (gen. pouště) | travel — Yellow sand dunes, a camel and a cactus under a big sun.
- stáj | stable | píseň (gen. stáje) | travel — Wooden stable with a horse looking out over a half door, hay bale in front.
- propast | abyss, chasm | kost (gen. propasti) | travel — Hiker peering over the edge of a deep rocky gorge, small river far below.
- železnice | railway | růže | travel — Two rails with sleepers curving into the distance, a level-crossing sign; the A2 trať card is one straight line of track.
- hráz | dam, dyke, embankment | píseň (gen. hráze) | travel — Straight grassy bank holding back a pond, a beaver sitting on top.
- brzda | brake | žena | travel — Bicycle handlebar with a hand squeezing the brake lever, skid lines under the wheel.
- lípa | lime tree, linden | žena | travel — Round-crowned tree with heart-shaped leaves and small yellow blossoms, bee flying to it.
- plachta | sail; tarpaulin | žena | travel — Small sailing boat with a white triangular sail, a blue tarpaulin over a woodpile beside it.
- přehrada | dam, reservoir | žena | travel — Curved concrete dam wall with a lake behind and water spilling from a gate.
- alej | avenue, tree-lined lane | píseň (gen. aleje) | travel — Straight country road with a row of trees on each side meeting in the distance.
- recepce | reception (desk) | růže | travel — Hotel reception counter with a bell, key rack and a receptionist.
- pyramida | pyramid | žena | travel — Three sand-coloured Egyptian pyramids with a palm tree and a camel.
- rosa | dew | žena | travel — Blades of grass and a spider web covered in glistening drops at sunrise.
- pastvina | pasture | žena | travel — Fenced green field with cows grazing and a water trough; the A2 louka is an unfenced flower meadow.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py poušť stáj propast železnice hráz brzda lípa  then  python3 tools/render.py plachta přehrada alej recepce pyramida rosa pastvina — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
