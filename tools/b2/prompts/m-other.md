You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/m-nature.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. 

These are MASCULINE INANIMATE B2 nouns, topic 'other'. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: other (masculine inanimate)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'mi', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/m-other.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- provaz | rope | hrad | other — Coil of thick rope with a loose end.
- prapor | banner, flag | hrad | other — Flag on a tall pole waving, a decorated banner on a crossbar carried in a procession.
- útes | cliff | hrad | other — White sea cliff with a lighthouse on top and waves at the base; skála (B1) is the inland rock.
- šíp | arrow | hrad | other — Arrow with feather fletching next to a bow, a second arrow in flight.
- záliv | bay, gulf | hrad | other — Coastline curving around a bay with sailing boats sheltered inside.
- háj | grove | stroj | other — Small clump of birch trees standing alone in a meadow.
- sud | barrel | hrad | other — Wooden barrel with iron hoops and a tap, on its side.
- věnec | wreath | stroj (věnce) | other — Advent wreath with four candles and red ribbons.
- háček | small hook; fish hook; háček (the ˇ mark) | hrad (háčku) | other — Fish hook with a worm, and a big letter č with the háček highlighted.
- vodopád | waterfall | hrad | other — Waterfall tumbling over rocks with spray and a rainbow.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) python3 tools/render.py provaz prapor útes šíp záliv háj sud věnec háček vodopád — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
