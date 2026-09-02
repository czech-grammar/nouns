// Topic: time (masculine inanimate)
WORDS.push(
  { cs: 'čas', en: 'time', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <circle cx="92" cy="30" r="24" fill="#4fa3e3" ${S}/>
    <circle cx="92" cy="30" r="18" fill="#fff" ${S}/>
    <path d="M92 14 V17 M92 46 V43 M76 30 H79 M108 30 H105" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M92 30 L84 22" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M92 30 L100 22" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="92" cy="30" r="2" fill="#333"/>
    <rect x="18" y="4" width="46" height="8" rx="3" fill="#b5722f" ${S}/>
    <rect x="18" y="88" width="46" height="8" rx="3" fill="#b5722f" ${S}/>
    <path d="M25 12 H57 V24 Q57 44 41 50 Q25 44 25 24 Z" fill="#dff3ff" ${S}/>
    <path d="M25 88 H57 V76 Q57 56 41 50 Q25 56 25 76 Z" fill="#dff3ff" ${S}/>
    <path d="M30 34 Q41 30 52 34 Q49 44 41 50 Q33 44 30 34 Z" fill="#f9c74f"/>
    <path d="M28 88 H54 Q54 76 41 72 Q28 76 28 88 Z" fill="#f9c74f"/>
    <path d="M41 50 V72" stroke="#f9c74f" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'den', en: 'day', pattern: 'hrad (dne)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M14 70 A46 46 0 0 1 106 70" fill="none" stroke="#f4a261" stroke-width="3" stroke-linecap="round" stroke-dasharray="5 5"/>
    <path d="M60 8 V4 M60 46 V50 M79 27 H83 M41 27 H37 M73.4 13.6 L76.3 10.7 M46.6 13.6 L43.7 10.7 M73.4 40.4 L76.3 43.3 M46.6 40.4 L43.7 43.3" fill="none" stroke="#f4a261" stroke-width="3" stroke-linecap="round"/>
    <circle cx="60" cy="27" r="13" fill="#f9c74f" ${S}/>
    <circle cx="14" cy="70" r="9" fill="#f4a261" ${S}/>
    <circle cx="106" cy="70" r="9" fill="#e63946" ${S}/>
    <path d="M4 70 H116 V96 H4 Z" fill="#8fd18a" ${S}/>
    <path d="M30 70 Q60 50 90 70 Z" fill="#6cc06a" ${S}/>
    <rect x="56" y="76" width="8" height="14" fill="#8b4a2b" ${S}/>
    <circle cx="60" cy="72" r="10" fill="#3f9d55" ${S}/>` },

  { cs: 'týden', en: 'week', pattern: 'hrad (týdne)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <rect x="6" y="22" width="108" height="72" rx="6" fill="#fff" ${S}/>
    <path d="M6 28 a6 6 0 0 1 6 -6 h96 a6 6 0 0 1 6 6 v6 H6 Z" fill="#4fa3e3" ${S}/>
    <rect x="34" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="70" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <path d="M6 34 H114 V88 a6 6 0 0 1 -6 6 H12 a6 6 0 0 1 -6 -6 Z" fill="#6cc06a" ${S}/>
    <path d="M21.4 34 V94 M36.9 34 V94 M52.3 34 V94 M67.7 34 V94 M83.1 34 V94 M98.6 34 V94" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" fill="#fff" text-anchor="middle">
      <text x="13.7" y="50">PO</text><text x="29.1" y="50">ÚT</text><text x="44.6" y="50">ST</text>
      <text x="60" y="50">ČT</text><text x="75.4" y="50">PÁ</text><text x="90.9" y="50">SO</text><text x="106.3" y="50">NE</text>
    </g>
    <path d="M8.1 72 L12.6 78 L19.6 64 M23.5 72 L28 78 L35 64 M39 72 L43.5 78 L50.5 64 M54.4 72 L58.9 78 L65.9 64 M69.8 72 L74.3 78 L81.3 64 M85.3 72 L89.8 78 L96.8 64 M100.7 72 L105.2 78 L112.2 64" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` },

  { cs: 'rok', en: 'year', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <rect x="10" y="14" width="100" height="80" rx="6" fill="#fff" ${S}/>
    <path d="M10 20 a6 6 0 0 1 6 -6 h88 a6 6 0 0 1 6 6 v14 H10 Z" fill="#4fa3e3" ${S}/>
    <rect x="30" y="6" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="84" y="6" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <text x="60" y="30" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">2026</text>
    <g fill="#fff" stroke="#333" stroke-width="1.5">
      <rect x="15" y="40" width="20" height="14" rx="1.5"/><rect x="38" y="40" width="20" height="14" rx="1.5"/>
      <rect x="61" y="40" width="20" height="14" rx="1.5"/><rect x="84" y="40" width="20" height="14" rx="1.5"/>
      <rect x="15" y="57" width="20" height="14" rx="1.5"/><rect x="38" y="57" width="20" height="14" rx="1.5"/>
      <rect x="61" y="57" width="20" height="14" rx="1.5"/><rect x="84" y="57" width="20" height="14" rx="1.5"/>
      <rect x="15" y="74" width="20" height="14" rx="1.5"/><rect x="38" y="74" width="20" height="14" rx="1.5"/>
      <rect x="61" y="74" width="20" height="14" rx="1.5"/><rect x="84" y="74" width="20" height="14" rx="1.5"/>
    </g>
    <g>
      <rect x="15" y="40" width="20" height="4" fill="#4fa3e3"/><rect x="38" y="40" width="20" height="4" fill="#4fa3e3"/>
      <rect x="61" y="40" width="20" height="4" fill="#6cc06a"/><rect x="84" y="40" width="20" height="4" fill="#6cc06a"/>
      <rect x="15" y="57" width="20" height="4" fill="#6cc06a"/><rect x="38" y="57" width="20" height="4" fill="#f9c74f"/>
      <rect x="61" y="57" width="20" height="4" fill="#f9c74f"/><rect x="84" y="57" width="20" height="4" fill="#f9c74f"/>
      <rect x="15" y="74" width="20" height="4" fill="#f4a261"/><rect x="38" y="74" width="20" height="4" fill="#f4a261"/>
      <rect x="61" y="74" width="20" height="4" fill="#f4a261"/><rect x="84" y="74" width="20" height="4" fill="#4fa3e3"/>
    </g>
    <path d="M18 48 H32 M18 51 H28 M41 48 H55 M41 51 H51 M64 48 H78 M64 51 H74 M87 48 H101 M87 51 H97 M18 65 H32 M18 68 H28 M41 65 H55 M41 68 H51 M64 65 H78 M64 68 H74 M87 65 H101 M87 68 H97 M18 82 H32 M18 85 H28 M41 82 H55 M41 85 H51 M64 82 H78 M64 85 H74 M87 82 H101 M87 85 H97" stroke="#ddd" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'večer', en: 'evening', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <rect x="4" y="4" width="112" height="68" rx="6" fill="#f4a261" ${S}/>
    <path d="M82 46 V42 M96.1 51.9 L99 49 M67.9 51.9 L65 49 M104 66 H108 M60 66 H56" fill="none" stroke="#e63946" stroke-width="3" stroke-linecap="round"/>
    <circle cx="82" cy="66" r="12" fill="#f9c74f" ${S}/>
    <path d="M4 72 H116 V96 H4 Z" fill="#3f9d55" ${S}/>
    <rect x="9" y="38" width="6" height="10" fill="#7a7f87" ${S}/>
    <rect x="8" y="52" width="30" height="20" fill="#ffe08a" ${S}/>
    <path d="M4 52 L23 36 L42 52 Z" fill="#c0392b" ${S}/>
    <rect x="19" y="60" width="8" height="12" fill="#8b4a2b" ${S}/>
    <rect x="10" y="56" width="7" height="7" fill="#f9c74f" stroke="#333" stroke-width="2"/>
    <rect x="29" y="56" width="7" height="7" fill="#f9c74f" stroke="#333" stroke-width="2"/>
    <polygon points="52,10 53.6,14.4 58,14.4 54.6,17.2 55.8,21.6 52,19 48.2,21.6 49.4,17.2 46,14.4 50.4,14.4" fill="#f9c74f" ${S}/>
    <rect x="72" y="8" width="42" height="22" rx="4" fill="#1d2a5a" ${S}/>
    <text x="93" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#f9c74f">19:00</text>` },

  { cs: 'čtvrtek', en: 'Thursday', pattern: 'hrad (čtvrtka)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <rect x="6" y="22" width="108" height="72" rx="6" fill="#fff" ${S}/>
    <path d="M6 28 a6 6 0 0 1 6 -6 h96 a6 6 0 0 1 6 6 v6 H6 Z" fill="#4fa3e3" ${S}/>
    <rect x="34" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="70" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="52.3" y="34" width="15.4" height="60" fill="#e94b8a" ${S}/>
    <path d="M21.4 34 V94 M36.9 34 V94 M83.1 34 V94 M98.6 34 V94" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" fill="#333" text-anchor="middle">
      <text x="13.7" y="50">PO</text><text x="29.1" y="50">ÚT</text><text x="44.6" y="50">ST</text>
      <text x="60" y="50" fill="#fff">ČT</text><text x="75.4" y="50">PÁ</text><text x="90.9" y="50">SO</text><text x="106.3" y="50">NE</text>
    </g>
    <g fill="#ddd">
      <rect x="9.7" y="62" width="8" height="7" rx="1"/><rect x="25.1" y="62" width="8" height="7" rx="1"/>
      <rect x="40.6" y="62" width="8" height="7" rx="1"/><rect x="71.4" y="62" width="8" height="7" rx="1"/>
      <rect x="86.9" y="62" width="8" height="7" rx="1"/><rect x="102.3" y="62" width="8" height="7" rx="1"/>
      <rect x="9.7" y="74" width="8" height="7" rx="1"/><rect x="25.1" y="74" width="8" height="7" rx="1"/>
      <rect x="40.6" y="74" width="8" height="7" rx="1"/><rect x="71.4" y="74" width="8" height="7" rx="1"/>
      <rect x="86.9" y="74" width="8" height="7" rx="1"/><rect x="102.3" y="74" width="8" height="7" rx="1"/>
    </g>
    <path d="M54.4 72 L58.9 78 L65.9 64" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` },

  { cs: 'pátek', en: 'Friday', pattern: 'hrad (pátku)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <rect x="6" y="22" width="108" height="72" rx="6" fill="#fff" ${S}/>
    <path d="M6 28 a6 6 0 0 1 6 -6 h96 a6 6 0 0 1 6 6 v6 H6 Z" fill="#4fa3e3" ${S}/>
    <rect x="34" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="70" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="67.7" y="34" width="15.4" height="60" fill="#e94b8a" ${S}/>
    <path d="M21.4 34 V94 M36.9 34 V94 M52.3 34 V94 M98.6 34 V94" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" fill="#333" text-anchor="middle">
      <text x="13.7" y="50">PO</text><text x="29.1" y="50">ÚT</text><text x="44.6" y="50">ST</text>
      <text x="60" y="50">ČT</text><text x="75.4" y="50" fill="#fff">PÁ</text><text x="90.9" y="50">SO</text><text x="106.3" y="50">NE</text>
    </g>
    <g fill="#ddd">
      <rect x="9.7" y="62" width="8" height="7" rx="1"/><rect x="25.1" y="62" width="8" height="7" rx="1"/>
      <rect x="40.6" y="62" width="8" height="7" rx="1"/><rect x="56" y="62" width="8" height="7" rx="1"/>
      <rect x="86.9" y="62" width="8" height="7" rx="1"/><rect x="102.3" y="62" width="8" height="7" rx="1"/>
      <rect x="9.7" y="74" width="8" height="7" rx="1"/><rect x="25.1" y="74" width="8" height="7" rx="1"/>
      <rect x="40.6" y="74" width="8" height="7" rx="1"/><rect x="56" y="74" width="8" height="7" rx="1"/>
      <rect x="86.9" y="74" width="8" height="7" rx="1"/><rect x="102.3" y="74" width="8" height="7" rx="1"/>
    </g>
    <path d="M69.8 72 L74.3 78 L81.3 64" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <g stroke="#333" stroke-width="1.5">
      <circle cx="84" cy="8" r="2.5" fill="#4fa3e3"/><circle cx="116" cy="12" r="2.5" fill="#6cc06a"/>
      <circle cx="80" cy="20" r="2.5" fill="#e63946"/><circle cx="112" cy="27" r="2.5" fill="#f9c74f"/>
      <circle cx="115" cy="3" r="2.5" fill="#e94b8a"/>
    </g>
    <path d="M100 6 L112 32 H88 Z" fill="#e94b8a" ${S}/>
    <path d="M94 19 L106 19 M91 25.5 L109 25.5" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <circle cx="100" cy="6" r="3.5" fill="#f9c74f" ${S}/>` },

  { cs: 'víkend', en: 'weekend', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M18 5 V2 M18 25 V28 M29 15 H32 M7 15 H4 M25.8 7.2 L27.9 5.1 M10.2 7.2 L8.1 5.1 M25.8 22.8 L27.9 24.9 M10.2 22.8 L8.1 24.9" fill="none" stroke="#f4a261" stroke-width="3" stroke-linecap="round"/>
    <circle cx="18" cy="15" r="8" fill="#f9c74f" ${S}/>
    <rect x="6" y="22" width="108" height="72" rx="6" fill="#fff" ${S}/>
    <path d="M6 28 a6 6 0 0 1 6 -6 h96 a6 6 0 0 1 6 6 v6 H6 Z" fill="#4fa3e3" ${S}/>
    <rect x="34" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <rect x="70" y="14" width="6" height="16" rx="3" fill="#7a7f87" ${S}/>
    <path d="M83.1 34 H114 V88 a6 6 0 0 1 -6 6 H83.1 Z" fill="#e94b8a" ${S}/>
    <path d="M21.4 34 V94 M36.9 34 V94 M52.3 34 V94 M67.7 34 V94 M98.6 34 V94" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" fill="#333" text-anchor="middle">
      <text x="13.7" y="50">PO</text><text x="29.1" y="50">ÚT</text><text x="44.6" y="50">ST</text>
      <text x="60" y="50">ČT</text><text x="75.4" y="50">PÁ</text><text x="90.9" y="50" fill="#fff">SO</text><text x="106.3" y="50" fill="#fff">NE</text>
    </g>
    <g fill="#ddd">
      <rect x="9.7" y="62" width="8" height="7" rx="1"/><rect x="25.1" y="62" width="8" height="7" rx="1"/>
      <rect x="40.6" y="62" width="8" height="7" rx="1"/><rect x="56" y="62" width="8" height="7" rx="1"/>
      <rect x="71.4" y="62" width="8" height="7" rx="1"/>
      <rect x="9.7" y="74" width="8" height="7" rx="1"/><rect x="25.1" y="74" width="8" height="7" rx="1"/>
      <rect x="40.6" y="74" width="8" height="7" rx="1"/><rect x="56" y="74" width="8" height="7" rx="1"/>
      <rect x="71.4" y="74" width="8" height="7" rx="1"/>
    </g>
    <path d="M85.3 72 L89.8 78 L96.8 64 M100.7 72 L105.2 78 L112.2 64" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="90" y="14" width="22" height="14" fill="#b5722f" ${S}/>
    <path d="M86 15 L101 2 L116 15 Z" fill="#e63946" ${S}/>
    <rect x="98" y="19" width="6" height="9" fill="#5a3a22" ${S}/>
    <rect x="92" y="18" width="4" height="4" fill="#bde0fe" ${S}/><rect x="106" y="18" width="4" height="4" fill="#bde0fe" ${S}/>` },

  { cs: 'podzim', en: 'autumn', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M4 86 H116 V96 H4 Z" fill="#6cc06a" ${S}/>
    <rect x="27" y="56" width="10" height="32" fill="#8b4a2b" ${S}/>
    <circle cx="32" cy="38" r="26" fill="#f4a261" ${S}/>
    <g fill="#e63946" stroke="#333" stroke-width="1.5">
      <circle cx="18" cy="30" r="4"/><circle cx="34" cy="20" r="4"/><circle cx="48" cy="32" r="4"/>
      <circle cx="22" cy="48" r="4"/><circle cx="42" cy="50" r="4"/><circle cx="34" cy="38" r="4"/>
    </g>
    <ellipse cx="62" cy="48" rx="4.5" ry="3" fill="#e63946" stroke="#333" stroke-width="1.5"/>
    <ellipse cx="70" cy="62" rx="4.5" ry="3" fill="#f4a261" stroke="#333" stroke-width="1.5"/>
    <ellipse cx="58" cy="72" rx="4.5" ry="3" fill="#f9c74f" stroke="#333" stroke-width="1.5"/>
    <path d="M46 86 Q64 70 82 86 Z" fill="#f4a261" ${S}/>
    <circle cx="58" cy="82" r="2" fill="#e63946"/><circle cx="66" cy="78" r="2" fill="#e63946"/><circle cx="72" cy="83" r="2" fill="#f9c74f"/>
    <rect x="96" y="70" width="12" height="18" rx="3" fill="#ffe08a" ${S}/>
    <path d="M86 72 Q102 48 118 72 Z" fill="#8b4a2b" ${S}/>
    <path d="M70 34 A20 20 0 0 1 110 34 Z" fill="#e63946" ${S}/>
    <path d="M78 34 Q90 10 102 34" fill="none" stroke="#333" stroke-width="2"/>
    <path d="M90 34 V52 Q90 58 84 57" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'leden', en: 'January', pattern: 'hrad (ledna)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M4 96 V80 Q60 62 116 80 V96 Z" fill="#fff" ${S}/>
    <path d="M52 16 V30 M45 23 H59 M47 18 L57 28 M57 18 L47 28 M84 8 V22 M77 15 H91 M79 10 L89 20 M89 10 L79 20 M104 36 V50 M97 43 H111 M99 38 L109 48 M109 38 L99 48" fill="none" stroke="#4fa3e3" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="42" y="56" width="6" height="14" fill="#8b4a2b" ${S}/>
    <rect x="78" y="56" width="6" height="14" fill="#8b4a2b" ${S}/>
    <rect x="34" y="48" width="56" height="8" rx="2" fill="#b5722f" ${S}/>
    <path d="M28 76 H92 Q104 76 104 64" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M28 76 H92 Q104 76 104 64" fill="none" stroke="#e63946" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M104 64 Q112 58 110 46" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">1</text>` },

  { cs: 'únor', en: 'February', pattern: 'hrad (února)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M100 8 V40 M84 24 H116 M89 13 L111 35 M111 13 L89 35" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <path d="M96 12 L100 8 L104 12 M96 36 L100 40 L104 36 M88 20 L84 24 L88 28 M112 20 L116 24 L112 28" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M78 68 L98 94" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M78 68 L98 94" stroke="#b5722f" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 46 Q34 36 40 20 Q52 30 46 46 Z" fill="#e63946" ${S}/>
    <path d="M56 44 Q50 28 56 12 Q62 28 56 44 Z" fill="#f9c74f" ${S}/>
    <path d="M66 46 Q60 30 72 20 Q78 36 66 46 Z" fill="#4fa3e3" ${S}/>
    <path d="M46 44 L41 24 M56 42 V16 M66 44 L71 24" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M22 50 Q56 34 90 50 Q92 70 74 74 Q64 74 56 66 Q48 74 38 74 Q20 70 22 50 Z" fill="#5a3fbf" ${S}/>
    <ellipse cx="42" cy="56" rx="8" ry="5" fill="#fff" ${S}/>
    <ellipse cx="70" cy="56" rx="8" ry="5" fill="#fff" ${S}/>
    <circle cx="56" cy="50" r="2" fill="#f9c74f"/><circle cx="30" cy="62" r="2" fill="#f9c74f"/><circle cx="82" cy="62" r="2" fill="#f9c74f"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">2</text>` },

  { cs: 'březen', en: 'March', pattern: 'hrad (března)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M4 82 H116 V96 H4 Z" fill="#6cc06a" ${S}/>
    <path d="M4 96 V84 Q20 74 40 82 Q50 86 62 82 Q86 72 116 84 V96 Z" fill="#fff" ${S}/>
    <path d="M52 84 V50 Q52 44 58 46 M84 82 V42 Q84 36 90 38 M30 84 V60 Q30 54 36 56" fill="none" stroke="#3f9d55" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M52 84 Q40 76 44 62 Q54 70 52 84 Z" fill="#6cc06a" ${S}/>
    <path d="M84 82 Q96 74 92 58 Q82 68 84 82 Z" fill="#6cc06a" ${S}/>
    <path d="M58 46 Q46 54 51 66 Q57 62 58 46 Z M58 46 Q70 54 65 66 Q59 62 58 46 Z" fill="#fff" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <path d="M58 46 Q51 58 58 68 Q65 58 58 46 Z" fill="#fff" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <ellipse cx="58" cy="46" rx="3.5" ry="2.5" fill="#6cc06a" stroke="#333" stroke-width="1.5"/>
    <path d="M90 38 Q78 46 83 58 Q89 54 90 38 Z M90 38 Q102 46 97 58 Q91 54 90 38 Z" fill="#fff" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <path d="M90 38 Q83 50 90 60 Q97 50 90 38 Z" fill="#fff" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <ellipse cx="90" cy="38" rx="3.5" ry="2.5" fill="#6cc06a" stroke="#333" stroke-width="1.5"/>
    <path d="M36 56 Q26 62 30 72 Q35 69 36 56 Z M36 56 Q46 62 42 72 Q37 69 36 56 Z" fill="#fff" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <path d="M36 56 Q30 66 36 74 Q42 66 36 56 Z" fill="#fff" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <ellipse cx="36" cy="56" rx="3" ry="2.2" fill="#6cc06a" stroke="#333" stroke-width="1.5"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">3</text>` },

  { cs: 'duben', en: 'April', pattern: 'hrad (dubna)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M66 92 L104 26" stroke="#333" stroke-width="10" stroke-linecap="round"/>
    <path d="M66 92 L104 26" stroke="#b5722f" stroke-width="7" stroke-linecap="round"/>
    <path d="M70 84 L76 87 M74 77 L80 80 M78 70 L84 73 M82 63 L88 66 M86 56 L92 59 M90 49 L96 52 M94 42 L100 45 M98 35 L104 38" stroke="#8b4a2b" stroke-width="2" stroke-linecap="round"/>
    <path d="M104 26 Q116 20 114 10" fill="none" stroke="#e63946" stroke-width="3" stroke-linecap="round"/>
    <path d="M104 26 Q98 14 108 6" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <path d="M104 26 Q112 30 116 40" fill="none" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <path d="M64 88 L70 78" stroke="#e63946" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 62 Q12 30 40 30 Q68 30 68 62 Q68 90 40 90 Q12 90 12 62 Z" fill="#e63946" ${S}/>
    <path d="M14 50 Q40 40 66 50 M14 74 Q40 84 66 74" fill="none" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <path d="M17 58 Q40 68 63 58 M17 66 Q40 56 63 66" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="40" cy="62" r="3" fill="#f9c74f"/><circle cx="26" cy="62" r="2.5" fill="#fff"/><circle cx="54" cy="62" r="2.5" fill="#fff"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">4</text>` },

  { cs: 'květen', en: 'May', pattern: 'hrad (května)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M4 88 H116 V96 H4 Z" fill="#8fd18a" ${S}/>
    <rect x="36" y="60" width="10" height="30" fill="#8b4a2b" ${S}/>
    <circle cx="41" cy="46" r="24" fill="#fff" ${S}/>
    <g fill="#e94b8a" stroke="#333" stroke-width="1.5">
      <circle cx="28" cy="40" r="4"/><circle cx="40" cy="28" r="4"/><circle cx="54" cy="38" r="4"/>
      <circle cx="30" cy="56" r="4"/><circle cx="48" cy="58" r="4"/><circle cx="58" cy="50" r="4"/><circle cx="42" cy="46" r="4"/>
    </g>
    <g fill="#f9c74f">
      <circle cx="28" cy="40" r="1.3"/><circle cx="40" cy="28" r="1.3"/><circle cx="54" cy="38" r="1.3"/>
      <circle cx="30" cy="56" r="1.3"/><circle cx="48" cy="58" r="1.3"/><circle cx="58" cy="50" r="1.3"/><circle cx="42" cy="46" r="1.3"/>
    </g>
    <path d="M94 32 Q80 50 78 88 M94 32 Q108 50 110 88 M94 32 Q86 56 88 88 M94 32 Q102 56 100 88" fill="none" stroke="#e63946" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M94 32 Q86 56 88 88 M94 32 Q108 50 110 88" fill="none" stroke="#4fa3e3" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M94 90 V20" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M94 90 V20" stroke="#b5722f" stroke-width="3" stroke-linecap="round"/>
    <circle cx="94" cy="30" r="8" fill="none" stroke="#3f9d55" stroke-width="4"/>
    <path d="M94 4 L104 22 H84 Z" fill="#3f9d55" ${S}/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">5</text>` },

  { cs: 'červen', en: 'June', pattern: 'hrad (června)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <rect x="64" y="14" width="48" height="66" rx="3" fill="#fff" ${S}/>
    <rect x="70" y="20" width="36" height="8" rx="2" fill="#4fa3e3" stroke="#333" stroke-width="1.5"/>
    <path d="M70 38 H90 M70 50 H90 M70 62 H90 M70 74 H90" stroke="#9aa0a8" stroke-width="2.5" stroke-linecap="round"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#e63946" text-anchor="middle">
      <text x="100" y="42">1</text><text x="100" y="54">1</text><text x="100" y="66">1</text><text x="100" y="78">1</text>
    </g>
    <path d="M40 92 Q16 78 18 58 Q22 44 40 44 Q58 44 62 58 Q64 78 40 92 Z" fill="#e63946" ${S}/>
    <path d="M40 46 L26 38 L36 40 L34 28 L40 38 L46 28 L44 40 L54 38 Z" fill="#3f9d55" ${S}/>
    <g fill="#f9c74f">
      <circle cx="30" cy="58" r="1.8"/><circle cx="40" cy="54" r="1.8"/><circle cx="50" cy="58" r="1.8"/>
      <circle cx="26" cy="68" r="1.8"/><circle cx="36" cy="66" r="1.8"/><circle cx="46" cy="68" r="1.8"/><circle cx="54" cy="68" r="1.8"/>
      <circle cx="32" cy="78" r="1.8"/><circle cx="44" cy="78" r="1.8"/><circle cx="40" cy="86" r="1.8"/>
    </g>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">6</text>` },

  { cs: 'červenec', en: 'July', pattern: 'stroj (července)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M4 66 H116 V96 H4 Z" fill="#8fd18a" ${S}/>
    <ellipse cx="86" cy="42" rx="28" ry="14" fill="#4fa3e3" ${S}/>
    <path d="M70 40 q4 -3 8 0 q4 3 8 0 M84 46 q4 -3 8 0 q4 3 8 0" fill="none" stroke="#dff3ff" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 90 L44 44 L72 90 Z" fill="#f4a261" ${S}/>
    <path d="M32 90 L44 68 L56 90 Z" fill="#c0392b" ${S}/>
    <path d="M86 88 L106 78 M86 78 L106 88" stroke="#8b4a2b" stroke-width="5" stroke-linecap="round"/>
    <path d="M96 84 Q80 70 92 56 Q92 66 98 62 Q100 54 104 56 Q116 72 96 84 Z" fill="#f4a261" ${S}/>
    <path d="M96 82 Q90 72 96 66 Q100 72 102 68 Q106 76 96 82 Z" fill="#f9c74f"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">7</text>` },

  { cs: 'srpen', en: 'August', pattern: 'hrad (srpna)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M44 96 V80" stroke="#3f9d55" stroke-width="4" stroke-linecap="round"/>
    <path d="M44 88 Q32 90 30 78 Q42 78 44 88 Z" fill="#6cc06a" ${S}/>
    <polygon points="44.0,22.0 48.5,32.5 57.0,25.0 56.5,36.4 67.5,33.3 62.0,43.3 73.2,45.3 64.0,52.0 73.2,58.7 62.0,60.7 67.5,70.7 56.5,67.6 57.0,79.0 48.5,71.5 44.0,82.0 39.5,71.5 31.0,79.0 31.5,67.6 20.5,70.7 26.0,60.7 14.8,58.7 24.0,52.0 14.8,45.3 26.0,43.3 20.5,33.3 31.5,36.4 31.0,25.0 39.5,32.5" fill="#f9c74f" ${S}/>
    <circle cx="44" cy="52" r="14" fill="#8b4a2b" ${S}/>
    <g fill="#3b2a1a">
      <circle cx="40" cy="48" r="1.6"/><circle cx="48" cy="48" r="1.6"/><circle cx="44" cy="54" r="1.6"/><circle cx="38" cy="56" r="1.6"/><circle cx="50" cy="56" r="1.6"/>
    </g>
    <path d="M86 96 V48 M100 96 V40 M112 96 V52" stroke="#b5722f" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="86" cy="42" rx="5" ry="10" fill="#f9c74f" ${S}/>
    <ellipse cx="100" cy="34" rx="5" ry="11" fill="#f9c74f" ${S}/>
    <ellipse cx="112" cy="46" rx="5" ry="10" fill="#f9c74f" ${S}/>
    <path d="M83 36 L89 40 M83 42 L89 46 M83 48 L89 52 M97 28 L103 32 M97 34 L103 38 M97 40 L103 44 M109 40 L115 44 M109 46 L115 50 M109 52 L115 56" stroke="#f4a261" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">8</text>` },

  { cs: 'říjen', en: 'October', pattern: 'hrad (října)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M88 56 Q76 66 80 76 Q66 82 60 92" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M78 66 L84 70 M74 70 L80 74 M64 84 L70 88 M60 88 L66 92" stroke="#e63946" stroke-width="3" stroke-linecap="round"/>
    <polygon points="88,4 110,30 88,56 66,30" fill="#e63946" ${S}/>
    <path d="M88 4 V56 M66 30 H110" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <polygon points="88,4 110,30 88,30" fill="#f9c74f" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="88,56 66,30 88,30" fill="#f9c74f" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 50 Q32 42 36 40 Q40 42 40 50" fill="#3f9d55" ${S}/>
    <ellipse cx="36" cy="72" rx="30" ry="22" fill="#f4a261" ${S}/>
    <ellipse cx="36" cy="72" rx="12" ry="22" fill="none" stroke="#333" stroke-width="2"/>
    <ellipse cx="36" cy="72" rx="22" ry="22" fill="none" stroke="#333" stroke-width="2"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">10</text>` },

  { cs: 'listopad', en: 'November', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <path d="M4 88 H116 V96 H4 Z" fill="#9aa0a8" ${S}/>
    <path d="M48 90 V50 M48 62 Q34 56 30 40 M48 54 Q60 46 64 30 M48 70 Q38 68 34 60 M48 50 Q46 36 40 28 M48 50 Q52 40 60 42" fill="none" stroke="#8b4a2b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="72" cy="52" rx="4.5" ry="3" fill="#f4a261" stroke="#333" stroke-width="1.5"/>
    <ellipse cx="24" cy="62" rx="4.5" ry="3" fill="#e63946" stroke="#333" stroke-width="1.5"/>
    <ellipse cx="64" cy="74" rx="4.5" ry="3" fill="#f4a261" stroke="#333" stroke-width="1.5"/>
    <rect x="34" y="74" width="60" height="7" rx="3.5" fill="#ddd"/>
    <rect x="10" y="64" width="40" height="7" rx="3.5" fill="#ddd"/>
    <rect x="60" y="40" width="46" height="7" rx="3.5" fill="#ddd"/>
    <path d="M100 58 Q94 48 100 42 Q106 48 100 58 Z" fill="#f9c74f" ${S}/>
    <rect x="90" y="58" width="20" height="30" rx="3" fill="#e63946" ${S}/>
    <rect x="94" y="62" width="4" height="20" rx="2" fill="#ffe08a"/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">11</text>` },

  { cs: 'prosinec', en: 'December', pattern: 'stroj (prosince)', gender: 'mi', level: 'A1', topic: 'time', svg: `
    <rect x="65" y="82" width="10" height="12" fill="#8b4a2b" ${S}/>
    <path d="M70 44 L98 82 L42 82 Z" fill="#3f9d55" ${S}/>
    <path d="M70 26 L92 58 L48 58 Z" fill="#6cc06a" ${S}/>
    <path d="M70 14 L86 38 L54 38 Z" fill="#8fd18a" ${S}/>
    <polygon points="70,4 73.9,9.2 76.6,9.5 74.2,13.1 75.1,18.5 70,15.5 64.9,18.5 65.8,13.1 63.4,9.5 66.1,9.2" fill="#f9c74f" ${S}/>
    <g stroke="#333" stroke-width="1.5">
      <circle cx="64" cy="34" r="3.5" fill="#e63946"/><circle cx="78" cy="50" r="3.5" fill="#f9c74f"/>
      <circle cx="60" cy="54" r="3.5" fill="#4fa3e3"/><circle cx="84" cy="72" r="3.5" fill="#e63946"/>
      <circle cx="56" cy="76" r="3.5" fill="#f9c74f"/><circle cx="70" cy="66" r="3.5" fill="#4fa3e3"/>
    </g>
    <rect x="94" y="72" width="22" height="22" fill="#e63946" ${S}/>
    <rect x="102" y="72" width="6" height="22" fill="#f9c74f"/>
    <circle cx="101" cy="69" r="3" fill="#f9c74f" stroke="#333" stroke-width="1.5"/><circle cx="109" cy="69" r="3" fill="#f9c74f" stroke="#333" stroke-width="1.5"/>
    <circle cx="22" cy="60" r="5" fill="#f4a261" ${S}/>
    <path d="M10 66 Q18 60 26 66" fill="none" stroke="#e63946" stroke-width="3" stroke-linecap="round"/>
    <path d="M10 66 H30 V80 Q30 84 34 86 Q42 88 42 94 H10 Z" fill="#333" ${S}/>
    <rect x="8" y="62" width="24" height="6" rx="2" fill="#e63946" ${S}/>
    <rect x="4" y="4" width="22" height="24" rx="3" fill="#fff" ${S}/>
    <path d="M4 7 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v5 H4 Z" fill="#e63946" ${S}/>
    <rect x="8" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <rect x="19" y="2" width="3" height="5" rx="1.5" fill="#7a7f87" stroke="#333" stroke-width="1.5"/>
    <text x="15" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">12</text>` }
);
