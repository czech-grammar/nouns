You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/n-home.js and /home/melvin/ideas/czech/words/b1/n-leisure.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: cesta (road, journey), chod (course (of a meal)), chodba (corridor), chodník (pavement), pohovka (sofa), střecha (roof), střed (centre, middle), středa (Wednesday), země (country, earth), zeměpis (geography).

These are NEUTER B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: travel (neuter)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'n', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/n-travel.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- cestování | travelling | stavení | travel — A figure with a backpack and a rolling suitcase walking towards a signpost with several arrows and a small plane overhead; the activity, where cesta is the road and dovolená the beach.
- zemětřesení | earthquake | stavení | travel — A house tilting on cracked ground with a zigzag fissure across the road, motion lines and a falling chimney; no people hurt, just the shaking.
- bláto | mud | město (sg. only) | travel — A child in yellow wellies standing in a brown mud puddle on a path, splashes and footprints around; the everyday muddy path.
- bahno | mud, mire, sludge | město (gen. pl. bahen) | travel — A dark swampy pool with reeds, bubbles and a boot stuck fast, or a happy hippo wallowing; the deep sticky bog, as opposed to bláto's puddle on a path.
- molo | pier, jetty; catwalk | město (gen. pl. mol) | travel — A wooden jetty on posts running out into a blue lake with a rowing boat tied to it and a person fishing at the end; the second sense is a short fashion runway in the corner.
- pohoří | mountain range | stavení | travel — A long chain of many peaks drawn as one continuous ridge across the whole frame, snow on the highest, a small map outline beneath; hory shows two or three peaks close up.
- křoví | bushes, shrubbery | stavení (sg. only) | travel — A dense clump of several round green bushes with a rabbit peeking out; keř is a single tidy bush.
- vedro | heat, hot weather | město (gen. pl. veder) | time — A blazing orange sun, a thermometer with the red column near the top, and a sweating figure fanning themselves with a hat; the summer-heat counterpart of the počasí card.
- zápěstí | wrist | stavení | body — A forearm and hand in profile with a watch strap round the wrist and a small bracket marking the joint; the joint, not the whole ruka.
- dýchání | breathing | stavení | body — A profile of a face with two curved arrows, one going into the nose and one coming out, and a chest outline rising; differs from dech (a visible puff of breath on a cold day).
- střevo | intestine, gut | město (gen. pl. střev) | body — A torso outline with a coiled pink tube filling the belly, drawn like the játra card's simple anatomy; friendly, not gory.
- chodidlo | sole, foot (underside) | město (gen. pl. chodidel) | body — The underside of a bare foot seen from below, five toes and a heel, next to a footprint in sand; noha shows the whole leg.
- žebro | rib; spare rib (food) | město (gen. pl. žeber) | body — A chest outline with a ribcage and one rib highlighted, and in the corner a plate of grilled pork ribs; both senses.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py cestování zemětřesení bláto bahno molo pohoří  then  python3 tools/render.py křoví vedro zápěstí dýchání střevo chodidlo žebro — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
