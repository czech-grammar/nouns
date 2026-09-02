// A2 deck: home part A (masculine inanimate)
WORDS.push(
  { cs: 'obývák', en: 'living room', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <rect x="6" y="6" width="108" height="60" fill="#ffe08a" ${S}/>
    <rect x="6" y="66" width="108" height="28" fill="#b5722f" ${S}/>
    <path d="M6 80 H114" fill="none" stroke="#8b4a2b" stroke-width="2" stroke-linecap="round"/>
    <rect x="10" y="18" width="24" height="48" fill="#8b4a2b" ${S}/>
    <g fill="#e63946"><rect x="13" y="23" width="4" height="12"/><rect x="24" y="38" width="4" height="12"/><rect x="18" y="52" width="5" height="12"/></g>
    <g fill="#4fa3e3"><rect x="18" y="25" width="5" height="10"/><rect x="13" y="40" width="5" height="10"/><rect x="24" y="54" width="4" height="10"/></g>
    <g fill="#6cc06a"><rect x="24" y="22" width="5" height="13"/><rect x="19" y="37" width="4" height="13"/><rect x="13" y="55" width="4" height="9"/></g>
    <path d="M10 35 H34 M10 50 H34" fill="none" stroke="#b5722f" stroke-width="2.5"/>
    <rect x="84" y="50" width="28" height="16" fill="#b5722f" ${S}/>
    <rect x="82" y="26" width="32" height="22" rx="2" fill="#333" ${S}/>
    <rect x="86" y="30" width="24" height="15" fill="#4fa3e3"/>
    <circle cx="98" cy="37" r="4" fill="#f9c74f"/>
    <ellipse cx="60" cy="84" rx="30" ry="8" fill="#6cc06a" ${S}/>
    <ellipse cx="60" cy="84" rx="19" ry="4" fill="#8fd18a" ${S}/>
    <rect x="40" y="42" width="40" height="20" rx="4" fill="#e63946" ${S}/>
    <path d="M60 42 V58" fill="none" stroke="#c0392b" stroke-width="2.5"/>
    <rect x="36" y="56" width="48" height="14" rx="4" fill="#c0392b" ${S}/>
    <rect x="32" y="48" width="9" height="22" rx="4" fill="#e63946" ${S}/>
    <rect x="79" y="48" width="9" height="22" rx="4" fill="#e63946" ${S}/>
    <rect x="47" y="46" width="11" height="10" rx="2" fill="#f9c74f" ${S}/>
    <path d="M98 72 H112 L110 90 H100 Z" fill="#f4a261" ${S}/>
    <ellipse cx="102" cy="66" rx="4" ry="8" transform="rotate(-30 102 66)" fill="#3f9d55" ${S}/>
    <ellipse cx="108" cy="66" rx="4" ry="8" transform="rotate(30 108 66)" fill="#3f9d55" ${S}/>
    <ellipse cx="105" cy="62" rx="4" ry="9" fill="#6cc06a" ${S}/>` },

  { cs: 'sklep', en: 'cellar', pattern: 'hrad (sklepa)', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <rect x="4" y="4" width="112" height="92" fill="#555" ${S}/>
    <path d="M60 4 H116" fill="none" stroke="#9aa0a8" stroke-width="3"/>
    <g fill="none" stroke="#7a7f87" stroke-width="2.5" stroke-linecap="round">
      <path d="M70 12 H80 M90 12 H100 M64 24 H72 M80 24 H90 M100 24 H110 M12 76 H20 M96 92 H104"/>
    </g>
    <rect x="4" y="80" width="112" height="16" fill="#7a7f87" ${S}/>
    <polygon points="4,4 16,4 16,20 28,20 28,36 40,36 40,52 52,52 52,68 64,68 64,80 4,80" fill="#b5722f" ${S}/>
    <path d="M4 20 H16 M4 36 H28 M4 52 H40 M4 68 H52" fill="none" stroke="#8b4a2b" stroke-width="2"/>
    <rect x="88" y="10" width="22" height="12" fill="#bde0fe" ${S}/>
    <path d="M95 10 V22 M103 10 V22" fill="none" stroke="#333" stroke-width="2"/>
    <path d="M66 4 V12" fill="none" ${S}/>
    <circle cx="66" cy="17" r="5" fill="#f9c74f" ${S}/>
    <rect x="66" y="46" width="48" height="5" fill="#b5722f" ${S}/>
    <rect x="70" y="30" width="11" height="16" rx="2" fill="#6cc06a" ${S}/>
    <rect x="68" y="28" width="15" height="4" rx="1" fill="#9aa0a8" ${S}/>
    <rect x="86" y="32" width="10" height="14" rx="2" fill="#e63946" ${S}/>
    <rect x="84" y="30" width="14" height="4" rx="1" fill="#9aa0a8" ${S}/>
    <rect x="100" y="30" width="11" height="16" rx="2" fill="#f4a261" ${S}/>
    <rect x="98" y="28" width="15" height="4" rx="1" fill="#9aa0a8" ${S}/>
    <rect x="76" y="54" width="30" height="28" rx="7" fill="#8b4a2b" ${S}/>
    <path d="M76 62 H106 M76 74 H106" fill="none" stroke="#9aa0a8" stroke-width="3"/>` },

  { cs: 'dvůr', en: 'yard, courtyard', pattern: 'hrad (dvora)', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <rect x="26" y="12" width="68" height="50" fill="#ffe08a" ${S}/>
    <polygon points="4,4 26,12 26,62 4,96" fill="#f4c96a" ${S}/>
    <polygon points="116,4 94,12 94,62 116,96" fill="#f4c96a" ${S}/>
    <polygon points="4,96 26,62 94,62 116,96" fill="#9aa0a8" ${S}/>
    <g fill="#7a7f87"><ellipse cx="40" cy="88" rx="4" ry="2"/><ellipse cx="62" cy="80" rx="4" ry="2"/><ellipse cx="86" cy="90" rx="4" ry="2"/><ellipse cx="54" cy="70" rx="3" ry="1.5"/></g>
    <rect x="34" y="20" width="12" height="12" fill="#bde0fe" ${S}/>
    <rect x="74" y="20" width="12" height="12" fill="#bde0fe" ${S}/>
    <rect x="52" y="40" width="16" height="22" fill="#8b4a2b" ${S}/>
    <polygon points="10,20 20,26 20,44 10,50" fill="#bde0fe" ${S}/>
    <polygon points="110,20 100,26 100,44 110,50" fill="#bde0fe" ${S}/>
    <path d="M22 30 Q50 40 78 34" fill="none" stroke="#333" stroke-width="2"/>
    <path d="M30 35 L34 33 H42 L46 35 L44 40 L42 39 V48 H34 V39 L32 40 Z" fill="#e63946" ${S}/>
    <path d="M54 36 H66 V52 H61 V44 H59 V52 H54 Z" fill="#4fa3e3" ${S}/>
    <rect x="86" y="62" width="7" height="24" fill="#8b4a2b" ${S}/>
    <circle cx="90" cy="50" r="16" fill="#3f9d55" ${S}/>
    <circle cx="82" cy="58" r="8" fill="#6cc06a" ${S}/>
    <rect x="22" y="72" width="30" height="6" rx="2" fill="#b5722f" ${S}/>
    <rect x="22" y="62" width="30" height="5" rx="2" fill="#b5722f" ${S}/>
    <path d="M26 67 V72 M48 67 V72 M26 78 V88 M48 78 V88" fill="none" ${S}/>` },

  { cs: 'balkon', en: 'balcony', pattern: 'hrad', gender: 'mi', level: 'A2', official: null, topic: 'home', svg: `
    <rect x="4" y="4" width="112" height="92" fill="#ffe08a" ${S}/>
    <rect x="42" y="8" width="36" height="50" fill="#bde0fe" ${S}/>
    <path d="M60 8 V58 M42 30 H78" fill="none" stroke="#333" stroke-width="2"/>
    <rect x="86" y="22" width="14" height="24" rx="3" fill="#4fa3e3" ${S}/>
    <rect x="82" y="44" width="22" height="7" rx="2" fill="#4fa3e3" ${S}/>
    <path d="M86 51 V58 M100 51 V58" fill="none" ${S}/>
    <rect x="12" y="34" width="96" height="5" rx="2" fill="#7a7f87" ${S}/>
    <path d="M22 39 V58 M34 39 V58 M46 39 V58 M58 39 V58 M70 39 V58 M82 39 V58 M94 39 V58 M106 39 V58" fill="none" ${S}/>
    <rect x="12" y="58" width="96" height="9" fill="#9aa0a8" ${S}/>
    <path d="M20 67 L28 80 H20 Z M100 67 L92 80 H100 Z" fill="#7a7f87" ${S}/>
    <rect x="16" y="46" width="30" height="10" rx="1" fill="#8b4a2b" ${S}/>
    <g fill="#e63946" ${S}><circle cx="21" cy="44" r="3.5"/><circle cx="31" cy="42" r="3.5"/><circle cx="41" cy="44" r="3.5"/></g>
    <circle cx="26" cy="47" r="3" fill="#e94b8a" ${S}/><circle cx="36" cy="47" r="3" fill="#e94b8a" ${S}/>
    <rect x="48" y="76" width="24" height="16" fill="#bde0fe" ${S}/>
    <path d="M60 76 V92 M48 84 H72" fill="none" stroke="#333" stroke-width="2"/>` },

  { cs: 'strop', en: 'ceiling', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <rect x="4" y="26" width="112" height="52" fill="#ffe08a" ${S}/>
    <rect x="4" y="78" width="112" height="18" fill="#b5722f" ${S}/>
    <rect x="4" y="4" width="112" height="22" fill="#dff3ff" ${S}/>
    <path d="M10 22 H30 M40 10 H60 M76 22 H96 M100 10 H112" fill="none" stroke="#bde0fe" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="82" cy="26" r="5" fill="#ddd" ${S}/>
    <path d="M82 31 V40" fill="none" ${S}/>
    <path d="M68 54 L74 40 H90 L96 54 Z" fill="#f9c74f" ${S}/>
    <circle cx="82" cy="57" r="4" fill="#ffe08a" ${S}/>
    <ellipse cx="34" cy="86" rx="20" ry="6" fill="#e63946" ${S}/>
    <ellipse cx="66" cy="87" rx="12" ry="5" fill="#4fa3e3" ${S}/>
    <ellipse cx="78" cy="90" rx="6" ry="3.5" fill="#333"/>
    <path d="M38 78 L48 54" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M38 78 L48 54" fill="none" stroke="#e63946" stroke-width="6" stroke-linecap="round"/>
    <circle cx="49" cy="49" r="5.5" fill="#ffd8b8" ${S}/>
    <path d="M51 45 V36" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M51 45 V36" fill="none" stroke="#ffd8b8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="19" cy="76" r="11" fill="#ffd8b8" ${S}/>
    <path d="M8 74 Q10 62 22 65 Q30 66 30 72" fill="#8b4a2b" ${S}/>
    <circle cx="17" cy="76" r="1.5" fill="#333"/><circle cx="24" cy="74" r="1.5" fill="#333"/>
    <path d="M18 81 Q22 83 25 80" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'schod', en: 'step, stair', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <path d="M6 96 H30 V78 H54 V60 H78 V42 H102 V24 H114 V96 Z" fill="#ddd" ${S}/>
    <rect x="54" y="60" width="24" height="18" fill="#e63946" ${S}/>
    <path d="M40 66 L50 69 L40 72 Z" fill="#e63946" ${S}/>
    <rect x="59" y="46" width="6" height="14" rx="2" fill="#1d2a5a" ${S}/>
    <rect x="67" y="46" width="6" height="14" rx="2" fill="#1d2a5a" ${S}/>
    <path d="M58 26 L74 26 L78 48 L54 48 Z" fill="#6cc06a" ${S}/>
    <path d="M56 30 L46 42" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M56 30 L46 42" fill="none" stroke="#ffd8b8" stroke-width="3" stroke-linecap="round"/>
    <path d="M76 30 L88 24" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M76 30 L88 24" fill="none" stroke="#ffd8b8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="66" cy="16" r="10" fill="#ffd8b8" ${S}/>
    <path d="M56 15 Q56 4 66 4 Q76 4 76 15 Q71 10 66 10 Q61 10 56 15 Z" fill="#8b4a2b" ${S}/>
    <circle cx="62" cy="17" r="1.8" fill="#333"/><circle cx="70" cy="17" r="1.8" fill="#333"/>
    <path d="M62 21 Q66 25 70 21" fill="none" ${S}/>` },

  { cs: 'kout', en: 'corner, nook', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <polygon points="4,4 60,10 60,64 4,80" fill="#ffe08a" ${S}/>
    <polygon points="116,4 60,10 60,64 116,80" fill="#f4c96a" ${S}/>
    <polygon points="4,80 60,64 116,80 116,96 4,96" fill="#b5722f" ${S}/>
    <path d="M60 64 V96" fill="none" stroke="#8b4a2b" stroke-width="2"/>
    <rect x="14" y="30" width="30" height="5" fill="#b5722f" ${S}/>
    <rect x="17" y="18" width="6" height="12" fill="#e63946" ${S}/>
    <rect x="24" y="16" width="6" height="14" fill="#4fa3e3" ${S}/>
    <rect x="31" y="20" width="6" height="10" fill="#6cc06a" ${S}/>
    <path d="M92 84 V38" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M92 84 V38" fill="none" stroke="#9aa0a8" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="92" cy="86" rx="10" ry="3" fill="#7a7f87" ${S}/>
    <path d="M78 38 L82 24 H102 L106 38 Z" fill="#f9c74f" ${S}/>
    <path d="M44 84 Q40 62 56 56 Q76 52 78 70 Q80 86 62 88 Q48 90 44 84 Z" fill="#e94b8a" ${S}/>
    <path d="M48 66 Q60 60 74 66" fill="none" stroke="#c9376f" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M52 78 L60 72 L70 78 V84 L60 80 L52 84 Z" fill="#4fa3e3" ${S}/>
    <path d="M60 72 V80" fill="none" ${S}/>` },

  { cs: 'krb', en: 'fireplace', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <ellipse cx="60" cy="91" rx="54" ry="5" fill="#e63946" ${S}/>
    <rect x="14" y="30" width="92" height="56" fill="#9aa0a8" ${S}/>
    <g fill="#7a7f87">
      <rect x="18" y="36" width="10" height="7" rx="2"/><rect x="20" y="50" width="9" height="7" rx="2"/><rect x="17" y="64" width="11" height="7" rx="2"/><rect x="20" y="77" width="8" height="6" rx="2"/>
      <rect x="92" y="36" width="10" height="7" rx="2"/><rect x="91" y="50" width="9" height="7" rx="2"/><rect x="92" y="64" width="11" height="7" rx="2"/><rect x="92" y="77" width="8" height="6" rx="2"/>
      <rect x="38" y="34" width="10" height="5" rx="2"/><rect x="56" y="33" width="10" height="5" rx="2"/><rect x="74" y="34" width="9" height="5" rx="2"/>
    </g>
    <rect x="34" y="42" width="52" height="44" fill="#333" ${S}/>
    <path d="M42 46 Q40 58 50 62 Q48 52 58 48 Q52 60 62 66 Q66 52 74 50 Q72 62 78 66 Q82 74 74 78 H46 Q38 74 42 46 Z" fill="#f4a261" ${S}/>
    <path d="M54 58 Q52 68 60 70 Q58 62 66 58 Q68 68 62 74 H54 Q50 66 54 58 Z" fill="#f9c74f"/>
    <rect x="40" y="76" width="40" height="7" rx="3.5" fill="#8b4a2b" ${S}/>
    <rect x="8" y="22" width="104" height="9" rx="2" fill="#b5722f" ${S}/>
    <circle cx="60" cy="12" r="9" fill="#fff" ${S}/>
    <path d="M60 12 V7 M60 12 H64" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M100 86 Q114 84 112 72" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M100 86 Q114 84 112 72" fill="none" stroke="#f4a261" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="98" cy="82" rx="12" ry="8" fill="#f4a261" ${S}/>
    <path d="M94 66 L96 58 L101 64 Z M108 66 L110 58 L105 64 Z" fill="#f4a261" ${S}/>
    <circle cx="102" cy="70" r="7.5" fill="#f4a261" ${S}/>
    <circle cx="99.5" cy="69" r="1.3" fill="#333"/><circle cx="104.5" cy="69" r="1.3" fill="#333"/>
    <path d="M100.5 73 H103.5" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'kotel', en: 'boiler', pattern: 'stroj (kotle)', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <path d="M24 66 V88 H70 M40 66 V80 H70" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 66 V88 H70" fill="none" stroke="#e63946" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40 66 V80 H70" fill="none" stroke="#4fa3e3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="8" y="6" width="50" height="62" rx="4" fill="#fff" ${S}/>
    <path d="M33 48 Q22 40 26 30 Q28 36 32 36 Q28 24 38 18 Q36 28 42 30 Q46 22 46 34 Q48 44 40 48 Z" fill="#f4a261" ${S}/>
    <path d="M34 46 Q30 40 34 36 Q36 40 38 38 Q40 34 40 40 Q41 46 36 46 Z" fill="#f9c74f"/>
    <rect x="16" y="54" width="34" height="8" rx="2" fill="#333"/>
    <circle cx="24" cy="58" r="2" fill="#6cc06a"/>
    <rect x="30" y="56" width="16" height="4" fill="#6cc06a"/>
    <rect x="70" y="50" width="42" height="40" fill="#fff" ${S}/>
    <path d="M78 50 V90 M86 50 V90 M94 50 V90 M102 50 V90" fill="none" stroke="#9aa0a8" stroke-width="2.5"/>
    <rect x="66" y="56" width="50" height="4" fill="#ddd" ${S}/>
    <path d="M66 82 H116" fill="none" ${S}/>
    <path d="M84 40 q-3 -4 0 -7 q3 -3 0 -6 M96 40 q-3 -4 0 -7 q3 -3 0 -6" fill="none" stroke="#e63946" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'bojler', en: 'water heater', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <path d="M26 14 H16 M26 62 H16" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M26 14 H16 M26 62 H16" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 74 V84 H90 V90" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M46 74 V84 H90 V90" fill="none" stroke="#e63946" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="24" y="10" width="44" height="64" fill="#ddd" ${S}/>
    <ellipse cx="46" cy="74" rx="22" ry="7" fill="#9aa0a8" ${S}/>
    <ellipse cx="46" cy="10" rx="22" ry="7" fill="#fff" ${S}/>
    <circle cx="46" cy="44" r="8" fill="#fff" ${S}/>
    <path d="M46 44 L50 38" fill="none" stroke="#e63946" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="46" cy="44" r="1.5" fill="#333"/>
    <path d="M80 82 Q104 78 104 90" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M80 82 Q104 78 104 90" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="86" cy="76" r="4.5" fill="#e63946" ${S}/>
    <path d="M104 92 V96" fill="none" stroke="#4fa3e3" stroke-width="4" stroke-linecap="round"/>
    <path d="M100 68 q-3 -4 0 -7 q3 -3 0 -6 M110 66 q-3 -4 0 -7 q3 -3 0 -6 M90 58 q-3 -4 0 -7 q3 -3 0 -6" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'dřez', en: 'sink', pattern: 'hrad', gender: 'mi', level: 'A2', official: 'A2', topic: 'home', svg: `
    <rect x="4" y="52" width="112" height="44" fill="#b5722f" ${S}/>
    <path d="M4 60 H116" fill="none" ${S}/>
    <path d="M30 64 V90 M90 64 V90" fill="none" stroke="#8b4a2b" stroke-width="2.5"/>
    <path d="M58 76 H62" fill="none" ${S}/>
    <rect x="14" y="52" width="60" height="30" rx="3" fill="#9aa0a8" ${S}/>
    <rect x="18" y="62" width="52" height="16" fill="#4fa3e3"/>
    <g fill="#fff" ${S}>
      <circle cx="24" cy="62" r="5"/><circle cx="34" cy="60" r="6"/><circle cx="46" cy="62" r="5"/><circle cx="56" cy="59" r="6"/><circle cx="66" cy="62" r="5"/>
    </g>
    <path d="M44 48 V30 Q44 20 54 20 H60 Q70 20 70 30 V38" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M44 48 V30 Q44 20 54 20 H60 Q70 20 70 30 V38" fill="none" stroke="#9aa0a8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="34" y="42" width="20" height="6" rx="3" fill="#7a7f87" ${S}/>
    <path d="M70 40 V54" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <rect x="80" y="46" width="32" height="6" rx="3" fill="#fff" ${S}/>
    <rect x="82" y="38" width="30" height="6" rx="3" fill="#fff" ${S}/>
    <rect x="80" y="30" width="32" height="6" rx="3" fill="#fff" ${S}/>
    <ellipse cx="96" cy="23" rx="16" ry="7" fill="#fff" ${S}/>
    <path d="M88 22 Q92 18 96 22 M100 24 Q104 20 108 23" fill="none" stroke="#f4a261" stroke-width="3" stroke-linecap="round"/>
    <path d="M86 32 H94 M100 40 H108 M84 48 H90" fill="none" stroke="#f4a261" stroke-width="2.5" stroke-linecap="round"/>` }
);
