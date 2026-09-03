// B1 deck: family, animals, home, food, town, travel (neuter)
WORDS.push(
  { cs: 'děvče', en: 'girl', pattern: 'kuře (děvčete, pl. děvčata)', gender: 'n', level: 'B1', official: null, topic: 'family', svg: `
    <rect x="16" y="44" width="26" height="32" rx="5" fill="#e63946" ${S}/>
    <rect x="18" y="44" width="22" height="11" rx="3" fill="#c0392b" ${S}/>
    <rect x="26" y="52" width="6" height="5" rx="1" fill="#f9c74f" ${S}/>
    <path d="M46 46 L66 46 L76 80 L36 80 Z" fill="#4fa3e3" ${S}/>
    <path d="M50 47 L46 76" fill="none" stroke="#c0392b" stroke-width="4" stroke-linecap="round"/>
    <path d="M50 46 L56 54 L62 46 Z" fill="#fff" ${S}/>
    <path d="M50 80 V90 M62 80 V90" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M50 80 V90 M62 80 V90" fill="none" stroke="#ffd8b8" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="50" cy="93" rx="6" ry="3.5" fill="#333"/><ellipse cx="62" cy="93" rx="6" ry="3.5" fill="#333"/>
    <path d="M46 52 L36 72" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M46 52 L36 72" fill="none" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="35" cy="74" r="4.5" fill="#ffd8b8" ${S}/>
    <path d="M66 52 L88 30" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M66 52 L88 30" fill="none" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="90" cy="27" r="5.5" fill="#ffd8b8" ${S}/>
    <path d="M100 20 L106 14 M102 28 H110 M96 12 V6" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="56" cy="30" r="14" fill="#ffd8b8" ${S}/>
    <path d="M42 30 Q42 12 56 12 Q70 12 70 30 Q65 21 56 21 Q47 21 42 30 Z" fill="#8b4a2b" ${S}/>
    <path d="M69 32 Q80 40 76 58" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M69 32 Q80 40 76 58" fill="none" stroke="#8b4a2b" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M69 32 Q80 40 76 58" fill="none" stroke="#5a3a22" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3"/>
    <circle cx="76" cy="61" r="4" fill="#e94b8a" ${S}/>
    <circle cx="51" cy="32" r="2.2" fill="#333"/><circle cx="61" cy="32" r="2.2" fill="#333"/>
    <path d="M51 38 Q56 43 61 38" fill="none" ${S}/>` },

  { cs: 'manželství', en: 'marriage', pattern: 'stavení', gender: 'n', level: 'B1', official: null, topic: 'family', svg: `
    <rect x="6" y="78" width="16" height="18" fill="#ffe08a" ${S}/>
    <path d="M4 80 L14 68 L24 80 Z" fill="#c0392b" ${S}/>
    <rect x="11" y="86" width="6" height="10" fill="#8b4a2b" ${S}/>
    <rect x="84" y="58" width="30" height="38" rx="2" fill="#fff" ${S}/>
    <path d="M89 66 H109 M89 71 H109 M89 76 H103" fill="none" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round"/>
    <path d="M89 85 Q92 78 95 85 T101 84" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M89 92 Q93 85 97 92 T105 90" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="108" cy="84" r="4" fill="#e63946" ${S}/>
    <path d="M30 40 L28 60 M50 40 L52 60" stroke="#f2c14e" stroke-width="7" stroke-linecap="round"/>
    <path d="M32 50 L48 50 L54 96 H26 Z" fill="#e94b8a" ${S}/>
    <path d="M60 50 L76 50 L80 96 H56 Z" fill="#1d2a5a" ${S}/>
    <path d="M64 50 L68 60 L72 50 Z" fill="#fff" ${S}/>
    <path d="M32 56 L22 32" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M32 56 L22 32" fill="none" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="22" cy="30" r="5" fill="#ffd8b8" ${S}/>
    <circle cx="22" cy="17" r="7" fill="none" stroke="#333" stroke-width="8"/>
    <circle cx="22" cy="17" r="7" fill="none" stroke="#f9c74f" stroke-width="4"/>
    <path d="M76 56 L88 32" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M76 56 L88 32" fill="none" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="88" cy="30" r="5" fill="#ffd8b8" ${S}/>
    <circle cx="88" cy="17" r="7" fill="none" stroke="#333" stroke-width="8"/>
    <circle cx="88" cy="17" r="7" fill="none" stroke="#f9c74f" stroke-width="4"/>
    <circle cx="40" cy="38" r="12" fill="#ffd8b8" ${S}/>
    <path d="M28 38 Q28 24 40 24 Q52 24 52 38 Q47 31 40 31 Q33 31 28 38 Z" fill="#f2c14e" ${S}/>
    <circle cx="36" cy="39" r="2" fill="#333"/><circle cx="44" cy="39" r="2" fill="#333"/>
    <path d="M36 44 Q40 48 44 44" fill="none" ${S}/>
    <circle cx="68" cy="38" r="12" fill="#ffd8b8" ${S}/>
    <path d="M56 38 Q56 24 68 24 Q80 24 80 38 Q75 31 68 31 Q61 31 56 38 Z" fill="#3b2a1a" ${S}/>
    <circle cx="64" cy="39" r="2" fill="#333"/><circle cx="72" cy="39" r="2" fill="#333"/>
    <path d="M64 44 Q68 48 72 44" fill="none" ${S}/>
    <path d="M54 26 C 46 20, 44 10, 50 8 C 53 7, 54 11, 54 11 C 54 11, 55 7, 58 8 C 64 10, 62 20, 54 26 Z" fill="#e63946" ${S}/>` },

  { cs: 'přátelství', en: 'friendship', pattern: 'stavení', gender: 'n', level: 'B1', official: null, topic: 'family', svg: `
    <path d="M44 54 L96 50 M70 54 L18 50" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M44 54 L96 50" fill="none" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <path d="M70 54 L18 50" fill="none" stroke="#c68642" stroke-width="4" stroke-linecap="round"/>
    <path d="M26 34 L23 56 M46 34 L49 56" stroke="#f2c14e" stroke-width="7" stroke-linecap="round"/>
    <path d="M26 50 L46 50 L52 86 H20 Z" fill="#e94b8a" ${S}/>
    <path d="M68 50 L88 50 L94 86 H62 Z" fill="#6cc06a" ${S}/>
    <path d="M30 86 V93 M42 86 V93 M72 86 V93 M84 86 V93" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M30 86 V93 M42 86 V93" fill="none" stroke="#ffd8b8" stroke-width="6" stroke-linecap="round"/>
    <path d="M72 86 V93 M84 86 V93" fill="none" stroke="#c68642" stroke-width="6" stroke-linecap="round"/>
    <circle cx="91" cy="52" r="4.5" fill="#ffd8b8" ${S}/>
    <circle cx="23" cy="52" r="4.5" fill="#c68642" ${S}/>
    <circle cx="36" cy="34" r="12" fill="#ffd8b8" ${S}/>
    <path d="M24 34 Q24 20 36 20 Q48 20 48 34 Q43 27 36 27 Q29 27 24 34 Z" fill="#f2c14e" ${S}/>
    <circle cx="32" cy="35" r="2" fill="#333"/><circle cx="40" cy="35" r="2" fill="#333"/>
    <path d="M32 40 Q36 44 40 40" fill="none" ${S}/>
    <circle cx="84" cy="34" r="12" fill="#c68642" ${S}/>
    <path d="M72 34 Q72 18 84 18 Q96 18 96 34 Q92 28 84 28 Q76 28 72 34 Z" fill="#3b2a1a" ${S}/>
    <circle cx="80" cy="35" r="2" fill="#333"/><circle cx="88" cy="35" r="2" fill="#333"/>
    <path d="M80 40 Q84 44 88 40" fill="none" ${S}/>
    <path d="M60 32 C 50 24, 48 12, 55 10 C 58 9, 60 13, 60 13 C 60 13, 62 9, 65 10 C 72 12, 70 24, 60 32 Z" fill="#e63946" ${S}/>
    <path d="M44 60 L52 72 M70 60 L64 72" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M44 60 L52 72" fill="none" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <path d="M70 60 L64 72" fill="none" stroke="#c68642" stroke-width="4" stroke-linecap="round"/>
    <polygon points="50,72 66,72 58,94" fill="#f4a261" ${S}/>
    <path d="M53 76 L55 84 M63 76 L61 84" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="58" cy="66" r="9" fill="#e94b8a" ${S}/>
    <circle cx="58" cy="56" r="7" fill="#fff" ${S}/>
    <circle cx="52" cy="74" r="4" fill="#ffd8b8" ${S}/>
    <circle cx="64" cy="74" r="4" fill="#c68642" ${S}/>` },

  { cs: 'křídlo', en: 'wing', pattern: 'město (gen. pl. křídel)', gender: 'n', level: 'B1', official: null, topic: 'animals', svg: `
    <path d="M12 66 C 18 36, 58 10, 106 12 C 102 22, 94 28, 84 32 C 94 36, 96 42, 92 48 C 84 48, 76 50, 70 54 C 76 60, 76 66, 72 72 C 64 70, 58 70, 52 74 C 54 80, 52 86, 46 88 C 38 82, 24 80, 12 66 Z" fill="#4fa3e3" ${S}/>
    <path d="M28 60 L84 32 M28 64 L92 48 M30 68 L70 54 M32 72 L72 72 M34 76 L52 74" fill="none" stroke="#1d2a5a" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 66 C 18 46, 44 30, 80 22 C 60 34, 42 44, 30 74 C 22 74, 16 72, 12 66 Z" fill="#bde0fe" ${S}/>
    <circle cx="16" cy="66" r="8" fill="#1d2a5a" ${S}/>
    <polygon points="94,82 104,82 110,96 98,96" fill="#e63946" ${S}/>
    <polygon points="80,80 78,68 86,68 88,80" fill="#e63946" ${S}/>
    <ellipse cx="96" cy="80" rx="18" ry="6" fill="#ddd" ${S}/>
    <circle cx="92" cy="79" r="1.8" fill="#4fa3e3"/><circle cx="99" cy="79" r="1.8" fill="#4fa3e3"/><circle cx="106" cy="79" r="1.8" fill="#4fa3e3"/>` },

  { cs: 'tlačítko', en: 'button (push button)', pattern: 'město', gender: 'n', level: 'B1', official: null, topic: 'home', svg: `
    <rect x="8" y="36" width="104" height="58" rx="6" fill="#9aa0a8" ${S}/>
    <g fill="#ddd" stroke="#333" stroke-width="1.5"><circle cx="15" cy="43" r="2.5"/><circle cx="105" cy="43" r="2.5"/><circle cx="15" cy="87" r="2.5"/><circle cx="105" cy="87" r="2.5"/></g>
    <ellipse cx="60" cy="66" rx="34" ry="14" fill="#ddd" ${S}/>
    <path d="M32 54 V64 A28 12 0 0 0 88 64 V54 Z" fill="#c0392b" ${S}/>
    <ellipse cx="60" cy="54" rx="28" ry="12" fill="#e63946" ${S}/>
    <path d="M40 52 Q46 44 58 44" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <text x="60" y="91" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">CLICK</text>
    <path d="M48 40 L42 32 M56 36 L54 28" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M84 24 L66 48" fill="none" stroke="#333" stroke-width="13" stroke-linecap="round"/>
    <path d="M84 24 L66 48" fill="none" stroke="#ffd8b8" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="94" cy="18" rx="15" ry="11" fill="#ffd8b8" ${S}/>
    <path d="M100 8 Q104 12 100 16 M106 12 Q109 16 106 20" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'osvětlení', en: 'lighting', pattern: 'stavení', gender: 'n', level: 'B1', official: null, topic: 'home', svg: `
    <path d="M36 32 L20 92 H100 L84 32 Z" fill="#fff1a8"/>
    <path d="M4 92 H116" ${S}/>
    <path d="M60 4 V14" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M48 14 H72 L84 32 H36 Z" fill="#f4a261" ${S}/>
    <circle cx="60" cy="36" r="6" fill="#ffe08a" ${S}/>
    <path d="M50 46 L46 54 M60 46 V56 M70 46 L74 54" fill="none" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <path d="M100 92 V40" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <path d="M100 92 V40" fill="none" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="100" cy="92" rx="10" ry="3" fill="#7a7f87" ${S}/>
    <path d="M90 40 H110 L114 56 H86 Z" fill="#e94b8a" ${S}/>
    <path d="M92 60 L88 66 M100 60 V68 M108 60 L112 66" fill="none" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <path d="M4 6 Q10 20 16 6 Q22 20 28 6 Q34 20 40 6" fill="none" stroke="#333" stroke-width="2"/>
    <circle cx="10" cy="15" r="4" fill="#e63946" ${S}/>
    <circle cx="22" cy="15" r="4" fill="#f9c74f" ${S}/>
    <circle cx="34" cy="15" r="4" fill="#6cc06a" ${S}/>
    <path d="M10 22 V26 M22 22 V26 M34 22 V26 M4 15 H2 M16 15 H15 M28 15 H29 M40 15 H42" fill="none" stroke="#f9c74f" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'víčko', en: 'lid; eyelid', pattern: 'město', gender: 'n', level: 'B1', official: null, topic: 'home', svg: `
    <rect x="10" y="42" width="40" height="52" rx="6" fill="#dff3ff" ${S}/>
    <rect x="13" y="58" width="34" height="33" rx="4" fill="#e63946"/>
    <path d="M17 50 V84" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="16" y="34" width="28" height="9" fill="#dff3ff" ${S}/>
    <path d="M18 37.5 H42 M18 40.5 H42" fill="none" stroke="#9aa0a8" stroke-width="1.5"/>
    <g transform="rotate(-15 30 20)">
      <rect x="8" y="14" width="44" height="13" rx="3" fill="#f9c74f" ${S}/>
      <path d="M16 18 V23 M24 18 V23 M32 18 V23 M40 18 V23" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    </g>
    <path d="M56 8 Q66 14 62 28" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="57,27 66,27 61,34" fill="#333"/>
    <path d="M70 30 Q90 18 110 30" fill="none" stroke="#3b2a1a" stroke-width="5" stroke-linecap="round"/>
    <path d="M66 58 Q90 32 114 58 Q90 76 66 58 Z" fill="#ffd8b8" ${S}/>
    <path d="M75.6 64 L71 72 M85.2 67 L83 76 M94.8 67 L97 76 M104.4 64 L109 72" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'jádro', en: 'core, kernel (apple, nut)', pattern: 'město (gen. pl. jader)', gender: 'n', level: 'B1', official: null, topic: 'food', svg: `
    <path d="M30 18 V8" stroke="#8b4a2b" stroke-width="3" stroke-linecap="round"/>
    <path d="M30 12 Q40 4 44 12 Q36 16 30 12 Z" fill="#6cc06a" ${S}/>
    <path d="M12 20 Q30 14 48 20 Q38 34 36 50 Q38 66 48 80 Q30 86 12 80 Q22 66 24 50 Q22 34 12 20 Z" fill="#fff8e1" ${S}/>
    <path d="M12 20 Q30 14 48 20 Q30 28 12 20 Z" fill="#e63946" ${S}/>
    <path d="M12 80 Q30 86 48 80 Q30 72 12 80 Z" fill="#e63946" ${S}/>
    <ellipse cx="27" cy="50" rx="2.2" ry="4" fill="#3b2a1a"/><ellipse cx="33" cy="50" rx="2.2" ry="4" fill="#3b2a1a"/>
    <ellipse cx="102" cy="20" rx="12" ry="8" transform="rotate(-30 102 20)" fill="#8b4a2b" ${S}/>
    <ellipse cx="102" cy="20" rx="7" ry="4" transform="rotate(-30 102 20)" fill="#b5722f"/>
    <circle cx="86" cy="58" r="26" fill="#8b4a2b" ${S}/>
    <path d="M86 40 Q94 36 97 45 Q106 46 102 55 Q108 63 100 68 Q98 78 86 76 Q74 78 72 68 Q64 63 70 55 Q66 46 75 45 Q78 36 86 40 Z" fill="#e8c48a" ${S}/>
    <path d="M86 42 V74 M76 50 Q82 58 76 66 M96 50 Q90 58 96 66" fill="none" stroke="#b5722f" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'těsto', en: 'dough, batter', pattern: 'město', gender: 'n', level: 'B1', official: null, topic: 'food', svg: `
    <g fill="#fff" stroke="#9aa0a8" stroke-width="1"><circle cx="14" cy="22" r="2"/><circle cx="26" cy="12" r="2.5"/><circle cx="42" cy="18" r="2"/><circle cx="54" cy="28" r="2.5"/><circle cx="66" cy="40" r="2"/></g>
    <rect x="4" y="68" width="112" height="14" rx="3" fill="#b5722f" ${S}/>
    <path d="M12 75 H40 M60 77 H100" fill="none" stroke="#8b4a2b" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="30" cy="50" rx="23" ry="20" fill="#ffe8c2" ${S}/>
    <path d="M16 44 Q22 34 34 34" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <rect x="54" y="57" width="10" height="6" rx="3" fill="#8b4a2b" ${S}/>
    <rect x="106" y="57" width="10" height="6" rx="3" fill="#8b4a2b" ${S}/>
    <rect x="63" y="52" width="44" height="16" rx="2" fill="#dcb27a" ${S}/>
    <path d="M68 56 H102" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <g fill="#fff" stroke="#9aa0a8" stroke-width="1"><circle cx="22" cy="58" r="2"/><circle cx="38" cy="56" r="2"/><circle cx="30" cy="64" r="2"/><circle cx="12" cy="73" r="2"/><circle cx="46" cy="74" r="2"/><circle cx="58" cy="72" r="2"/><circle cx="80" cy="73" r="2"/><circle cx="96" cy="72" r="2"/><circle cx="110" cy="74" r="2"/></g>` },

  { cs: 'městečko', en: 'small town', pattern: 'město (gen. pl. městeček)', gender: 'n', level: 'B1', official: null, topic: 'town', svg: `
    <path d="M4 96 Q60 36 116 96 Z" fill="#6cc06a" ${S}/>
    <rect x="10" y="68" width="12" height="12" fill="#ffe08a" ${S}/>
    <polygon points="8,70 16,62 24,70" fill="#e63946" ${S}/>
    <rect x="98" y="68" width="12" height="12" fill="#ffe08a" ${S}/>
    <polygon points="96,70 104,62 112,70" fill="#e63946" ${S}/>
    <rect x="22" y="56" width="16" height="16" fill="#ffe08a" ${S}/>
    <polygon points="20,58 30,48 40,58" fill="#e63946" ${S}/>
    <rect x="27" y="61" width="6" height="6" fill="#bde0fe" ${S}/>
    <rect x="80" y="54" width="16" height="18" fill="#f4a261" ${S}/>
    <polygon points="78,56 88,46 98,56" fill="#e63946" ${S}/>
    <rect x="85" y="60" width="6" height="6" fill="#bde0fe" ${S}/>
    <rect x="52" y="44" width="22" height="26" fill="#fff" ${S}/>
    <polygon points="50,46 63,34 76,46" fill="#c0392b" ${S}/>
    <rect x="58" y="58" width="8" height="12" rx="4" fill="#8b4a2b" ${S}/>
    <rect x="40" y="30" width="12" height="40" fill="#fff" ${S}/>
    <polygon points="38,32 46,10 54,32" fill="#c0392b" ${S}/>
    <path d="M46 10 V4 M43 7 H49" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <circle cx="46" cy="40" r="3.5" fill="#f9c74f" ${S}/>
    <path d="M63 82 V72 M63 72 Q58 74 56 80 M63 72 Q68 74 70 80" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="63" cy="84" rx="12" ry="4" fill="#4fa3e3" ${S}/>` },

  { cs: 'okolí', en: 'surroundings, neighbourhood', pattern: 'stavení', gender: 'n', level: 'B1', official: null, topic: 'town', svg: `
    <ellipse cx="60" cy="51" rx="55" ry="45" fill="#e8f5e9" stroke="#333" stroke-width="2.5" stroke-dasharray="6 4"/>
    <rect x="12" y="34" width="26" height="12" fill="#fff" ${S}/>
    <rect x="12" y="28" width="26" height="6" fill="#e63946" ${S}/>
    <path d="M17 28 V34 M22 28 V34 M27 28 V34 M32 28 V34" fill="none" stroke="#fff" stroke-width="2.5"/>
    <rect x="16" y="37" width="8" height="7" fill="#bde0fe" stroke="#333" stroke-width="1.5"/>
    <rect x="28" y="37" width="6" height="9" fill="#8b4a2b" stroke="#333" stroke-width="1.5"/>
    <rect x="80" y="30" width="26" height="16" fill="#f4a261" ${S}/>
    <polygon points="78,32 93,20 108,32" fill="#c0392b" ${S}/>
    <text x="93" y="42" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="7" fill="#fff">ŠKOLA</text>
    <rect x="22" y="72" width="5" height="12" fill="#8b4a2b" ${S}/>
    <circle cx="24.5" cy="66" r="10" fill="#6cc06a" ${S}/>
    <rect x="34" y="76" width="14" height="4" fill="#b5722f" ${S}/>
    <path d="M36 80 V85 M46 80 V85" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <rect x="70" y="72" width="24" height="12" rx="3" fill="#e63946" ${S}/>
    <rect x="73" y="75" width="6" height="5" fill="#bde0fe"/><rect x="82" y="75" width="6" height="5" fill="#bde0fe"/>
    <circle cx="76" cy="85" r="3" fill="#333"/><circle cx="88" cy="85" r="3" fill="#333"/>
    <path d="M102 78 V67" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="94" y="56" width="16" height="11" rx="2" fill="#f9c74f" ${S}/>
    <text x="102" y="65" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="7" fill="#333">BUS</text>
    <rect x="48" y="46" width="24" height="22" fill="#ffe08a" ${S}/>
    <polygon points="44,48 60,32 76,48" fill="#c0392b" ${S}/>
    <rect x="66" y="34" width="5" height="8" fill="#7a7f87" ${S}/>
    <rect x="56" y="56" width="8" height="12" fill="#8b4a2b" ${S}/>
    <rect x="50" y="50" width="5" height="5" fill="#bde0fe"/><rect x="65" y="50" width="5" height="5" fill="#bde0fe"/>` },

  { cs: 'zahraničí', en: 'abroad, foreign countries', pattern: 'stavení (sg. only)', gender: 'n', level: 'B1', official: null, topic: 'travel', svg: `
    <path d="M10 96 V50" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="12" y="50" width="30" height="20" fill="#fff" ${S}/>
    <rect x="12" y="60" width="30" height="10" fill="#e63946"/>
    <polygon points="12,50 27,60 12,70" fill="#1d2a5a" ${S}/>
    <rect x="12" y="50" width="30" height="20" fill="none" ${S}/>
    <circle cx="96" cy="26" r="17" fill="#4fa3e3" ${S}/>
    <path d="M86 20 Q92 12 100 18 Q98 26 90 28 Q83 26 86 20 Z" fill="#6cc06a"/>
    <path d="M100 32 Q108 30 108 36 Q104 42 98 40 Z" fill="#6cc06a"/>
    <ellipse cx="96" cy="26" rx="7" ry="17" fill="none" stroke="#333" stroke-width="1.5"/>
    <path d="M82 60 V96 M102 60 V96 M92 76 V96" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="84" y="58" width="14" height="4" fill="#333"/><rect x="84" y="62" width="14" height="4" fill="#e63946"/><rect x="84" y="66" width="14" height="4" fill="#f9c74f"/>
    <rect x="84" y="58" width="14" height="12" fill="none" ${S}/>
    <rect x="104" y="58" width="5" height="12" fill="#1d2a5a"/><rect x="109" y="58" width="4" height="12" fill="#fff"/><rect x="113" y="58" width="4" height="12" fill="#e63946"/>
    <rect x="104" y="58" width="13" height="12" fill="none" ${S}/>
    <rect x="94" y="74" width="14" height="4" fill="#e63946"/><rect x="94" y="78" width="14" height="4" fill="#fff"/><rect x="94" y="82" width="14" height="4" fill="#e63946"/>
    <rect x="94" y="74" width="14" height="12" fill="none" ${S}/>
    <path d="M18 44 L28 42 M14 38 L26 34" fill="none" stroke="#9aa0a8" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="36,42 32,30 40,30 42,40" fill="#e63946" ${S}/>
    <polygon points="50,38 62,36 58,52 46,52" fill="#e63946" ${S}/>
    <ellipse cx="54" cy="36" rx="22" ry="6" transform="rotate(-20 54 36)" fill="#fff" ${S}/>
    <circle cx="50" cy="37" r="2" fill="#4fa3e3"/><circle cx="58" cy="34" r="2" fill="#4fa3e3"/><circle cx="66" cy="31" r="2" fill="#4fa3e3"/>` },

  { cs: 'údolí', en: 'valley', pattern: 'stavení', gender: 'n', level: 'B1', official: null, topic: 'travel', svg: `
    <circle cx="60" cy="18" r="8" fill="#f9c74f" ${S}/>
    <polygon points="4,80 4,22 30,4 66,72" fill="#3f9d55" ${S}/>
    <polygon points="21,16 30,4 39,16 35,14 30,18 25,14" fill="#fff" ${S}/>
    <polygon points="116,80 116,22 90,4 54,72" fill="#3f9d55" ${S}/>
    <polygon points="81,16 90,4 99,16 95,14 90,18 85,14" fill="#fff" ${S}/>
    <path d="M4 96 V78 Q30 66 60 68 Q90 66 116 78 V96 Z" fill="#8fd18a" ${S}/>
    <path d="M60 66 Q52 76 60 84 Q68 90 62 96" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M60 66 Q52 76 60 84 Q68 90 62 96" fill="none" stroke="#4fa3e3" stroke-width="5" stroke-linecap="round"/>
    <rect x="30" y="80" width="12" height="10" fill="#ffe08a" ${S}/>
    <polygon points="28,81 36,74 44,81" fill="#c0392b" ${S}/>
    <rect x="82" y="80" width="12" height="10" fill="#ffe08a" ${S}/>
    <polygon points="80,81 88,74 96,81" fill="#c0392b" ${S}/>
    <rect x="72" y="78" width="8" height="12" fill="#fff" ${S}/>
    <polygon points="70,79 76,68 82,79" fill="#c0392b" ${S}/>` },

  { cs: 'pobřeží', en: 'coast, shore', pattern: 'stavení', gender: 'n', level: 'B1', official: null, topic: 'travel', svg: `
    <rect x="4" y="4" width="112" height="92" fill="#4fa3e3" ${S}/>
    <path d="M4 4 H58 Q72 30 54 50 Q40 70 62 96 H4 Z" fill="#ffe08a" ${S}/>
    <path d="M4 4 H48 Q60 28 44 48 Q32 68 50 96 H4 Z" fill="#6cc06a" ${S}/>
    <path d="M12 4 Q30 40 20 60 Q12 80 30 96" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M12 4 Q30 40 20 60 Q12 80 30 96" fill="none" stroke="#9aa0a8" stroke-width="4"/>
    <path d="M12 4 Q30 40 20 60 Q12 80 30 96" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="46" y="40" width="10" height="24" fill="#fff" ${S}/>
    <rect x="46" y="46" width="10" height="5" fill="#e63946"/><rect x="46" y="56" width="10" height="5" fill="#e63946"/>
    <rect x="44" y="36" width="14" height="5" fill="#333"/>
    <circle cx="51" cy="32" r="4" fill="#f9c74f" ${S}/>
    <path d="M58 30 L70 24 M58 34 L72 34" fill="none" stroke="#f9c74f" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M74 14 q4 -4 8 0 q4 4 8 0 M96 40 q4 -4 8 0 q4 4 8 0 M64 62 q4 -4 8 0 q4 4 8 0 M98 92 q4 -4 8 0 q4 4 8 0 M72 88 q4 -4 8 0" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M91 74 V52" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <polygon points="94,52 94,72 108,72" fill="#fff" ${S}/>
    <path d="M78 74 H104 L98 82 H84 Z" fill="#e63946" ${S}/>` },

  { cs: 'palivo', en: 'fuel', pattern: 'město', gender: 'n', level: 'B1', official: null, topic: 'travel', svg: `
    <path d="M18 30 V20 H38 V30" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 30 V20 H38 V30" fill="none" stroke="#c0392b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="42" y="20" width="8" height="12" rx="2" fill="#7a7f87" ${S}/>
    <rect x="6" y="30" width="44" height="56" rx="5" fill="#e63946" ${S}/>
    <path d="M28 44 C 37 55, 39 63, 28 67 C 17 63, 19 55, 28 44 Z" fill="#f9c74f" ${S}/>
    <path d="M94 46 Q84 24 100 8" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <path d="M56 88 V76 H62 L72 62 H98 L108 76 H114 V88 Z" fill="#4fa3e3" ${S}/>
    <polygon points="74,64 84,64 84,74 66,74" fill="#bde0fe" ${S}/>
    <polygon points="88,64 96,64 104,74 88,74" fill="#bde0fe" ${S}/>
    <circle cx="68" cy="88" r="7" fill="#333" ${S}/><circle cx="68" cy="88" r="3" fill="#9aa0a8"/>
    <circle cx="102" cy="88" r="7" fill="#333" ${S}/><circle cx="102" cy="88" r="3" fill="#9aa0a8"/>
    <rect x="103" y="74" width="8" height="6" fill="#333"/>
    <rect x="96" y="66" width="7" height="6" fill="#4fa3e3" ${S} transform="rotate(-60 103 74)"/>
    <rect x="90" y="42" width="22" height="12" rx="3" fill="#555" ${S}/>
    <rect x="94" y="54" width="6" height="10" rx="2" fill="#333"/>
    <rect x="104" y="54" width="6" height="22" fill="#9aa0a8" ${S}/>` }
);
