// A2 deck: home, food, shopping (neuter)
WORDS.push(
  { cs: 'tele', en: 'calf', pattern: 'kuře', gender: 'n', level: 'A2', official: null, topic: 'animals', svg: `
    <path d="M78 4 H116 V24 Q98 32 78 24 Z" fill="#fff" ${S}/>
    <path d="M96 4 H116 V16 Q106 20 96 12 Z" fill="#333"/>
    <ellipse cx="98" cy="30" rx="9" ry="7" fill="#ffb4a2" ${S}/>
    <rect x="82" y="22" width="12" height="62" fill="#fff" ${S}/>
    <rect x="102" y="22" width="12" height="62" fill="#fff" ${S}/>
    <path d="M82 40 Q88 44 94 40 V52 Q88 56 82 52 Z" fill="#333"/>
    <path d="M102 58 Q108 62 114 58 V68 Q108 72 102 68 Z" fill="#333"/>
    <rect x="80" y="84" width="16" height="10" rx="2" fill="#333"/>
    <rect x="100" y="84" width="16" height="10" rx="2" fill="#333"/>
    <path d="M70 52 Q80 46 78 38" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M30 70 L26 80 L30 92 M40 70 L38 82 L42 92 M54 70 L60 80 L56 92 M64 70 L62 82 L68 92" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 70 L26 80 L30 92 M40 70 L38 82 L42 92 M54 70 L60 80 L56 92 M64 70 L62 82 L68 92" fill="none" stroke="#b5722f" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="46" cy="56" rx="26" ry="16" fill="#b5722f" ${S}/>
    <path d="M44 42 Q56 40 62 50 Q58 62 46 60 Q40 52 44 42 Z" fill="#fff"/>
    <ellipse cx="10" cy="36" rx="4" ry="7" transform="rotate(-30 10 36)" fill="#b5722f" ${S}/>
    <ellipse cx="34" cy="30" rx="4" ry="7" transform="rotate(30 34 30)" fill="#b5722f" ${S}/>
    <circle cx="22" cy="38" r="14" fill="#b5722f" ${S}/>
    <path d="M18 26 Q22 24 26 26 L24 40 Q22 42 20 40 Z" fill="#fff"/>
    <ellipse cx="20" cy="47" rx="9" ry="5" fill="#ffb4a2" ${S}/>
    <circle cx="17" cy="47" r="1.3" fill="#333"/><circle cx="23" cy="47" r="1.3" fill="#333"/>
    <circle cx="16" cy="37" r="2" fill="#333"/><circle cx="29" cy="37" r="2" fill="#333"/>` },

  { cs: 'zoo', en: 'zoo', pattern: 'indeclinable', gender: 'n', level: 'A2', official: 'A2', topic: 'animals', svg: `
    <rect x="30" y="50" width="12" height="46" fill="#f9c74f" ${S}/>
    <ellipse cx="34" cy="46" rx="14" ry="10" fill="#f9c74f" ${S}/>
    <path d="M29 37 L27 28 M40 37 L42 28" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <circle cx="27" cy="27" r="3" fill="#8b4a2b" ${S}/><circle cx="42" cy="27" r="3" fill="#8b4a2b" ${S}/>
    <circle cx="33" cy="60" r="3" fill="#b5722f"/><circle cx="38" cy="72" r="3" fill="#b5722f"/><circle cx="33" cy="84" r="3" fill="#b5722f"/>
    <circle cx="24" cy="44" r="2" fill="#333"/>
    <ellipse cx="88" cy="80" rx="16" ry="14" fill="#9aa0a8" ${S}/>
    <ellipse cx="95" cy="52" rx="8" ry="13" fill="#7a7f87" ${S}/>
    <circle cx="80" cy="50" r="17" fill="#9aa0a8" ${S}/>
    <path d="M72 62 Q62 76 70 90" fill="none" stroke="#333" stroke-width="11" stroke-linecap="round"/>
    <path d="M72 62 Q62 76 70 90" fill="none" stroke="#9aa0a8" stroke-width="7" stroke-linecap="round"/>
    <path d="M78 64 Q76 70 80 72" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <path d="M78 64 Q76 70 80 72" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <circle cx="74" cy="47" r="2.2" fill="#333"/>
    <rect x="4" y="30" width="14" height="66" fill="#9aa0a8" ${S}/>
    <rect x="102" y="30" width="14" height="66" fill="#9aa0a8" ${S}/>
    <path d="M20 62 H100 M20 90 H100" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M32 62 V90 M46 62 V90 M60 62 V90 M74 62 V90 M88 62 V90" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="4" y="6" width="112" height="22" rx="4" fill="#3f9d55" ${S}/>
    <text x="60" y="23" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="17" fill="#fff">ZOO</text>` },

  { cs: 'bydlení', en: 'housing, home', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'home', svg: `
    <path d="M4 96 H116" ${S}/>
    <rect x="8" y="52" width="40" height="44" fill="#ffe08a" ${S}/>
    <path d="M4 54 L28 24 L52 54 Z" fill="#c0392b" ${S}/>
    <rect x="36" y="30" width="7" height="12" fill="#7a7f87" ${S}/>
    <rect x="12" y="60" width="11" height="11" fill="#bde0fe" ${S}/>
    <rect x="22" y="74" width="12" height="22" fill="#8b4a2b" ${S}/>
    <rect x="66" y="22" width="48" height="74" fill="#ddd" ${S}/>
    <g fill="#4fa3e3" stroke="#333" stroke-width="1.5">
      <rect x="71" y="28" width="9" height="9"/><rect x="86" y="28" width="9" height="9"/><rect x="101" y="28" width="9" height="9"/>
      <rect x="71" y="43" width="9" height="9"/><rect x="86" y="43" width="9" height="9"/><rect x="101" y="43" width="9" height="9"/>
      <rect x="71" y="58" width="9" height="9"/><rect x="86" y="58" width="9" height="9"/><rect x="101" y="58" width="9" height="9"/>
      <rect x="71" y="73" width="9" height="9"/><rect x="101" y="73" width="9" height="9"/>
    </g>
    <rect x="84" y="76" width="12" height="20" fill="#1d2a5a" ${S}/>
    <path d="M58 22 C58 14 44 12 44 22 C44 28 58 34 58 34 C58 34 72 28 72 22 C72 12 58 14 58 22 Z" fill="#e63946" ${S}/>
    <circle cx="54" cy="46" r="6" fill="#f9c74f" ${S}/>
    <path d="M59 46 H68 M64 46 V51 M68 46 V51" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M59 46 H68 M64 46 V51 M68 46 V51" fill="none" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'lůžko', en: 'bed, berth', pattern: 'město', gender: 'n', level: 'A2', official: 'A2', topic: 'home', svg: `
    <path d="M4 96 H116" ${S}/>
    <rect x="76" y="6" width="38" height="28" rx="3" fill="#1d2a5a" ${S}/>
    <circle cx="102" cy="16" r="5" fill="#f9c74f"/>
    <circle cx="86" cy="14" r="1.5" fill="#fff"/><circle cx="92" cy="24" r="1.5" fill="#fff"/><circle cx="106" cy="28" r="1.5" fill="#fff"/>
    <path d="M78 26 Q88 18 96 26 Q104 20 112 26 V32 H78 Z" fill="#3f9d55"/>
    <rect x="6" y="14" width="6" height="82" fill="#7a7f87" ${S}/>
    <rect x="6" y="44" width="66" height="7" fill="#7a7f87" ${S}/>
    <rect x="12" y="32" width="58" height="12" rx="3" fill="#bde0fe" ${S}/>
    <rect x="30" y="32" width="40" height="12" rx="3" fill="#e63946" ${S}/>
    <rect x="14" y="34" width="14" height="8" rx="2" fill="#fff" ${S}/>
    <rect x="6" y="84" width="66" height="7" fill="#7a7f87" ${S}/>
    <rect x="12" y="72" width="58" height="12" rx="3" fill="#bde0fe" ${S}/>
    <rect x="30" y="72" width="40" height="12" rx="3" fill="#4fa3e3" ${S}/>
    <rect x="14" y="74" width="14" height="8" rx="2" fill="#fff" ${S}/>
    <path d="M80 40 V96 M92 40 V96" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <path d="M80 48 H92 M80 60 H92 M80 72 H92 M80 84 H92" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M80 48 H92 M80 60 H92 M80 72 H92 M80 84 H92" stroke="#b5722f" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'schodiště', en: 'staircase', pattern: 'moře', gender: 'n', level: 'A2', official: 'A2', topic: 'home', svg: `
    <path d="M4 96 V84 H18 V72 H32 V60 H46 V48 H60 V36 H74 V24 H116 V96 Z" fill="#b5722f" ${S}/>
    <path d="M4 84 H18 M18 72 H32 M32 60 H46 M46 48 H60 M60 36 H74 M74 24 H116" stroke="#ffe08a" stroke-width="2"/>
    <rect x="90" y="4" width="20" height="20" fill="#8b4a2b" ${S}/>
    <circle cx="106" cy="16" r="2" fill="#f9c74f"/>
    <path d="M11 84 V66 M25 72 V54 M39 60 V42 M53 48 V30 M67 36 V18 M81 24 V6" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M8 66 L81 6" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M8 66 L81 6" stroke="#8b4a2b" stroke-width="4" stroke-linecap="round"/>
    <circle cx="8" cy="66" r="4" fill="#f9c74f" ${S}/>
    <circle cx="81" cy="6" r="4" fill="#f9c74f" ${S}/>` },

  { cs: 'prádlo', en: 'laundry, underwear', pattern: 'město', gender: 'n', level: 'A2', official: 'A2', topic: 'home', svg: `
    <rect x="4" y="18" width="6" height="78" fill="#8b4a2b" ${S}/>
    <rect x="110" y="18" width="6" height="78" fill="#8b4a2b" ${S}/>
    <path d="M10 28 H110" stroke="#333" stroke-width="2.5"/>
    <path d="M16 38 L29 28 Q33 32 37 28 L50 38 L46 46 L41 43 V62 H25 V43 L20 46 Z" fill="#4fa3e3" ${S}/>
    <path d="M56 28 V48 Q56 56 62 56 H67 V50 H62 V28 Z" fill="#e63946" ${S}/>
    <path d="M70 28 V48 Q70 56 76 56 H81 V50 H76 V28 Z" fill="#e63946" ${S}/>
    <path d="M56 33 H62 M70 33 H76" stroke="#fff" stroke-width="2.5"/>
    <path d="M84 28 H108 L104 52 H98 Q97 42 96 42 Q95 42 94 52 H88 Z" fill="#fff" ${S}/>
    <circle cx="90" cy="38" r="2" fill="#4fa3e3"/><circle cx="102" cy="38" r="2" fill="#4fa3e3"/><circle cx="96" cy="34" r="2" fill="#e63946"/><circle cx="90" cy="46" r="2" fill="#e63946"/><circle cx="102" cy="46" r="2" fill="#e63946"/>
    <g fill="#f4a261" stroke="#333" stroke-width="1.5">
      <rect x="22" y="24" width="3" height="8" rx="1"/><rect x="45" y="24" width="3" height="8" rx="1"/>
      <rect x="57.5" y="24" width="3" height="8" rx="1"/><rect x="71.5" y="24" width="3" height="8" rx="1"/>
      <rect x="86" y="24" width="3" height="8" rx="1"/><rect x="104" y="24" width="3" height="8" rx="1"/>
    </g>
    <path d="M46 72 Q52 60 60 68 Q66 60 74 72 Z" fill="#6cc06a" ${S}/>
    <path d="M30 70 H90 L84 94 H36 Z" fill="#f4a261" ${S}/>
    <path d="M34 78 H86 M36 86 H84" stroke="#b5722f" stroke-width="2"/>` },

  { cs: 'koření', en: 'spice', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'food', svg: `
    <rect x="4" y="76" width="112" height="7" fill="#8b4a2b" ${S}/>
    <path d="M12 83 L18 94 M108 83 L102 94" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <rect x="12" y="24" width="18" height="8" rx="2" fill="#7a7f87" ${S}/>
    <rect x="8" y="30" width="26" height="46" rx="4" fill="#e63946" ${S}/>
    <rect x="10" y="44" width="22" height="12" fill="#fff" ${S}/>
    <text x="21" y="53" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="5.5" fill="#333">PAPRIKA</text>
    <rect x="44" y="24" width="18" height="8" rx="2" fill="#7a7f87" ${S}/>
    <rect x="40" y="30" width="26" height="46" rx="4" fill="#b5722f" ${S}/>
    <rect x="42" y="44" width="22" height="12" fill="#fff" ${S}/>
    <text x="53" y="53" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="6.5" fill="#333">KMÍN</text>
    <rect x="76" y="24" width="18" height="8" rx="2" fill="#7a7f87" ${S}/>
    <rect x="72" y="30" width="26" height="46" rx="4" fill="#333" ${S}/>
    <rect x="74" y="44" width="22" height="12" fill="#fff" ${S}/>
    <text x="85" y="53" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="6.5" fill="#333">PEPŘ</text>
    <path d="M102 76 Q98 60 108 44 Q118 58 108 76 Z" fill="#e63946" ${S}/>
    <path d="M108 44 Q110 36 116 36" fill="none" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
` },

  { cs: 'pečivo', en: 'bread and rolls', pattern: 'město', gender: 'n', level: 'A2', official: 'A2', topic: 'food', svg: `
    <path d="M22 60 Q60 4 98 60" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M22 60 Q60 4 98 60" fill="none" stroke="#b5722f" stroke-width="4.5" stroke-linecap="round"/>
    <ellipse cx="30" cy="52" rx="20" ry="12" fill="#b5722f" ${S}/>
    <path d="M20 48 L24 54 M28 46 L32 52 M36 46 L40 52" stroke="#ffe08a" stroke-width="2" stroke-linecap="round"/>
    <path d="M46 56 Q52 32 76 40 Q60 40 52 60 Z" fill="#f4a261" ${S}/>
    <path d="M56 44 L60 48 M62 42 L66 46" stroke="#ffe08a" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M56 62 Q62 38 86 46 Q70 46 62 66 Z" fill="#f4a261" ${S}/>
    <path d="M66 50 L70 54 M72 48 L76 52" stroke="#ffe08a" stroke-width="1.5" stroke-linecap="round"/>
    <ellipse cx="94" cy="50" rx="13" ry="9" fill="none" stroke="#333" stroke-width="7.5"/>
    <ellipse cx="94" cy="50" rx="13" ry="9" fill="none" stroke="#8b4a2b" stroke-width="4"/>
    <path d="M86 58 Q92 47 100 43 M102 58 Q96 47 88 43" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M86 58 Q92 47 100 43 M102 58 Q96 47 88 43" fill="none" stroke="#8b4a2b" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="84" cy="48" r="1.2" fill="#fff"/><circle cx="104" cy="48" r="1.2" fill="#fff"/><circle cx="94" cy="42" r="1.2" fill="#fff"/>
    <path d="M10 60 H110 L100 94 H20 Z" fill="#f9c74f" ${S}/>
    <path d="M14 70 H106 M17 80 H103 M20 88 H100" stroke="#b5722f" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 60 L36 94 M50 60 L54 94 M70 60 L66 94 M90 60 L84 94" stroke="#b5722f" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'vajíčko', en: 'egg (diminutive, very common)', pattern: 'město', gender: 'n', level: 'A2', official: null, topic: 'food', svg: `
    <path d="M4 96 H116" ${S}/>
    <path d="M18 92 L28 52" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M18 92 L28 52" stroke="#9aa0a8" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="30" cy="42" rx="7" ry="11" transform="rotate(14 30 42)" fill="#ddd" ${S}/>
    <ellipse cx="54" cy="46" rx="18" ry="24" fill="#f4a261" ${S}/>
    <path d="M38 34 L42 30 L46 34 L50 30 L54 34 L58 30 L62 34 L66 30 L70 34 Q68 22 54 22 Q40 22 38 34 Z" fill="#fff" ${S}/>
    <circle cx="54" cy="30" r="5" fill="#f9c74f" ${S}/>
    <path d="M34 60 H74 Q72 82 54 82 Q36 82 34 60 Z" fill="#4fa3e3" ${S}/>
    <rect x="48" y="82" width="12" height="6" fill="#4fa3e3" ${S}/>
    <rect x="38" y="88" width="32" height="8" rx="3" fill="#4fa3e3" ${S}/>
    <ellipse cx="96" cy="70" rx="17" ry="22" fill="#e63946" ${S}/>
    <path d="M81 62 Q88 56 96 62 Q104 68 112 62 M80 76 Q88 70 96 76 Q104 82 112 76" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="96" cy="69" r="3" fill="#f9c74f"/><circle cx="88" cy="84" r="2" fill="#f9c74f"/><circle cx="104" cy="84" r="2" fill="#f9c74f"/><circle cx="96" cy="53" r="2" fill="#f9c74f"/>` },

  { cs: 'občerstvení', en: 'refreshments, snack bar', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'meals', svg: `
    <rect x="14" y="28" width="92" height="40" fill="#dff3ff" ${S}/>
    <rect x="6" y="4" width="108" height="20" rx="3" fill="#e63946" ${S}/>
    <text x="60" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">OBČERSTVENÍ</text>
    <path d="M14 34 H106" stroke="#333" stroke-width="2"/>
    <rect x="52" y="40" width="20" height="8" rx="2" fill="#7a7f87" ${S}/>
    <ellipse cx="28" cy="60" rx="18" ry="8" fill="#f4a261" ${S}/>
    <ellipse cx="28" cy="55" rx="16" ry="5" fill="#c0392b" ${S}/>
    <path d="M16 55 Q22 51 28 55 Q34 59 40 55" fill="none" stroke="#f9c74f" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 42 H74 L71 66 H53 Z" fill="#4fa3e3" ${S}/>
    <rect x="48" y="38" width="28" height="6" rx="2" fill="#fff" ${S}/>
    <path d="M66 40 L70 26" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <path d="M66 40 L70 26" stroke="#e63946" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="80" y="46" width="30" height="20" rx="2" fill="#8b4a2b" ${S}/>
    <path d="M90 46 V66 M100 46 V66 M80 56 H110" stroke="#5a3a22" stroke-width="2"/>
    <rect x="6" y="66" width="108" height="30" fill="#b5722f" ${S}/>
    <path d="M6 74 H114" stroke="#8b4a2b" stroke-width="2.5"/>` },

  { cs: 'spropitné', en: 'tip', pattern: 'adjective declension (neuter)', gender: 'n', level: 'A2', official: 'A2', topic: 'meals', svg: `
    <ellipse cx="66" cy="78" rx="48" ry="16" fill="#7a7f87" ${S}/>
    <ellipse cx="66" cy="76" rx="42" ry="10" fill="#9aa0a8" ${S}/>
    <rect x="80" y="44" width="22" height="34" rx="1" transform="rotate(-8 91 61)" fill="#fff" ${S}/>
    <path d="M85 52 H97 M85 58 H95 M85 64 H97 M85 70 H93" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round" transform="rotate(-8 91 61)"/>
    <ellipse cx="50" cy="72" rx="20" ry="8" fill="#fff" ${S}/>
    <circle cx="42" cy="70" r="6" fill="#f9c74f" ${S}/>
    <circle cx="56" cy="70" r="6" fill="#f9c74f" ${S}/>
    <circle cx="49" cy="66" r="6" fill="#f9c74f" ${S}/>
    <path d="M10 8 L28 34" stroke="#333" stroke-width="13" stroke-linecap="round"/>
    <path d="M10 8 L28 34" stroke="#4fa3e3" stroke-width="8" stroke-linecap="round"/>
    <path d="M22 26 L36 46" stroke="#333" stroke-width="12" stroke-linecap="round"/>
    <path d="M22 26 L36 46" stroke="#ffd8b8" stroke-width="7" stroke-linecap="round"/>
    <circle cx="38" cy="48" r="9" fill="#ffd8b8" ${S}/>
    <path d="M44 42 L54 38 M46 52 L56 50" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M44 42 L54 38 M46 52 L56 50" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="58" cy="44" r="6" fill="#f9c74f" ${S}/>
    <path d="M62 30 L66 26 M60 26 L60 20 M52 30 L48 26" stroke="#f9c74f" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'knihkupectví', en: 'bookshop', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'shopping', svg: `
    <rect x="8" y="28" width="104" height="66" fill="#f4a261" ${S}/>
    <rect x="10" y="6" width="100" height="18" rx="3" fill="#1d2a5a" ${S}/>
    <text x="60" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10.5" fill="#fff">KNIHKUPECTVÍ</text>
    <rect x="14" y="38" width="58" height="46" fill="#dff3ff" ${S}/>
    <path d="M16 60 H70 M16 82 H70" stroke="#333" stroke-width="2"/>
    <g stroke="#333" stroke-width="1.5">
      <rect x="18" y="44" width="6" height="16" fill="#e63946"/><rect x="25" y="46" width="5" height="14" fill="#4fa3e3"/><rect x="31" y="43" width="7" height="17" fill="#6cc06a"/><rect x="39" y="47" width="5" height="13" fill="#f9c74f"/><rect x="45" y="44" width="6" height="16" fill="#5a3fbf"/><rect x="52" y="46" width="5" height="14" fill="#e94b8a"/><rect x="58" y="43" width="7" height="17" fill="#2a9d8f"/>
      <rect x="18" y="76" width="18" height="5" fill="#e63946"/><rect x="19" y="71" width="16" height="5" fill="#4fa3e3"/><rect x="20" y="66" width="14" height="5" fill="#f9c74f"/>
    </g>
    <path d="M42 68 Q52 64 62 68 V80 Q52 76 42 80 Z" fill="#fff" ${S}/>
    <path d="M52 66 V78" stroke="#333" stroke-width="1.5"/>
    <path d="M45 71 H50 M45 74 H50 M54 71 H59 M54 74 H59" stroke="#9aa0a8" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="80" y="54" width="22" height="40" fill="#8b4a2b" ${S}/>
    <circle cx="97" cy="76" r="2.5" fill="#f9c74f"/>
    <path d="M4 96 H116" ${S}/>` },

  { cs: 'papírnictví', en: 'stationery shop', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'shopping', svg: `
    <rect x="8" y="28" width="104" height="66" fill="#ffe08a" ${S}/>
    <rect x="12" y="6" width="96" height="18" rx="3" fill="#4fa3e3" ${S}/>
    <text x="60" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">PAPÍRNICTVÍ</text>
    <rect x="14" y="38" width="58" height="46" fill="#dff3ff" ${S}/>
    <path d="M16 78 H70" stroke="#333" stroke-width="2"/>
    <rect x="20" y="60" width="16" height="18" rx="1" fill="#e63946" ${S}/>
    <rect x="24" y="56" width="16" height="18" rx="1" fill="#6cc06a" ${S}/>
    <path d="M26 58 V72 M30 58 V72 M34 58 V72" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>
    <rect x="44" y="70" width="24" height="8" fill="#f9c74f" ${S}/>
    <path d="M48 70 V74 M52 70 V73 M56 70 V74 M60 70 V73 M64 70 V74" stroke="#333" stroke-width="1.2"/>
    <path d="M46 64 H62 L64 68 H44 Z" fill="#7a7f87" ${S}/>
    <path d="M47 62 L46 44 M54 62 V40 M61 62 L62 46" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M47 62 L46 44" stroke="#e63946" stroke-width="4" stroke-linecap="round"/>
    <path d="M54 62 V40" stroke="#4fa3e3" stroke-width="4" stroke-linecap="round"/>
    <path d="M61 62 L62 46" stroke="#f9c74f" stroke-width="4" stroke-linecap="round"/>
    <path d="M46 44 L45.5 41 M54 40 V37 M62 46 L62.5 43" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <rect x="80" y="54" width="22" height="40" fill="#8b4a2b" ${S}/>
    <circle cx="97" cy="76" r="2.5" fill="#f9c74f"/>
    <path d="M4 96 H116" ${S}/>` },

  { cs: 'květinářství', en: 'florist’s', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'shopping', svg: `
    <rect x="8" y="28" width="104" height="66" fill="#8fd18a" ${S}/>
    <rect x="8" y="6" width="104" height="18" rx="3" fill="#e94b8a" ${S}/>
    <text x="60" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10.5" fill="#fff">KVĚTINÁŘSTVÍ</text>
    <rect x="14" y="36" width="56" height="36" fill="#dff3ff" ${S}/>
    <path d="M26 66 L28 52 M56 66 L54 52" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
    <path d="M22 66 H34 L32 72 H24 Z" fill="#fff" ${S}/>
    <path d="M50 66 H62 L60 72 H52 Z" fill="#fff" ${S}/>
    <circle cx="22" cy="48" r="5" fill="#e63946" ${S}/><circle cx="34" cy="46" r="5" fill="#f9c74f" ${S}/><circle cx="28" cy="42" r="5" fill="#e94b8a" ${S}/>
    <circle cx="48" cy="46" r="5" fill="#5a3fbf" ${S}/><circle cx="60" cy="48" r="5" fill="#f4a261" ${S}/><circle cx="54" cy="42" r="5" fill="#fff" ${S}/>
    <rect x="80" y="54" width="22" height="40" fill="#8b4a2b" ${S}/>
    <circle cx="97" cy="76" r="2.5" fill="#f9c74f"/>
    <path d="M4 96 H116" ${S}/>
    <path d="M18 94 L14 78 H36 L32 94 Z" fill="#c0392b" ${S}/>
    <path d="M25 78 V70" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
    <circle cx="25" cy="68" r="6" fill="#f9c74f" ${S}/>
    <path d="M48 94 L44 78 H66 L62 94 Z" fill="#c0392b" ${S}/>
    <path d="M55 78 V70" stroke="#3f9d55" stroke-width="3" stroke-linecap="round"/>
    <circle cx="55" cy="68" r="6" fill="#e63946" ${S}/>` },

  { cs: 'klenotnictví', en: 'jeweller’s', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'shopping', svg: `
    <rect x="8" y="28" width="104" height="66" fill="#1d2a5a" ${S}/>
    <rect x="8" y="6" width="104" height="18" rx="3" fill="#f9c74f" ${S}/>
    <text x="60" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10.5" fill="#333">KLENOTNICTVÍ</text>
    <rect x="14" y="38" width="58" height="46" fill="#5a3fbf" ${S}/>
    <circle cx="30" cy="66" r="9" fill="none" stroke="#333" stroke-width="7"/>
    <circle cx="30" cy="66" r="9" fill="none" stroke="#f9c74f" stroke-width="4"/>
    <polygon points="30,48 36,54 30,60 24,54" fill="#dff3ff" ${S}/>
    <path d="M42 44 Q56 68 70 44" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M42 44 Q56 68 70 44" fill="none" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <polygon points="56,58 61,64 56,72 51,64" fill="#e63946" ${S}/>
    <g fill="#fff">
      <path d="M20 46 L21.5 50.5 L26 52 L21.5 53.5 L20 58 L18.5 53.5 L14 52 L18.5 50.5 Z"/>
      <path d="M64 72 L65.5 76.5 L70 78 L65.5 79.5 L64 84 L62.5 79.5 L58 78 L62.5 76.5 Z"/>
      <path d="M44 78 L45 80.5 L47.5 81.5 L45 82.5 L44 85 L43 82.5 L40.5 81.5 L43 80.5 Z"/>
    </g>
    <rect x="80" y="54" width="22" height="40" fill="#8b4a2b" ${S}/>
    <circle cx="97" cy="76" r="2.5" fill="#f9c74f"/>
    <path d="M4 96 H116" ${S}/>` },

  { cs: 'krejčovství', en: 'tailor’s', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'shopping', svg: `
    <rect x="8" y="28" width="104" height="66" fill="#dff3ff" ${S}/>
    <rect x="12" y="6" width="96" height="18" rx="3" fill="#5a3fbf" ${S}/>
    <text x="60" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">KREJČOVSTVÍ</text>
    <rect x="14" y="36" width="54" height="48" fill="#fff" ${S}/>
    <path d="M41 74 V82" stroke="#333" stroke-width="3"/>
    <path d="M32 84 H50" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <path d="M26 46 H56 L58 74 H24 Z" fill="#1d2a5a" ${S}/>
    <path d="M35 46 L41 58 L47 46 Z" fill="#fff" ${S}/>
    <path d="M38 58 L41 66 L44 58 Z" fill="#e63946" ${S}/>
    <path d="M35 46 L36 72 M47 46 L46 72" stroke="#333" stroke-width="1.5"/>
    <rect x="36" y="38" width="10" height="8" rx="3" fill="#9aa0a8" ${S}/>
    <rect x="80" y="54" width="22" height="40" fill="#8b4a2b" ${S}/>
    <circle cx="97" cy="76" r="2.5" fill="#f9c74f"/>
    <path d="M90 34 L84 42 M90 34 L96 42" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M90 34 L84 42 M90 34 L96 42" fill="none" stroke="#9aa0a8" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="82" cy="46" r="4" fill="#e63946" ${S}/>
    <circle cx="98" cy="46" r="4" fill="#e63946" ${S}/>
    <path d="M4 96 H116" ${S}/>` },

  { cs: 'oddělení', en: 'department (of a shop)', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'shopping', svg: `
    <path d="M4 96 H116" ${S}/>
    <path d="M4 62 H36 M4 80 H36 M6 62 V96 M34 62 V96" stroke="#b5722f" stroke-width="4" stroke-linecap="round"/>
    <path d="M84 62 H116 M84 80 H116 M86 62 V96 M114 62 V96" stroke="#b5722f" stroke-width="4" stroke-linecap="round"/>
    <g stroke="#333" stroke-width="1.5">
      <rect x="9" y="52" width="10" height="8" fill="#e63946"/><rect x="21" y="50" width="10" height="10" fill="#4fa3e3"/>
      <rect x="9" y="68" width="10" height="10" fill="#f9c74f"/><rect x="21" y="70" width="10" height="8" fill="#6cc06a"/>
      <rect x="89" y="52" width="10" height="8" fill="#5a3fbf"/><rect x="101" y="50" width="10" height="10" fill="#f4a261"/>
      <rect x="89" y="70" width="10" height="8" fill="#e94b8a"/><rect x="101" y="68" width="10" height="10" fill="#2a9d8f"/>
    </g>
    <rect x="57" y="62" width="6" height="34" fill="#7a7f87" ${S}/>
    <rect x="22" y="6" width="76" height="58" rx="4" fill="#1d2a5a" ${S}/>
    <path d="M24 25 H96 M24 44 H96" stroke="#fff" stroke-width="1.5"/>
    <text x="28" y="20" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">HRAČKY</text>
    <text x="28" y="39" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">OBUV</text>
    <text x="28" y="58" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">SPORT</text>
    <polygon points="80,12 90,16 80,20 82,16" fill="#f9c74f"/>
    <polygon points="85,28 89,36 81,36" fill="#f9c74f"/>
    <path d="M85 36 V41" stroke="#f9c74f" stroke-width="3"/>
    <polygon points="90,50 80,54 90,58 88,54" fill="#f9c74f"/>` },

  { cs: 'euro', en: 'euro', pattern: 'město (eura)', gender: 'n', level: 'A2', official: null, topic: 'shopping', svg: `
    <rect x="46" y="8" width="68" height="36" rx="2" fill="#4fa3e3" ${S}/>
    <rect x="50" y="12" width="60" height="28" fill="none" stroke="#bde0fe" stroke-width="1.5"/>
    <path d="M56 38 V26 a7 7 0 0 1 14 0 V38 Z" fill="#bde0fe" ${S}/>
    <circle cx="100" cy="18" r="2" fill="#f9c74f"/><circle cx="105" cy="22" r="2" fill="#f9c74f"/><circle cx="95" cy="22" r="2" fill="#f9c74f"/><circle cx="105" cy="28" r="2" fill="#f9c74f"/><circle cx="95" cy="28" r="2" fill="#f9c74f"/><circle cx="100" cy="32" r="2" fill="#f9c74f"/>
    <text x="84" y="34" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="14" fill="#fff">20</text>
    <circle cx="44" cy="62" r="34" fill="#ddd" ${S}/>
    <circle cx="44" cy="62" r="23" fill="#f9c74f" ${S}/>
    <text x="44" y="73" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="30" fill="#333">€</text>
    <text x="44" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="7" fill="#333">1 EURO</text>` }
);
