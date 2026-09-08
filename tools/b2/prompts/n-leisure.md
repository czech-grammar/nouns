You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/n-home.js and /home/melvin/ideas/czech/words/b1/n-leisure.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: hra (game), hranice (border), sen (dream), vstup (entrance, entry), vstupenka (entry ticket).

These are NEUTER B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: leisure (neuter)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'n', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/n-leisure.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- jeviště | stage (theatre) | moře (gen. pl. jevišť) | leisure — A theatre stage seen from the stalls: red curtains drawn back, boards, a spotlight and one actor bowing; divadlo shows the building and scéna the set with people.
- pódium | podium, platform; winners' podium | město (pódia) | leisure — A low raised platform with a microphone and a speaker on it, and beside it the three-step 1-2-3 winners' podium; both senses.
- hraní | playing | stavení | leisure — A child sitting on a rug with building blocks and a toy car, a second small figure in the corner playing a guitar; hra is the board game, hračka the toy itself.
- skóre | score | indeclinable | leisure — A stadium scoreboard reading 2:1 with two team names as coloured blocks and a clock; the numbers are the subject, unlike výsledek's exam paper.
- sedlo | saddle (horse, bicycle); mountain saddle | město (gen. pl. sedel) | leisure — A brown leather saddle with stirrups on a horse's back, with a bicycle saddle in the corner; the saddle is coloured, the horse is in outline.
- vstupné | admission fee, entrance charge | adjective declension | leisure — A museum ticket booth with a sign VSTUPNÉ 50 Kč, a hand passing a coin through the window and a ticket coming back; vstupenka shows the ticket alone.
- prkno | plank, board | město (gen. pl. prken) | other — A rough wooden plank with knots and a nail in it, leaning against a wall, with a small diving board over water in the corner; deska is a smooth flat sheet.
- lano | rope | město (gen. pl. lan) | other — A thick coiled ship's rope with a loop at the end and a knot, hemp-coloured; vlákno is a single fine thread.
- semeno | seed | město (semene, pl. semena, gen. pl. semen) | other — A large striped sunflower seed and a bean seed with a tiny green sprout, both in a spoonful of soil; the second step is the seedling (not in the deck).
- hnojivo | fertiliser | město | other — A gardener's hand sprinkling white granules from a sack round a young plant, a small growth arrow; the sack can be labelled but the granules and plant carry the idea.
- seno | hay | město (sg. only) | other — A round hay bale and a small haystack with a pitchfork stuck in, a rabbit nibbling; dried yellow, unlike the green tráva.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py jeviště pódium hraní skóre sedlo  then  python3 tools/render.py vstupné prkno lano semeno hnojivo seno — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
