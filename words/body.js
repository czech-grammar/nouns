// Topic: body
WORDS.push(
  { cs: 'noha', en: 'leg, foot', pattern: 'žena', gender: 'f', topic: 'body', svg: `
    <path d="M40 22 L78 22 L74 62 L80 68 L92 68 Q98 66 101 72 Q104 68 108 74 Q112 80 108 86 Q104 90 98 88 L54 90 Q42 90 42 80 L44 68 Z" fill="#ffd8b8" ${S}/>
    <rect x="36" y="8" width="46" height="16" rx="4" fill="#4fa3e3" ${S}/>
    <path d="M56 36 Q62 40 66 36" fill="none" stroke="#e0a880" stroke-width="3" stroke-linecap="round"/>
    <path d="M100 76 Q101 80 100 84 M107 78 Q108 82 106 86" fill="none" stroke="#e0a880" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="70" cy="70" r="3" fill="#e0a880"/>` },

  { cs: 'pusa', en: 'mouth', pattern: 'žena', gender: 'f', topic: 'body', svg: `
    <rect x="4" y="4" width="112" height="92" rx="30" fill="#ffd8b8" ${S}/>
    <circle cx="20" cy="60" r="9" fill="#ffb4a2"/><circle cx="100" cy="60" r="9" fill="#ffb4a2"/>
    <path d="M20 50 Q60 40 100 50 Q60 78 20 50 Z" fill="#c0392b" ${S}/>
    <path d="M26 50 Q60 42 94 50 Q60 62 26 50 Z" fill="#fff" ${S}/>
    <path d="M46 46.5 V56 M60 45 V58 M74 46.5 V56" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 50 Q36 30 52 40 Q60 36 68 40 Q84 30 100 50 Q60 40 20 50 Z" fill="#e63946" ${S}/>
    <path d="M20 50 Q60 100 100 50 Q60 78 20 50 Z" fill="#e63946" ${S}/>` },

  { cs: 'kost', en: 'bone', pattern: 'kost', gender: 'f', topic: 'body', svg: `
    <path d="M38.6 44 H81.4 A14 14 0 1 1 101.2 50 A14 14 0 1 1 81.4 56 H38.6 A14 14 0 1 1 18.8 50 A14 14 0 1 1 38.6 44 Z" fill="#fff" ${S}/>
    <path d="M44 50 H76" fill="none" stroke="#ddd" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'nemoc', en: 'illness', pattern: 'kost', gender: 'f', topic: 'body', svg: `
    <rect x="20" y="8" width="80" height="42" rx="6" fill="#8b4a2b" ${S}/>
    <path d="M42 46 H78 L84 68 H36 Z" fill="#c7b6f5" ${S}/>
    <circle cx="60" cy="30" r="17" fill="#ffd8b8" ${S}/>
    <path d="M43 28 Q43 10 60 10 Q77 10 77 28 Q71 20 60 20 Q49 20 43 28 Z" fill="#3b2a1a" ${S}/>
    <path d="M50 29 L56 26 M70 29 L64 26" fill="none" ${S}/>
    <circle cx="53" cy="31" r="2" fill="#333"/><circle cx="67" cy="31" r="2" fill="#333"/>
    <circle cx="60" cy="36" r="3.5" fill="#e63946" stroke="#333" stroke-width="2"/>
    <path d="M55 43 Q60 40 65 43" fill="none" ${S}/>
    <g transform="translate(64 42) rotate(-22)">
      <rect x="-2" y="-2.5" width="26" height="5" rx="2.5" fill="#fff" ${S}/>
      <rect x="1" y="-1" width="14" height="2" fill="#e63946"/>
    </g>
    <path d="M12 62 Q30 54 48 62 Q64 70 80 62 Q96 54 108 62 V84 H12 Z" fill="#4fa3e3" ${S}/>
    <rect x="8" y="82" width="104" height="10" fill="#b5722f" ${S}/>
    <rect x="12" y="92" width="8" height="5" fill="#8b4a2b" ${S}/>
    <rect x="100" y="92" width="8" height="5" fill="#8b4a2b" ${S}/>` },

  { cs: 'bolest', en: 'pain', pattern: 'kost', gender: 'f', topic: 'body', svg: `
    <polygon points="96,8 84,28 92,28 80,48 100,22 92,22" fill="#e63946" ${S}/>
    <polygon points="24,8 12,28 20,28 8,48 28,22 20,22" fill="#e63946" ${S}/>
    <path d="M38 70 H82 L92 96 H28 Z" fill="#6cc06a" ${S}/>
    <path d="M40 76 Q24 66 38 50 M80 76 Q96 66 82 50" fill="none" stroke="#333" stroke-width="12" stroke-linecap="round"/>
    <path d="M40 76 Q24 66 38 50 M80 76 Q96 66 82 50" fill="none" stroke="#6cc06a" stroke-width="7" stroke-linecap="round"/>
    <circle cx="60" cy="46" r="22" fill="#ffd8b8" ${S}/>
    <path d="M38 44 Q38 22 60 22 Q82 22 82 44 Q76 34 60 34 Q44 34 38 44 Z" fill="#3b2a1a" ${S}/>
    <path d="M49 47 Q53 42 57 47 M63 47 Q67 42 71 47" fill="none" ${S}/>
    <path d="M52 58 q4 -4 8 0 q4 4 8 0" fill="none" ${S}/>
    <circle cx="40" cy="44" r="8" fill="#ffd8b8" ${S}/>
    <circle cx="80" cy="44" r="8" fill="#ffd8b8" ${S}/>` },

  { cs: 'chřipka', en: 'flu', pattern: 'žena', gender: 'f', topic: 'body', svg: `
    <path d="M30 66 H74 L82 96 H22 Z" fill="#c7b6f5" ${S}/>
    <path d="M30 56 Q52 66 74 56 V66 Q52 76 30 66 Z" fill="#e63946" ${S}/>
    <path d="M60 66 L66 90 H78 L72 64 Z" fill="#e63946" ${S}/>
    <path d="M34 62 Q52 71 70 62" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <circle cx="52" cy="36" r="20" fill="#ffd8b8" ${S}/>
    <path d="M32 34 Q32 14 52 14 Q72 14 72 34 Q66 24 52 24 Q38 24 32 34 Z" fill="#8b4a2b" ${S}/>
    <path d="M42 34 L48 31 M62 34 L56 31" fill="none" ${S}/>
    <circle cx="45" cy="37" r="2" fill="#333"/><circle cx="59" cy="37" r="2" fill="#333"/>
    <circle cx="52" cy="43" r="4" fill="#e63946" stroke="#333" stroke-width="2"/>
    <path d="M46 51 Q52 47 58 51" fill="none" ${S}/>
    <path d="M32 72 L26 62" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M32 72 L26 62" fill="none" stroke="#c7b6f5" stroke-width="6" stroke-linecap="round"/>
    <polygon points="12,38 26,32 34,42 28,54 14,52" fill="#fff" ${S}/>
    <circle cx="24" cy="58" r="6" fill="#ffd8b8" ${S}/>
    <path d="M92 54 q-3 -5 0 -10 M100 54 q-3 -5 0 -10" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <rect x="86" y="60" width="20" height="26" rx="3" fill="#4fa3e3" ${S}/>
    <path d="M106 66 Q116 74 106 82" fill="none" ${S}/>
    <path d="M76 72 L84 76" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M76 72 L84 76" fill="none" stroke="#c7b6f5" stroke-width="6" stroke-linecap="round"/>
    <circle cx="86" cy="78" r="6" fill="#ffd8b8" ${S}/>` },

  { cs: 'brýle', en: 'glasses', pattern: 'plural only', gender: 'f', topic: 'body', svg: `
    <path d="M9 46 L5 32 M111 46 L115 32" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M9 46 L5 32 M111 46 L115 32" fill="none" stroke="#1d2a5a" stroke-width="3" stroke-linecap="round"/>
    <rect x="56" y="46" width="8" height="6" fill="#1d2a5a" ${S}/>
    <circle cx="34" cy="52" r="25" fill="#1d2a5a" ${S}/>
    <circle cx="34" cy="52" r="18" fill="#dff3ff" ${S}/>
    <circle cx="86" cy="52" r="25" fill="#1d2a5a" ${S}/>
    <circle cx="86" cy="52" r="18" fill="#dff3ff" ${S}/>
    <path d="M24 44 q3 -5 8 -6 M76 44 q3 -5 8 -6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` }
);
