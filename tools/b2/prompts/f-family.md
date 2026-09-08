You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: auto (car), autobus (bus), autor (author, writer), autosedačka (child car seat), autoškola (driving school), doktor (doctor), kolega (colleague), kolej (hall of residence), koleno (knee), model (model (kit)), pacient (patient), stránka (page).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: family (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-family.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- autorka | author, writer (f) | žena | family — Woman at a desk holding up a finished manuscript, pen behind her ear – the female twin of the B1 autor card.
- trojice | trio, group of three | růže | family — Three children in a row holding hands, one more than the B1 dvojice card.
- princezna | princess | žena | family — Girl in a pink gown with a small tiara and a long plait, castle tower behind her; smaller crown than královna.
- modelka | (fashion) model | žena | family — Tall woman striding down a catwalk in a red dress, camera flashes on both sides.
- kolegyně | colleague (f) | růže | family — Two women at neighbouring office desks, one handing the other a folder, matching lanyards.
- bohyně | goddess | růže | family — Woman in a white Greek robe on a cloud with a golden halo-like glow and a laurel wreath.
- stráž | guard, sentry | píseň (gen. stráže) | family — Castle guard in a helmet standing stiffly beside a gate with a halberd, striped sentry box.
- nevěsta | bride | žena | family — Bride alone in a white dress and veil holding a bouquet; the B1 svatba card shows the couple.
- doktorka | doctor (f) | žena | family — Woman in a white coat with a stethoscope and a name badge reading MUDr.; use a different hair colour and pose from the A1 lékařka card.
- pacientka | patient (f) | žena | family — Woman sitting up in a hospital bed with a thermometer in her mouth and a chart at the foot of the bed.
- čarodějnice | witch | růže | family — Fairy-tale witch with a pointed hat, warty nose and broom, black cat on her shoulder – friendly, not scary.
- stařena | old woman | žena | family — Bent old woman in a headscarf and shawl with a walking stick and a basket, fairy-tale style; differs from babička by having no grandchild.
- kráska | beauty, beautiful woman | žena | family — Woman with long flowing hair admiring herself in a hand mirror, hearts floating around her.
- klec | cage | píseň (gen. klece) | animals — Round golden birdcage on a stand with a yellow canary inside and the little door open.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py autorka trojice princezna modelka kolegyně bohyně stráž  then  python3 tools/render.py nevěsta doktorka pacientka čarodějnice stařena kráska klec — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
