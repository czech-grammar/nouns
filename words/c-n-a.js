// Completion deck: home, food, shopping (neuter)
WORDS.push(
  { cs: 'bydliště', en: 'place of residence', pattern: 'moře', gender: 'n', level: 'A1', official: 'A1', topic: 'home', svg: `
    <path d="M60 30 Q47 18 47 13 A13 13 0 0 1 73 13 Q73 18 60 30 Z" fill="#e63946" ${S}/>
    <circle cx="60" cy="13" r="4.5" fill="#fff"/>
    <rect x="22" y="60" width="76" height="36" fill="#ffe08a" ${S}/>
    <rect x="82" y="40" width="10" height="16" fill="#7a7f87" ${S}/>
    <polygon points="10,62 60,32 110,62" fill="#c0392b" ${S}/>
    <rect x="30" y="68" width="14" height="14" fill="#bde0fe" ${S}/>
    <path d="M37 68 V82 M30 75 H44" fill="none" stroke="#333" stroke-width="2"/>
    <rect x="52" y="72" width="16" height="24" fill="#8b4a2b" ${S}/>
    <circle cx="64" cy="85" r="1.8" fill="#f9c74f"/>
    <rect x="74" y="68" width="18" height="13" rx="2" fill="#e63946" ${S}/>
    <text x="83" y="78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#fff">12</text>` },

  { cs: 'poschodí', en: 'floor, storey', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'home', svg: `
    <rect x="6" y="4" width="108" height="8" fill="#c0392b" ${S}/>
    <rect x="8" y="12" width="104" height="84" fill="#ffe08a" ${S}/>
    <rect x="8" y="50" width="62" height="6" fill="#8b4a2b" ${S}/>
    <path d="M70 50 H78 V58 H86 V66 H94 V74 H102 V82 H112 V96 H70 Z" fill="#f4a261" ${S}/>
    <path d="M74 38 L108 72" fill="none" stroke="#8b4a2b" stroke-width="4" stroke-linecap="round"/>
    <path d="M74 38 V50 M91 55 V66 M108 72 V84" fill="none" stroke="#8b4a2b" stroke-width="4" stroke-linecap="round"/>
    <rect x="50" y="22" width="14" height="16" fill="#bde0fe" ${S}/>
    <rect x="48" y="72" width="16" height="24" fill="#8b4a2b" ${S}/>
    <rect x="20" y="22" width="24" height="18" rx="2" fill="#fff" ${S}/>
    <text x="32" y="36" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#333">2.</text>
    <rect x="20" y="64" width="24" height="18" rx="2" fill="#fff" ${S}/>
    <text x="32" y="78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#333">1.</text>` },

  { cs: 'přízemí', en: 'ground floor', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'home', svg: `
    <rect x="12" y="4" width="96" height="8" fill="#c0392b" ${S}/>
    <rect x="18" y="12" width="84" height="36" fill="#ffe08a" ${S}/>
    <rect x="18" y="48" width="84" height="36" fill="#f4a261" ${S}/>
    <g fill="#bde0fe" ${S}><rect x="28" y="20" width="14" height="14"/><rect x="53" y="20" width="14" height="14"/><rect x="78" y="20" width="14" height="14"/></g>
    <rect x="78" y="60" width="16" height="24" fill="#5a3a22" ${S}/>
    <circle cx="90" cy="73" r="1.6" fill="#f9c74f"/>
    <rect x="24" y="58" width="48" height="16" rx="2" fill="#fff" ${S}/>
    <text x="48" y="70" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">PŘÍZEMÍ</text>
    <rect x="4" y="84" width="112" height="12" fill="#9aa0a8" ${S}/>
    <path d="M14 90 H26 M38 90 H50 M62 90 H74 M86 90 H98" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'umyvadlo', en: 'washbasin', pattern: 'město', gender: 'n', level: 'A1', official: 'A1', topic: 'home', svg: `
    <rect x="30" y="4" width="60" height="26" rx="5" fill="#dff3ff" ${S}/>
    <path d="M40 22 L56 9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 54 V40 Q60 34 54 34 H47 Q43 34 43 38 V42" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60 54 V40 Q60 34 54 34 H47 Q43 34 43 38 V42" fill="none" stroke="#9aa0a8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="58" y="34" width="16" height="6" rx="3" fill="#9aa0a8" ${S}/>
    <path d="M43 47 v4" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <rect x="12" y="50" width="96" height="10" rx="5" fill="#fff" ${S}/>
    <path d="M18 60 H102 Q102 88 60 88 Q18 88 18 60 Z" fill="#fff" ${S}/>
    <path d="M28 64 Q30 78 60 80 Q90 78 92 64" fill="none" stroke="#ddd" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="60" cy="74" r="3.5" fill="#9aa0a8" stroke="#333" stroke-width="2"/>
    <path d="M48 88 L44 96 H76 L72 88 Z" fill="#fff" ${S}/>` },

  { cs: 'topení', en: 'heating', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'home', svg: `
    <path d="M40 30 q-5 -6 0 -12 q5 -6 0 -12 M66 30 q-5 -6 0 -12 q5 -6 0 -12 M92 30 q-5 -6 0 -12 q5 -6 0 -12" fill="none" stroke="#e63946" stroke-width="3" stroke-linecap="round"/>
    <path d="M14 54 V96" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M14 54 V96" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <rect x="22" y="36" width="90" height="50" rx="4" fill="#fff" ${S}/>
    <path d="M34 42 V80 M46 42 V80 M58 42 V80 M70 42 V80 M82 42 V80 M94 42 V80" fill="none" stroke="#ddd" stroke-width="4" stroke-linecap="round"/>
    <rect x="30" y="86" width="6" height="8" fill="#7a7f87" ${S}/>
    <rect x="98" y="86" width="6" height="8" fill="#7a7f87" ${S}/>
    <circle cx="14" cy="46" r="9" fill="#f9c74f" ${S}/>
    <path d="M14 46 V39" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'nádobí', en: 'dishes', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'home', svg: `
    <circle cx="66" cy="40" r="2.5" fill="#4fa3e3"/>
    <circle cx="106" cy="44" r="2.5" fill="#4fa3e3"/>
    <circle cx="70" cy="30" r="2" fill="#4fa3e3"/>
    <path d="M98 58 Q110 58 110 65 Q110 72 98 72" fill="none" ${S}/>
    <rect x="72" y="50" width="26" height="30" rx="4" fill="#e63946" ${S}/>
    <ellipse cx="85" cy="50" rx="13" ry="3.5" fill="#c0392b" ${S}/>
    <rect x="10" y="72" width="52" height="8" rx="4" fill="#fff" ${S}/>
    <rect x="10" y="64" width="52" height="8" rx="4" fill="#fff" ${S}/>
    <rect x="10" y="56" width="52" height="8" rx="4" fill="#fff" ${S}/>
    <path d="M16 42 H56 Q56 56 36 56 Q16 56 16 42 Z" fill="#4fa3e3" ${S}/>
    <ellipse cx="36" cy="42" rx="20" ry="4" fill="#bde0fe" ${S}/>
    <rect x="4" y="80" width="112" height="14" rx="4" fill="#ddd" ${S}/>
    <path d="M16 87 H24 M32 87 H40 M48 87 H56 M64 87 H72 M80 87 H88 M96 87 H104" fill="none" stroke="#9aa0a8" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'sklo', en: 'glass (material)', pattern: 'město', gender: 'n', level: 'A1', official: 'A1', topic: 'home', svg: `
    <polygon points="14,8 54,8 58,16 66,18 62,26 72,30 66,92 6,92" fill="#dff3ff" ${S}/>
    <path d="M24 20 L18 60" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    <path d="M62 26 L50 36 M66 18 L54 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <polygon points="78,4 92,8 86,20 74,14" fill="#dff3ff" ${S}/>
    <path d="M80 46 H114 V56 Q114 74 97 74 Q80 74 80 56 Z" fill="#dff3ff" ${S}/>
    <path d="M86 52 V64" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <rect x="94" y="74" width="6" height="12" fill="#dff3ff" ${S}/>
    <ellipse cx="97" cy="90" rx="13" ry="4" fill="#dff3ff" ${S}/>` },

  { cs: 'kakao', en: 'cocoa', pattern: 'město', gender: 'n', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M34 20 q-5 -6 0 -12 M56 20 q-5 -6 0 -12" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M72 46 Q90 46 90 60 Q90 74 72 74" fill="none" ${S}/>
    <rect x="16" y="32" width="58" height="56" rx="6" fill="#4fa3e3" ${S}/>
    <ellipse cx="45" cy="34" rx="29" ry="7" fill="#5a3a22" ${S}/>
    <rect x="30" y="29" width="12" height="9" rx="2" fill="#fff" ${S}/>
    <rect x="46" y="31" width="12" height="9" rx="2" fill="#fff" ${S}/>
    <rect x="38" y="23" width="12" height="9" rx="2" fill="#fff" ${S}/>
    <text x="45" y="70" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">KAKAO</text>
    <path d="M100 48 V40" fill="none" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="100" cy="70" rx="12" ry="22" fill="#f4a261" ${S}/>
    <path d="M95 50 Q90 70 95 90 M105 50 Q110 70 105 90" fill="none" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'kafe', en: 'coffee (colloquial)', pattern: 'indeclinable', gender: 'n', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M70 10 q-3 -4 0 -8" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <rect x="42" y="12" width="36" height="10" rx="4" fill="#7a7f87" ${S}/>
    <rect x="66" y="14" width="8" height="5" rx="1" fill="#333"/>
    <rect x="24" y="20" width="72" height="12" rx="4" fill="#9aa0a8" ${S}/>
    <path d="M28 32 H92 L84 94 H36 Z" fill="#fff" ${S}/>
    <path d="M31 52 H89 L86 76 H34 Z" fill="#b5722f" ${S}/>
    <text x="60" y="68" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">KAFE</text>` },

  { cs: 'zelí', en: 'cabbage', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'food', svg: `
    <circle cx="42" cy="56" r="36" fill="#6cc06a" ${S}/>
    <path d="M8 58 Q6 30 30 22 Q42 20 46 28 Q28 40 30 70 Q26 88 18 82 Q8 74 8 58 Z" fill="#8fd18a" ${S}/>
    <path d="M42 24 Q66 20 76 42 Q80 62 68 80 Q60 66 56 50 Q52 34 42 24 Z" fill="#3f9d55" ${S}/>
    <circle cx="44" cy="46" r="14" fill="#8fd18a" ${S}/>
    <path d="M42 92 Q42 70 42 60 M42 74 Q32 70 22 58 M42 74 Q54 70 62 58" fill="none" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
    <path d="M14 40 Q22 48 28 62 M60 32 Q64 46 66 64" fill="none" stroke="#3f9d55" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="94" cy="64" r="22" fill="#f4f9dc" ${S}/>
    <circle cx="94" cy="64" r="15" fill="none" stroke="#6cc06a" stroke-width="2.5"/>
    <circle cx="94" cy="64" r="8" fill="none" stroke="#6cc06a" stroke-width="2.5"/>
    <ellipse cx="94" cy="76" rx="3.5" ry="9" fill="#fff" stroke="#6cc06a" stroke-width="2"/>` },

  { cs: 'menu', en: 'menu', pattern: 'indeclinable', gender: 'n', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M22 96 L30 50 M98 96 L90 50" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M22 96 L30 50 M98 96 L90 50" fill="none" stroke="#b5722f" stroke-width="3" stroke-linecap="round"/>
    <rect x="16" y="8" width="88" height="70" rx="3" fill="#b5722f" ${S}/>
    <rect x="22" y="14" width="76" height="56" fill="#1b6e64" ${S}/>
    <text x="60" y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#fff">MENU</text>
    <path d="M32 37 H88" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <circle cx="40" cy="54" r="9" fill="none" stroke="#fff" stroke-width="2"/>
    <circle cx="40" cy="54" r="4.5" fill="#f4a261"/>
    <text x="76" y="58" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#f9c74f">89 KČ</text>
    <rect x="16" y="76" width="88" height="6" fill="#8b4a2b" ${S}/>
    <rect x="30" y="71" width="12" height="4" rx="1" fill="#fff" ${S}/>` },

  { cs: 'kilo', en: 'kilo', pattern: 'město', gender: 'n', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M34 20 V14 M60 14 V8 M86 20 V14" fill="none" stroke="#8b4a2b" stroke-width="3" stroke-linecap="round"/>
    <circle cx="34" cy="32" r="12" fill="#e63946" ${S}/>
    <circle cx="60" cy="26" r="12" fill="#e63946" ${S}/>
    <circle cx="86" cy="32" r="12" fill="#e63946" ${S}/>
    <ellipse cx="66" cy="12" rx="5" ry="2.5" transform="rotate(-30 66 12)" fill="#6cc06a" ${S}/>
    <ellipse cx="60" cy="44" rx="46" ry="8" fill="#9aa0a8" ${S}/>
    <rect x="52" y="48" width="16" height="10" fill="#7a7f87" ${S}/>
    <rect x="14" y="56" width="92" height="34" rx="6" fill="#e63946" ${S}/>
    <rect x="38" y="64" width="44" height="18" rx="2" fill="#fff" ${S}/>
    <text x="60" y="78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#333">1 kg</text>
    <rect x="22" y="90" width="10" height="6" fill="#7a7f87" ${S}/>
    <rect x="88" y="90" width="10" height="6" fill="#7a7f87" ${S}/>` },

  { cs: 'drobné', en: 'small change', pattern: 'adjective declension (plural)', gender: 'n', level: 'A1', official: 'A1', topic: 'shopping', svg: `
    <rect x="30" y="12" width="12" height="40" rx="6" fill="#ffd8b8" ${S}/>
    <rect x="44" y="6" width="12" height="46" rx="6" fill="#ffd8b8" ${S}/>
    <rect x="58" y="10" width="12" height="42" rx="6" fill="#ffd8b8" ${S}/>
    <rect x="72" y="20" width="12" height="32" rx="6" fill="#ffd8b8" ${S}/>
    <ellipse cx="94" cy="60" rx="8" ry="15" transform="rotate(-35 94 60)" fill="#ffd8b8" ${S}/>
    <rect x="28" y="44" width="58" height="44" rx="14" fill="#ffd8b8" ${S}/>
    <rect x="40" y="82" width="36" height="14" rx="3" fill="#4fa3e3" ${S}/>
    <circle cx="48" cy="60" r="9" fill="#ddd" ${S}/>
    <text x="48" y="63.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">1</text>
    <circle cx="68" cy="66" r="9" fill="#ddd" ${S}/>
    <text x="68" y="69.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">2</text>
    <circle cx="56" cy="78" r="9" fill="#ddd" ${S}/>
    <text x="56" y="81.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">5</text>` },

  { cs: 'zboží', en: 'goods', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'shopping', svg: `
    <rect x="12" y="24" width="22" height="26" fill="#f4a261" ${S}/>
    <rect x="17" y="30" width="12" height="8" fill="#fff"/>
    <rect x="38" y="30" width="18" height="20" fill="#4fa3e3" ${S}/>
    <path d="M62 50 V34 Q62 28 66 28 V22 H72 V28 Q76 28 76 34 V50 Z" fill="#6cc06a" ${S}/>
    <path d="M80 50 V34 Q80 28 84 28 V22 H90 V28 Q94 28 94 34 V50 Z" fill="#e63946" ${S}/>
    <rect x="98" y="30" width="12" height="20" rx="2" fill="#ddd" ${S}/>
    <rect x="98" y="36" width="12" height="8" fill="#e63946"/>
    <rect x="8" y="48" width="104" height="6" fill="#b5722f" ${S}/>
    <rect x="12" y="62" width="16" height="28" rx="2" fill="#9aa0a8" ${S}/>
    <rect x="12" y="70" width="16" height="10" fill="#f9c74f"/>
    <rect x="32" y="62" width="16" height="28" rx="2" fill="#9aa0a8" ${S}/>
    <rect x="32" y="70" width="16" height="10" fill="#4fa3e3"/>
    <rect x="54" y="64" width="26" height="26" fill="#c7b6f5" ${S}/>
    <circle cx="67" cy="77" r="6" fill="#fff" ${S}/>
    <path d="M88 90 V70 Q88 64 92 64 V60 H98 V64 Q102 64 102 70 V90 Z" fill="#fff" ${S}/>
    <rect x="8" y="88" width="104" height="6" fill="#b5722f" ${S}/>
    <rect x="86" y="46" width="24" height="12" rx="2" fill="#f9c74f" ${S}/>
    <text x="98" y="55" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" fill="#333">29,-</text>` },

  { cs: 'sako', en: 'jacket, blazer', pattern: 'město', gender: 'n', level: 'A1', official: 'A1', topic: 'clothes', svg: `
    <path d="M60 20 V12 Q60 6 65 6 Q70 6 70 10" fill="none" ${S}/>
    <polygon points="60,20 22,36 98,36" fill="#b5722f" ${S}/>
    <path d="M16 36 Q30 30 46 26 L60 74 L74 26 Q90 30 104 36 L110 94 H10 Z" fill="#1d2a5a" ${S}/>
    <polygon points="46,26 60,74 50,50 38,40 40,30" fill="#2c3e78" ${S}/>
    <polygon points="74,26 60,74 70,50 82,40 80,30" fill="#2c3e78" ${S}/>
    <path d="M30 34 L20 94 M90 34 L100 94" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="24,50 28,43 32,47 36,50" fill="#e63946" ${S}/>
    <path d="M22 50 H38" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="57" cy="80" r="3" fill="#f9c74f" stroke="#333" stroke-width="2"/>
    <circle cx="57" cy="88" r="3" fill="#f9c74f" stroke="#333" stroke-width="2"/>` }
);
