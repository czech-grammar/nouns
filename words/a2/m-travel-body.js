// A2 deck: travel part B and body (masculine inanimate)
WORDS.push(
  { cs: 'přílet', en: 'arrival (by plane)', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="6" y="4" width="60" height="16" rx="3" fill="#1d2a5a" ${S}/>
    <text x="36" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">PŘÍLET</text>
    <rect x="2" y="78" width="116" height="18" fill="#777" ${S}/>
    <path d="M10 87 H26 M38 87 H54 M66 87 H82 M94 87 H110" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <path d="M22 30 V58" stroke="#e63946" stroke-width="6" stroke-linecap="round"/>
    <path d="M10 54 L22 70 L34 54 Z" fill="#e63946" ${S}/>
    <g transform="translate(4 10) rotate(18 70 44)">
      <path d="M46 36 L40 22 H50 L58 36 Z" fill="#e63946" ${S}/>
      <path d="M40 44 Q44 36 60 36 H96 Q108 36 108 44 Q108 52 96 52 H60 Q44 52 40 44 Z" fill="#fff" ${S}/>
      <path d="M64 46 L54 62 H70 L80 46 Z" fill="#e63946" ${S}/>
      <circle cx="62" cy="42" r="2.5" fill="#4fa3e3"/><circle cx="72" cy="42" r="2.5" fill="#4fa3e3"/><circle cx="82" cy="42" r="2.5" fill="#4fa3e3"/><circle cx="92" cy="42" r="2.5" fill="#4fa3e3"/>
    </g>` },

  { cs: 'příchod', en: 'arrival (on foot)', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <circle cx="16" cy="18" r="12" fill="#fff" ${S}/>
    <path d="M16 11 V18 H21" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 92 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="72" y="22" width="34" height="70" fill="#5a3a22" ${S}/>
    <path d="M106 22 L116 30 V88 L106 92 Z" fill="#b5722f" ${S}/>
    <circle cx="110" cy="58" r="2.5" fill="#f9c74f"/>
    <path d="M38 14 H60" stroke="#3f9d55" stroke-width="6" stroke-linecap="round"/>
    <path d="M58 5 L72 14 L58 23 Z" fill="#3f9d55" ${S}/>
    <path d="M28 66 L20 88 M34 66 L46 84" stroke="#1d2a5a" stroke-width="7" stroke-linecap="round"/>
    <path d="M20 44 H42 L46 70 H16 Z" fill="#2a9d8f" ${S}/>
    <path d="M42 50 L56 66" stroke="#ffd8b8" stroke-width="5" stroke-linecap="round"/>
    <rect x="50" y="64" width="18" height="16" rx="2" fill="#e63946" ${S}/>
    <path d="M55 64 V60 H63 V64" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="31" cy="34" r="10" fill="#ffd8b8" ${S}/>
    <path d="M21 33 Q21 23 31 23 Q41 23 41 33 Q36 28 31 28 Q26 28 21 33 Z" fill="#3b2a1a" ${S}/>
    <circle cx="28" cy="35" r="1.6" fill="#333"/><circle cx="35" cy="35" r="1.6" fill="#333"/>
    <path d="M28 39 Q31 42 35 39" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'směr', en: 'direction', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="56" y="10" width="8" height="86" fill="#7a7f87" ${S}/>
    <path d="M60 10 H98 L112 20 L98 30 H60 Z" fill="#f9c74f" ${S}/>
    <path d="M60 34 H24 L10 44 L24 54 H60 Z" fill="#6cc06a" ${S}/>
    <path d="M60 58 H92 L106 68 L92 78 H60 Z" fill="#4fa3e3" ${S}/>
    <path d="M4 82 H26 V72 L46 86 L26 100 V90 H4 Z" fill="#e63946" ${S}/>` },

  { cs: 'přejezd', en: 'level crossing', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="34" y="4" width="50" height="92" fill="#777" ${S}/>
    <path d="M4 66 H116 M4 76 H116" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M4 66 H116 M4 76 H116" stroke="#9aa0a8" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M10 62 V80 M22 62 V80 M96 62 V80 M108 62 V80" stroke="#8b4a2b" stroke-width="4" stroke-linecap="round"/>
    <rect x="14" y="32" width="6" height="64" fill="#7a7f87" ${S}/>
    <path d="M18 50 H96" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M18 50 H96" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    <path d="M24 50 H92" stroke="#e63946" stroke-width="5" stroke-dasharray="8 8"/>
    <rect x="4" y="30" width="26" height="12" rx="3" fill="#333" ${S}/>
    <circle cx="11" cy="36" r="3.5" fill="#e63946"/><circle cx="23" cy="36" r="3.5" fill="#e63946"/>
    <path d="M4 22 L30 4 M4 4 L30 22" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M4 22 L30 4 M4 4 L30 22" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 22 L9 18.5 M25 7.5 L30 4 M4 4 L9 7.5 M25 18.5 L30 22" stroke="#e63946" stroke-width="5" stroke-linecap="round"/>` },

  { cs: 'vjezd', en: 'entrance (for vehicles)', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="6" y="4" width="56" height="16" rx="3" fill="#3f9d55" ${S}/>
    <text x="34" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">VJEZD</text>
    <path d="M4 96 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="96" y="60" width="10" height="36" fill="#7a7f87" ${S}/>
    <path d="M101 62 L113 14" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M101 62 L113 14" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M103 54 L111 22" stroke="#e63946" stroke-width="4.5" stroke-dasharray="7 7"/>
    <path d="M52 42 H78" stroke="#3f9d55" stroke-width="6" stroke-linecap="round"/>
    <path d="M76 32 L92 42 L76 52 Z" fill="#3f9d55" ${S}/>
    <path d="M18 74 L28 58 H60 L74 74 Z" fill="#4fa3e3" ${S}/>
    <rect x="6" y="72" width="80" height="18" rx="4" fill="#4fa3e3" ${S}/>
    <path d="M24 72 L32 61 H46 V72 Z" fill="#bde0fe" ${S}/>
    <path d="M50 61 H60 L70 72 H50 Z" fill="#bde0fe" ${S}/>
    <rect x="80" y="76" width="5" height="6" rx="1" fill="#f9c74f"/>
    <circle cx="24" cy="90" r="7" fill="#333" ${S}/><circle cx="24" cy="90" r="2.5" fill="#9aa0a8"/>
    <circle cx="68" cy="90" r="7" fill="#333" ${S}/><circle cx="68" cy="90" r="2.5" fill="#9aa0a8"/>` },

  { cs: 'výjezd', en: 'exit (for vehicles)', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="56" y="4" width="58" height="16" rx="3" fill="#e63946" ${S}/>
    <text x="85" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">VÝJEZD</text>
    <path d="M4 96 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="12" y="60" width="10" height="36" fill="#7a7f87" ${S}/>
    <path d="M17 62 L7 16" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M17 62 L7 16" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M15 54 L9 24" stroke="#e63946" stroke-width="4.5" stroke-dasharray="7 7"/>
    <path d="M54 42 H82" stroke="#e63946" stroke-width="6" stroke-linecap="round"/>
    <path d="M80 32 L96 42 L80 52 Z" fill="#e63946" ${S}/>
    <path d="M42 74 L52 58 H84 L98 74 Z" fill="#f9c74f" ${S}/>
    <rect x="30" y="72" width="80" height="18" rx="4" fill="#f9c74f" ${S}/>
    <path d="M48 72 L56 61 H70 V72 Z" fill="#bde0fe" ${S}/>
    <path d="M74 61 H84 L94 72 H74 Z" fill="#bde0fe" ${S}/>
    <rect x="104" y="76" width="5" height="6" rx="1" fill="#fff"/>
    <circle cx="48" cy="90" r="7" fill="#333" ${S}/><circle cx="48" cy="90" r="2.5" fill="#9aa0a8"/>
    <circle cx="92" cy="90" r="7" fill="#333" ${S}/><circle cx="92" cy="90" r="2.5" fill="#9aa0a8"/>` },

  { cs: 'zájezd', en: 'package tour', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <circle cx="18" cy="16" r="9" fill="#f9c74f" ${S}/>
    <path d="M18 2 V4 M18 28 V30 M4 16 H6 M30 16 H32 M8 6 L9.5 7.5 M26.5 24.5 L28 26 M28 6 L26.5 7.5 M9.5 24.5 L8 26" stroke="#f9c74f" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M104 74 Q100 56 106 34" fill="none" stroke="#8b4a2b" stroke-width="5" stroke-linecap="round"/>
    <path d="M106 34 Q92 22 82 32 Q96 30 106 34 Z" fill="#3f9d55" ${S}/>
    <path d="M106 34 Q96 18 106 12 Q106 24 106 34 Z" fill="#3f9d55" ${S}/>
    <path d="M106 34 Q116 16 118 30 Q112 28 106 34 Z" fill="#3f9d55" ${S}/>
    <path d="M106 34 Q118 38 114 50 Q112 40 106 34 Z" fill="#3f9d55" ${S}/>
    <circle cx="104" cy="37" r="3" fill="#8b4a2b" ${S}/>
    <rect x="4" y="34" width="80" height="48" rx="6" fill="#f4a261" ${S}/>
    <rect x="8" y="38" width="72" height="12" rx="2" fill="#fff" ${S}/>
    <text x="44" y="47.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">ZÁJEZD</text>
    <rect x="10" y="54" width="14" height="12" fill="#bde0fe" ${S}/><rect x="30" y="54" width="14" height="12" fill="#bde0fe" ${S}/><rect x="50" y="54" width="14" height="12" fill="#bde0fe" ${S}/>
    <rect x="70" y="54" width="10" height="20" fill="#bde0fe" ${S}/>
    <circle cx="20" cy="84" r="7" fill="#333" ${S}/><circle cx="20" cy="84" r="2.5" fill="#9aa0a8"/>
    <circle cx="66" cy="84" r="7" fill="#333" ${S}/><circle cx="66" cy="84" r="2.5" fill="#9aa0a8"/>
    <path d="M94 80 V76 H104 V80" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
    <rect x="86" y="80" width="26" height="16" rx="2" fill="#e63946" ${S}/>
    <path d="M94 80 V96 M104 80 V96" stroke="#333" stroke-width="2"/>` },

  { cs: 'stan', en: 'tent', pattern: 'hrad', gender: 'mi', level: 'A2', official: null, topic: 'travel', svg: `
    <path d="M110 6 A14 14 0 1 0 116 30 A10 10 0 1 1 110 6 Z" fill="#f9c74f" ${S}/>
    <path d="M4 90 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 12 L4 88 H92 Z" fill="#6cc06a" ${S}/>
    <path d="M50 12 L38 88 H62 Z" fill="#1b6e64" ${S}/>
    <path d="M50 12 L62 88 L76 82 Z" fill="#8fd18a" ${S}/>
    <path d="M50 4 V12" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M94 86 L116 78 M96 78 L114 86" stroke="#8b4a2b" stroke-width="5" stroke-linecap="round"/>
    <path d="M105 80 Q92 70 100 54 Q100 64 105 62 Q106 50 112 56 Q120 68 105 80 Z" fill="#f4a261" ${S}/>
    <path d="M105 78 Q100 72 104 64 Q106 70 109 68 Q112 74 105 78 Z" fill="#f9c74f"/>` },

  { cs: 'loket', en: 'elbow', pattern: 'hrad (lokte)', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M10 34 L72 70 L94 20" fill="none" stroke="#333" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 34 L72 70 L94 20" fill="none" stroke="#ffd8b8" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 34 L34 48" stroke="#333" stroke-width="34" stroke-linecap="round"/>
    <path d="M8 34 L34 48" stroke="#2a9d8f" stroke-width="28" stroke-linecap="round"/>
    <circle cx="96" cy="14" r="10" fill="#ffd8b8" ${S}/>
    <path d="M88 8 Q92 4 96 8" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <circle cx="72" cy="70" r="16" fill="none" stroke="#e63946" stroke-width="4"/>` },

  { cs: 'kotník', en: 'ankle', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <rect x="40" y="6" width="28" height="70" fill="#ffd8b8" ${S}/>
    <rect x="36" y="4" width="36" height="14" fill="#4fa3e3" ${S}/>
    <path d="M40 66 H68 V78 Q90 78 106 88 Q108 92 102 92 H40 Z" fill="#ffd8b8" ${S}/>
    <path d="M88 84 Q92 80 96 84 M98 86 Q101 83 104 87" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <circle cx="58" cy="74" r="15" fill="none" stroke="#e63946" stroke-width="4"/>` },

  { cs: 'knír', en: 'moustache', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <circle cx="17" cy="52" r="9" fill="#ffd8b8" ${S}/>
    <circle cx="103" cy="52" r="9" fill="#ffd8b8" ${S}/>
    <circle cx="60" cy="52" r="40" fill="#ffd8b8" ${S}/>
    <path d="M20 50 Q20 12 60 12 Q100 12 100 50 Q88 30 60 30 Q32 30 20 50 Z" fill="#3b2a1a" ${S}/>
    <circle cx="44" cy="50" r="4" fill="#333"/><circle cx="76" cy="50" r="4" fill="#333"/>
    <path d="M36 42 Q44 38 50 42 M70 42 Q76 38 84 42" fill="none" ${S}/>
    <path d="M60 50 L56 62 Q60 65 64 62 Z" fill="#f4b895" ${S}/>
    <path d="M60 70 Q50 62 38 68 Q28 72 32 80 Q38 84 42 76 Q52 76 60 72 Q68 76 78 76 Q82 84 88 80 Q92 72 82 68 Q70 62 60 70 Z" fill="#3b2a1a" ${S}/>
    <path d="M50 84 Q60 90 70 84" fill="none" ${S}/>` },

  { cs: 'střih', en: 'haircut', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M90 44 L108 18 M92 18 L110 44" stroke="#333" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M90 44 L108 18 M92 18 L110 44" stroke="#9aa0a8" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="88" cy="48" r="4.5" fill="none" ${S}/><circle cx="112" cy="48" r="4.5" fill="none" ${S}/>
    <rect x="86" y="60" width="28" height="8" rx="2" fill="#4fa3e3" ${S}/>
    <path d="M91 68 V76 M96 68 V76 M101 68 V76 M106 68 V76 M111 68 V76" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 92 q4 -6 8 0 M20 94 q4 -6 8 0 M14 86 q4 -5 8 0 M30 90 q4 -6 8 0 M74 92 q4 -6 8 0 M64 88 q4 -5 8 0" fill="none" stroke="#8b4a2b" stroke-width="3" stroke-linecap="round"/>
    <rect x="46" y="76" width="8" height="12" fill="#7a7f87" ${S}/>
    <ellipse cx="50" cy="90" rx="22" ry="5" fill="#7a7f87" ${S}/>
    <rect x="30" y="40" width="40" height="40" rx="6" fill="#e63946" ${S}/>
    <path d="M30 50 H70 L78 80 H22 Z" fill="#c7b6f5" ${S}/>
    <circle cx="50" cy="32" r="13" fill="#ffd8b8" ${S}/>
    <path d="M37 30 Q37 19 50 19 Q63 19 63 30 Q56 26 50 26 Q44 26 37 30 Z" fill="#8b4a2b" ${S}/>
    <circle cx="45" cy="34" r="1.8" fill="#333"/><circle cx="55" cy="34" r="1.8" fill="#333"/>
    <path d="M45 39 Q50 43 55 39" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'hlas', en: 'voice', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M10 72 H58 L64 96 H4 Z" fill="#4fa3e3" ${S}/>
    <circle cx="34" cy="44" r="24" fill="#ffd8b8" ${S}/>
    <path d="M10 42 Q10 20 34 20 Q58 20 58 42 Q48 34 34 34 Q20 34 10 42 Z" fill="#3b2a1a" ${S}/>
    <circle cx="25" cy="44" r="2.5" fill="#333"/><circle cx="43" cy="44" r="2.5" fill="#333"/>
    <ellipse cx="34" cy="56" rx="6" ry="5" fill="#c0392b" ${S}/>
    <path d="M66 42 Q74 52 66 62" fill="none" stroke="#e63946" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M76 34 Q88 52 76 70" fill="none" stroke="#e63946" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M86 26 Q102 52 86 78" fill="none" stroke="#e63946" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="70" y="80" width="10" height="10" rx="2" fill="#7a7f87" ${S}/>
    <path d="M78 78 L110 68 V96 L78 88 Z" fill="#e63946" ${S}/>` },

  { cs: 'sluch', en: 'hearing', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M8 36 Q8 14 18 12 Q28 14 28 36 Z" fill="#f9c74f" ${S}/>
    <path d="M18 8 V12" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M5 36 H31" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <circle cx="18" cy="41" r="3" fill="#333"/>
    <path d="M42 36 Q50 50 42 64" fill="none" stroke="#4fa3e3" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M34 26 Q46 50 34 74" fill="none" stroke="#4fa3e3" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M58 32 Q54 6 76 6 Q100 6 98 34 Q96 52 84 60 Q78 66 78 78 Q76 94 62 92 Q50 90 52 78 Q58 76 60 64 Q62 54 58 46 Z" fill="#ffd8b8" ${S}/>
    <path d="M68 32 Q68 18 78 18 Q90 20 88 36 Q86 44 80 48" fill="none" ${S}/>` },

  { cs: 'spánek', en: 'sleep', pattern: 'hrad (spánku)', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M104 6 A14 14 0 1 0 110 30 A10 10 0 1 1 104 6 Z" fill="#f9c74f" ${S}/>
    <text x="48" y="44" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">Z</text>
    <text x="58" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#333">Z</text>
    <text x="70" y="18" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="16" fill="#333">Z</text>
    <rect x="6" y="40" width="10" height="56" fill="#b5722f" ${S}/>
    <rect x="104" y="60" width="10" height="36" fill="#b5722f" ${S}/>
    <rect x="12" y="70" width="96" height="14" fill="#fff" ${S}/>
    <ellipse cx="30" cy="66" rx="14" ry="7" fill="#fff" ${S}/>
    <rect x="42" y="58" width="66" height="22" rx="5" fill="#4fa3e3" ${S}/>
    <path d="M42 66 H108" stroke="#bde0fe" stroke-width="3"/>
    <circle cx="94" cy="50" r="7" fill="#b5722f" ${S}/>
    <circle cx="88" cy="45" r="3" fill="#b5722f" ${S}/><circle cx="100" cy="45" r="3" fill="#b5722f" ${S}/>
    <circle cx="92" cy="50" r="1.2" fill="#333"/><circle cx="96" cy="50" r="1.2" fill="#333"/>
    <circle cx="30" cy="56" r="11" fill="#ffd8b8" ${S}/>
    <path d="M19 54 Q19 43 30 43 Q41 43 41 54 Q36 49 30 49 Q24 49 19 54 Z" fill="#f2c14e" ${S}/>
    <path d="M24 57 Q27 60 30 57 M32 57 Q35 60 38 57" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M27 62 Q30 64 33 62" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'úraz', en: 'injury', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M4 92 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <g transform="rotate(-40 94 80)">
      <circle cx="80" cy="80" r="9" fill="#333" ${S}/><circle cx="80" cy="80" r="3" fill="#9aa0a8" ${S}/>
      <circle cx="108" cy="80" r="9" fill="#333" ${S}/><circle cx="108" cy="80" r="3" fill="#9aa0a8" ${S}/>
      <path d="M80 80 L90 64 H104 L108 80 M90 64 L96 80 L104 64 M104 64 L110 54 M85 62 H93 M106 54 H114" fill="none" ${S}/>
      <circle cx="96" cy="80" r="2.5" fill="#333"/>
    </g>
    <path d="M42 74 L60 66 L70 88" fill="none" stroke="#333" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42 74 L60 66 L70 88" fill="none" stroke="#ffd8b8" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="60" cy="66" r="3.5" fill="#e63946"/>
    <g transform="rotate(-25 52 71)">
      <rect x="43" y="68" width="18" height="6" rx="1" fill="#f4b895" ${S}/>
      <rect x="49" y="66" width="6" height="10" rx="1" fill="#f4b895" ${S}/>
    </g>
    <path d="M18 48 H40 L44 76 H14 Z" fill="#f9c74f" ${S}/>
    <path d="M18 56 L10 74" stroke="#ffd8b8" stroke-width="5" stroke-linecap="round"/>
    <circle cx="29" cy="36" r="11" fill="#ffd8b8" ${S}/>
    <path d="M18 34 Q18 23 29 23 Q40 23 40 34 Q35 29 29 29 Q23 29 18 34 Z" fill="#8b4a2b" ${S}/>
    <circle cx="25" cy="37" r="1.6" fill="#333"/><circle cx="33" cy="37" r="1.6" fill="#333"/>
    <path d="M25 43 Q29 40 33 43" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M36 40 Q38 44 36 46" fill="none" stroke="#4fa3e3" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'prášek', en: 'pill; powder', pattern: 'hrad (prášku)', gender: 'mi', level: 'A2', official: 'A2', topic: 'body', svg: `
    <circle cx="28" cy="60" r="20" fill="#fff" ${S}/>
    <path d="M10 60 H46" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M66 46 L72 94 H104 L110 46 Z" fill="#dff3ff" ${S}/>
    <path d="M69 62 L73 91 H103 L107 62 Z" fill="#bde0fe"/>
    <circle cx="80" cy="74" r="2" fill="#fff"/><circle cx="92" cy="80" r="2.5" fill="#fff"/><circle cx="98" cy="70" r="1.8" fill="#fff"/><circle cx="84" cy="86" r="1.8" fill="#fff"/>
    <g transform="rotate(35 88 22)">
      <rect x="72" y="10" width="32" height="22" rx="2" fill="#4fa3e3" ${S}/>
      <path d="M72 14 L76 12 L80 14 L84 12 L88 14 L92 12 L96 14 L100 12 L104 14" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <rect x="78" y="18" width="20" height="10" rx="1" fill="#fff"/>
    </g>
    <circle cx="82" cy="40" r="2" fill="#fff" stroke="#333" stroke-width="1.5"/><circle cx="86" cy="46" r="2" fill="#fff" stroke="#333" stroke-width="1.5"/><circle cx="84" cy="53" r="2" fill="#fff" stroke="#333" stroke-width="1.5"/><circle cx="88" cy="59" r="2" fill="#fff" stroke="#333" stroke-width="1.5"/>` }
);
