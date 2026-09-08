You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: banka (bank), bankomat (cash machine), host (guest), hra (game), hrad (castle).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: meals (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-meals.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- špetka | pinch | žena | meals — Fingers pinching salt over a pot.
- hostina | feast, banquet | žena | meals — Long table crowded with roast goose, cakes and jugs, guests raising glasses.
- libra | pound (money, weight) | žena | shopping — Pound coin and a £ note next to a scale; the deck already has koruna, euro and dolar.
- bankovka | banknote | žena | shopping — Single green banknote held between two fingers, no coins; the A2 mince card is the coin.
- aukce | auction | růže | shopping — Auctioneer with a raised gavel, a painting on an easel and bidders holding up numbered paddles.
- kytice | bouquet | růže | shopping — Bunch of mixed flowers wrapped in paper with a ribbon, handed over at a florist's.
- vizitka | business card | žena | shopping — Small white card with a name, phone icon and logo being handed across.
- ves | village (small) | kost (gen. vsi, loc. ve vsi) | town — Tiny hamlet of five cottages around a pond and a chapel, seen from a hill; the A2 vesnice card is closer in.
- hradba | (city) wall, rampart | žena | town — Medieval town wall with battlements and a round tower, houses peeping over it.
- věznice | prison | růže | town — Grey building with barred windows and a high wall, guard at the gate.
- dlažba | paving, cobblestones | žena | town — Close-up of grey cobblestones in a fan pattern with one being laid by a worker.
- katedrála | cathedral | žena | town — Gothic church with two tall spires and a rose window, tiny people at the door; bigger than the A1 kostel.
- skládka | landfill, rubbish dump | žena | town — Hill of rubbish bags with a bulldozer and seagulls.
- lávka | footbridge | žena | town — Narrow wooden footbridge with a handrail over a stream, walker crossing; the A1 most card is a road bridge.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py špetka hostina libra bankovka aukce kytice vizitka  then  python3 tools/render.py ves hradba věznice dlažba katedrála skládka lávka — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
