You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-nature.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: had (snake), jídelna (canteen, dining room), kohout (rooster), květ (flower, blossom), květen (May), květina (flower), květinářství (florist’s), plátno (canvas; cinema screen; linen), sklenice (glass), sklenička (small glass), sklep (cellar).

These are MASCULINE INANIMATE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: home (masculine inanimate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'mi', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-home.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- trám | beam (wooden) | hrad | home — Attic with dark wooden roof beams overhead, a lamp hanging from one.
- kohoutek | tap, faucet; small rooster | hrad (kohoutku) | home — Chrome kitchen tap with a drop falling, a tiny rooster on the handle as a nod to the second sense.
- květináč | flowerpot | stroj | home — Terracotta pot with a green plant on a windowsill, saucer beneath.
- hadr | rag, cloth | hrad | home — Wrung-out floor cloth over the rim of a bucket, wet patch on the floor.
- skleník | greenhouse | hrad | home — Glass greenhouse with tomato plants visible inside and a watering can at the door.
- plátek | slice | hrad (plátku) | food — Board with slices of cheese and salami fanned out, one slice lifted; kousek (A2) is an irregular bit.
- ořech | nut, walnut | hrad | food — Walnut half open beside a whole one in its shell and a nutcracker.
- vývar | broth, stock | hrad | food — Bowl of clear golden soup with noodles and a carrot slice, steam rising; polévka (A1) is a thick soup.
- ocet | vinegar | hrad (octa) | food — Tall bottle labelled OCET beside a cucumber and a salad bowl.
- jídelníček | menu (weekly); diet | hrad (jídelníčku) | meals — Chalkboard on a canteen wall listing Po to Pá with a dish for each day; lístek (A1) is the folded restaurant menu.
- kelímek | (plastic) cup, tub | hrad (kelímku) | meals — White plastic cup and a yoghurt tub with the foil lid peeled back.
- ubrousek | napkin | hrad (ubrousku) | meals — Folded paper napkin on a plate next to cutlery.
- katalog | catalogue | hrad | shopping — Thick glossy catalogue open on furniture pictures with prices.
- tucet | dozen | hrad (tuctu) | shopping — Egg carton with twelve eggs and a big number 12.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py trám kohoutek květináč hadr skleník plátek ořech  then  python3 tools/render.py vývar ocet jídelníček kelímek ubrousek katalog tucet — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
