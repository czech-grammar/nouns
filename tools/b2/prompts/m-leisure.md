You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-people.js and /home/melvin/ideas/czech/words/b1/f-leisure.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: detektivka (detective story), stránka (page).

These are MASCULINE ANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: leisure (masculine animate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'ma', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-leisure.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- sběratel | collector | muž (pl. sběratelé) | leisure — Person with a magnifying glass over an open stamp album, coins and a rare card beside it.
- čert | devil (folk) | pán | other — Czech Mikuláš devil: black shaggy fur, small horns, red tongue, a chain and a sack, comic rather than scary.
- detektiv | detective | pán | other — Detective in a trench coat and deerstalker hat peering through a magnifying glass.
- princ | prince | pán | other — Young man with a small crown and cloak on a white horse; the král card has the big crown and throne.
- rytíř | knight | muž | other — Knight in plate armour with a lance and a lion shield, visor up.
- drak | dragon; Mi kite | pán (draka) / hrad (draku) | other — Green dragon with wings breathing a puff of fire, and a paper kite on a string in the sky behind.
- lovec | hunter | muž (lovce) | other — Hunter in a green coat and feathered hat with binoculars and a hunting horn, dog at heel, no gun.
- robot | robot | pán (robota) / hrad (robotu) | other — Boxy silver robot with an antenna, glowing eyes and clamp hands.
- strážce | guard, keeper | soudce | other — Guard in a blue uniform standing stiffly in a sentry box at a castle gate, as at Prague Castle.
- mnich | monk | pán | other — Monk in a brown hooded habit with a rope belt and tonsure holding a book, cloister arch behind.
- kardinál | cardinal | pán | other — Churchman in scarlet robes and a red skullcap; biskup (B1) is purple with a crozier, papež white with a mitre.
- poutník | pilgrim | pán | other — Walker with a long staff, wide-brimmed hat, cloak and a scallop shell, a chapel on a hill ahead.
- trpaslík | dwarf; garden gnome | pán | other — Garden gnome with a red pointed cap, white beard and a lantern among flowers.
- pirát | pirate | pán | other — Pirate with eye patch, bandana, wooden leg and a parrot, treasure chest at his feet.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py sběratel čert detektiv princ rytíř drak lovec  then  python3 tools/render.py robot strážce mnich kardinál poutník trpaslík pirát — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
