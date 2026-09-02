// Topic: shopping (masculine inanimate)
WORDS.push(
  { cs: 'obchod', en: 'shop', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <rect x="12" y="30" width="96" height="64" fill="#ffe08a" ${S}/>
    <rect x="22" y="6" width="76" height="18" rx="3" fill="#e63946" ${S}/>
    <text x="60" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#fff">OBCHOD</text>
    <path d="M8 30 H112 V42 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 Z" fill="#e63946" ${S}/>
    <g fill="#fff">
      <path d="M21 31 V42 a6.5 6.5 0 0 0 13 0 V31 Z"/><path d="M47 31 V42 a6.5 6.5 0 0 0 13 0 V31 Z"/><path d="M73 31 V42 a6.5 6.5 0 0 0 13 0 V31 Z"/><path d="M99 31 V42 a6.5 6.5 0 0 0 11 0 V31 Z"/>
    </g>
    <path d="M8 30 H112 V42 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 a6.5 6.5 0 0 1 -13 0 Z" fill="none" ${S}/>
    <rect x="20" y="54" width="44" height="30" fill="#dff3ff" ${S}/>
    <path d="M22 76 H62" stroke="#333" stroke-width="2"/>
    <circle cx="30" cy="69" r="6" fill="#e63946" ${S}/>
    <circle cx="44" cy="69" r="6" fill="#f4a261" ${S}/>
    <rect x="53" y="60" width="7" height="16" rx="2" fill="#6cc06a" ${S}/>
    <rect x="74" y="54" width="24" height="40" fill="#8b4a2b" ${S}/>
    <circle cx="92" cy="76" r="2.5" fill="#f9c74f"/>` },

  { cs: 'supermarket', en: 'supermarket', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <rect x="6" y="28" width="108" height="58" fill="#ddd" ${S}/>
    <rect x="6" y="10" width="108" height="20" rx="2" fill="#e63946" ${S}/>
    <text x="60" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#fff">SUPERMARKET</text>
    <rect x="12" y="36" width="96" height="50" fill="#bde0fe" ${S}/>
    <path d="M36 36 V86 M84 36 V86" stroke="#333" stroke-width="2"/>
    <rect x="48" y="50" width="24" height="36" fill="#4fa3e3" ${S}/>
    <path d="M60 50 V86" stroke="#333" stroke-width="2"/>
    <path d="M4 94 H116" ${S}/>
    <path d="M78 58 L84 82 H108 L114 62 Z" fill="#9aa0a8" ${S}/>
    <path d="M90 62 V80 M100 62 V80 M83 70 H110" stroke="#7a7f87" stroke-width="2"/>
    <path d="M78 58 L72 48 H64" fill="none" ${S}/>
    <circle cx="88" cy="90" r="4" fill="#7a7f87" ${S}/>
    <circle cx="106" cy="90" r="4" fill="#7a7f87" ${S}/>` },

  { cs: 'trh', en: 'market', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <path d="M20 10 H100 L114 32 H6 Z" fill="#e63946" ${S}/>
    <g fill="#fff">
      <polygon points="30,10 40,10 33,32 19.5,32"/><polygon points="50,10 60,10 60,32 46.5,32"/><polygon points="70,10 80,10 87,32 73.5,32"/><polygon points="90,10 100,10 114,32 100.5,32"/>
    </g>
    <path d="M20 10 H100 L114 32 H6 Z" fill="none" ${S}/>
    <rect x="10" y="32" width="6" height="60" fill="#b5722f" ${S}/>
    <rect x="104" y="32" width="6" height="60" fill="#b5722f" ${S}/>
    <rect x="16" y="76" width="88" height="18" fill="#8b4a2b" ${S}/>
    <circle cx="27" cy="52" r="7" fill="#e63946" ${S}/>
    <circle cx="40" cy="50" r="7" fill="#e63946" ${S}/>
    <circle cx="52" cy="52" r="7" fill="#6cc06a" ${S}/>
    <circle cx="70" cy="52" r="7" fill="#f4a261" ${S}/>
    <circle cx="82" cy="50" r="7" fill="#f4a261" ${S}/>
    <circle cx="94" cy="52" r="7" fill="#f4a261" ${S}/>
    <rect x="18" y="54" width="40" height="18" fill="#b5722f" ${S}/>
    <rect x="62" y="54" width="40" height="18" fill="#b5722f" ${S}/>
    <path d="M24 60 H52 M24 66 H52 M68 60 H96 M68 66 H96" stroke="#8b4a2b" stroke-width="2" stroke-linecap="round"/>
    <rect x="14" y="70" width="92" height="8" rx="2" fill="#b5722f" ${S}/>` },

  { cs: 'dárek', en: 'present', pattern: 'hrad (dárku)', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <rect x="18" y="44" width="84" height="50" fill="#4fa3e3" ${S}/>
    <g fill="#fff">
      <polygon points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5" transform="translate(32 60)"/>
      <polygon points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5" transform="translate(40 82)"/>
      <polygon points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5" transform="translate(84 56)"/>
      <polygon points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5" transform="translate(90 82)"/>
      <polygon points="0,-5 1.5,-1.5 5,-1.5 2,1 3,5 0,2.5 -3,5 -2,1 -5,-1.5 -1.5,-1.5" transform="translate(30 88)"/>
    </g>
    <rect x="12" y="32" width="96" height="14" rx="2" fill="#4fa3e3" ${S}/>
    <rect x="52" y="32" width="16" height="62" fill="#f9c74f" ${S}/>
    <path d="M60 30 C44 2 18 8 34 30 Z" fill="#f9c74f" ${S}/>
    <path d="M60 30 C76 2 102 8 86 30 Z" fill="#f9c74f" ${S}/>
    <circle cx="60" cy="30" r="6" fill="#f4a261" ${S}/>
    <path d="M66 42 L76 54" stroke="#333" stroke-width="2"/>
    <g transform="translate(86 62) rotate(-15)">
      <rect x="-14" y="-8" width="28" height="16" rx="2" fill="#fff" ${S}/>
      <circle cx="-9" cy="0" r="2" fill="#333"/>
      <path d="M-4 -2 H9 M-4 3 H6" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round"/>
    </g>` },

  { cs: 'nákup', en: 'shopping', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <rect x="36" y="20" width="14" height="30" fill="#fff" ${S}/>
    <rect x="39" y="12" width="8" height="10" rx="2" fill="#4fa3e3" ${S}/>
    <path d="M56 46 L52 14 M60 46 L60 8 M64 46 L68 14" stroke="#3f9d55" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="84" cy="30" rx="22" ry="7" fill="#f4a261" ${S} transform="rotate(-35 84 30)"/>
    <circle cx="98" cy="42" r="8" fill="#e63946" ${S}/>
    <path d="M20 44 L30 82 H96 L108 44 Z" fill="#9aa0a8" ${S}/>
    <path d="M42 46 V80 M60 46 V80 M78 46 V80 M94 46 V80 M24 58 H104 M28 70 H100" stroke="#7a7f87" stroke-width="2"/>
    <path d="M20 44 L10 20 H4" fill="none" ${S}/>
    <circle cx="36" cy="90" r="6" fill="#7a7f87" ${S}/>
    <circle cx="90" cy="90" r="6" fill="#7a7f87" ${S}/>` },

  { cs: 'peníze', en: 'money', pattern: 'plural only (peněz)', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <g transform="translate(44 44) rotate(-28)">
      <rect x="-32" y="-16" width="64" height="32" rx="3" fill="#8fd18a" ${S}/>
      <rect x="-26" y="-10" width="52" height="20" fill="none" stroke="#3f9d55" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="7" fill="#ffe08a" ${S}/>
    </g>
    <g transform="translate(50 42) rotate(-8)">
      <rect x="-32" y="-16" width="64" height="32" rx="3" fill="#bde0fe" ${S}/>
      <rect x="-26" y="-10" width="52" height="20" fill="none" stroke="#4fa3e3" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="7" fill="#ffe08a" ${S}/>
    </g>
    <g transform="translate(56 40) rotate(12)">
      <rect x="-32" y="-16" width="64" height="32" rx="3" fill="#ffe08a" ${S}/>
      <rect x="-26" y="-10" width="52" height="20" fill="none" stroke="#f4a261" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="7" fill="#fff" ${S}/>
    </g>
    <rect x="76" y="68" width="34" height="24" fill="#f9c74f" ${S}/>
    <path d="M76 74 H110 M76 80 H110 M76 86 H110" stroke="#333" stroke-width="2"/>
    <ellipse cx="93" cy="68" rx="17" ry="5" fill="#f9c74f" ${S}/>
    <ellipse cx="93" cy="68" rx="10" ry="2.5" fill="#ffe08a"/>
    <circle cx="30" cy="82" r="12" fill="#f9c74f" ${S}/>
    <circle cx="30" cy="82" r="8" fill="#ffe08a"/>
    <text x="30" y="86" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">Kč</text>` },

  { cs: 'bankomat', en: 'cash machine', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <rect x="28" y="6" width="64" height="88" rx="4" fill="#9aa0a8" ${S}/>
    <rect x="36" y="14" width="48" height="28" fill="#1d2a5a" ${S}/>
    <text x="60" y="34" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="16" fill="#6cc06a">Kč</text>
    <g fill="#ddd" stroke="#333" stroke-width="1.5">
      <rect x="40" y="48" width="10" height="7" rx="1.5"/><rect x="55" y="48" width="10" height="7" rx="1.5"/><rect x="70" y="48" width="10" height="7" rx="1.5"/>
      <rect x="40" y="58" width="10" height="7" rx="1.5"/><rect x="55" y="58" width="10" height="7" rx="1.5"/><rect x="70" y="58" width="10" height="7" rx="1.5"/>
      <rect x="40" y="68" width="10" height="7" rx="1.5"/><rect x="55" y="68" width="10" height="7" rx="1.5"/><rect x="70" y="68" width="10" height="7" rx="1.5"/>
    </g>
    <rect x="36" y="80" width="18" height="5" rx="1" fill="#333"/>
    <rect x="60" y="78" width="26" height="8" rx="1" fill="#333"/>
    <rect x="62" y="80" width="22" height="16" rx="1" fill="#8fd18a" ${S}/>
    <circle cx="73" cy="88" r="4" fill="#ffe08a" ${S}/>` },

  { cs: 'účet', en: 'bill, account', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <path d="M24 6 H96 V80 L90 88 L84 80 L78 88 L72 80 L66 88 L60 80 L54 88 L48 80 L42 88 L36 80 L30 88 L24 80 Z" fill="#fff" ${S}/>
    <text x="60" y="22" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#333">ÚČET</text>
    <path d="M34 32 H58 M74 32 H86 M34 42 H62 M74 42 H86 M34 52 H54 M74 52 H86" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M34 60 H86" stroke="#333" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="60" y="75" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#333">120 Kč</text>` },

  { cs: 'košík', en: 'basket', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <path d="M30 50 Q60 0 90 50" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M30 50 Q60 0 90 50" fill="none" stroke="#b5722f" stroke-width="5" stroke-linecap="round"/>
    <circle cx="42" cy="46" r="9" fill="#e63946" ${S}/>
    <circle cx="60" cy="42" r="9" fill="#6cc06a" ${S}/>
    <circle cx="78" cy="46" r="9" fill="#e63946" ${S}/>
    <path d="M60 33 V28 M42 37 V32 M78 37 V32" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M14 52 H106 L98 92 H22 Z" fill="#b5722f" ${S}/>
    <path d="M17 64 H103 M19 74 H101 M21 84 H99" stroke="#8b4a2b" stroke-width="2.5"/>
    <path d="M32 54 V90 M46 54 V90 M60 54 V90 M74 54 V90 M88 54 V90" stroke="#8b4a2b" stroke-width="2.5" stroke-dasharray="6 4"/>
    <rect x="12" y="48" width="96" height="8" rx="3" fill="#8b4a2b" ${S}/>` },

  { cs: 'deštník', en: 'umbrella', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <path d="M60 8 V2" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <path d="M8 52 A52 44 0 0 1 112 52 a8.67 8.67 0 0 1 -17.33 0 a8.67 8.67 0 0 1 -17.33 0 a8.67 8.67 0 0 1 -17.33 0 a8.67 8.67 0 0 1 -17.33 0 a8.67 8.67 0 0 1 -17.33 0 a8.67 8.67 0 0 1 -17.33 0 Z" fill="#e63946" ${S}/>
    <path d="M60 8 L25.3 52 M60 8 L42.7 52 M60 8 L77.3 52 M60 8 L94.7 52" stroke="#333" stroke-width="2"/>
    <path d="M60 54 V84 a8 8 0 0 1 -16 0" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M60 54 V84 a8 8 0 0 1 -16 0" fill="none" stroke="#b5722f" stroke-width="3" stroke-linecap="round"/>
    <g fill="#4fa3e3" ${S}>
      <path d="M18 62 Q13 70 13 73 A5 5 0 0 0 23 73 Q23 70 18 62 Z"/>
      <path d="M102 62 Q97 70 97 73 A5 5 0 0 0 107 73 Q107 70 102 62 Z"/>
      <path d="M28 82 Q23 90 23 93 A5 5 0 0 0 33 93 Q33 90 28 82 Z"/>
      <path d="M90 82 Q85 90 85 93 A5 5 0 0 0 95 93 Q95 90 90 82 Z"/>
    </g>` },

  { cs: 'batoh', en: 'rucksack', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <path d="M34 34 Q14 60 26 90" fill="none" stroke="#333" stroke-width="11" stroke-linecap="round"/>
    <path d="M34 34 Q14 60 26 90" fill="none" stroke="#3f9d55" stroke-width="6" stroke-linecap="round"/>
    <path d="M86 34 Q106 60 94 90" fill="none" stroke="#333" stroke-width="11" stroke-linecap="round"/>
    <path d="M86 34 Q106 60 94 90" fill="none" stroke="#3f9d55" stroke-width="6" stroke-linecap="round"/>
    <path d="M48 14 Q60 0 72 14" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M48 14 Q60 0 72 14" fill="none" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 30 Q28 12 60 12 Q92 12 92 30 V84 Q92 94 82 94 H38 Q28 94 28 84 Z" fill="#6cc06a" ${S}/>
    <path d="M28 30 Q28 12 60 12 Q92 12 92 30 V42 H28 Z" fill="#3f9d55" ${S}/>
    <rect x="42" y="38" width="8" height="10" rx="2" fill="#9aa0a8" ${S}/>
    <rect x="70" y="38" width="8" height="10" rx="2" fill="#9aa0a8" ${S}/>
    <rect x="38" y="56" width="44" height="32" rx="6" fill="#3f9d55" ${S}/>
    <path d="M42 63 H78" stroke="#333" stroke-width="2" stroke-dasharray="3 2"/>
    <rect x="72" y="60" width="4" height="7" rx="1" fill="#9aa0a8" ${S}/>` },

  { cs: 'kufr', en: 'suitcase', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <rect x="46" y="6" width="28" height="16" rx="6" fill="#8b4a2b" ${S}/>
    <rect x="8" y="18" width="104" height="76" rx="8" fill="#b5722f" ${S}/>
    <rect x="24" y="18" width="10" height="76" fill="#8b4a2b" ${S}/>
    <rect x="86" y="18" width="10" height="76" fill="#8b4a2b" ${S}/>
    <rect x="42" y="16" width="10" height="9" rx="1" fill="#f9c74f" ${S}/>
    <rect x="68" y="16" width="10" height="9" rx="1" fill="#f9c74f" ${S}/>
    <circle cx="50" cy="52" r="12" fill="#f9c74f" ${S}/>
    <text x="50" y="56" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">CZ</text>
    <g transform="translate(70 74) rotate(-15)">
      <rect x="-14" y="-7" width="28" height="14" rx="2" fill="#4fa3e3" ${S}/>
      <path d="M-9 0 H9" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    </g>
    <circle cx="74" cy="46" r="7" fill="#e94b8a" ${S}/>` },

  { cs: 'mobil', en: 'mobile phone', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'shopping', svg: `
    <rect x="34" y="4" width="52" height="92" rx="8" fill="#1d2a5a" ${S}/>
    <rect x="39" y="14" width="42" height="70" rx="2" fill="#dff3ff" ${S}/>
    <g stroke="#333" stroke-width="1.5">
      <rect x="43" y="18" width="9" height="9" rx="2" fill="#e63946"/><rect x="56" y="18" width="9" height="9" rx="2" fill="#f4a261"/><rect x="69" y="18" width="9" height="9" rx="2" fill="#f9c74f"/>
      <rect x="43" y="31" width="9" height="9" rx="2" fill="#6cc06a"/><rect x="56" y="31" width="9" height="9" rx="2" fill="#4fa3e3"/><rect x="69" y="31" width="9" height="9" rx="2" fill="#5a3fbf"/>
      <rect x="43" y="44" width="9" height="9" rx="2" fill="#e94b8a"/><rect x="56" y="44" width="9" height="9" rx="2" fill="#2a9d8f"/><rect x="69" y="44" width="9" height="9" rx="2" fill="#3f9d55"/>
      <rect x="43" y="57" width="9" height="9" rx="2" fill="#c7b6f5"/><rect x="56" y="57" width="9" height="9" rx="2" fill="#9aa0a8"/><rect x="69" y="57" width="9" height="9" rx="2" fill="#ffe08a"/>
      <rect x="43" y="71" width="9" height="9" rx="2" fill="#6cc06a"/><rect x="56" y="71" width="9" height="9" rx="2" fill="#e63946"/><rect x="69" y="71" width="9" height="9" rx="2" fill="#4fa3e3"/>
    </g>
    <rect x="52" y="8" width="16" height="3" rx="1.5" fill="#7a7f87"/>
    <circle cx="60" cy="90" r="3" fill="#7a7f87"/>` }
);
