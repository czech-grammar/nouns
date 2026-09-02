// Topic: food and drink (masculine inanimate)
WORDS.push(
  { cs: 'chleba', en: 'bread', pattern: 'hrad (also chléb)', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <rect x="4" y="76" width="112" height="14" rx="4" fill="#8b4a2b" ${S}/>
    <path d="M8 78 Q6 26 48 22 Q80 20 88 38 L88 78 Z" fill="#b5722f" ${S}/>
    <path d="M20 44 Q26 38 32 42 M38 32 Q44 26 50 30 M58 28 Q64 24 70 28" fill="none" stroke="#8b4a2b" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="88" cy="58" rx="9" ry="20" fill="#b5722f" ${S}/>
    <ellipse cx="88" cy="58" rx="6" ry="16" fill="#f5e6c8"/>
    <circle cx="87" cy="50" r="1.5" fill="#e0c9a0"/><circle cx="89" cy="60" r="1.5" fill="#e0c9a0"/><circle cx="87" cy="69" r="1.5" fill="#e0c9a0"/>
    <path d="M96 78 V54 Q96 40 106 40 Q116 40 116 54 V78 Z" fill="#b5722f" ${S}/>
    <path d="M100 78 V55 Q100 45 106 45 Q112 45 112 55 V78 Z" fill="#f5e6c8"/>
    <circle cx="104" cy="56" r="1.5" fill="#e0c9a0"/><circle cx="108" cy="66" r="1.5" fill="#e0c9a0"/><circle cx="103" cy="72" r="1.5" fill="#e0c9a0"/>` },

  { cs: 'rohlík', en: 'bread roll', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M10 50 C20 6 100 6 110 50 C100 40 20 40 10 50 Z" fill="#f9c74f" ${S}/>
    <path d="M27 28 L31 41 M42 22 L45 40 M58 19 L61 39 M74 22 L77 40 M89 28 L91 41" fill="none" stroke="#e07a2a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M10 92 C20 48 100 48 110 92 C100 82 20 82 10 92 Z" fill="#f9c74f" ${S}/>
    <path d="M27 70 L31 83 M42 64 L45 82 M58 61 L61 81 M74 64 L77 82 M89 70 L91 83" fill="none" stroke="#e07a2a" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'sýr', en: 'cheese', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M8 52 L112 44 V80 L8 88 Z" fill="#f9c74f" ${S}/>
    <path d="M8 52 L72 24 L112 44 Z" fill="#ffe08a" ${S}/>
    <circle cx="30" cy="70" r="6" fill="#f4a261"/><circle cx="56" cy="64" r="5" fill="#f4a261"/><circle cx="84" cy="70" r="7" fill="#f4a261"/><circle cx="100" cy="56" r="4" fill="#f4a261"/><circle cx="44" cy="80" r="3.5" fill="#f4a261"/><circle cx="70" cy="76" r="3" fill="#f4a261"/>
    <ellipse cx="62" cy="36" rx="6" ry="3" fill="#f4a261"/><ellipse cx="86" cy="42" rx="4" ry="2" fill="#f4a261"/><ellipse cx="44" cy="46" rx="4" ry="2" fill="#f4a261"/>` },

  { cs: 'salát', en: 'salad', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M14 62 Q16 40 32 44 Q34 24 52 32 Q60 16 74 30 Q90 22 94 42 Q108 42 106 62 Z" fill="#8fd18a" ${S}/>
    <path d="M26 54 Q34 46 44 52 M56 40 Q64 36 72 42 M82 54 Q90 48 98 54 M48 60 Q56 64 64 58" fill="none" stroke="#3f9d55" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="40" cy="46" r="9" fill="#e63946" ${S}/><circle cx="40" cy="46" r="5.5" fill="#ffb4a2"/>
    <circle cx="76" cy="44" r="9" fill="#e63946" ${S}/><circle cx="76" cy="44" r="5.5" fill="#ffb4a2"/>
    <g transform="translate(108 8) rotate(30)">
      <rect x="-3" y="0" width="6" height="40" rx="3" fill="#9aa0a8" ${S}/>
      <rect x="-8" y="38" width="16" height="10" rx="3" fill="#9aa0a8" ${S}/>
      <path d="M-6 48 V58 M-2 48 V58 M2 48 V58 M6 48 V58" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/>
      <path d="M-6 48 V58 M-2 48 V58 M2 48 V58 M6 48 V58" fill="none" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round"/>
    </g>
    <path d="M12 62 A48 8 0 0 0 108 62 Q108 92 60 92 Q12 92 12 62 Z" fill="#4fa3e3" ${S}/>` },

  { cs: 'čaj', en: 'tea', pattern: 'stroj', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M42 24 q-6 -8 0 -16 M56 24 q-6 -8 0 -16 M70 24 q-6 -8 0 -16" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M84 44 Q106 44 106 60 Q106 76 84 76 L84 68 Q98 68 98 60 Q98 52 84 52 Z" fill="#dff3ff" ${S}/>
    <path d="M28 30 H84 V84 Q84 92 76 92 H36 Q28 92 28 84 Z" fill="#dff3ff" ${S}/>
    <path d="M31 44 H81 V84 Q81 89 76 89 H36 Q31 89 31 84 Z" fill="#f4a261" ${S}/>
    <rect x="36" y="58" width="18" height="24" rx="3" fill="#c9a06a" ${S}/>
    <path d="M40 66 H50 M40 72 H50" fill="none" stroke="#a8804a" stroke-width="2" stroke-linecap="round"/>
    <circle cx="66" cy="52" r="11" fill="#f9c74f" ${S}/><circle cx="66" cy="52" r="7.5" fill="#ffe08a"/>
    <path d="M66 45 V59 M59 52 H73 M61 47 L71 57 M71 47 L61 57" stroke="#f9c74f" stroke-width="1.5"/>
    <path d="M45 58 V36 Q45 28 36 28 H30 Q22 28 20 36 L16 58" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <rect x="8" y="58" width="16" height="12" rx="2" fill="#e63946" ${S}/>` },

  { cs: 'džus', en: 'juice', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <rect x="26" y="8" width="20" height="8" rx="2" fill="#ffe08a" ${S}/>
    <path d="M14 34 L24 14 H48 L58 34 Z" fill="#ffe08a" ${S}/>
    <rect x="14" y="34" width="44" height="58" fill="#f4a261" ${S}/>
    <rect x="20" y="40" width="32" height="28" rx="3" fill="#fff" ${S}/>
    <path d="M36 47 Q40 38 47 42 Q41 47 36 47 Z" fill="#6cc06a" ${S}/>
    <circle cx="36" cy="56" r="9" fill="#f4a261" ${S}/>
    <text x="36" y="85" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">DŽUS</text>
    <path d="M68 36 H112 L107 92 H73 Z" fill="#dff3ff" ${S}/>
    <path d="M69.5 50 H110.5 L107 92 H73 Z" fill="#f4a261" ${S}/>
    <circle cx="84" cy="66" r="2.5" fill="#ffe08a"/><circle cx="98" cy="76" r="2.5" fill="#ffe08a"/><circle cx="88" cy="84" r="2" fill="#ffe08a"/>
    <path d="M92 46 L108 10" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M92 46 L108 10" stroke="#e63946" stroke-width="4" stroke-linecap="round"/>` },

  { cs: 'cukr', en: 'sugar', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <ellipse cx="60" cy="56" rx="38" ry="9" fill="#bde0fe" ${S}/>
    <path d="M40 40 l4 -4 h12 l-4 4 Z" fill="#ddd" ${S}/><path d="M52 40 l4 -4 v12 l-4 4 Z" fill="#c9ced6" ${S}/><rect x="40" y="40" width="12" height="12" fill="#fff" ${S}/>
    <path d="M56 40 l4 -4 h12 l-4 4 Z" fill="#ddd" ${S}/><path d="M68 40 l4 -4 v12 l-4 4 Z" fill="#c9ced6" ${S}/><rect x="56" y="40" width="12" height="12" fill="#fff" ${S}/>
    <path d="M32 52 l4 -4 h12 l-4 4 Z" fill="#ddd" ${S}/><path d="M44 52 l4 -4 v12 l-4 4 Z" fill="#c9ced6" ${S}/><rect x="32" y="52" width="12" height="12" fill="#fff" ${S}/>
    <path d="M48 52 l4 -4 h12 l-4 4 Z" fill="#ddd" ${S}/><path d="M60 52 l4 -4 v12 l-4 4 Z" fill="#c9ced6" ${S}/><rect x="48" y="52" width="12" height="12" fill="#fff" ${S}/>
    <path d="M64 52 l4 -4 h12 l-4 4 Z" fill="#ddd" ${S}/><path d="M76 52 l4 -4 v12 l-4 4 Z" fill="#c9ced6" ${S}/><rect x="64" y="52" width="12" height="12" fill="#fff" ${S}/>
    <g transform="translate(74 48) rotate(-133)">
      <ellipse cx="0" cy="-2" rx="8" ry="11" fill="#9aa0a8" ${S}/>
      <rect x="-3" y="6" width="6" height="44" rx="3" fill="#9aa0a8" ${S}/>
    </g>
    <path d="M22 56 A38 9 0 0 0 98 56 Q98 92 60 92 Q22 92 22 56 Z" fill="#4fa3e3" ${S}/>
    <text x="60" y="80" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">CUKR</text>
    <path d="M6 76 l4 -4 h12 l-4 4 Z" fill="#ddd" ${S}/><path d="M18 76 l4 -4 v12 l-4 4 Z" fill="#c9ced6" ${S}/><rect x="6" y="76" width="12" height="12" fill="#fff" ${S}/>
    <path d="M98 78 l4 -4 h12 l-4 4 Z" fill="#ddd" ${S}/><path d="M110 78 l4 -4 v12 l-4 4 Z" fill="#c9ced6" ${S}/><rect x="98" y="78" width="12" height="12" fill="#fff" ${S}/>` },

  { cs: 'koláč', en: 'pie, sweet pastry', pattern: 'stroj', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <circle cx="42" cy="52" r="36" fill="#f4a261" ${S}/>
    <circle cx="42" cy="52" r="25" fill="#3b2a1a" ${S}/>
    <circle cx="32" cy="44" r="2.5" fill="#ffe08a"/><circle cx="50" cy="40" r="2.5" fill="#ffe08a"/><circle cx="56" cy="56" r="2.5" fill="#ffe08a"/><circle cx="38" cy="64" r="2.5" fill="#ffe08a"/><circle cx="28" cy="56" r="2.5" fill="#ffe08a"/><circle cx="46" cy="54" r="2.5" fill="#ffe08a"/><circle cx="50" cy="66" r="2" fill="#ffe08a"/>
    <circle cx="94" cy="66" r="22" fill="#f4a261" ${S}/>
    <circle cx="94" cy="66" r="15" fill="#5a3fbf" ${S}/>
    <circle cx="88" cy="60" r="2.2" fill="#ffe08a"/><circle cx="99" cy="71" r="2.2" fill="#ffe08a"/><circle cx="98" cy="59" r="2" fill="#ffe08a"/><circle cx="88" cy="72" r="2" fill="#ffe08a"/>` },

  { cs: 'dort', en: 'cake', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <ellipse cx="60" cy="90" rx="54" ry="6" fill="#ddd" ${S}/>
    <rect x="12" y="58" width="96" height="32" rx="4" fill="#e94b8a" ${S}/>
    <path d="M12 68 Q20 76 28 68 Q36 76 44 68 Q52 76 60 68 Q68 76 76 68 Q84 76 92 68 Q100 76 108 68" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="60" cy="58" rx="48" ry="8" fill="#fff" ${S}/>
    <rect x="30" y="32" width="60" height="26" rx="4" fill="#f9c74f" ${S}/>
    <circle cx="40" cy="46" r="2.5" fill="#e94b8a"/><circle cx="52" cy="52" r="2.5" fill="#e94b8a"/><circle cx="66" cy="44" r="2.5" fill="#e94b8a"/><circle cx="80" cy="50" r="2.5" fill="#e94b8a"/>
    <ellipse cx="60" cy="32" rx="30" ry="6" fill="#fff" ${S}/>
    <rect x="42" y="14" width="6" height="18" fill="#4fa3e3" ${S}/>
    <rect x="57" y="14" width="6" height="18" fill="#e63946" ${S}/>
    <rect x="72" y="14" width="6" height="18" fill="#6cc06a" ${S}/>
    <ellipse cx="45" cy="10" rx="3" ry="5" fill="#f9c74f" stroke="#333" stroke-width="2"/>
    <ellipse cx="60" cy="10" rx="3" ry="5" fill="#f9c74f" stroke="#333" stroke-width="2"/>
    <ellipse cx="75" cy="10" rx="3" ry="5" fill="#f9c74f" stroke="#333" stroke-width="2"/>` },

  { cs: 'banán', en: 'banana', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M60 58 Q52 40 66 16" fill="none" stroke="#333" stroke-width="22" stroke-linecap="round"/>
    <path d="M60 58 Q52 40 66 16" fill="none" stroke="#ffe08a" stroke-width="16" stroke-linecap="round"/>
    <circle cx="67" cy="14" r="3.5" fill="#5a3a22"/>
    <path d="M50 64 Q24 74 8 46 Q30 54 54 52 Z" fill="#f9c74f" ${S}/>
    <path d="M70 64 Q96 74 112 46 Q90 54 66 52 Z" fill="#f9c74f" ${S}/>
    <path d="M60 60 Q60 76 54 88" fill="none" stroke="#333" stroke-width="26" stroke-linecap="round"/>
    <path d="M60 60 Q60 76 54 88" fill="none" stroke="#f9c74f" stroke-width="20" stroke-linecap="round"/>
    <circle cx="52" cy="94" r="4" fill="#5a3a22"/>
    <path d="M50 62 Q44 84 60 96 Q70 80 70 62 Z" fill="#f9c74f" ${S}/>` },

  { cs: 'pomeranč', en: 'orange', pattern: 'stroj', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <rect x="42" y="16" width="6" height="12" rx="3" fill="#8b4a2b" ${S}/>
    <path d="M48 24 Q54 6 76 10 Q66 26 48 24 Z" fill="#6cc06a" ${S}/>
    <circle cx="44" cy="58" r="34" fill="#f4a261" ${S}/>
    <circle cx="30" cy="50" r="1.6" fill="#e07a2a"/><circle cx="40" cy="42" r="1.6" fill="#e07a2a"/><circle cx="54" cy="46" r="1.6" fill="#e07a2a"/><circle cx="26" cy="64" r="1.6" fill="#e07a2a"/><circle cx="38" cy="70" r="1.6" fill="#e07a2a"/><circle cx="52" cy="62" r="1.6" fill="#e07a2a"/><circle cx="44" cy="80" r="1.6" fill="#e07a2a"/><circle cx="60" cy="74" r="1.6" fill="#e07a2a"/>
    <circle cx="94" cy="68" r="22" fill="#f4a261" ${S}/>
    <circle cx="94" cy="68" r="16" fill="#ffe08a"/>
    <path d="M94 52 V84 M78 68 H110 M83 57 L105 79 M105 57 L83 79" stroke="#f4a261" stroke-width="3" stroke-linecap="round"/>
    <circle cx="94" cy="68" r="3" fill="#fff"/>` },

  { cs: 'knedlík', en: 'dumpling', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <ellipse cx="60" cy="72" rx="56" ry="20" fill="#fff" ${S}/>
    <ellipse cx="60" cy="72" rx="44" ry="13" fill="none" stroke="#ddd" stroke-width="2"/>
    <ellipse cx="92" cy="56" rx="13" ry="22" transform="rotate(-15 92 56)" fill="#f5e6c8" ${S}/>
    <circle cx="97" cy="50" r="1.8" fill="#e0c9a0"/><circle cx="99" cy="62" r="1.8" fill="#e0c9a0"/><circle cx="94" cy="70" r="1.8" fill="#e0c9a0"/>
    <ellipse cx="76" cy="56" rx="13" ry="22" transform="rotate(-15 76 56)" fill="#f5e6c8" ${S}/>
    <circle cx="81" cy="48" r="1.8" fill="#e0c9a0"/><circle cx="83" cy="60" r="1.8" fill="#e0c9a0"/><circle cx="78" cy="70" r="1.8" fill="#e0c9a0"/>
    <ellipse cx="60" cy="56" rx="13" ry="22" transform="rotate(-15 60 56)" fill="#f5e6c8" ${S}/>
    <circle cx="65" cy="48" r="1.8" fill="#e0c9a0"/><circle cx="67" cy="60" r="1.8" fill="#e0c9a0"/><circle cx="62" cy="70" r="1.8" fill="#e0c9a0"/>
    <ellipse cx="44" cy="56" rx="13" ry="22" transform="rotate(-15 44 56)" fill="#f5e6c8" ${S}/>
    <circle cx="49" cy="48" r="1.8" fill="#e0c9a0"/><circle cx="51" cy="60" r="1.8" fill="#e0c9a0"/><circle cx="46" cy="70" r="1.8" fill="#e0c9a0"/>
    <ellipse cx="28" cy="56" rx="13" ry="22" transform="rotate(-15 28 56)" fill="#f5e6c8" ${S}/>
    <circle cx="24" cy="46" r="1.8" fill="#e0c9a0"/><circle cx="33" cy="52" r="1.8" fill="#e0c9a0"/><circle cx="27" cy="62" r="1.8" fill="#e0c9a0"/><circle cx="32" cy="70" r="1.8" fill="#e0c9a0"/>` },

  { cs: 'guláš', en: 'goulash', pattern: 'stroj', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M34 34 q-6 -8 0 -16 M52 34 q-6 -8 0 -16 M70 34 q-6 -8 0 -16" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M10 54 Q10 90 52 90 Q94 90 94 54 Z" fill="#ffe08a" ${S}/>
    <ellipse cx="52" cy="54" rx="42" ry="10" fill="#c0392b" ${S}/>
    <rect x="26" y="49" width="13" height="9" rx="3" fill="#8b4a2b" ${S}/>
    <rect x="48" y="51" width="13" height="9" rx="3" fill="#8b4a2b" ${S}/>
    <rect x="68" y="48" width="12" height="8" rx="3" fill="#8b4a2b" ${S}/>
    <circle cx="42" cy="58" r="2" fill="#f4a261"/><circle cx="64" cy="60" r="2" fill="#f4a261"/><circle cx="82" cy="56" r="2" fill="#f4a261"/>
    <ellipse cx="102" cy="70" rx="10" ry="15" transform="rotate(15 102 70)" fill="#f5e6c8" ${S}/>
    <ellipse cx="92" cy="76" rx="10" ry="15" transform="rotate(15 92 76)" fill="#f5e6c8" ${S}/>
    <circle cx="90" cy="70" r="1.6" fill="#e0c9a0"/><circle cx="95" cy="80" r="1.6" fill="#e0c9a0"/><circle cx="88" cy="84" r="1.6" fill="#e0c9a0"/>` },

  { cs: 'řízek', en: 'schnitzel', pattern: 'hrad (řízku)', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <ellipse cx="60" cy="60" rx="56" ry="32" fill="#fff" ${S}/>
    <ellipse cx="60" cy="60" rx="46" ry="24" fill="none" stroke="#ddd" stroke-width="2"/>
    <path d="M12 62 Q12 38 38 34 Q66 30 78 46 Q92 62 76 80 Q52 90 30 82 Q10 76 12 62 Z" fill="#f4a261" ${S}/>
    <circle cx="30" cy="50" r="2" fill="#e07a2a"/><circle cx="46" cy="44" r="2" fill="#e07a2a"/><circle cx="62" cy="52" r="2" fill="#e07a2a"/><circle cx="40" cy="64" r="2" fill="#e07a2a"/><circle cx="58" cy="70" r="2" fill="#e07a2a"/><circle cx="72" cy="60" r="2" fill="#e07a2a"/><circle cx="26" cy="72" r="2" fill="#e07a2a"/><circle cx="48" cy="80" r="2" fill="#e07a2a"/><circle cx="66" cy="42" r="2" fill="#e07a2a"/>
    <ellipse cx="96" cy="68" rx="16" ry="11" fill="#ffe08a" ${S}/>
    <circle cx="90" cy="64" r="2.2" fill="#6cc06a"/><circle cx="101" cy="72" r="2.2" fill="#6cc06a"/><circle cx="99" cy="62" r="2.2" fill="#f4a261"/><circle cx="88" cy="72" r="2.2" fill="#f4a261"/>
    <path d="M80 46 A13 13 0 0 1 106 46 Z" fill="#f9c74f" ${S}/>
    <path d="M84 45 A9 9 0 0 1 102 45 Z" fill="#ffe08a"/>` },

  { cs: 'párek', en: 'sausage, hot dog', pattern: 'hrad (párku)', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M100 40 Q112 55 100 70" fill="none" stroke="#333" stroke-width="12" stroke-linecap="round"/>
    <path d="M100 40 Q112 55 100 70" fill="none" stroke="#f2957e" stroke-width="6" stroke-linecap="round"/>
    <path d="M18 40 Q60 28 102 40" fill="none" stroke="#333" stroke-width="26" stroke-linecap="round"/>
    <path d="M18 40 Q60 28 102 40" fill="none" stroke="#f2957e" stroke-width="20" stroke-linecap="round"/>
    <path d="M30 36 Q60 29 90 36" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <path d="M18 70 Q60 58 102 70" fill="none" stroke="#333" stroke-width="26" stroke-linecap="round"/>
    <path d="M18 70 Q60 58 102 70" fill="none" stroke="#f2957e" stroke-width="20" stroke-linecap="round"/>
    <path d="M30 66 Q60 59 90 66" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <path d="M24 68 Q32 58 40 67 Q48 76 56 66 Q64 56 72 65 Q80 74 88 66" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M24 68 Q32 58 40 67 Q48 76 56 66 Q64 56 72 65 Q80 74 88 66" fill="none" stroke="#f9c74f" stroke-width="5" stroke-linecap="round"/>` },

  { cs: 'oběd', en: 'lunch', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <circle cx="100" cy="22" r="16" fill="#fff" ${S}/>
    <path d="M100 9 V12 M100 32 V35 M87 22 H90 M110 22 H113" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M100 22 V14" fill="none" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M100 22 V10" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round"/>
    <circle cx="100" cy="22" r="2" fill="#333"/>
    <rect x="8" y="30" width="12" height="16" rx="3" fill="#9aa0a8" ${S}/>
    <path d="M11 32 V42 M14 32 V44 M17 32 V42" fill="none" stroke="#333" stroke-width="1.5"/>
    <rect x="11" y="44" width="6" height="48" rx="3" fill="#9aa0a8" ${S}/>
    <path d="M104 70 V52 Q104 44 109 44 H114 V70 Z" fill="#ddd" ${S}/>
    <rect x="106" y="70" width="7" height="24" rx="3" fill="#7a7f87" ${S}/>
    <ellipse cx="58" cy="64" rx="36" ry="26" fill="#fff" ${S}/>
    <ellipse cx="58" cy="64" rx="28" ry="19" fill="none" stroke="#ddd" stroke-width="2"/>
    <ellipse cx="48" cy="62" rx="15" ry="10" fill="#b5722f" ${S}/>
    <ellipse cx="70" cy="56" rx="8" ry="6" fill="#f5e6c8" ${S}/>
    <ellipse cx="73" cy="68" rx="8" ry="6" fill="#f5e6c8" ${S}/>
    <circle cx="44" cy="78" r="3" fill="#6cc06a"/><circle cx="52" cy="80" r="3" fill="#6cc06a"/><circle cx="60" cy="78" r="3" fill="#6cc06a"/>` },

  { cs: 'lístek', en: 'menu, ticket', pattern: 'hrad (lístku)', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <rect x="6" y="82" width="108" height="12" rx="3" fill="#b5722f" ${S}/>
    <path d="M12 88 H108" fill="none" stroke="#8b4a2b" stroke-width="2" stroke-linecap="round"/>
    <rect x="36" y="6" width="68" height="76" rx="3" fill="#ddd" ${S}/>
    <rect x="24" y="10" width="68" height="72" rx="3" fill="#fff" ${S}/>
    <text x="58" y="31" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="14" fill="#e63946">MENU</text>
    <path d="M32 36 H84" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round"/>
    <path d="M32 46 H62 M32 56 H58 M32 66 H64 M32 76 H56" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M74 46 H84 M74 56 H84 M74 66 H84 M74 76 H84" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'talíř', en: 'plate', pattern: 'stroj', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <ellipse cx="60" cy="50" rx="55" ry="45" fill="#fff" ${S}/>
    <ellipse cx="60" cy="50" rx="46" ry="37" fill="none" stroke="#4fa3e3" stroke-width="3.5"/>
    <ellipse cx="60" cy="50" rx="34" ry="27" fill="none" stroke="#bde0fe" stroke-width="2.5"/>
    <circle cx="100" cy="50" r="2.5" fill="#4fa3e3"/><circle cx="88" cy="73" r="2.5" fill="#4fa3e3"/><circle cx="60" cy="82" r="2.5" fill="#4fa3e3"/><circle cx="32" cy="73" r="2.5" fill="#4fa3e3"/><circle cx="20" cy="50" r="2.5" fill="#4fa3e3"/><circle cx="32" cy="27" r="2.5" fill="#4fa3e3"/><circle cx="60" cy="18" r="2.5" fill="#4fa3e3"/><circle cx="88" cy="27" r="2.5" fill="#4fa3e3"/>` },

  { cs: 'nůž', en: 'knife', pattern: 'stroj (nože)', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <g transform="translate(60 50) rotate(-35)">
      <rect x="-58" y="-9" width="44" height="18" rx="6" fill="#b5722f" ${S}/>
      <circle cx="-46" cy="0" r="2.5" fill="#ddd"/><circle cx="-30" cy="0" r="2.5" fill="#ddd"/>
      <path d="M-18 -10 H58 Q44 6 12 11 H-18 Z" fill="#9aa0a8" ${S}/>
      <path d="M-12 -4 H30" fill="none" stroke="#ddd" stroke-width="2" stroke-linecap="round"/>
    </g>` },

  { cs: 'hrnek', en: 'mug', pattern: 'hrad (hrnku)', gender: 'mi', level: 'A1', topic: 'food', svg: `
    <path d="M40 22 q-6 -8 0 -16 M54 22 q-6 -8 0 -16 M68 22 q-6 -8 0 -16" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M84 44 Q110 44 110 62 Q110 80 84 80 L84 72 Q102 72 102 62 Q102 52 84 52 Z" fill="#4fa3e3" ${S}/>
    <path d="M24 30 H84 V86 Q84 94 76 94 H32 Q24 94 24 86 Z" fill="#4fa3e3" ${S}/>
    <circle cx="36" cy="48" r="4" fill="#fff"/><circle cx="56" cy="44" r="4" fill="#fff"/><circle cx="74" cy="52" r="4" fill="#fff"/><circle cx="32" cy="68" r="4" fill="#fff"/><circle cx="52" cy="64" r="4" fill="#fff"/><circle cx="72" cy="72" r="4" fill="#fff"/><circle cx="40" cy="84" r="4" fill="#fff"/><circle cx="62" cy="84" r="4" fill="#fff"/>
    <ellipse cx="54" cy="30" rx="30" ry="7" fill="#bde0fe" ${S}/>
    <ellipse cx="54" cy="30" rx="25" ry="4.5" fill="#5a3a22"/>` }
);
