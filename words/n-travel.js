// Topic: travel (neuter)
WORDS.push(
  { cs: 'moře', en: 'sea', pattern: 'moře', gender: 'n', level: 'A1', topic: 'travel', svg: `
    <circle cx="20" cy="18" r="10" fill="#f9c74f" ${S}/>
    <path d="M20 4 V2 M34 18 H36 M30 8 L31 7 M30 28 L31 29" fill="none" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <path d="M4 52 Q16 46 28 52 Q40 58 52 52 Q64 46 76 52 Q88 58 100 52 Q108 48 116 52 V96 H4 Z" fill="#4fa3e3" ${S}/>
    <path d="M12 74 Q20 68 28 74 Q36 80 44 74 M70 84 Q78 78 86 84 Q94 90 102 84" fill="none" stroke="#dff3ff" stroke-width="3" stroke-linecap="round"/>
    <rect x="66" y="14" width="4" height="44" fill="#8b4a2b" ${S}/>
    <path d="M64 18 V56 H40 Z" fill="#fff" ${S}/>
    <path d="M72 24 V56 H94 Z" fill="#e63946" ${S}/>
    <path d="M42 58 H96 L86 72 H50 Z" fill="#c0392b" ${S}/>` },

  { cs: 'slunce', en: 'sun', pattern: 'moře', gender: 'n', level: 'A1', topic: 'travel', svg: `
    <path d="M96 50 H106 M85.5 75.5 L92.5 82.5 M60 86 V96 M34.5 75.5 L27.5 82.5 M24 50 H14 M34.5 24.5 L27.5 17.5 M60 14 V4 M85.5 24.5 L92.5 17.5" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M96 50 H106 M85.5 75.5 L92.5 82.5 M60 86 V96 M34.5 75.5 L27.5 82.5 M24 50 H14 M34.5 24.5 L27.5 17.5 M60 14 V4 M85.5 24.5 L92.5 17.5" fill="none" stroke="#f9c74f" stroke-width="5" stroke-linecap="round"/>
    <circle cx="60" cy="50" r="31" fill="#f9c74f" ${S}/>
    <circle cx="50" cy="45" r="3" fill="#333"/><circle cx="70" cy="45" r="3" fill="#333"/>
    <circle cx="43" cy="54" r="4" fill="#f4a261"/><circle cx="77" cy="54" r="4" fill="#f4a261"/>
    <path d="M48 56 Q60 68 72 56" fill="none" ${S}/>` },

  { cs: 'nebe', en: 'sky', pattern: 'moře', gender: 'n', level: 'A1', topic: 'travel', svg: `
    <rect x="4" y="4" width="112" height="92" rx="8" fill="#4fa3e3"/>
    <path d="M20 50 A8 8 0 0 1 24 36 A12 12 0 0 1 44 28 A11 11 0 0 1 64 34 A9 9 0 0 1 68 50 Z" fill="#fff" ${S}/>
    <path d="M76 26 A6 6 0 0 1 80 16 A9 9 0 0 1 96 12 A10 10 0 0 1 108 26 Z" fill="#fff" ${S}/>
    <path d="M68 84 A7 7 0 0 1 72 72 A10 10 0 0 1 90 66 A13 13 0 0 1 106 84 Z" fill="#fff" ${S}/>
    <path d="M14 70 q6 -8 12 0 q6 -8 12 0" fill="none" ${S}/>
    <path d="M20 18 q5 -7 10 0 q5 -7 10 0" fill="none" ${S}/>
    <rect x="4" y="4" width="112" height="92" rx="8" fill="none" ${S}/>` },

  { cs: 'pole', en: 'field', pattern: 'moře', gender: 'n', level: 'A1', topic: 'travel', svg: `
    <circle cx="20" cy="18" r="10" fill="#f9c74f" ${S}/>
    <path d="M4 46 Q60 40 116 46 V96 H4 Z" fill="#f9c74f" ${S}/>
    <path d="M4 58 Q60 52 116 58 M4 70 Q60 64 116 70 M4 82 Q60 76 116 82" fill="none" stroke="#e0a030" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 96 V66 M60 96 V58 M84 96 V66" fill="none" stroke="#b5722f" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="36" cy="54" rx="7" ry="14" fill="#f4a261" ${S}/>
    <ellipse cx="60" cy="46" rx="7" ry="14" fill="#f4a261" ${S}/>
    <ellipse cx="84" cy="54" rx="7" ry="14" fill="#f4a261" ${S}/>
    <path d="M30 48 L36 53 L42 48 M30 57 L36 62 L42 57 M54 40 L60 45 L66 40 M54 49 L60 54 L66 49 M78 48 L84 53 L90 48 M78 57 L84 62 L90 57" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M104 96 V80 M16 96 V84" fill="none" stroke="#3f9d55" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="104" cy="74" r="7" fill="#e63946" ${S}/>
    <circle cx="104" cy="74" r="2.5" fill="#333"/>
    <circle cx="16" cy="79" r="5.5" fill="#e63946" ${S}/>
    <circle cx="16" cy="79" r="2" fill="#333"/>` },

  { cs: 'jezero', en: 'lake', pattern: 'město', gender: 'n', level: 'A1', topic: 'travel', svg: `
    <path d="M4 62 Q34 22 70 62 Z" fill="#6cc06a" ${S}/>
    <path d="M50 62 Q86 26 116 62 Z" fill="#3f9d55" ${S}/>
    <rect x="4" y="60" width="112" height="36" rx="6" fill="#8fd18a" ${S}/>
    <ellipse cx="60" cy="76" rx="52" ry="17" fill="#4fa3e3" ${S}/>
    <path d="M22 84 Q30 80 38 84 M84 86 Q92 82 100 86" fill="none" stroke="#dff3ff" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="56" cy="75" rx="17" ry="9" fill="#f9c74f" ${S}/>
    <path d="M40 72 L32 62 L48 68 Z" fill="#f9c74f" ${S}/>
    <circle cx="73" cy="62" r="8" fill="#f9c74f" ${S}/>
    <path d="M81 61 L92 64 L81 67 Z" fill="#f4a261" ${S}/>
    <circle cx="75" cy="60" r="1.8" fill="#333"/>
    <path d="M14 92 V62 M22 94 V66" fill="none" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
    <rect x="11" y="52" width="6" height="14" rx="3" fill="#8b4a2b" stroke="#333" stroke-width="2"/>
    <rect x="19" y="58" width="6" height="12" rx="3" fill="#8b4a2b" stroke="#333" stroke-width="2"/>` }
);
