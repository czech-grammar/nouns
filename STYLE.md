# Picture style guide

Every card picture is an inline SVG fragment drawn on a **120 x 100 viewBox**
(the `<svg>` wrapper is added by the page). Pictures must be instantly
recognisable to a Czech adult and friendly to a small child.

## Rules

1. **Flat cartoon, thick outlines.** Every visible shape gets the shared outline
   `${S}` (stroke #333, width 3, round caps/joins). Exception: small details
   (eyes, dots, highlights, dashes) may be fill-only or use a thinner stroke.
2. **Never repeat an attribute that `${S}` already sets.** To use a different
   stroke width or colour, write the attributes out in full instead of `${S}`.
   Duplicate attributes are invalid XML and the validator rejects them.
3. **Fill the frame.** The main subject should span roughly 70–90 % of the
   box. Keep 4 px of margin so strokes are not clipped. Coordinates must stay
   within 0–120 x 0–100.
4. **One clear idea per picture.** 4–15 shapes. No background rectangle unless
   the idea needs it (night sky, calendar). The card behind is white.
5. **Show the noun, not a story.** Pick the most typical, concrete object or
   scene. For abstract nouns choose one strong visual metaphor a Czech would
   accept (e.g. *chvíle* = stopwatch with a tiny wedge; *doba* = calendar with a
   highlighted run of days).
6. **Make it Czech where it helps.** Prague red-and-cream tram, a *koruna* coin,
   a *hospoda* with a foaming beer, a *Vánoce* tree with carp, a school with a
   ŠKOLA sign. Avoid clichés that only foreigners use.
7. **Text only as a label on an object** (a sign, a coin), short, uppercase,
   `font-family="Arial, Helvetica, sans-serif" font-weight="bold"`. Never rely
   on text alone.
8. **People:** round head, dot eyes, simple smile, skin #ffd8b8, trapezoid body.
   Give women/girls long hair or a dress, men short hair, children smaller.
9. **No gradients, filters, masks, external images, or `<use>`.** Plain
   `path`, `rect`, `circle`, `ellipse`, `line`, `polygon`, `text`, `g`.

## Palette

| Use | Hex |
|---|---|
| outline | #333 |
| skin | #ffd8b8 |
| pink | #e94b8a |
| red | #e63946, dark #c0392b |
| orange | #f4a261 |
| yellow | #f9c74f, pale #ffe08a |
| green | #6cc06a, dark #3f9d55, pale #8fd18a |
| teal | #2a9d8f, dark #1b6e64 |
| blue | #4fa3e3, pale #bde0fe, very pale #dff3ff, navy #1d2a5a |
| purple | #c7b6f5, dark #5a3fbf |
| wood | #b5722f, dark #8b4a2b |
| metal/grey | #9aa0a8, dark #7a7f87, light #ddd |
| hair | #8b4a2b, #3b2a1a, #f2c14e (blond) |

## Entry format

```js
{ cs: 'kočka', en: 'cat', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'animals', svg: `
    <ellipse cx="60" cy="66" rx="30" ry="24" fill="#f4a261" ${S}/>
    ...` },
```

Level: the deck's own CEFR grading (A1, A2, B1, B2). Official: the level the
word has in the Referenční popis A1/A2 (the residence-exam description),
'A1', 'A2' or null when the word is not in that list (see tools/official-nouns.json).

Gender keys: f (feminine, red), ma (masculine animate, dark blue),
mi (masculine inanimate, light blue), n (neuter, green) – the Czech Step by
Step textbook colours.

Topic keys: family, home, food, meals, shopping, town, travel, animals, time,
body, clothes, school, leisure, other.

Neuter patterns: město, moře, kuře, stavení (a note may follow in parentheses,
e.g. `město (muzea)`). Neuter deck files are named `words/n-<topic>.js`.

Masculine patterns: animate pán, muž, předseda, soudce (gender 'ma'); inanimate
hrad, stroj (gender 'mi'). Masculine deck files are named `words/m-<topic>.js`.

## Workflow

1. Add entries to `words/<topic>.js` inside `WORDS.push( ... );`.
2. `python3 tools/validate.py` – checks XML, duplicates, coordinate range.
3. `python3 tools/render.py <topic>` – writes `tools/out/<topic>.png`, a
   contact sheet of every card in that topic. Look at it and fix anything that
   is not obvious at a glance.
