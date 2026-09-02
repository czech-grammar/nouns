// A2 deck: town, travel, body, clothes, school (neuter)
WORDS.push(
  { cs: 'studio', en: 'studio', pattern: 'město (studia)', gender: 'n', level: 'A2', official: 'A2', topic: 'town', svg: `
    <rect x="4" y="4" width="56" height="15" rx="3" fill="#1d2a5a" ${S}/>
    <text x="32" y="15.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#fff">STUDIO 1</text>
    <rect x="70" y="4" width="46" height="15" rx="3" fill="#e63946" ${S}/>
    <text x="93" y="15.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#fff">ON AIR</text>
    <path d="M22 44 H46 L50 66 H18 Z" fill="#1d2a5a" ${S}/>
    <path d="M30 44 L34 52 L38 44 Z" fill="#fff" stroke="#333" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M34 50 L32 58" stroke="#e63946" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="34" cy="32" r="10" fill="#ffd8b8" ${S}/>
    <path d="M24 32 Q24 21 34 21 Q44 21 44 32 Q40 26 34 26 Q28 26 24 32 Z" fill="#3b2a1a" ${S}/>
    <circle cx="30.5" cy="33" r="1.5" fill="#333"/><circle cx="37.5" cy="33" r="1.5" fill="#333"/>
    <path d="M30.5 37 Q34 40 37.5 37" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="8" y="64" width="54" height="10" rx="2" fill="#b5722f" ${S}/>
    <rect x="12" y="74" width="5" height="20" fill="#8b4a2b" ${S}/><rect x="53" y="74" width="5" height="20" fill="#8b4a2b" ${S}/>
    <rect x="50" y="50" width="5" height="14" rx="2.5" fill="#7a7f87" ${S}/>
    <circle cx="52.5" cy="48" r="4" fill="#333"/>
    <rect x="80" y="40" width="28" height="20" rx="3" fill="#7a7f87" ${S}/>
    <circle cx="78" cy="50" r="7" fill="#333" ${S}/><circle cx="78" cy="50" r="3" fill="#4fa3e3"/>
    <rect x="96" y="30" width="14" height="10" rx="2" fill="#9aa0a8" ${S}/>
    <circle cx="106" cy="45" r="2" fill="#e63946"/>
    <path d="M94 60 L80 94 M94 60 L108 94 M94 60 V92" fill="none" ${S}/>` },

  { cs: 'stanoviště', en: 'stand, taxi rank', pattern: 'moře', gender: 'n', level: 'A2', official: 'A2', topic: 'town', svg: `
    <rect x="4" y="90" width="112" height="6" fill="#777" ${S}/>
    <rect x="12" y="30" width="5" height="60" fill="#7a7f87" ${S}/>
    <rect x="4" y="6" width="36" height="24" rx="3" fill="#f9c74f" ${S}/>
    <text x="22" y="23" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#333">TAXI</text>
    <path d="M22 58 H36 L38 82 H20 Z" fill="#6cc06a" ${S}/>
    <path d="M24 82 V90 M34 82 V90" stroke="#1d2a5a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="29" cy="50" r="8" fill="#ffd8b8" ${S}/>
    <path d="M21 50 Q21 41 29 41 Q37 41 37 50 Q33 45 29 45 Q25 45 21 50 Z" fill="#8b4a2b" ${S}/>
    <circle cx="26" cy="51" r="1.4" fill="#333"/><circle cx="32" cy="51" r="1.4" fill="#333"/>
    <path d="M26 54 Q29 57 32 54" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="52" y="48" width="12" height="7" rx="2" fill="#fff" ${S}/>
    <path d="M46 68 L52 55 H68 L76 68 Z" fill="#f9c74f" ${S}/>
    <path d="M50 66 L54 58 H66 L72 66 Z" fill="#bde0fe" ${S}/>
    <rect x="42" y="66" width="38" height="18" rx="4" fill="#f9c74f" ${S}/>
    <circle cx="51" cy="86" r="6" fill="#333" ${S}/><circle cx="71" cy="86" r="6" fill="#333" ${S}/>
    <rect x="92" y="48" width="12" height="7" rx="2" fill="#fff" ${S}/>
    <path d="M86 68 L92 55 H108 L116 68 Z" fill="#f9c74f" ${S}/>
    <path d="M90 66 L94 58 H106 L112 66 Z" fill="#bde0fe" ${S}/>
    <rect x="82" y="66" width="36" height="18" rx="4" fill="#f9c74f" ${S}/>
    <circle cx="91" cy="86" r="6" fill="#333" ${S}/><circle cx="110" cy="86" r="6" fill="#333" ${S}/>` },

  { cs: 'taxi', en: 'taxi', pattern: 'indeclinable', gender: 'n', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <path d="M6 94 L14 64" stroke="#333" stroke-width="11" stroke-linecap="round"/>
    <path d="M6 94 L14 64" stroke="#ffd8b8" stroke-width="7" stroke-linecap="round"/>
    <path d="M6 66 V50 Q6 47 8 46 V36 a2 2 0 0 1 4 0 V46 V32 a2 2 0 0 1 4 0 V46 V33 a2 2 0 0 1 4 0 V46 V38 a2 2 0 0 1 4 0 V50 L28 55 a2.5 2.5 0 0 1 -2 5 L24 60 V66 Z" fill="#ffd8b8" ${S}/>
    <rect x="44" y="6" width="40" height="15" rx="3" fill="#f9c74f" ${S}/>
    <text x="64" y="17.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">TAXI</text>
    <path d="M34 54 L40 24 H88 L94 54 Z" fill="#f7efd8" ${S}/>
    <path d="M42 50 L46 29 H82 L86 50 Z" fill="#bde0fe" ${S}/>
    <rect x="26" y="42" width="10" height="8" rx="2" fill="#f7efd8" ${S}/>
    <rect x="92" y="42" width="10" height="8" rx="2" fill="#f7efd8" ${S}/>
    <rect x="28" y="84" width="14" height="10" rx="2" fill="#333"/><rect x="86" y="84" width="14" height="10" rx="2" fill="#333"/>
    <rect x="26" y="52" width="76" height="32" rx="6" fill="#f7efd8" ${S}/>
    <circle cx="38" cy="66" r="6" fill="#f9c74f" ${S}/><circle cx="90" cy="66" r="6" fill="#f9c74f" ${S}/>
    <rect x="52" y="60" width="24" height="9" rx="2" fill="#7a7f87" ${S}/>
    <path d="M56 64.5 H72" stroke="#333" stroke-width="1.5"/>
    <rect x="54" y="73" width="20" height="6" rx="1" fill="#fff" ${S}/>
    <rect x="22" y="82" width="84" height="8" rx="3" fill="#9aa0a8" ${S}/>` },

  { cs: 'vozidlo', en: 'vehicle', pattern: 'město', gender: 'n', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <path d="M14 30 L22 16 H44 L52 30 Z" fill="#e63946" ${S}/>
    <path d="M24 19 H32 V29 H18 Z M36 19 H42 L48 29 H36 Z" fill="#bde0fe" stroke="#333" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="6" y="30" width="52" height="14" rx="4" fill="#e63946" ${S}/>
    <circle cx="18" cy="44" r="5.5" fill="#333" ${S}/><circle cx="46" cy="44" r="5.5" fill="#333" ${S}/>
    <circle cx="74" cy="42" r="8" fill="#333" ${S}/><circle cx="74" cy="42" r="3" fill="#9aa0a8"/>
    <circle cx="106" cy="42" r="8" fill="#333" ${S}/><circle cx="106" cy="42" r="3" fill="#9aa0a8"/>
    <path d="M74 42 L84 28 H98 L106 42" fill="none" ${S}/>
    <ellipse cx="90" cy="30" rx="9" ry="5" fill="#4fa3e3" ${S}/>
    <rect x="80" y="20" width="14" height="6" rx="3" fill="#333"/>
    <path d="M98 26 L106 16 M102 21 H110" fill="none" ${S}/>
    <rect x="6" y="58" width="52" height="30" rx="4" fill="#f4a261" ${S}/>
    <path d="M6 76 H58" stroke="#333" stroke-width="2"/>
    <g fill="#bde0fe" stroke="#333" stroke-width="1.5">
      <rect x="10" y="62" width="9" height="9"/><rect x="23" y="62" width="9" height="9"/><rect x="36" y="62" width="9" height="9"/><rect x="49" y="62" width="6" height="9"/>
    </g>
    <circle cx="18" cy="90" r="5.5" fill="#333" ${S}/><circle cx="46" cy="90" r="5.5" fill="#333" ${S}/>
    <rect x="64" y="58" width="32" height="30" rx="2" fill="#6cc06a" ${S}/>
    <path d="M96 88 V68 H104 L114 78 V88 Z" fill="#6cc06a" ${S}/>
    <path d="M99 78 V71 H103 L109 78 Z" fill="#bde0fe" stroke="#333" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="76" cy="90" r="5.5" fill="#333" ${S}/><circle cx="104" cy="90" r="5.5" fill="#333" ${S}/>` },

  { cs: 'zavazadlo', en: 'luggage', pattern: 'město', gender: 'n', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="98" y="26" width="6" height="60" fill="#9aa0a8" ${S}/>
    <rect x="92" y="20" width="22" height="8" rx="4" fill="#7a7f87" ${S}/>
    <rect x="12" y="84" width="94" height="6" fill="#7a7f87" ${S}/>
    <circle cx="22" cy="93" r="4" fill="#333" ${S}/><circle cx="90" cy="93" r="4" fill="#333" ${S}/>
    <rect x="18" y="52" width="70" height="32" rx="4" fill="#4fa3e3" ${S}/>
    <path d="M18 68 H88" stroke="#1d2a5a" stroke-width="3"/>
    <rect x="30" y="58" width="6" height="8" rx="1" fill="#f9c74f" ${S}/><rect x="70" y="58" width="6" height="8" rx="1" fill="#f9c74f" ${S}/>
    <path d="M20 26 V48 M20 26 Q20 22 24 22 Q28 22 28 26" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M24 30 Q26 18 34 18 H62 Q70 18 72 30 V52 H24 Z" fill="#e63946" ${S}/>
    <path d="M38 18 Q48 6 58 18" fill="none" ${S}/>
    <path d="M24 42 H72" stroke="#c0392b" stroke-width="2.5"/>
    <rect x="70" y="26" width="24" height="28" rx="8" fill="#6cc06a" ${S}/>
    <path d="M76 26 Q82 16 88 26" fill="none" ${S}/>
    <rect x="74" y="40" width="16" height="10" rx="3" fill="#3f9d55" ${S}/>
    <g transform="translate(14 44) rotate(-20)">
      <rect x="-8" y="-5" width="16" height="10" rx="1.5" fill="#ffe08a" ${S}/>
      <circle cx="-4" cy="0" r="1.5" fill="#333"/>
      <path d="M0 -1 H5 M0 2 H4" stroke="#333" stroke-width="1.2" stroke-linecap="round"/>
    </g>
    <g transform="translate(100 60) rotate(15)">
      <rect x="-8" y="-5" width="16" height="10" rx="1.5" fill="#ffe08a" ${S}/>
      <circle cx="-4" cy="0" r="1.5" fill="#333"/>
      <path d="M0 -1 H5 M0 2 H4" stroke="#333" stroke-width="1.2" stroke-linecap="round"/>
    </g>` },

  { cs: 'kupé', en: 'compartment (train)', pattern: 'indeclinable', gender: 'n', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="4" y="4" width="84" height="92" fill="#f4e4c1" ${S}/>
    <rect x="4" y="86" width="84" height="10" fill="#9aa0a8" ${S}/>
    <rect x="8" y="14" width="76" height="4" fill="#7a7f87" ${S}/>
    <rect x="28" y="5" width="24" height="9" rx="2" fill="#8b4a2b" ${S}/>
    <rect x="26" y="24" width="40" height="30" rx="2" fill="#bde0fe" ${S}/>
    <path d="M26 46 Q36 38 46 44 Q56 50 66 42 V54 H26 Z" fill="#6cc06a" stroke="#333" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="58" cy="32" r="4" fill="#f9c74f"/>
    <rect x="8" y="46" width="10" height="34" rx="2" fill="#c0392b" ${S}/>
    <rect x="8" y="72" width="34" height="14" rx="2" fill="#e63946" ${S}/>
    <rect x="74" y="46" width="10" height="34" rx="2" fill="#c0392b" ${S}/>
    <rect x="50" y="72" width="34" height="14" rx="2" fill="#e63946" ${S}/>
    <rect x="88" y="4" width="28" height="92" fill="#ddd" ${S}/>
    <rect x="94" y="12" width="16" height="36" rx="2" fill="#bde0fe" ${S}/>
    <rect x="90" y="58" width="5" height="16" rx="2" fill="#333"/>
    <path d="M100 82 H112 M104 78 L100 82 L104 86" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` },

  { cs: 'odbavení', en: 'check-in', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="18" y="4" width="84" height="16" rx="3" fill="#1d2a5a" ${S}/>
    <text x="60" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">ODBAVENÍ</text>
    <path d="M78 42 H98 L100 56 H76 Z" fill="#1d2a5a" ${S}/>
    <circle cx="88" cy="34" r="9" fill="#ffd8b8" ${S}/>
    <path d="M79 34 Q79 24 88 24 Q97 24 97 34 Q93 29 88 29 Q83 29 79 34 Z" fill="#f2c14e" ${S}/>
    <circle cx="84.5" cy="35" r="1.4" fill="#333"/><circle cx="91.5" cy="35" r="1.4" fill="#333"/>
    <path d="M84.5 38.5 Q88 41 91.5 38.5" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M76 50 L64 56" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M76 50 L64 56" stroke="#ffd8b8" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="56" y="54" width="60" height="30" fill="#4fa3e3" ${S}/>
    <rect x="52" y="50" width="66" height="6" fill="#ddd" ${S}/>
    <path d="M12 52 H32 L34 82 H10 Z" fill="#6cc06a" ${S}/>
    <path d="M16 82 V92 M28 82 V92" stroke="#1d2a5a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="22" cy="42" r="9" fill="#ffd8b8" ${S}/>
    <path d="M13 42 Q13 32 22 32 Q31 32 31 42 Q27 37 22 37 Q17 37 13 42 Z" fill="#3b2a1a" ${S}/>
    <circle cx="18.5" cy="43" r="1.4" fill="#333"/><circle cx="25.5" cy="43" r="1.4" fill="#333"/>
    <path d="M18.5 46.5 Q22 49 25.5 46.5" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M32 58 L46 50" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 58 L46 50" stroke="#ffd8b8" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="44" y="36" width="12" height="16" rx="1.5" fill="#c0392b" ${S}/>
    <circle cx="50" cy="44" r="2.5" fill="#f9c74f"/>
    <rect x="57" y="40" width="18" height="10" rx="1.5" fill="#fff" ${S}/>
    <path d="M60 44 H70 M60 47 H66" stroke="#4fa3e3" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="4" y="88" width="112" height="8" fill="#7a7f87" ${S}/>
    <rect x="38" y="66" width="30" height="22" rx="3" fill="#e63946" ${S}/>
    <path d="M47 66 V62 H59 V66" fill="none" ${S}/>` },

  { cs: 'spojení', en: 'connection (train, bus)', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'travel', svg: `
    <rect x="6" y="6" width="76" height="88" rx="3" fill="#1d2a5a" ${S}/>
    <path d="M12 36 V20 a5 5 0 0 1 5 -5 H30 L36 24 V36 Z" fill="#4fa3e3" ${S}/>
    <rect x="18" y="19" width="8" height="8" rx="1.5" fill="#bde0fe" stroke="#333" stroke-width="1.5"/>
    <circle cx="17" cy="37" r="3" fill="#333"/><circle cx="31" cy="37" r="3" fill="#333"/>
    <text x="60" y="30" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">10:15</text>
    <path d="M24 44 V56 Q24 62 30 62 H50 V70" fill="none" stroke="#f9c74f" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <polygon points="50,78 43,68 57,68" fill="#f9c74f" ${S}/>
    <rect x="12" y="66" width="26" height="20" rx="3" fill="#f4a261" ${S}/>
    <g fill="#bde0fe" stroke="#333" stroke-width="1.5">
      <rect x="15" y="69" width="6" height="7"/><rect x="23" y="69" width="6" height="7"/><rect x="31" y="69" width="4" height="7"/>
    </g>
    <circle cx="18" cy="88" r="3" fill="#333"/><circle cx="32" cy="88" r="3" fill="#333"/>
    <text x="64" y="90" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#fff">10:25</text>
    <circle cx="100" cy="30" r="15" fill="#fff" ${S}/>
    <path d="M100 17 V19 M100 43 V41 M87 30 H89 M113 30 H111" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M100 30 V21 M100 30 L106 34" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="100" cy="30" r="1.5" fill="#333"/>
    <rect x="97" y="45" width="6" height="49" fill="#7a7f87" ${S}/>` },

  { cs: 'čelo', en: 'forehead', pattern: 'město', gender: 'n', level: 'A2', official: 'A2', topic: 'body', svg: `
    <rect x="34" y="78" width="28" height="18" fill="#ffd8b8" ${S}/>
    <circle cx="48" cy="50" r="32" fill="#ffd8b8" ${S}/>
    <path d="M16 46 Q16 18 48 18 Q80 18 80 46 Q74 30 48 30 Q22 30 16 46 Z" fill="#8b4a2b" ${S}/>
    <circle cx="37" cy="56" r="2.5" fill="#333"/><circle cx="59" cy="56" r="2.5" fill="#333"/>
    <path d="M40 68 Q48 74 56 68" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="48" cy="40" r="12" fill="none" stroke="#e63946" stroke-width="3.5"/>
    <path d="M116 92 L104 60" stroke="#333" stroke-width="12" stroke-linecap="round"/>
    <path d="M116 92 L104 60" stroke="#ffd8b8" stroke-width="7" stroke-linecap="round"/>
    <path d="M108 30 Q114 30 114 36 V54 Q114 62 106 62 H94 Q86 62 84 56 L70 55 a2.2 2.2 0 0 1 0 -4.4 L84 50 L66 48 a2.2 2.2 0 0 1 0 -4.4 L84 44 L68 41 a2.2 2.2 0 0 1 0 -4.4 L84 38 L74 34 a2.2 2.2 0 0 1 1 -4 L86 32 Q92 30 98 30 Z" fill="#ffd8b8" ${S}/>` },

  { cs: 'ústa', en: 'mouth', pattern: 'plural only', gender: 'n', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M12 50 Q24 30 46 34 Q54 36 60 40 Q66 36 74 34 Q96 30 108 50 Q94 82 60 86 Q26 82 12 50 Z" fill="#e63946" ${S}/>
    <path d="M22 50 Q40 44 60 46 Q80 44 98 50 Q86 74 60 76 Q34 74 22 50 Z" fill="#8b1e2f" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#fff" stroke="#333" stroke-width="1.5" stroke-linejoin="round">
      <rect x="33" y="47" width="8" height="10" rx="2"/><rect x="42" y="46" width="8" height="12" rx="2"/><rect x="51" y="46" width="8" height="12" rx="2"/>
      <rect x="60" y="46" width="8" height="12" rx="2"/><rect x="69" y="46" width="8" height="12" rx="2"/><rect x="78" y="47" width="8" height="10" rx="2"/>
    </g>
    <path d="M40 75 Q40 60 60 60 Q80 60 80 75 Q70 78 60 77 Q50 78 40 75 Z" fill="#e94b8a" ${S}/>
    <path d="M60 64 V74" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'játra', en: 'liver', pattern: 'plural only', gender: 'n', level: 'A2', official: 'A2', topic: 'body', svg: `
    <path d="M26 26 L10 62 M94 26 L110 62" stroke="#333" stroke-width="12" stroke-linecap="round"/>
    <path d="M26 26 L10 62 M94 26 L110 62" stroke="#ffd8b8" stroke-width="7" stroke-linecap="round"/>
    <rect x="48" y="4" width="24" height="24" fill="#ffd8b8" ${S}/>
    <path d="M26 22 Q30 18 40 18 H80 Q90 18 94 22 L90 96 H30 Z" fill="#ffd8b8" ${S}/>
    <path d="M34 32 H86 M36 42 H84 M38 52 H82" stroke="#e8b898" stroke-width="2" stroke-linecap="round"/>
    <path d="M30 40 Q30 32 40 32 H76 Q86 32 84 42 Q80 54 62 56 Q42 62 33 54 Q28 48 30 40 Z" fill="#a0341f" ${S}/>
    <path d="M40 40 Q48 44 60 44" fill="none" stroke="#7a2416" stroke-width="2" stroke-linecap="round"/>
    <circle cx="60" cy="80" r="2.5" fill="#e8b898"/>` },

  { cs: 'pyžamo', en: 'pyjamas', pattern: 'město', gender: 'n', level: 'A2', official: 'A2', topic: 'clothes', svg: `
    <path d="M106 4 a10 10 0 1 0 9 17 a8 8 0 1 1 -9 -17 Z" fill="#f9c74f" ${S}/>
    <path d="M26 24 L36 12 H54 Q60 20 66 12 H84 L94 24 L90 36 L82 32 V56 H38 V32 L30 36 Z" fill="#bde0fe" ${S}/>
    <path d="M44 16 V54 M52 14 V54 M68 14 V54 M76 16 V54" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <circle cx="60" cy="28" r="2" fill="#333"/><circle cx="60" cy="38" r="2" fill="#333"/><circle cx="60" cy="48" r="2" fill="#333"/>
    <path d="M36 60 H84 L88 94 H66 L60 74 L54 94 H32 Z" fill="#bde0fe" ${S}/>
    <path d="M42 64 L44 92 M50 64 L51 80 M70 64 L69 80 M78 64 L76 92" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <circle cx="8" cy="66" r="3.5" fill="#b5722f" ${S}/><circle cx="20" cy="66" r="3.5" fill="#b5722f" ${S}/>
    <circle cx="14" cy="72" r="9" fill="#b5722f" ${S}/>
    <ellipse cx="14" cy="76" rx="4" ry="3" fill="#f4a261"/>
    <circle cx="11" cy="70" r="1.3" fill="#333"/><circle cx="17" cy="70" r="1.3" fill="#333"/><circle cx="14" cy="75" r="1.2" fill="#333"/>
    <ellipse cx="14" cy="89" rx="8" ry="7" fill="#b5722f" ${S}/>` },

  { cs: 'pravítko', en: 'ruler', pattern: 'město', gender: 'n', level: 'A2', official: null, topic: 'school', svg: `
    <g transform="translate(60 50) rotate(-30)">
      <rect x="-56" y="-9" width="112" height="18" rx="2" fill="#e0b070" ${S}/>
      <path d="M-50 -9 V-1 M-45 -9 V-5 M-40 -9 V-1 M-35 -9 V-5 M-30 -9 V-1 M-25 -9 V-5 M-20 -9 V-1 M-15 -9 V-5 M-10 -9 V-1 M-5 -9 V-5 M0 -9 V-1 M5 -9 V-5 M10 -9 V-1 M15 -9 V-5 M20 -9 V-1 M25 -9 V-5 M30 -9 V-1 M35 -9 V-5 M40 -9 V-1 M45 -9 V-5 M50 -9 V-1" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
      <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="6" fill="#333" text-anchor="middle">
        <text x="-40" y="7">1</text><text x="-30" y="7">2</text><text x="-20" y="7">3</text><text x="-10" y="7">4</text><text x="0" y="7">5</text><text x="10" y="7">6</text><text x="20" y="7">7</text><text x="30" y="7">8</text><text x="40" y="7">9</text>
      </g>
    </g>` },

  { cs: 'lepidlo', en: 'glue', pattern: 'město', gender: 'n', level: 'A2', official: null, topic: 'school', svg: `
    <rect x="12" y="20" width="12" height="16" rx="3" fill="#fff" ${S}/>
    <rect x="8" y="34" width="20" height="56" rx="3" fill="#f4a261" ${S}/>
    <rect x="11" y="50" width="14" height="24" rx="1" fill="#fff" stroke="#333" stroke-width="1.5"/>
    <path d="M14 56 H22 M14 62 H22 M14 68 H22" stroke="#4fa3e3" stroke-width="2" stroke-linecap="round"/>
    <rect x="30" y="82" width="24" height="12" rx="3" fill="#f4a261" ${S}/>
    <path d="M56 40 H88 V86 Q88 92 82 92 H62 Q56 92 56 86 Z" fill="#fff" ${S}/>
    <rect x="60" y="54" width="24" height="20" rx="2" fill="#4fa3e3" ${S}/>
    <path d="M64 60 H80 M64 66 H76" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="67" y="28" width="10" height="12" fill="#f4a261" ${S}/>
    <path d="M69 28 H75 L73 14 H71 Z" fill="#f4a261" ${S}/>
    <path d="M72 14 Q66 8 72 4 Q78 8 72 14 Z" fill="#fff" ${S}/>
    <rect x="92" y="60" width="24" height="34" rx="2" fill="#fff" ${S}/>
    <path d="M104 90 C94 82 92 74 96 70 Q100 66 104 72 Q108 66 112 70 C116 74 114 82 104 90 Z" fill="#e63946" ${S}/>
    <path d="M96 48 L92 54 M104 46 V54 M112 48 L116 54" stroke="#4fa3e3" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'heslo', en: 'password', pattern: 'město', gender: 'n', level: 'A2', official: null, topic: 'school', svg: `
    <rect x="52" y="76" width="16" height="8" fill="#7a7f87" ${S}/>
    <rect x="36" y="84" width="48" height="8" rx="3" fill="#9aa0a8" ${S}/>
    <rect x="8" y="8" width="104" height="68" rx="4" fill="#333" ${S}/>
    <rect x="14" y="14" width="92" height="56" rx="2" fill="#dff3ff" ${S}/>
    <rect x="20" y="22" width="58" height="40" rx="3" fill="#fff" ${S}/>
    <text x="49" y="36" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">HESLO</text>
    <rect x="26" y="42" width="46" height="14" rx="2" fill="#fff" stroke="#333" stroke-width="2"/>
    <g fill="#333">
      <circle cx="33" cy="49" r="2"/><circle cx="39.5" cy="49" r="2"/><circle cx="46" cy="49" r="2"/><circle cx="52.5" cy="49" r="2"/><circle cx="59" cy="49" r="2"/><circle cx="65.5" cy="49" r="2"/>
    </g>
    <path d="M88 42 V34 a6 6 0 0 1 12 0 V42" fill="none" ${S}/>
    <rect x="82" y="42" width="24" height="20" rx="3" fill="#f9c74f" ${S}/>
    <circle cx="94" cy="50" r="2.5" fill="#333"/><rect x="92.8" y="50" width="2.4" height="6" fill="#333"/>` },

  { cs: 'sloveso', en: 'verb', pattern: 'město', gender: 'n', level: 'A2', official: null, topic: 'school', svg: `
    <rect x="6" y="6" width="108" height="76" rx="2" fill="#3f9d55" ${S}/>
    <text x="60" y="24" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#f9c74f">SLOVESO</text>
    <text x="40" y="56" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="17" fill="#fff">BĚŽET</text>
    <path d="M14 62 H66" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="94" cy="38" r="5" fill="#fff"/>
    <path d="M92 44 L86 60 M92 44 L100 42 L106 48 M92 44 L82 50 L84 56 M86 60 L76 68 M86 60 L96 66 L94 74" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="4" y="82" width="112" height="7" rx="1" fill="#b5722f" ${S}/>
    <rect x="80" y="76" width="16" height="5" rx="2" fill="#fff" ${S}/>` },

  { cs: 'vysvědčení', en: 'school report', pattern: 'stavení', gender: 'n', level: 'A2', official: 'A2', topic: 'school', svg: `
    <rect x="44" y="8" width="72" height="86" fill="#fff" ${S}/>
    <rect x="48" y="12" width="64" height="78" fill="none" stroke="#f9c74f" stroke-width="2"/>
    <text x="80" y="26" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" fill="#333">VYSVĚDČENÍ</text>
    <path d="M52 40 H90 M52 52 H90 M52 64 H90 M52 76 H90" stroke="#bbb" stroke-width="2.5" stroke-linecap="round"/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#e63946" text-anchor="middle">
      <text x="102" y="44">1</text><text x="102" y="56">1</text><text x="102" y="68">2</text><text x="102" y="80">1</text>
    </g>
    <circle cx="62" cy="82" r="8" fill="none" stroke="#4fa3e3" stroke-width="2.5"/>
    <circle cx="62" cy="82" r="3.5" fill="none" stroke="#4fa3e3" stroke-width="2"/>
    <path d="M14 46 H34 L36 76 H12 Z" fill="#e94b8a" ${S}/>
    <path d="M18 76 V90 M30 76 V90" stroke="#1d2a5a" stroke-width="5" stroke-linecap="round"/>
    <path d="M34 54 L46 44" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M34 54 L46 44" stroke="#ffd8b8" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M14 36 Q12 22 24 20 Q36 22 34 36 L36 56 H12 Z" fill="#f2c14e" ${S}/>
    <circle cx="24" cy="32" r="10" fill="#ffd8b8" ${S}/>
    <path d="M14 32 Q14 21 24 21 Q34 21 34 32 Q30 26 24 26 Q18 26 14 32 Z" fill="#f2c14e" ${S}/>
    <circle cx="20" cy="33" r="1.6" fill="#333"/><circle cx="28" cy="33" r="1.6" fill="#333"/>
    <path d="M19 37 Q24 42 29 37" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` },

  { cs: 'učiliště', en: 'vocational school', pattern: 'moře', gender: 'n', level: 'A2', official: 'A2', topic: 'school', svg: `
    <rect x="6" y="26" width="108" height="70" fill="#ffe08a" ${S}/>
    <path d="M2 26 L60 6 L118 26 Z" fill="#c0392b" ${S}/>
    <rect x="22" y="30" width="76" height="14" rx="2" fill="#fff" ${S}/>
    <text x="60" y="41" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">UČILIŠTĚ</text>
    <rect x="14" y="50" width="92" height="40" fill="#dff3ff" ${S}/>
    <rect x="52" y="72" width="50" height="8" rx="1" fill="#b5722f" ${S}/>
    <rect x="55" y="80" width="4" height="10" fill="#8b4a2b" ${S}/><rect x="95" y="80" width="4" height="10" fill="#8b4a2b" ${S}/>
    <path d="M68 72 L76 60" stroke="#8b4a2b" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="72" y="54" width="11" height="6" rx="1" fill="#7a7f87" ${S}/>
    <path d="M86 72 L94 62" stroke="#9aa0a8" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="95" cy="60" r="4" fill="#9aa0a8" ${S}/>
    <path d="M32 70 H48 L50 90 H30 Z" fill="#4fa3e3" ${S}/>
    <path d="M36 70 V75 M44 70 V75" stroke="#1d2a5a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M48 76 L58 72" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M48 76 L58 72" stroke="#ffd8b8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="40" cy="62" r="8" fill="#ffd8b8" ${S}/>
    <path d="M32 62 Q32 53 40 53 Q48 53 48 62 Q44 57 40 57 Q36 57 32 62 Z" fill="#3b2a1a" ${S}/>
    <circle cx="37" cy="63" r="1.4" fill="#333"/><circle cx="43" cy="63" r="1.4" fill="#333"/>
    <path d="M37 66 Q40 69 43 66" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>` }
);
