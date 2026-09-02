// Topic: food
WORDS.push(
  { cs: 'káva', en: 'coffee', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M36 24 q-6 -8 0 -16 M52 24 q-6 -8 0 -16 M68 24 q-6 -8 0 -16" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="54" cy="86" rx="46" ry="8" fill="#ddd" ${S}/>
    <path d="M84 42 Q112 42 110 58 Q108 76 82 76 L82 68 Q100 68 101 58 Q102 50 84 50 Z" fill="#fff" ${S}/>
    <path d="M20 34 H88 L84 72 Q84 82 74 82 H34 Q24 82 24 72 Z" fill="#fff" ${S}/>
    <ellipse cx="54" cy="34" rx="34" ry="7" fill="#5a3a22" ${S}/>` },

  { cs: 'polévka', en: 'soup', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M34 34 q-6 -8 0 -16 M54 34 q-6 -8 0 -16 M74 34 q-6 -8 0 -16" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <rect x="42" y="86" width="36" height="10" rx="3" fill="#4fa3e3" ${S}/>
    <path d="M14 50 Q14 90 60 90 Q106 90 106 50 Z" fill="#4fa3e3" ${S}/>
    <ellipse cx="60" cy="50" rx="46" ry="10" fill="#f4a261" ${S}/>
    <circle cx="34" cy="50" r="3.5" fill="#6cc06a"/><circle cx="46" cy="54" r="3.5" fill="#e63946"/><circle cx="58" cy="47" r="3.5" fill="#6cc06a"/><circle cx="26" cy="46" r="3" fill="#f9c74f"/><circle cx="66" cy="55" r="3" fill="#e63946"/>
    <g transform="translate(84 44) rotate(40)">
      <rect x="-3" y="-42" width="6" height="46" rx="3" fill="#9aa0a8" ${S}/>
      <ellipse cx="0" cy="6" rx="8" ry="11" fill="#9aa0a8" ${S}/>
    </g>` },

  { cs: 'ryba', en: 'fish', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M86 52 L112 30 L106 52 L112 74 Z" fill="#4fa3e3" ${S}/>
    <path d="M40 34 Q52 10 72 32 Z" fill="#2a9d8f" ${S}/>
    <path d="M44 70 Q56 90 70 72 Z" fill="#2a9d8f" ${S}/>
    <ellipse cx="54" cy="52" rx="40" ry="22" fill="#4fa3e3" ${S}/>
    <path d="M50 54 Q66 58 60 72 Q46 68 50 54 Z" fill="#2a9d8f" ${S}/>
    <path d="M58 40 a5 5 0 0 0 10 0 M70 40 a5 5 0 0 0 10 0 M64 50 a5 5 0 0 0 10 0 M76 50 a5 5 0 0 0 10 0 M58 60 a5 5 0 0 0 10 0 M70 60 a5 5 0 0 0 10 0" fill="none" stroke="#1b6e64" stroke-width="2" stroke-linecap="round"/>
    <path d="M38 40 Q32 52 38 64" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="27" cy="47" r="5" fill="#fff" ${S}/><circle cx="28" cy="47" r="2.5" fill="#333"/>
    <path d="M16 57 Q20 61 25 59" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'zelenina', en: 'vegetables', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <g transform="translate(30 50) rotate(-28)">
      <rect x="-30" y="-8" width="60" height="16" rx="8" fill="#3f9d55" ${S}/>
    </g>
    <path d="M80 16 L70 5 M80 16 L80 4 M80 16 L90 5" fill="none" stroke="#3f9d55" stroke-width="4" stroke-linecap="round"/>
    <path d="M64 68 L80 16 L96 68 Z" fill="#f4a261" ${S}/>
    <rect x="100" y="22" width="4" height="12" fill="#3f9d55" ${S}/>
    <path d="M90 48 Q90 30 102 32 Q114 30 114 48 L110 68 H94 Z" fill="#6cc06a" ${S}/>
    <path d="M46 32 L40 25 M46 32 L46 22 M46 32 L52 25" fill="none" stroke="#3f9d55" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="46" cy="48" r="17" fill="#e63946" ${S}/>
    <path d="M18 66 L102 66 L94 94 L26 94 Z" fill="#b5722f" ${S}/>
    <path d="M38 66 L41 94 M60 66 L60 94 M82 66 L79 94 M22 80 H98" fill="none" stroke="#8b4a2b" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="12" y="60" width="96" height="8" rx="4" fill="#8b4a2b" ${S}/>` },

  { cs: 'mrkev', en: 'carrot', pattern: 'píseň', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M58 30 Q38 26 26 6 Q48 8 58 30 Z" fill="#6cc06a" ${S}/>
    <path d="M62 30 Q82 26 94 6 Q72 8 62 30 Z" fill="#6cc06a" ${S}/>
    <path d="M60 30 Q50 16 60 2 Q70 16 60 30 Z" fill="#6cc06a" ${S}/>
    <path d="M60 96 L32 36 Q60 22 88 36 Z" fill="#f4a261" ${S}/>
    <path d="M40 48 H80 M46 62 H74 M52 76 H68" fill="none" stroke="#e07a2a" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'brambora', en: 'potato', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M70 26 Q84 12 102 20 Q114 30 108 44 Q100 56 84 52 Q68 46 70 26 Z" fill="#b5722f" ${S}/>
    <path d="M88 30 q3 3 6 0 M98 40 q3 3 6 0" fill="none" stroke="#8b4a2b" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M18 60 Q16 34 42 30 Q68 22 92 42 Q108 58 90 80 Q66 94 40 86 Q18 82 18 60 Z" fill="#b5722f" ${S}/>
    <path d="M34 50 q4 4 8 0 M62 40 q4 4 8 0 M76 64 q4 4 8 0 M44 72 q4 4 8 0" fill="none" stroke="#8b4a2b" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'cibule', en: 'onion', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M48 88 L42 96 M56 88 L56 96 M64 88 L64 96 M72 88 L78 96" fill="none" stroke="#8b4a2b" stroke-width="3" stroke-linecap="round"/>
    <path d="M58 14 Q52 8 50 4 M62 14 Q68 8 70 4" fill="none" stroke="#3f9d55" stroke-width="4" stroke-linecap="round"/>
    <path d="M52 26 Q52 14 56 10 L64 10 Q68 14 68 26 Z" fill="#ffe08a" ${S}/>
    <path d="M60 22 Q30 28 24 56 Q20 90 60 90 Q100 90 96 56 Q90 28 60 22 Z" fill="#f9c74f" ${S}/>
    <path d="M50 26 Q34 52 42 86 M70 26 Q86 52 78 86" fill="none" stroke="#f4a261" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'zmrzlina', en: 'ice cream', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M34 54 L60 96 L86 54 Z" fill="#f4a261" ${S}/>
    <path d="M40 64 H80 M47 76 H73 M46 54 L66 88 M74 54 L54 88" fill="none" stroke="#b5722f" stroke-width="2" stroke-linecap="round"/>
    <circle cx="60" cy="46" r="24" fill="#e94b8a" ${S}/>
    <circle cx="60" cy="22" r="18" fill="#ffe08a" ${S}/>
    <circle cx="66" cy="42" r="3" fill="#c0392b"/><circle cx="50" cy="52" r="3" fill="#c0392b"/><circle cx="72" cy="56" r="2.5" fill="#c0392b"/>` },

  { cs: 'čokoláda', en: 'chocolate', pattern: 'žena', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <rect x="12" y="26" width="90" height="52" rx="4" fill="#5a3a22" ${S}/>
    <rect x="17" y="31" width="16" height="18" rx="2" fill="#7a5030"/><rect x="38" y="31" width="16" height="18" rx="2" fill="#7a5030"/><rect x="59" y="31" width="16" height="18" rx="2" fill="#7a5030"/>
    <rect x="17" y="55" width="16" height="18" rx="2" fill="#7a5030"/><rect x="38" y="55" width="16" height="18" rx="2" fill="#7a5030"/><rect x="59" y="55" width="16" height="18" rx="2" fill="#7a5030"/>
    <path d="M35 26 V78 M56 26 V78 M12 52 H80" fill="none" stroke="#3b2a1a" stroke-width="2.5"/>
    <path d="M64 20 L58 34 L66 46 L58 60 L66 74 L62 86 H112 V20 Z" fill="#ddd" ${S}/>
    <rect x="74" y="16" width="38" height="72" rx="4" fill="#e63946" ${S}/>
    <path d="M80 30 H106 M80 44 H106 M80 58 H106 M80 72 H106" fill="none" stroke="#c0392b" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'rýže', en: 'rice', pattern: 'růže', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <path d="M24 46 L112 10 M30 54 L114 20" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M24 46 L112 10 M30 54 L114 20" stroke="#b5722f" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="42" y="86" width="36" height="10" rx="3" fill="#e63946" ${S}/>
    <path d="M18 58 Q30 28 60 28 Q90 28 102 58 Z" fill="#fff" ${S}/>
    <g fill="none" stroke="#9aa0a8" stroke-width="2" stroke-linecap="round">
      <path d="M40 46 l6 -3 M52 40 l6 -2 M66 38 l6 2 M78 44 l6 3 M46 54 l7 0 M60 50 l7 0 M72 54 l7 0 M34 54 l6 -3 M86 54 l6 -2"/>
    </g>
    <path d="M14 58 Q14 92 60 92 Q106 92 106 58 Z" fill="#e63946" ${S}/>` },

  { cs: 'sůl', en: 'salt', pattern: 'kost', gender: 'f', level: 'A1', official: 'A1', topic: 'food', svg: `
    <rect x="36" y="36" width="48" height="60" rx="8" fill="#dff3ff" ${S}/>
    <path d="M36 68 H84 V88 a8 8 0 0 1 -8 8 H44 a8 8 0 0 1 -8 -8 Z" fill="#fff" ${S}/>
    <rect x="40" y="12" width="40" height="26" rx="6" fill="#9aa0a8" ${S}/>
    <circle cx="50" cy="22" r="2.2" fill="#333"/><circle cx="60" cy="19" r="2.2" fill="#333"/><circle cx="70" cy="22" r="2.2" fill="#333"/><circle cx="55" cy="30" r="2.2" fill="#333"/><circle cx="65" cy="30" r="2.2" fill="#333"/>
    <rect x="41" y="46" width="38" height="16" rx="3" fill="#fff" ${S}/>
    <text x="60" y="58.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#333">SŮL</text>
    <g fill="#fff" stroke="#333" stroke-width="1.5">
      <circle cx="96" cy="74" r="2.5"/><circle cx="104" cy="82" r="2.5"/><circle cx="94" cy="88" r="2.5"/><circle cx="108" cy="92" r="2.5"/><circle cx="100" cy="94" r="2.5"/>
      <circle cx="24" cy="80" r="2.5"/><circle cx="16" cy="90" r="2.5"/><circle cx="28" cy="93" r="2.5"/>
    </g>` }
);
