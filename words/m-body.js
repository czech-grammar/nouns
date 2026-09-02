// Topic: body (masculine inanimate)
WORDS.push(
  { cs: 'obličej', en: 'face', pattern: 'stroj', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <circle cx="17" cy="52" r="9" fill="#ffd8b8" ${S}/>
    <circle cx="103" cy="52" r="9" fill="#ffd8b8" ${S}/>
    <circle cx="60" cy="50" r="44" fill="#ffd8b8" ${S}/>
    <path d="M34 34 Q44 27 54 34 M66 34 Q76 27 86 34" fill="none" ${S}/>
    <circle cx="44" cy="46" r="7" fill="#fff" ${S}/>
    <circle cx="76" cy="46" r="7" fill="#fff" ${S}/>
    <circle cx="45" cy="47" r="3" fill="#333"/><circle cx="77" cy="47" r="3" fill="#333"/>
    <path d="M60 48 Q53 63 63 62" fill="none" ${S}/>
    <circle cx="30" cy="64" r="6" fill="#ffb4a2"/><circle cx="90" cy="64" r="6" fill="#ffb4a2"/>
    <path d="M42 70 Q60 86 78 70" fill="none" ${S}/>` },

  { cs: 'nos', en: 'nose', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <circle cx="60" cy="52" r="40" fill="#ffd8b8" ${S}/>
    <path d="M20 50 Q20 12 60 12 Q100 12 100 50 Q88 30 60 30 Q32 30 20 50 Z" fill="#8b4a2b" ${S}/>
    <circle cx="44" cy="50" r="4" fill="#333"/><circle cx="76" cy="50" r="4" fill="#333"/>
    <path d="M36 42 Q44 38 50 42 M70 42 Q76 38 84 42" fill="none" ${S}/>
    <path d="M60 46 L52 66 Q60 72 68 66 Z" fill="#f4b895" ${S}/>
    <path d="M46 78 Q60 88 74 78" fill="none" ${S}/>
    <circle cx="60" cy="60" r="15" fill="none" stroke="#e63946" stroke-width="4"/>` },

  { cs: 'zub', en: 'tooth', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <path d="M22 22 Q22 6 38 8 Q52 12 66 8 Q82 6 82 22 Q84 46 74 60 L74 82 Q74 92 66 92 Q60 92 58 80 L56 70 Q52 64 48 70 L46 80 Q44 92 38 92 Q30 92 30 82 L30 60 Q20 46 22 22 Z" fill="#fff" ${S}/>
    <circle cx="42" cy="32" r="3" fill="#333"/><circle cx="62" cy="32" r="3" fill="#333"/>
    <path d="M42 44 Q52 54 62 44" fill="none" ${S}/>
    <circle cx="36" cy="42" r="4" fill="#ffb4a2"/><circle cx="68" cy="42" r="4" fill="#ffb4a2"/>
    <rect x="96" y="8" width="12" height="86" rx="5" fill="#4fa3e3" ${S}/>
    <rect x="86" y="12" width="10" height="30" fill="#fff" ${S}/>
    <path d="M86 19.5 H96 M86 27 H96 M86 34.5 H96" fill="none" stroke="#333" stroke-width="1.5"/>` },

  { cs: 'vlasy', en: 'hair', pattern: 'plural only (vlas, hrad)', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <path d="M26 42 Q26 8 58 8 Q90 8 90 42 L94 90 Q84 96 78 86 Q70 96 62 88 Q56 96 48 88 Q40 96 32 86 Q26 96 18 90 Z" fill="#8b4a2b" ${S}/>
    <path d="M42 26 Q36 56 34 82 M58 20 Q58 54 58 82 M74 26 Q80 56 82 82" fill="none" stroke="#3b2a1a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M102 30 H96 M102 38 H96 M102 46 H96 M102 54 H96 M102 62 H96 M102 70 H96 M102 78 H96" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <path d="M102 30 H96 M102 38 H96 M102 46 H96 M102 54 H96 M102 62 H96 M102 70 H96 M102 78 H96" fill="none" stroke="#e94b8a" stroke-width="2" stroke-linecap="round"/>
    <rect x="102" y="20" width="10" height="66" rx="4" fill="#e94b8a" ${S}/>` },

  { cs: 'krk', en: 'neck, throat', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <rect x="52" y="44" width="16" height="20" fill="#ffd8b8" ${S}/>
    <path d="M12 96 Q12 64 40 62 H80 Q108 64 108 96 Z" fill="#6cc06a" ${S}/>
    <circle cx="60" cy="28" r="19" fill="#ffd8b8" ${S}/>
    <path d="M41 28 Q41 9 60 9 Q79 9 79 28 Q72 19 60 19 Q48 19 41 28 Z" fill="#3b2a1a" ${S}/>
    <circle cx="53" cy="29" r="2.5" fill="#333"/><circle cx="67" cy="29" r="2.5" fill="#333"/>
    <path d="M53 36 Q60 41 67 36" fill="none" ${S}/>
    <circle cx="60" cy="54" r="15" fill="none" stroke="#e63946" stroke-width="4"/>` },

  { cs: 'prst', en: 'finger, toe', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <path d="M32 60 Q32 44 46 44 H54 Q60 34 68 44 Q74 34 80 44 Q86 34 92 44 Q98 46 98 60 V78 Q98 94 82 94 H48 Q32 94 32 78 Z" fill="#ffd8b8" ${S}/>
    <path d="M34 58 V17 Q34 8 43 8 Q52 8 52 17 V58" fill="#ffd8b8" ${S}/>
    <path d="M38 30 Q43 28 48 30" fill="none" stroke="#e0a880" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M34 66 Q46 60 60 66 Q66 72 58 78 Q46 82 34 78" fill="#ffd8b8" ${S}/>
    <rect x="44" y="88" width="40" height="10" rx="3" fill="#4fa3e3" ${S}/>
    <circle cx="43" cy="22" r="16" fill="none" stroke="#e63946" stroke-width="4"/>` },

  { cs: 'jazyk', en: 'tongue, language', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <circle cx="42" cy="54" r="34" fill="#ffd8b8" ${S}/>
    <path d="M8 52 Q8 20 42 20 Q76 20 76 52 Q68 38 42 38 Q16 38 8 52 Z" fill="#3b2a1a" ${S}/>
    <circle cx="30" cy="52" r="3" fill="#333"/><circle cx="54" cy="52" r="3" fill="#333"/>
    <circle cx="20" cy="64" r="5" fill="#ffb4a2"/><circle cx="64" cy="64" r="5" fill="#ffb4a2"/>
    <ellipse cx="42" cy="70" rx="14" ry="7" fill="#c0392b" ${S}/>
    <path d="M34 70 Q34 92 42 92 Q50 92 50 70" fill="#e94b8a" ${S}/>
    <path d="M42 75 V86" fill="none" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
    <path d="M82 6 h28 a6 6 0 0 1 6 6 v22 a6 6 0 0 1 -6 6 h-14 l-8 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-22 a6 6 0 0 1 6 -6 z" fill="#ffe08a" ${S}/>
    <text x="96" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="16" fill="#333">CZ</text>` },

  { cs: 'lék', en: 'medicine', pattern: 'hrad', gender: 'mi', level: 'A1', topic: 'body', svg: `
    <rect x="20" y="6" width="24" height="14" rx="3" fill="#7a7f87" ${S}/>
    <rect x="12" y="18" width="40" height="76" rx="6" fill="#f4a261" ${S}/>
    <rect x="17" y="40" width="30" height="28" rx="2" fill="#fff" ${S}/>
    <rect x="29" y="46" width="6" height="16" fill="#e63946"/>
    <rect x="24" y="51" width="16" height="6" fill="#e63946"/>
    <rect x="60" y="10" width="52" height="34" rx="4" fill="#9aa0a8" ${S}/>
    <circle cx="71" cy="20" r="5" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="86" cy="20" r="5" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="101" cy="20" r="5" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="71" cy="34" r="5" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="86" cy="34" r="5" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="101" cy="34" r="5" fill="#fff" stroke="#333" stroke-width="2"/>
    <rect x="56" y="73" width="38" height="7" rx="3" fill="#9aa0a8" ${S}/>
    <ellipse cx="100" cy="76" rx="12" ry="9" fill="#9aa0a8" ${S}/>
    <ellipse cx="100" cy="75" rx="8" ry="5" fill="#e63946"/>` }
);
