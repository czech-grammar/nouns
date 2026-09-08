You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-people.js and /home/melvin/ideas/czech/words/b1/f-leisure.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: architekt (architect), účet (bill, account).

These are MASCULINE ANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: family (masculine animate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'ma', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-family.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- inženýr | engineer | pán | family — Man in a white hard hat holding a rolled drawing beside a steel girder and a big cog; the architekt card (B1) has a blueprint but no hard hat.
- stařec | old man | muž (starce) | family — Very old man bent over a walking stick with a long white beard, alone; dědeček is drawn with a grandchild.
- vnuk | grandson | pán (pl. vnuci/vnukové) | family — Small boy holding the hand of a white-haired grandad, the boy in front and highlighted.
- sedlák | farmer, peasant | pán | family — Old-style village farmer in waistcoat and hat leaning on a pitchfork by a haystack; farmář (A1) is the modern one with a tractor.
- účetní | accountant | adjective declension | family — Person at a desk with a calculator, a thick ledger and a pile of receipts.
- archeolog | archaeologist | pán | family — Kneeling person with a brush and trowel uncovering a broken pot in a dug trench.
- los | elk, moose; Mi lottery ticket | pán (losa, pl. losi) / hrad (losu) | animals — Big brown moose with wide flat antlers and a beard; a small lottery ticket in the corner for the inanimate sense.
- vůl | ox | pán (vola, pl. voli/volové) | animals — Heavy ox under a wooden yoke pulling a cart, short blunt horns, placid face.
- kocour | tomcat | pán | animals — Big striped tomcat with a broad head and long whiskers sitting on a fence under the moon; larger and scruffier than the kočka card.
- tygr | tiger | pán (pl. tygři) | animals — Orange tiger with black stripes prowling through tall grass.
- osel | donkey | pán (osla) | animals — Grey donkey with long ears and a sack on its back, feet planted stubbornly.
- orel | eagle | pán (orla) | animals — Eagle with spread wings and hooked beak soaring over mountains.
- jeřáb | crane (bird); Mi crane (machine); rowan | pán (jeřába) / hrad (jeřábu) | animals — Tall grey crane bird standing on one leg, with a yellow construction crane lifting a block in the background.
- mravenec | ant | muž (mravence) | animals — Line of black ants carrying leaf pieces towards an anthill.
- býk | bull | pán | animals — Black bull with a ring in its nose pawing the ground, horns forward; the kráva card is the cow.
- brouk | beetle | pán | animals — Shiny black beetle with six legs and antennae on a leaf, a ladybird beside it.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py inženýr stařec vnuk sedlák účetní archeolog los vůl  then  python3 tools/render.py kocour tygr osel orel jeřáb mravenec býk brouk — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
