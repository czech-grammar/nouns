You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-nature.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: let (flight), nos (nose), pivo (beer).

These are MASCULINE INANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: shopping (masculine inanimate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'mi', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-shopping.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- diamant | diamond | hrad | shopping — Sparkling cut diamond on a jeweller's cushion; prsten (A2) is the ring.
- regál | shelf unit, shelving | hrad | shopping — Tall supermarket shelving unit stacked with tins and boxes; polička (A2) is one small wall shelf.
- parfém | perfume | hrad | shopping — Elegant perfume bottle with an atomiser bulb and scent lines.
- leták | leaflet, flyer | hrad (letáku) | shopping — Supermarket flyer with coloured discount blobs sticking out of a letterbox.
- pivovar | brewery | hrad | town — Brewery building with a tall chimney, copper kettles seen through an arch and stacked wooden barrels.
- zvon | bell | hrad | town — Big bronze church bell swinging in a tower with a rope.
- kontejner | container; skip, dumpster | hrad | town — Row of coloured recycling containers (yellow, blue, green) with a person dropping in a bottle.
- pomník | monument, memorial | hrad | town — Stone pedestal with a man on horseback and a plaque, wreath at its foot; socha (B1) is the statue alone.
- člun | boat (small), dinghy | hrad | travel — Inflatable rubber dinghy with two oars on a river; loď (A2) is the big ship.
- ukazatel | signpost; indicator, pointer | hrad (ukazatele; Ma only for a person who points) | travel — Wooden signpost at a fork with arms reading Praha 40 and Brno 60.
- benzín | petrol | hrad | travel — Red jerry can and a pump nozzle filling a car's tank; pumpa (A1) shows the station building.
- kočár | carriage, coach | hrad | travel — Horse-drawn carriage with a coachman on the box and two horses.
- nosič | (roof) rack, carrier; Ma porter | stroj (nosiče; Ma pl. nosiči) | travel — Car with a roof rack carrying two bicycles; a porter with suitcases in the corner.
- traktor | tractor | hrad | travel — Red tractor with big back wheels pulling a trailer of hay.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py diamant regál parfém leták pivovar zvon kontejner  then  python3 tools/render.py pomník člun ukazatel benzín kočár nosič traktor — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
