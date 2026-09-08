You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/n-home.js and /home/melvin/ideas/czech/words/b1/n-leisure.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: podzim (autumn), prosinec (December), předkrm (starter), předmět (school subject; object), přednáška (lecture), předpověď (forecast), představení (performance, show), předsíň (hall, entrance hall), stavba (building site, construction), šampon (shampoo).

These are NEUTER B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: home (neuter)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'n', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/n-home.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- kamna | stove (heating) | plural only (gen. kamen) | home — A black iron or green tiled heating stove with a little glass door showing fire, a pipe going up to the wall and a log basket beside it; no pots on top, so not sporák.
- nářadí | tools | stavení (sg. only) | home — An open red toolbox with a hammer, spanner, screwdriver and pliers standing out of it; the set of many tools, where nástroj shows one.
- opěradlo | backrest; armrest | město (gen. pl. opěradel) | home — A side view of a chair with the tall backrest coloured and the rest in outline, a small arrow pointing to it; a second small chair shows an armrest.
- stavení | farmhouse, homestead | stavení | home — A low whitewashed country house with a red tiled roof, a wooden barn attached, a yard with a well and a hen; older and larger than chalupa, not a town dům.
- kladivo | hammer | město | home — A claw hammer with a wooden handle striking a nail into a plank, small motion lines at the head; one tool only.
- prostěradlo | bed sheet | město (gen. pl. prostěradel) | home — A white sheet being spread over a bare mattress, one corner lifted and tucked, no pillow or duvet; the sheet is the subject, not the whole postel.
- vaření | cooking | stavení | food — A big pot on a cooker with steam curling up, a wooden spoon stirring and a chopped carrot on the board beside; the activity, not the kuchyně room.
- šampaňské | champagne, sparkling wine | adjective declension | food — A dark green bottle with gold foil, the cork popping with a little spray, and two tall flutes with bubbles; distinct from the plain víno bottle and glass.
- zrno | grain, kernel; coffee bean | město (gen. pl. zrn) | food — A single ear of wheat with a few loose golden grains spilled beside it, plus one brown coffee bean in the corner; close-up scale, unlike the whole field.
- obilí | grain crops, cereals | stavení (sg. only) | food — A dense stand of golden wheat ears filling the frame with a sickle or a sheaf tied with string in front; the crop as a whole, where pole shows an empty field and zrno a single grain.
- sídliště | housing estate | moře (gen. pl. sídlišť) | town — Three or four tall prefab blocks (paneláky) in grey and pastel colours with rows of small windows, a playground between them; differs from město's skyline with spires.
- předměstí | suburb, outskirts | stavení | town — A row of small family houses with gardens and a bus stop in front, and the city's towers small on the horizon behind; halfway between vesnice and město.
- podzemí | underground, cellars and tunnels | stavení (sg. only) | town — A cross-section: a street with a house above the ground line, and below it a vaulted stone passage with a lantern and a staircase down; not the train of metro, deeper than sklep.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py kamna nářadí opěradlo stavení kladivo prostěradlo  then  python3 tools/render.py vaření šampaňské zrno obilí sídliště předměstí podzemí — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
