You are drawing child-friendly SVG picture cards for a Czech/English flash-card deck. Work only inside /home/melvin/ideas/czech. Do NOT commit, and do NOT edit any file other than the one you create.

FIRST read /home/melvin/ideas/czech/STYLE.md and the finished examples /home/melvin/ideas/czech/words/b1/f-leisure.js and /home/melvin/ideas/czech/words/b1/f-home.js (flat cartoon, thick #333 outlines via the ${S} placeholder, 120x100 viewBox). Match that style exactly. Skim /home/melvin/ideas/czech/words.json, words-a2.json and words-b1.json (cs/en) so your pictures stay distinct from the 1,237 existing cards. Existing cards with similar names, draw yours clearly differently: houska (bread roll), housle (violin), krystal (crystal), prach (dust).

These are FEMININE B2 nouns, topics as given per word. Entry format (fields in exactly this order; official is null for every B2 word):

    // B2 deck: animals (feminine)
    WORDS.push(
      { cs: '...', en: '...', pattern: '...', gender: 'f', level: 'B2', official: null, topic: '<key>', svg: `
        ...svg elements...` },
      ...
    );

File: words/b2/f-animals.js. Words as cs | en | pattern | topic — drawing idea. Copy cs, en, pattern and topic verbatim; the idea after the dash is a suggestion from the list editor, follow it unless it cannot be drawn clearly.
- ovce | sheep | růže (gen. pl. ovcí) | animals — Woolly white sheep with a black face standing in grass; the A2 koza card is the goat with horns.
- zvěř | game, wild animals | píseň (gen. zvěře) | animals — Forest edge with a deer, a boar and a hare together, a hunter's feeding rack behind them.
- můra | moth | žena | animals — Grey-brown moth with feathery antennae circling a lit lamp at night; the A1 motýl is the bright daytime butterfly.
- moucha | fly | žena (dat. mouše, gen. pl. much) | animals — Big black housefly with red eyes and transparent wings landing on a slice of cake.
- šelma | beast of prey | žena | animals — Tiger crouching with bared teeth on a rock; the A1 lev card is a friendly lion.
- srst | fur, coat (of an animal) | kost (gen. srsti) | animals — Close-up of a cat being brushed, tufts of fur floating off the brush.
- krysa | rat | žena | animals — Grey rat with a long bald tail and big ears on a drain lid, bigger and darker than the A1 myš.
- housenka | caterpillar | žena | animals — Fat green striped caterpillar munching a half-eaten leaf.
- husa | goose | žena | animals — White goose with an orange beak stretching its neck and hissing; the A2 kachna is the smaller brown duck.
- žába | frog | žena | animals — Green frog sitting on a lily pad with a fly in view of its tongue.
- ploutev | fin; flipper | píseň (gen. ploutve) | animals — A shark's fin above the water in one half, a pair of blue swim flippers on the sand in the other.
- pracovna | study (room) | žena | home — Small home office with a desk, computer, bookshelf and reading lamp, door labelled; differs from kancelář by the cosy carpet and family photo.
- zásuvka | drawer; socket | žena | home — Chest of drawers with one drawer pulled open showing socks, and a wall socket with a plug next to it.
- deka | blanket | žena | home — Folded tartan wool blanket on the arm of a sofa, or spread as a picnic blanket.

Rules recap: use ${S} for outlines on visible shapes; NEVER add stroke-width or stroke to an element that already has ${S}; write attributes out in full when you need a different width. Keep coordinates inside 0-120 x 0-100 (also inside transform groups). One clear idea per picture, subject fills 70-90% of the box, 4-15 shapes. Text only as short uppercase labels on objects, font-family="Arial, Helvetica, sans-serif" font-weight="bold", and check labels fit inside their sign. No gradients, filters, masks, <use> or external images. Nothing violent or adult.

Workflow: 1) write the file; 2) cd /home/melvin/ideas/czech && python3 tools/validate.py — fix everything except "NO DECLENSION TABLE" lines (expected, handled separately); 3) render in two halves: python3 tools/render.py ovce zvěř můra moucha šelma srst krysa  then  python3 tools/render.py housenka husa žába ploutev pracovna zásuvka deka — open the PNG(s) with the Read tool, look critically at every card (would a Czech adult name the word from the picture alone? would a child like it?), fix, re-render, at least two passes (ignore Chromium's Fontconfig error); 4) final report: one line per word saying what the picture shows, plus the words you are least confident about.
