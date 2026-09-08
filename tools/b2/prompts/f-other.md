You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. 

These are FEMININE B2 nouns, topic 'other'. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: other (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-other.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- galaxie | galaxy | růže | other — Spiral galaxy of stars on a dark sky.
- páka | lever | žena | other — Plank on a stone lifting a boulder with a child pushing the other end.
- bublina | bubble | žena | other — Child blowing soap bubbles from a wand.
- pila | saw; sawmill | žena | other — Hand saw cutting through a log, a small sawmill shed in the background.
- kometa | comet | žena | other — Bright comet with a long tail streaking across the night sky.
- měď | copper | kost (gen. mědi) | other — Coil of orange copper wire and a copper pot.
- vločka | flake | žena | other — Big six-pointed snowflake and a bowl of oat flakes.
- jiskra | spark | žena | other — Sparks flying from a flint striking a stone.
- siréna | siren; mermaid | žena | other — Blue flashing siren on a police-car roof, and a mermaid on a rock.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) python3 tools/render.py galaxie páka bublina pila kometa měď vločka jiskra siréna — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
