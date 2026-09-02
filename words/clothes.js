// Topic: clothes
WORDS.push(
  { cs: 'košile', en: 'shirt', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M44 18 L60 26 L76 18 L104 32 L98 62 L86 60 L86 94 L34 94 L34 60 L22 62 L16 32 Z" fill="#bde0fe" ${S}/>
    <path d="M60 42 V94" stroke="#333" stroke-width="2"/>
    <path d="M44 18 L60 26 L60 42 Z" fill="#fff" ${S}/>
    <path d="M76 18 L60 26 L60 42 Z" fill="#fff" ${S}/>
    <rect x="70" y="48" width="12" height="12" fill="#bde0fe" stroke="#333" stroke-width="1.5"/>
    <g fill="#fff" stroke="#333" stroke-width="1.5">
      <circle cx="60" cy="52" r="2.5"/><circle cx="60" cy="64" r="2.5"/><circle cx="60" cy="76" r="2.5"/><circle cx="60" cy="88" r="2.5"/>
    </g>` },

  { cs: 'bunda', en: 'jacket', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M36 30 Q36 4 60 4 Q84 4 84 30 Z" fill="#1d2a5a" ${S}/>
    <path d="M43 30 Q43 11 60 11 Q77 11 77 30 Z" fill="#dff3ff" ${S}/>
    <path d="M34 30 L60 26 L86 30 L106 42 L100 68 L88 64 L88 94 L32 94 L32 64 L20 68 L14 42 Z" fill="#4fa3e3" ${S}/>
    <path d="M34 48 H86 M34 62 H86 M34 76 H86 M18 54 L30 52 M90 52 L102 54" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M40 72 L48 84 M80 72 L72 84" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="32" y="88" width="56" height="6" fill="#1d2a5a" ${S}/>
    <path d="M60 30 V88" stroke="#f9c74f" stroke-width="5"/>
    <path d="M60 30 V88" stroke="#333" stroke-width="1.5" stroke-dasharray="2 2"/>
    <rect x="57" y="34" width="6" height="9" rx="1.5" fill="#9aa0a8" ${S}/>` },

  { cs: 'sukně', en: 'skirt', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M38 26 L82 26 L106 88 Q60 96 14 88 Z" fill="#e94b8a" ${S}/>
    <path d="M49 26 L40 90 M60 26 V92 M71 26 L80 90" stroke="#c0392b" stroke-width="3" stroke-linecap="round"/>
    <rect x="36" y="14" width="48" height="12" rx="2" fill="#c0392b" ${S}/>` },

  { cs: 'čepice', en: 'cap, hat', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M22 78 Q22 22 60 22 Q98 22 98 78 Z" fill="#e63946" ${S}/>
    <path d="M32 52 L40 44 L48 52 L56 44 L64 52 L72 44 L80 52 L88 44" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="18" y="70" width="84" height="22" rx="6" fill="#c0392b" ${S}/>
    <path d="M30 73 V89 M42 73 V89 M54 73 V89 M66 73 V89 M78 73 V89 M90 73 V89" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="60" cy="18" r="12" fill="#fff" ${S}/>
    <path d="M55 13 L65 23 M65 13 L55 23 M60 11 V25 M53 18 H67" stroke="#ddd" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'bota', en: 'shoe', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M10 82 H112 Q116 82 114 92 Q112 96 106 96 H18 Q10 96 10 88 Z" fill="#ddd" ${S}/>
    <path d="M12 82 V56 Q12 40 30 32 L58 30 Q70 30 80 46 Q92 58 108 70 Q114 74 112 82 Z" fill="#4fa3e3" ${S}/>
    <path d="M78 82 H112 Q113 74 108 70 Q96 62 84 62 Q78 70 78 82 Z" fill="#fff" ${S}/>
    <path d="M40 34 L58 30 Q70 30 80 46 L62 60 Z" fill="#dff3ff" ${S}/>
    <path d="M48 42 L64 38 M53 50 L70 46 M58 58 L76 54" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M14 66 Q40 74 78 82" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'ponožka', en: 'sock', pattern: 'žena', gender: 'f', level: 'A1', official: null, topic: 'clothes', svg: `
    <path d="M36 10 H68 V62 L94 70 Q108 72 108 82 Q106 94 92 92 L50 82 Q36 78 36 64 Z" fill="#fff" ${S}/>
    <g fill="#4fa3e3">
      <rect x="36" y="24" width="32" height="7"/><rect x="36" y="38" width="32" height="7"/><rect x="36" y="52" width="32" height="7"/>
    </g>
    <path d="M36 60 V64 Q36 78 50 82 L54 76 Q44 72 44 60 Z" fill="#e63946" ${S}/>
    <path d="M94 70 Q108 72 108 82 Q106 94 92 92 Z" fill="#e63946" ${S}/>
    <rect x="34" y="6" width="36" height="12" rx="3" fill="#e63946" ${S}/>
    <path d="M42 8 V16 M50 8 V16 M58 8 V16 M66 8 V16" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'rukavice', en: 'glove', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M36 92 V42 Q36 10 60 10 Q84 10 84 42 V48 Q100 38 106 52 Q110 64 92 72 L84 76 V92 Z" fill="#e63946" ${S}/>
    <path d="M60 32 V56 M48 44 H72 M51.5 35.5 L68.5 52.5 M68.5 35.5 L51.5 52.5" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <rect x="32" y="80" width="56" height="14" rx="4" fill="#c0392b" ${S}/>
    <path d="M42 82 V92 M52 82 V92 M62 82 V92 M72 82 V92 M82 82 V92" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'kalhoty', en: 'trousers', pattern: 'plural only', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M30 18 H90 L94 94 H66 L60 50 L54 94 H26 Z" fill="#4fa3e3" ${S}/>
    <path d="M32 20 Q40 32 52 30 M88 20 Q80 32 68 30 M60 18 V50" fill="none" stroke="#1d2a5a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M27 86 H54 M66 86 H93" stroke="#1d2a5a" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="28" y="8" width="64" height="10" rx="2" fill="#1d2a5a" ${S}/>
    <circle cx="60" cy="13" r="2.5" fill="#f9c74f"/>` },

  { cs: 'barva', en: 'colour', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M56 14 Q102 12 104 46 Q106 64 86 66 Q76 68 78 80 Q76 96 52 94 Q10 90 12 50 Q14 16 56 14 Z" fill="#ffe08a" ${S}/>
    <circle cx="44" cy="78" r="6" fill="#fff" ${S}/>
    <circle cx="28" cy="44" r="7" fill="#e63946" ${S}/>
    <circle cx="40" cy="28" r="7" fill="#f4a261" ${S}/>
    <circle cx="60" cy="26" r="7" fill="#f9c74f" ${S}/>
    <circle cx="26" cy="64" r="7" fill="#6cc06a" ${S}/>
    <circle cx="46" cy="48" r="7" fill="#4fa3e3" ${S}/>
    <circle cx="66" cy="46" r="7" fill="#5a3fbf" ${S}/>
    <circle cx="62" cy="70" r="7" fill="#e94b8a" ${S}/>
    <polygon points="113.1,86.3 106.9,89.7 87.7,54.6 93.9,51.2" fill="#b5722f" ${S}/>
    <polygon points="93.9,51.2 87.7,54.6 82.9,45.8 89.1,42.4" fill="#9aa0a8" ${S}/>
    <polygon points="90,42 82,46 80,33" fill="#e63946" ${S}/>` }
);
