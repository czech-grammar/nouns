// Czech / English flash card data.
// This file defines the shared helpers and the pilot deck. Topic decks live in
// words/*.js and push onto WORDS. Each entry: Czech word, English meaning,
// declension pattern, topic key (see TOPICS in index.html), and a
// child-friendly inline SVG picture drawn on a 120 x 100 viewBox.
const S = 'stroke="#333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
const WORDS = [];

WORDS.push(
  { cs: 'žena', en: 'woman', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'family', svg: `
    <path d="M42 34 L38 62 M78 34 L82 62" stroke="#8b4a2b" stroke-width="8" stroke-linecap="round"/>
    <path d="M46 56 L74 56 L86 96 L34 96 Z" fill="#e94b8a" ${S}/>
    <circle cx="60" cy="38" r="18" fill="#ffd8b8" ${S}/>
    <path d="M42 38 Q42 14 60 14 Q78 14 78 38 Q72 26 60 26 Q48 26 42 38 Z" fill="#8b4a2b" ${S}/>
    <circle cx="53" cy="39" r="2.5" fill="#333"/><circle cx="67" cy="39" r="2.5" fill="#333"/>
    <path d="M52 46 Q60 53 68 46" fill="none" ${S}/>` },

  { cs: 'práce', en: 'work', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'school', svg: `
    <g transform="translate(88 26) rotate(45)">
      <rect x="-5" y="8" width="10" height="70" rx="4" fill="#9aa0a8" ${S}/>
      <path d="M-5 -18 L-5 -3 L5 -3 L5 -18 L10 -18 L10 -11 A15 15 0 1 1 -10 -11 L-10 -18 Z" fill="#9aa0a8" ${S}/>
    </g>
    <g transform="translate(32 28) rotate(-45)">
      <rect x="-5" y="8" width="10" height="66" rx="4" fill="#b5722f" ${S}/>
      <rect x="-18" y="-9" width="36" height="18" rx="3" fill="#7a7f87" ${S}/>
    </g>
    <path d="M36 92 Q60 76 84 92 L84 97 L36 97 Z" fill="#f9c74f" ${S}/>
    <path d="M42 92 Q42 70 60 68 Q78 70 78 92" fill="#f9c74f" ${S}/>` },

  { cs: 'doba', en: 'time, era', pattern: 'žena', gender: 'f', level: 'A1', official: 'A2', topic: 'time', svg: `
    <rect x="18" y="22" width="84" height="70" rx="6" fill="#fff" ${S}/>
    <path d="M18 28 a6 6 0 0 1 6 -6 h72 a6 6 0 0 1 6 6 v12 H18 Z" fill="#e94b8a" ${S}/>
    <rect x="32" y="12" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="82" y="12" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <g fill="#ddd">
      <rect x="26" y="48" width="10" height="9" rx="2"/><rect x="40" y="48" width="10" height="9" rx="2"/><rect x="54" y="48" width="10" height="9" rx="2"/><rect x="68" y="48" width="10" height="9" rx="2"/><rect x="82" y="48" width="10" height="9" rx="2"/>
      <rect x="26" y="62" width="10" height="9" rx="2"/><rect x="82" y="62" width="10" height="9" rx="2"/>
      <rect x="26" y="76" width="10" height="9" rx="2"/><rect x="40" y="76" width="10" height="9" rx="2"/><rect x="54" y="76" width="10" height="9" rx="2"/><rect x="68" y="76" width="10" height="9" rx="2"/><rect x="82" y="76" width="10" height="9" rx="2"/>
    </g>
    <g fill="#4fa3e3">
      <rect x="40" y="62" width="10" height="9" rx="2"/><rect x="54" y="62" width="10" height="9" rx="2"/><rect x="68" y="62" width="10" height="9" rx="2"/>
    </g>` },

  { cs: 'země', en: 'country, earth', pattern: 'růže', gender: 'f', level: 'A1', official: null, topic: 'travel', svg: `
    <circle cx="60" cy="50" r="40" fill="#4fa3e3" ${S}/>
    <path d="M36 32 Q52 18 64 30 Q60 46 44 50 Q32 44 36 32Z" fill="#6cc06a" ${S}/>
    <path d="M68 42 Q86 34 92 50 Q86 68 68 64 Q60 54 68 42Z" fill="#6cc06a" ${S}/>
    <path d="M44 64 Q58 62 60 76 Q52 88 42 78 Z" fill="#6cc06a" ${S}/>` },

  { cs: 'věc', en: 'thing', pattern: 'kost', gender: 'f', level: 'A1', official: null, topic: 'shopping', svg: `
    <rect x="30" y="46" width="60" height="46" rx="4" fill="#f7b32b" ${S}/>
    <rect x="24" y="32" width="72" height="16" rx="4" fill="#f9c74f" ${S}/>
    <rect x="54" y="32" width="12" height="60" fill="#e94b8a" ${S}/>
    <path d="M60 32 C44 10 36 24 60 32 C84 24 76 10 60 32Z" fill="#e94b8a" ${S}/>` },

  { cs: 'strana', en: 'side, page', pattern: 'žena', gender: 'f', level: 'A1', official: 'A2', topic: 'other', svg: `
    <path d="M12 30 Q36 22 60 32 L60 86 Q36 76 12 84Z" fill="#fff" ${S}/>
    <path d="M108 30 Q84 22 60 32 L60 86 Q84 76 108 84Z" fill="#ffe08a" ${S}/>
    <path d="M22 40 Q36 36 50 42 M22 52 Q36 48 50 54 M22 64 Q36 60 50 66" fill="none" stroke="#bbb" stroke-width="3" stroke-linecap="round"/>
    <path d="M70 42 Q84 36 98 40 M70 54 Q84 48 98 52 M70 66 Q84 60 98 64" fill="none" stroke="#c9a227" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 32 V86" ${S}/>` },

  { cs: 'cesta', en: 'road, journey', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'town', svg: `
    <circle cx="100" cy="16" r="9" fill="#f9c74f" ${S}/>
    <path d="M4 36 Q30 22 60 34 Q90 20 116 36 V98 H4 Z" fill="#8fd18a" ${S}/>
    <rect x="22" y="58" width="5" height="26" fill="#8b4a2b" ${S}/>
    <circle cx="24.5" cy="52" r="12" fill="#3f9d55" ${S}/>
    <rect x="98" y="62" width="5" height="24" fill="#8b4a2b" ${S}/>
    <circle cx="100.5" cy="56" r="11" fill="#6cc06a" ${S}/>
    <rect x="84" y="44" width="3" height="22" fill="#8b4a2b" ${S}/>
    <path d="M76 40 H96 L102 46 L96 52 H76 Z" fill="#fff" ${S}/>
    <path d="M48 32 L72 32 L108 96 L12 96 Z" fill="#777" ${S}/>
    <path d="M59 38 L61 38 L61.5 46 L58.5 46 Z M58 54 L62 54 L63 66 L57 66 Z M56 74 L64 74 L66 92 L54 92 Z" fill="#fff"/>` },

  { cs: 'ruka', en: 'hand', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'body', svg: `
    <rect x="-7" y="-34" width="14" height="46" rx="7" transform="translate(44 72) rotate(-48)" fill="#ffd8b8" ${S}/>
    <path d="M44 96 L40 72 L40 36 Q40 30 46 30 Q52 30 52 36 L52 52 L53 52 L53 24 Q53 18 58.5 18 Q64 18 64 24 L64 52 L65 52 L65 30 Q65 24 70.5 24 Q76 24 76 30 L76 54 L77 54 L77 46 Q77 40 82 40 Q87 40 87 46 L87 76 Q87 92 74 96 Z" fill="#ffd8b8" ${S}/>
    <path d="M41 56 L41 70" stroke="#ffd8b8" stroke-width="4"/>
    <path d="M48 64 Q62 70 78 66" fill="none" stroke="#e0a880" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'část', en: 'part', pattern: 'kost', gender: 'f', level: 'A1', official: 'A2', topic: 'other', svg: `
    <path d="M50 54 L50 18 A36 36 0 1 0 86 54 Z" fill="#f4a261" ${S}/>
    <circle cx="36" cy="46" r="5" fill="#c0392b"/><circle cx="52" cy="72" r="5" fill="#c0392b"/><circle cx="32" cy="66" r="4" fill="#c0392b"/><circle cx="66" cy="74" r="4" fill="#c0392b"/>
    <path d="M66 40 L66 4 A36 36 0 0 1 102 40 Z" fill="#f4a261" ${S}/>
    <circle cx="78" cy="22" r="5" fill="#c0392b"/><circle cx="86" cy="34" r="4" fill="#c0392b"/>` },

  { cs: 'otázka', en: 'question', pattern: 'žena', gender: 'f', level: 'A1', official: null, topic: 'school', svg: `
    <path d="M20 12 h80 a8 8 0 0 1 8 8 v42 a8 8 0 0 1 -8 8 h-42 l-16 18 v-18 h-22 a8 8 0 0 1 -8 -8 v-42 a8 8 0 0 1 8 -8z" fill="#c7b6f5" ${S}/>
    <text x="60" y="60" text-anchor="middle" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-weight="bold" font-size="46" fill="#5a3fbf" stroke="#333" stroke-width="1.5">?</text>` },

  { cs: 'škola', en: 'school', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'school', svg: `
    <rect x="14" y="36" width="92" height="60" fill="#f4d58d" ${S}/>
    <rect x="8" y="30" width="104" height="8" fill="#c0392b" ${S}/>
    <rect x="22" y="46" width="13" height="14" fill="#bde0fe" ${S}/>
    <rect x="85" y="46" width="13" height="14" fill="#bde0fe" ${S}/>
    <rect x="22" y="70" width="13" height="14" fill="#bde0fe" ${S}/>
    <rect x="85" y="70" width="13" height="14" fill="#bde0fe" ${S}/>
    <rect x="42" y="44" width="36" height="14" rx="2" fill="#fff" ${S}/>
    <text x="60" y="55" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">ŠKOLA</text>
    <path d="M50 96 V70 A10 10 0 0 1 70 70 V96 Z" fill="#5a3a22" ${S}/>
    <rect x="59" y="8" width="2" height="22" fill="#333"/>
    <rect x="61" y="8" width="24" height="8" fill="#fff" ${S}/>
    <rect x="61" y="16" width="24" height="8" fill="#d7141a" ${S}/>
    <path d="M61 8 L73 16 L61 24 Z" fill="#11457e" ${S}/>` },

  { cs: 'voda', en: 'water', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M38 14 L82 14 L76 94 L44 94 Z" fill="#dff3ff" ${S}/>
    <path d="M41 40 Q50 36 60 40 Q70 44 79 40 L76 94 L44 94 Z" fill="#4fa3e3" ${S}/>
    <path d="M100 30 q-11 15 0 22 q11 -7 0 -22z" fill="#4fa3e3" ${S}/>
    <path d="M24 56 q-9 12 0 18 q9 -6 0 -18z" fill="#4fa3e3" ${S}/>` },

  { cs: 'hlava', en: 'head', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'body', svg: `
    <path d="M16 100 Q26 82 60 82 Q94 82 104 100 Z" fill="#4fa3e3" ${S}/>
    <rect x="51" y="66" width="18" height="18" fill="#ffd8b8" ${S}/>
    <circle cx="32" cy="48" r="7" fill="#ffd8b8" ${S}/><circle cx="88" cy="48" r="7" fill="#ffd8b8" ${S}/>
    <circle cx="60" cy="46" r="29" fill="#ffd8b8" ${S}/>
    <path d="M31 44 Q31 14 60 14 Q89 14 89 44 Q80 30 60 30 Q40 30 31 44 Z" fill="#3b2a1a" ${S}/>
    <circle cx="50" cy="48" r="3" fill="#333"/><circle cx="70" cy="48" r="3" fill="#333"/>
    <path d="M49 58 Q60 67 71 58" fill="none" ${S}/>` },

  { cs: 'noc', en: 'night', pattern: 'kost', gender: 'f', level: 'A1', official: 'A1', topic: 'time', svg: `
    <rect x="6" y="6" width="108" height="88" rx="12" fill="#1d2a5a" ${S}/>
    <path d="M70 20 A30 30 0 1 0 90 72 A24 24 0 1 1 70 20 Z" fill="#f9e27a" ${S}/>
    <polygon points="30,26 33,34 41,34 35,39 37,47 30,42 23,47 25,39 19,34 27,34" fill="#fff1a8"/>
    <polygon points="90,30 92,35 97,35 93,38 94,43 90,40 86,43 87,38 83,35 88,35" fill="#fff1a8"/>
    <polygon points="24,68 26,73 31,73 27,76 28,81 24,78 20,81 21,76 17,73 22,73" fill="#fff1a8"/>
    <circle cx="50" cy="78" r="2" fill="#fff1a8"/><circle cx="100" cy="82" r="2" fill="#fff1a8"/><circle cx="60" cy="14" r="2" fill="#fff1a8"/>` },

  { cs: 'chvíle', en: 'moment, while', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'time', svg: `
    <rect x="54" y="10" width="12" height="8" rx="2" fill="#7a7f87" ${S}/>
    <rect x="57" y="18" width="6" height="8" fill="#7a7f87" ${S}/>
    <rect x="84" y="24" width="10" height="7" rx="2" transform="rotate(45 89 27)" fill="#7a7f87" ${S}/>
    <circle cx="60" cy="58" r="34" fill="#4fa3e3" ${S}/>
    <circle cx="60" cy="58" r="27" fill="#fff" ${S}/>
    <path d="M60 58 L60 31 A27 27 0 0 1 73.5 34.6 Z" fill="#e94b8a"/>
    <path d="M60 33 V37 M60 79 V83 M35 58 H39 M81 58 H85" ${S}/>
    <path d="M60 58 L73.5 34.6" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <circle cx="60" cy="58" r="3.5" fill="#333"/>` },

  { cs: 'řeč', en: 'speech, language', pattern: 'kost', gender: 'f', level: 'A1', official: null, topic: 'other', svg: `
    <path d="M14 18 h56 a8 8 0 0 1 8 8 v26 a8 8 0 0 1 -8 8 h-30 l-14 14 v-14 h-12 a8 8 0 0 1 -8 -8 v-26 a8 8 0 0 1 8 -8z" fill="#ffb4a2" ${S}/>
    <circle cx="30" cy="39" r="4" fill="#333"/><circle cx="42" cy="39" r="4" fill="#333"/><circle cx="54" cy="39" r="4" fill="#333"/>
    <path d="M50 44 h56 a8 8 0 0 1 8 8 v24 a8 8 0 0 1 -8 8 h-10 v14 l-14 -14 h-32 a8 8 0 0 1 -8 -8 v-24 a8 8 0 0 1 8 -8z" fill="#a8dadc" ${S}/>
    <path d="M60 58 h34 M60 68 h22" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` },

  { cs: 'rodina', en: 'family', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'family', svg: `
    <circle cx="28" cy="26" r="12" fill="#ffd8b8" ${S}/>
    <path d="M14 42 H42 L46 94 H10 Z" fill="#4fa3e3" ${S}/>
    <circle cx="92" cy="26" r="12" fill="#ffd8b8" ${S}/>
    <path d="M78 42 H106 L112 94 H72 Z" fill="#e94b8a" ${S}/>
    <circle cx="60" cy="52" r="9" fill="#ffd8b8" ${S}/>
    <path d="M50 64 H70 L72 94 H48 Z" fill="#6cc06a" ${S}/>
    <path d="M42 62 Q50 72 52 70 M78 62 Q70 72 68 70" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="24" cy="24" r="1.8" fill="#333"/><circle cx="32" cy="24" r="1.8" fill="#333"/>
    <circle cx="88" cy="24" r="1.8" fill="#333"/><circle cx="96" cy="24" r="1.8" fill="#333"/>
    <circle cx="57" cy="51" r="1.5" fill="#333"/><circle cx="63" cy="51" r="1.5" fill="#333"/>` },

  { cs: 'společnost', en: 'society, company', pattern: 'kost', gender: 'f', level: 'A1', official: 'A2', topic: 'other', svg: `
    <g ${S}>
      <circle cx="30" cy="20" r="8" fill="#ffd8b8"/><path d="M20 30 H40 L42 56 H18 Z" fill="#f4a261"/>
      <circle cx="60" cy="20" r="8" fill="#ffd8b8"/><path d="M50 30 H70 L72 56 H48 Z" fill="#c7b6f5"/>
      <circle cx="90" cy="20" r="8" fill="#ffd8b8"/><path d="M80 30 H100 L102 56 H78 Z" fill="#6cc06a"/>
      <circle cx="45" cy="52" r="8" fill="#ffd8b8"/><path d="M35 62 H55 L57 90 H33 Z" fill="#4fa3e3"/>
      <circle cx="75" cy="52" r="8" fill="#ffd8b8"/><path d="M65 62 H85 L87 90 H63 Z" fill="#e94b8a"/>
    </g>` },

  { cs: 'válka', en: 'war', pattern: 'žena', gender: 'f', level: 'A1', official: 'A2', topic: 'other', svg: `
    <path d="M22 84 L98 16 M98 84 L22 16" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M22 84 L98 16 M98 84 L22 16" stroke="#c9ced6" stroke-width="5" stroke-linecap="round"/>
    <path d="M28 70 L36 78 M92 70 L84 78 M22 84 L16 90 M98 84 L104 90" stroke="#b5722f" stroke-width="7" stroke-linecap="round"/>
    <path d="M60 14 L92 26 V52 Q92 80 60 94 Q28 80 28 52 V26 Z" fill="#e63946" ${S}/>
    <path d="M60 24 V84 M36 46 H84" stroke="#f9c74f" stroke-width="8" stroke-linecap="round"/>` },

  { cs: 'kniha', en: 'book', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'school', svg: `
    <rect x="22" y="14" width="14" height="74" rx="3" fill="#1b6e64" ${S}/>
    <rect x="34" y="14" width="62" height="74" rx="4" fill="#2a9d8f" ${S}/>
    <rect x="90" y="20" width="10" height="62" fill="#fff" ${S}/>
    <rect x="46" y="28" width="38" height="24" rx="3" fill="#f9c74f" ${S}/>
    <path d="M52 36 H78 M52 44 H70" fill="none" ${S}/>` }
);
