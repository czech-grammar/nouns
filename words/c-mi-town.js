// Completion deck: town, transport, leisure (masculine inanimate)
WORDS.push(
  { cs: 'balík', en: 'parcel', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'shopping', svg: `
    <rect x="12" y="26" width="96" height="68" rx="3" fill="#b5722f" ${S}/>
    <path d="M12 42 H108" stroke="#8b4a2b" stroke-width="2.5"/>
    <path d="M60 26 V94 M12 60 H108" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M60 26 V94 M12 60 H108" stroke="#ffe08a" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="50" cy="55" rx="8" ry="5" transform="rotate(-30 50 55)" fill="#ffe08a" ${S}/>
    <ellipse cx="70" cy="55" rx="8" ry="5" transform="rotate(30 70 55)" fill="#ffe08a" ${S}/>
    <circle cx="60" cy="60" r="4" fill="#f9c74f" ${S}/>
    <rect x="20" y="68" width="30" height="18" fill="#fff" ${S}/>
    <path d="M25 74 H45 M25 80 H39" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round"/>
    <rect x="82" y="30" width="18" height="22" fill="#e63946" ${S}/>
    <rect x="86" y="34" width="10" height="14" fill="#ffe08a"/>
    <circle cx="91" cy="41" r="3" fill="#e63946"/>` },

  { cs: 'balon', en: 'balloon, ball', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'leisure', svg: `
    <path d="M30 56 Q44 80 60 94 M60 52 V94 M90 56 Q76 80 60 94" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="30" cy="34" rx="18" ry="22" fill="#e63946" ${S}/>
    <path d="M26 55 L30 60 L34 55 Z" fill="#c0392b" ${S}/>
    <ellipse cx="23" cy="24" rx="4" ry="6" transform="rotate(20 23 24)" fill="#fff" opacity="0.6"/>
    <ellipse cx="90" cy="34" rx="18" ry="22" fill="#f9c74f" ${S}/>
    <path d="M86 55 L90 60 L94 55 Z" fill="#f4a261" ${S}/>
    <ellipse cx="83" cy="24" rx="4" ry="6" transform="rotate(20 83 24)" fill="#fff" opacity="0.6"/>
    <ellipse cx="60" cy="28" rx="19" ry="24" fill="#4fa3e3" ${S}/>
    <path d="M56 51 L60 56 L64 51 Z" fill="#1d2a5a" ${S}/>
    <ellipse cx="53" cy="17" rx="4" ry="6" transform="rotate(20 53 17)" fill="#fff" opacity="0.6"/>` },

  { cs: 'basketbal', en: 'basketball', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'leisure', svg: `
    <rect x="24" y="4" width="72" height="46" rx="3" fill="#fff" ${S}/>
    <rect x="44" y="22" width="32" height="24" fill="none" stroke="#e63946" stroke-width="3"/>
    <path d="M38 52 L44 90 M46 52 L50 92 M54 52 L56 94 M60 52 V94 M66 52 L64 94 M74 52 L70 92 M82 52 L76 90" fill="none" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 62 Q60 70 80 62 M42 74 Q60 82 78 74 M44 86 Q60 92 76 86" fill="none" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round"/>
    <circle cx="60" cy="62" r="16" fill="#f4a261" ${S}/>
    <path d="M44 62 H76 M60 46 V78 M49 51 Q60 62 49 73 M71 51 Q60 62 71 73" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="60" cy="52" rx="24" ry="7" fill="none" stroke="#333" stroke-width="8"/>
    <ellipse cx="60" cy="52" rx="24" ry="7" fill="none" stroke="#e63946" stroke-width="4"/>` },

  { cs: 'volejbal', en: 'volleyball', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'leisure', svg: `
    <rect x="10" y="48" width="100" height="28" fill="#fff" ${S}/>
    <path d="M22 48 V76 M34 48 V76 M46 48 V76 M58 48 V76 M70 48 V76 M82 48 V76 M94 48 V76 M10 55 H110 M10 62 H110 M10 69 H110" fill="none" stroke="#9aa0a8" stroke-width="1.5"/>
    <rect x="10" y="44" width="100" height="6" fill="#e63946" ${S}/>
    <rect x="6" y="40" width="6" height="56" fill="#7a7f87" ${S}/>
    <rect x="108" y="40" width="6" height="56" fill="#7a7f87" ${S}/>
    <path d="M30 96 L44 46 M46 96 L60 48" fill="none" stroke="#333" stroke-width="11" stroke-linecap="round"/>
    <path d="M30 96 L44 46 M46 96 L60 48" fill="none" stroke="#ffd8b8" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="45" cy="40" rx="6" ry="8" transform="rotate(15 45 40)" fill="#ffd8b8" ${S}/>
    <ellipse cx="61" cy="42" rx="6" ry="8" transform="rotate(-15 61 42)" fill="#ffd8b8" ${S}/>
    <path d="M41 34 L43 39 M45 32 L46 38 M49 33 L49 38 M57 35 L57 40 M61 34 L62 40 M65 36 L63 41" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="78" cy="24" r="19" fill="#fff" ${S}/>
    <path d="M59.5 20 Q78 6 96.5 20 L96.9 26 Q78 12 59.1 26 Z" fill="#4fa3e3" ${S}/>
    <path d="M62 36 Q78 42 94 36 L92 40 Q78 46 64 40 Z" fill="#f9c74f" ${S}/>
    <path d="M60 30 Q78 20 96 30" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <circle cx="78" cy="24" r="19" fill="none" ${S}/>` },

  { cs: 'bazén', en: 'swimming pool', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'leisure', svg: `
    <path d="M4 26 L60 6 L116 26 Z" fill="#c0392b" ${S}/>
    <rect x="4" y="26" width="112" height="20" fill="#dff3ff" ${S}/>
    <path d="M24 26 V46 M44 26 V46 M64 26 V46 M84 26 V46 M104 26 V46" fill="none" stroke="#bde0fe" stroke-width="1.5"/>
    <rect x="4" y="44" width="112" height="8" fill="#ddd" ${S}/>
    <rect x="4" y="50" width="112" height="46" fill="#4fa3e3" ${S}/>
    <path d="M4 64 H116 M4 80 H116" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <path d="M4 64 H116 M4 80 H116" fill="none" stroke="#e63946" stroke-width="3" stroke-dasharray="6 6"/>
    <path d="M4 64 H116 M4 80 H116" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6" stroke-dashoffset="6"/>
    <path d="M94 76 V36 Q94 30 100 30 Q106 30 106 36 V76" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M94 76 V36 Q94 30 100 30 Q106 30 106 36 V76" fill="none" stroke="#ddd" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M94 48 H106 M94 58 H106 M94 68 H106" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M94 48 H106 M94 58 H106 M94 68 H106" fill="none" stroke="#ddd" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M12 91 q4 -3 8 0 t8 0 M36 92 q4 -3 8 0 t8 0 M62 91 q4 -3 8 0 t8 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'cirkus', en: 'circus', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'leisure', svg: `
    <path d="M60 16 V4" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M60 4 H72 L68 8 L72 12 H60 Z" fill="#f9c74f" ${S}/>
    <path d="M6 58 Q30 30 60 16 Q90 30 114 58 Z" fill="#fff" ${S}/>
    <path d="M60 16 Q52 36 30 58 H50 Q56 36 60 16 Z" fill="#e63946" ${S}/>
    <path d="M60 16 Q68 36 90 58 H70 Q64 36 60 16 Z" fill="#e63946" ${S}/>
    <path d="M6 58 Q14 50 22 44 Q20 52 24 58 Z M114 58 Q106 50 98 44 Q100 52 96 58 Z" fill="#e63946" ${S}/>
    <path d="M14 58 H106 L110 94 H10 Z" fill="#fff" ${S}/>
    <path d="M26 58 H38 L37 94 H25 Z M58 58 H62 L62 94 H58 Z M82 58 H94 L95 94 H83 Z" fill="#e63946"/>
    <path d="M14 58 H106 L110 94 H10 Z" fill="none" ${S}/>
    <path d="M48 94 V72 Q60 62 72 72 V94 Z" fill="#1d2a5a" ${S}/>
    <path d="M10 58 V40 M110 58 V40" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M10 40 H20 L17 44 L20 48 H10 Z M110 40 H100 L103 44 L100 48 H110 Z" fill="#4fa3e3" ${S}/>` },

  { cs: 'stadion', en: 'stadium', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'leisure', svg: `
    <path d="M24 30 L12 12 M96 30 L108 12 M24 74 L12 90 M96 74 L108 90" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="4" y="4" width="16" height="10" rx="2" fill="#f9c74f" ${S}/>
    <rect x="100" y="4" width="16" height="10" rx="2" fill="#f9c74f" ${S}/>
    <rect x="4" y="86" width="16" height="10" rx="2" fill="#f9c74f" ${S}/>
    <rect x="100" y="86" width="16" height="10" rx="2" fill="#f9c74f" ${S}/>
    <ellipse cx="60" cy="52" rx="50" ry="32" fill="#ddd" ${S}/>
    <ellipse cx="60" cy="52" rx="42" ry="26" fill="#e63946" ${S}/>
    <ellipse cx="60" cy="52" rx="36" ry="21" fill="#4fa3e3" ${S}/>
    <path d="M10 52 H110 M60 20 V84 M25 28 L95 76 M95 28 L25 76" fill="none" stroke="#333" stroke-width="1.5"/>
    <rect x="34" y="40" width="52" height="24" fill="#6cc06a" ${S}/>
    <path d="M60 40 V64 M34 46 H40 V58 H34 M86 46 H80 V58 H86" fill="none" stroke="#fff" stroke-width="2"/>
    <circle cx="60" cy="52" r="5" fill="none" stroke="#fff" stroke-width="2"/>` },

  { cs: 'motor', en: 'engine', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'town', svg: `
    <path d="M32 16 V32 M52 16 V32 M72 16 V32" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M32 16 V32 M52 16 V32 M72 16 V32" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 14 H36 M48 14 H56 M68 14 H76" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M32 6 V14 M52 6 V14 M72 6 V14" stroke="#f9c74f" stroke-width="4" stroke-linecap="round"/>
    <path d="M96 40 H108 V26" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M96 40 H108 V26" fill="none" stroke="#7a7f87" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="22" y="30" width="60" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="18" y="46" width="80" height="42" rx="5" fill="#9aa0a8" ${S}/>
    <path d="M26 56 H90 M26 66 H90 M26 76 H90" fill="none" stroke="#7a7f87" stroke-width="3" stroke-linecap="round"/>
    <path d="M8 54 V86" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M8 54 V86" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <circle cx="14" cy="54" r="8" fill="#7a7f87" ${S}/>
    <circle cx="14" cy="86" r="8" fill="#7a7f87" ${S}/>
    <circle cx="14" cy="54" r="2.5" fill="#333"/><circle cx="14" cy="86" r="2.5" fill="#333"/>
    <path d="M22 54 V86" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="90" r="3" fill="#333"/><circle cx="86" cy="90" r="3" fill="#333"/>` },

  { cs: 'rychlík', en: 'express train', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'town', svg: `
    <path d="M4 40 H24 M8 52 H20 M4 64 H26" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M4 90 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 90 V96 M28 90 V96 M44 90 V96 M60 90 V96 M76 90 V96 M92 90 V96 M108 90 V96" stroke="#8b4a2b" stroke-width="3" stroke-linecap="round"/>
    <path d="M30 78 V32 H84 Q108 32 116 60 Q116 78 106 78 Z" fill="#fff" ${S}/>
    <path d="M30 60 H108 Q114 60 112 68 Q110 74 104 74 H30 Z" fill="#e63946" ${S}/>
    <rect x="36" y="38" width="12" height="14" rx="2" fill="#1d2a5a" ${S}/><rect x="54" y="38" width="12" height="14" rx="2" fill="#1d2a5a" ${S}/><rect x="72" y="38" width="12" height="14" rx="2" fill="#1d2a5a" ${S}/>
    <path d="M90 38 Q104 40 110 56 H90 Z" fill="#1d2a5a" ${S}/>
    <circle cx="112" cy="62" r="3" fill="#f9c74f" stroke="#333" stroke-width="1.5"/>
    <circle cx="44" cy="82" r="6" fill="#7a7f87" ${S}/><circle cx="60" cy="82" r="6" fill="#7a7f87" ${S}/><circle cx="88" cy="82" r="6" fill="#7a7f87" ${S}/><circle cx="104" cy="82" r="6" fill="#7a7f87" ${S}/>` },

  { cs: 'vagon', en: 'carriage, wagon', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'town', svg: `
    <path d="M4 90 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 90 V96 M28 90 V96 M44 90 V96 M60 90 V96 M76 90 V96 M92 90 V96 M108 90 V96" stroke="#8b4a2b" stroke-width="3" stroke-linecap="round"/>
    <path d="M6 66 H14 M106 66 H114" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <rect x="14" y="26" width="92" height="52" rx="5" fill="#3f9d55" ${S}/>
    <rect x="14" y="58" width="92" height="7" fill="#ffe08a"/>
    <rect x="18" y="20" width="84" height="8" rx="3" fill="#7a7f87" ${S}/>
    <rect x="20" y="34" width="12" height="14" rx="2" fill="#bde0fe" ${S}/><rect x="36" y="34" width="12" height="14" rx="2" fill="#bde0fe" ${S}/>
    <rect x="72" y="34" width="12" height="14" rx="2" fill="#bde0fe" ${S}/><rect x="88" y="34" width="12" height="14" rx="2" fill="#bde0fe" ${S}/>
    <rect x="52" y="32" width="16" height="46" rx="2" fill="#1b6e64" ${S}/>
    <rect x="55" y="36" width="10" height="12" rx="1" fill="#bde0fe" ${S}/>
    <path d="M60 52 V78" stroke="#333" stroke-width="2"/>
    <circle cx="28" cy="84" r="6" fill="#7a7f87" ${S}/><circle cx="42" cy="84" r="6" fill="#7a7f87" ${S}/>
    <circle cx="78" cy="84" r="6" fill="#7a7f87" ${S}/><circle cx="92" cy="84" r="6" fill="#7a7f87" ${S}/>` },

  { cs: 'trolejbus', en: 'trolleybus', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'town', svg: `
    <path d="M4 10 H116 M4 16 H116" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M78 40 L50 11 M84 40 L56 17" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="6" y="40" width="108" height="42" rx="7" fill="#e63946" ${S}/>
    <rect x="6" y="66" width="108" height="8" fill="#ffe08a"/>
    <rect x="12" y="46" width="14" height="14" rx="2" fill="#bde0fe" ${S}/>
    <rect x="30" y="46" width="14" height="14" rx="2" fill="#bde0fe" ${S}/>
    <rect x="48" y="46" width="14" height="14" rx="2" fill="#bde0fe" ${S}/>
    <rect x="66" y="46" width="14" height="14" rx="2" fill="#bde0fe" ${S}/>
    <rect x="90" y="46" width="18" height="30" rx="2" fill="#bde0fe" ${S}/>
    <path d="M99 46 V76" stroke="#333" stroke-width="2"/>
    <rect x="108" y="62" width="5" height="8" rx="2" fill="#fff" ${S}/>
    <circle cx="28" cy="84" r="9" fill="#333" ${S}/><circle cx="28" cy="84" r="3.5" fill="#9aa0a8"/>
    <circle cx="96" cy="84" r="9" fill="#333" ${S}/><circle cx="96" cy="84" r="3.5" fill="#9aa0a8"/>
    <path d="M4 96 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'taxík', en: 'taxi', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'town', svg: `
    <path d="M4 96 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="44" y="12" width="32" height="14" rx="3" fill="#f9c74f" ${S}/>
    <text x="60" y="23" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">TAXI</text>
    <path d="M28 54 L40 30 H84 L98 54 Z" fill="#f9c74f" ${S}/>
    <rect x="8" y="52" width="104" height="30" rx="7" fill="#f9c74f" ${S}/>
    <path d="M44 34 H60 V52 H36 Z M64 34 H80 L90 52 H64 Z" fill="#bde0fe" ${S}/>
    <path d="M8 64 H112" stroke="#333" stroke-width="3"/>
    <path d="M8 60 H112" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/>
    <rect x="104" y="56" width="7" height="8" rx="2" fill="#fff" ${S}/>
    <rect x="9" y="56" width="7" height="8" rx="2" fill="#e63946" ${S}/>
    <circle cx="32" cy="82" r="10" fill="#333" ${S}/><circle cx="32" cy="82" r="4" fill="#9aa0a8"/>
    <circle cx="88" cy="82" r="10" fill="#333" ${S}/><circle cx="88" cy="82" r="4" fill="#9aa0a8"/>` },

  { cs: 'odjezd', en: 'departure', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'town', svg: `
    <rect x="8" y="4" width="104" height="44" rx="3" fill="#1d2a5a" ${S}/>
    <rect x="8" y="4" width="104" height="16" rx="3" fill="#f9c74f" ${S}/>
    <text x="60" y="16.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#333">ODJEZD</text>
    <text x="16" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#f9c74f">10:15</text>
    <path d="M50 31 H100" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <text x="16" y="45" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#f9c74f">10:40</text>
    <path d="M50 42 H84" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <path d="M4 92 H116" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M6 64 H16 M4 72 H18" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M22 84 V58 H58 Q70 58 74 72 Q76 84 68 84 Z" fill="#e63946" ${S}/>
    <rect x="28" y="63" width="10" height="9" rx="1" fill="#bde0fe" ${S}/><rect x="44" y="63" width="10" height="9" rx="1" fill="#bde0fe" ${S}/>
    <path d="M60 63 Q68 64 70 72 H60 Z" fill="#bde0fe" ${S}/>
    <circle cx="32" cy="87" r="5" fill="#7a7f87" ${S}/><circle cx="46" cy="87" r="5" fill="#7a7f87" ${S}/><circle cx="64" cy="87" r="5" fill="#7a7f87" ${S}/>
    <path d="M82 72 H100 V62 L114 74 L100 86 V76 H82 Z" fill="#6cc06a" ${S}/>` },

  { cs: 'vchod', en: 'entrance', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'town', svg: `
    <rect x="22" y="6" width="76" height="18" rx="3" fill="#3f9d55" ${S}/>
    <text x="60" y="20" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#fff">VCHOD</text>
    <rect x="44" y="30" width="46" height="66" fill="#8b4a2b" ${S}/>
    <rect x="50" y="36" width="34" height="24" fill="#b5722f" ${S}/>
    <rect x="50" y="66" width="34" height="24" fill="#b5722f" ${S}/>
    <circle cx="54" cy="63" r="3" fill="#f9c74f" ${S}/>
    <path d="M90 30 L104 24 V96 L90 96 Z" fill="#5a3a22" ${S}/>
    <path d="M10 63 H26" stroke="#333" stroke-width="12" stroke-linecap="round"/>
    <path d="M10 63 H26" stroke="#3f9d55" stroke-width="7" stroke-linecap="round"/>
    <path d="M26 50 L42 63 L26 76 Z" fill="#3f9d55" ${S}/>` },

  { cs: 'výtah', en: 'lift', pattern: 'hrad', gender: 'mi', level: 'A1', official: 'A1', topic: 'home', svg: `
    <rect x="18" y="4" width="76" height="92" fill="#7a7f87" ${S}/>
    <rect x="26" y="12" width="60" height="84" fill="#ddd" ${S}/>
    <rect x="26" y="12" width="8" height="84" fill="#9aa0a8" ${S}/>
    <rect x="78" y="12" width="8" height="84" fill="#9aa0a8" ${S}/>
    <path d="M50 74 L48 96 M62 74 L64 96" stroke="#1d2a5a" stroke-width="6" stroke-linecap="round"/>
    <path d="M42 50 L36 70 M70 50 L76 70" stroke="#ffd8b8" stroke-width="5" stroke-linecap="round"/>
    <path d="M46 46 H66 L72 76 H40 Z" fill="#e63946" ${S}/>
    <circle cx="56" cy="36" r="10" fill="#ffd8b8" ${S}/>
    <path d="M46 36 Q46 26 56 26 Q66 26 66 36 Q61 31 56 31 Q51 31 46 36 Z" fill="#3b2a1a" ${S}/>
    <circle cx="53" cy="37" r="1.5" fill="#333"/><circle cx="59" cy="37" r="1.5" fill="#333"/>
    <path d="M52 41 Q56 44 60 41" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="98" y="30" width="18" height="40" rx="3" fill="#9aa0a8" ${S}/>
    <circle cx="107" cy="41" r="5" fill="#fff" ${S}/>
    <path d="M104 43 L107 38 L110 43 Z" fill="#333"/>
    <circle cx="107" cy="59" r="5" fill="#fff" ${S}/>
    <path d="M104 57 L107 62 L110 57 Z" fill="#333"/>` }
);
