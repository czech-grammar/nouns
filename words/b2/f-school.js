// B2 deck: school (feminine)
WORDS.push(
  { cs: 'tečka', en: 'dot, full stop', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'school', svg: `
    <rect x="6" y="6" width="108" height="88" rx="2" fill="#fff" ${S}/>
    <path d="M14 30 H106 M14 50 H106 M14 70 H106 M14 90 H106" stroke="#bde0fe" stroke-width="2"/>
    <path d="M14 22 H106" stroke="#e94b8a" stroke-width="2"/>
    <path d="M16 42 H34 M40 42 H62 M68 42 H80" stroke="#7a7f87" stroke-width="5" stroke-linecap="round"/>
    <circle cx="96" cy="43" r="9" fill="#e63946" ${S}/>
    <path d="M16 62 H30 M36 62 H52" stroke="#9aa0a8" stroke-width="5" stroke-linecap="round"/>` },

  { cs: 'klávesa', en: 'key (keyboard, piano)', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'school', svg: `
    <rect x="8" y="30" width="58" height="58" rx="7" fill="#7a7f87" ${S}/>
    <rect x="13" y="24" width="50" height="50" rx="6" fill="#fff" ${S}/>
    <text x="38" y="62" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="34" fill="#333">A</text>
    <path d="M38 14 V6 M28 16 L23 9 M48 16 L53 9" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <rect x="80" y="6" width="32" height="88" rx="3" fill="#fff" ${S}/>
    <rect x="80" y="6" width="14" height="52" fill="#333" ${S}/>
    <rect x="98" y="6" width="14" height="52" fill="#333" ${S}/>` },

  { cs: 'němčina', en: 'German (language)', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'school', svg: `
    <path d="M10 32 H72 V94 H10 Z" fill="#4fa3e3" ${S}/>
    <path d="M10 32 V94 Q14 88 18 94 V32 Z" fill="#1d2a5a" ${S}/>
    <rect x="26" y="46" width="40" height="12" fill="#333" ${S}/>
    <rect x="26" y="58" width="40" height="12" fill="#e63946" ${S}/>
    <rect x="26" y="70" width="40" height="12" fill="#f9c74f" ${S}/>
    <path d="M46 6 H114 V40 H74 L62 50 L66 40 H46 Z" fill="#fff" ${S}/>
    <text x="80" y="22" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#333">GUTEN</text>
    <text x="80" y="35" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="11" fill="#333">TAG</text>` },

  { cs: 'nůžky', en: 'scissors', pattern: 'plural only', gender: 'f', level: 'B2', official: null, topic: 'school', svg: `
    <rect x="6" y="14" width="44" height="72" fill="#fff" ${S}/>
    <path d="M50 50 H22" stroke="#333" stroke-width="2" stroke-dasharray="3 3"/>
    <path d="M6 14 H24 V46 H6 Z" fill="#fff"/>
    <path d="M6 14 H50 V86 H6 Z" fill="none" ${S}/>
    <path d="M70 50 L84 36 M70 50 L84 64" stroke="#333" stroke-width="11" stroke-linecap="round"/>
    <path d="M70 50 L84 36 M70 50 L84 64" stroke="#f4a261" stroke-width="6" stroke-linecap="round"/>
    <polygon points="70,44 14,20 10,30 70,55" fill="#ddd" ${S}/>
    <polygon points="70,56 14,80 10,70 70,45" fill="#ddd" ${S}/>
    <ellipse cx="96" cy="28" rx="16" ry="10" transform="rotate(-30 96 28)" fill="#f4a261" ${S}/>
    <ellipse cx="96" cy="28" rx="9" ry="4.5" transform="rotate(-30 96 28)" fill="#fff" stroke="#333" stroke-width="2"/>
    <ellipse cx="96" cy="72" rx="16" ry="10" transform="rotate(30 96 72)" fill="#f4a261" ${S}/>
    <ellipse cx="96" cy="72" rx="9" ry="4.5" transform="rotate(30 96 72)" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="70" cy="50" r="4" fill="#333"/>` },

  { cs: 'čtečka', en: 'e-reader', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'school', svg: `
    <rect x="30" y="4" width="62" height="88" rx="6" fill="#9aa0a8" ${S}/>
    <rect x="36" y="11" width="50" height="66" fill="#fff" ${S}/>
    <path d="M42 20 H74 M42 27 H80 M42 34 H70 M42 41 H80 M42 48 H76 M42 55 H72 M42 62 H80 M42 69 H66" stroke="#7a7f87" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="61" cy="85" r="3" fill="#7a7f87"/>
    <path d="M8 96 V74 Q8 66 16 66 H36 Q44 66 44 74 V96 Z" fill="#ffd8b8" ${S}/>
    <path d="M18 80 V93 M27 80 V93 M36 80 V93" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M22 70 V48 Q22 40 28 40 Q34 40 34 48 V70 Z" fill="#ffd8b8" ${S}/>` },

  { cs: 'dvojka', en: 'number two; grade two; the number 2 (tram, bus)', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'school', svg: `
    <rect x="16" y="4" width="68" height="92" fill="#fff" ${S}/>
    <path d="M24 22 H50 M24 32 H48 M24 42 H50" fill="none" stroke="#bbb" stroke-width="2.5" stroke-linecap="round"/>
    <text x="50" y="88" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="72" fill="#e63946" stroke="#333" stroke-width="2.5">2</text>
    <g transform="translate(100 50) rotate(30)">
      <rect x="-7" y="-42" width="14" height="60" rx="3" fill="#e63946" ${S}/>
      <path d="M-7 18 L0 34 L7 18 Z" fill="#ffd8b8" ${S}/>
      <path d="M-2 28 L0 34 L2 28 Z" fill="#333"/>
      <rect x="-7" y="-46" width="14" height="8" rx="2" fill="#9aa0a8" ${S}/>
    </g>` },

  { cs: 'panenka', en: 'doll; pupil (of the eye)', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <path d="M28 44 L18 56 L22 72 L14 88 M52 44 L62 56 L58 72 L66 88" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 44 L18 56 L22 72 L14 88 M52 44 L62 56 L58 72 L66 88" fill="none" stroke="#f4a261" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 54 H48 L58 88 H22 Z" fill="#e94b8a" ${S}/>
    <circle cx="33" cy="66" r="2.2" fill="#fff"/><circle cx="46" cy="70" r="2.2" fill="#fff"/><circle cx="38" cy="80" r="2.2" fill="#fff"/>
    <path d="M30 88 V95 M50 88 V95" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M30 88 V95 M50 88 V95" stroke="#4fa3e3" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="17" fill="#ffd8b8" ${S}/>
    <path d="M23 36 Q23 16 40 16 Q57 16 57 36 Q52 26 40 26 Q28 26 23 36 Z" fill="#f4a261" ${S}/>
    <circle cx="33" cy="38" r="3" fill="#fff" stroke="#333" stroke-width="1.5"/><circle cx="47" cy="38" r="3" fill="#fff" stroke="#333" stroke-width="1.5"/>
    <path d="M31.5 36.5 L34.5 39.5 M34.5 36.5 L31.5 39.5 M45.5 36.5 L48.5 39.5 M48.5 36.5 L45.5 39.5" stroke="#333" stroke-width="1.2"/>
    <path d="M34 45 Q40 50 46 45" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round"/>
    <path d="M70 34 Q92 8 114 34 Q92 60 70 34 Z" fill="#fff" ${S}/>
    <circle cx="92" cy="34" r="11" fill="#4fa3e3" ${S}/>
    <circle cx="92" cy="34" r="6" fill="#333"/>
    <circle cx="89" cy="31" r="2" fill="#fff"/>` },

  { cs: 'pouť', en: 'fair, funfair; pilgrimage', pattern: 'kost (gen. pouti/poutě)', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <rect x="94" y="46" width="18" height="34" fill="#ddd" ${S}/>
    <path d="M91 46 L103 12 L115 46 Z" fill="#e63946" ${S}/>
    <path d="M103 12 V5 M99 8 H107" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M44 10 V78" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <path d="M6 42 L44 10 L82 42 Z" fill="#e63946" ${S}/>
    <path d="M22 28.5 L44 42 L66 28.5 L82 42 H6 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
    <path d="M20 44 V72 M68 44 V72" stroke="#9aa0a8" stroke-width="3"/>
    <ellipse cx="44" cy="82" rx="42" ry="8" fill="#f9c74f" ${S}/>
    <path d="M14 66 V74 M22 66 V74 M30 66 V74" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="22" cy="62" rx="12" ry="6" fill="#fff" ${S}/>
    <path d="M30 60 L34 46 L40 50 L38 58 Q34 62 30 60 Z" fill="#fff" ${S}/>
    <path d="M34 46 L30 52" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <circle cx="36.5" cy="50.5" r="1" fill="#333"/>
    <path d="M66 76 Q52 64 54 55 Q56 46 66 53 Q76 46 78 55 Q80 64 66 76 Z" fill="#b5722f" ${S}/>
    <path d="M60 60 Q66 55 72 60" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M92 90 L96 84 M104 90 L100 84 M110 92 L106 84" stroke="#333" stroke-width="1.5"/>
    <circle cx="94" cy="80" r="7" fill="#4fa3e3" ${S}/>
    <circle cx="106" cy="80" r="7" fill="#f9c74f" ${S}/>
    <circle cx="100" cy="90" r="6" fill="#e63946" ${S}/>` },

  { cs: 'trubka', en: 'trumpet; pipe, tube', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <path d="M8 34 H20 M12 26 V42" stroke="#333" stroke-width="6" stroke-linecap="round"/>
    <path d="M8 34 H20 M12 26 V42" stroke="#f9c74f" stroke-width="3" stroke-linecap="round"/>
    <path d="M20 30 H74 V38 H20 Z" fill="#f9c74f" ${S}/>
    <path d="M30 46 H74 V52 H30 Q26 52 26 46 Z" fill="#f9c74f" ${S}/>
    <rect x="42" y="14" width="7" height="24" rx="2" fill="#f9c74f" ${S}/>
    <rect x="53" y="14" width="7" height="24" rx="2" fill="#f9c74f" ${S}/>
    <rect x="64" y="14" width="7" height="24" rx="2" fill="#f9c74f" ${S}/>
    <path d="M40 10 H51 M51 10 H62 M62 10 H73" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <path d="M72 28 Q92 26 112 14 V60 Q92 48 72 52 Z" fill="#f9c74f" ${S}/>
    <ellipse cx="112" cy="37" rx="4" ry="23" fill="#ffe08a" ${S}/>
    <rect x="8" y="72" width="94" height="18" fill="#9aa0a8" ${S}/>
    <ellipse cx="102" cy="81" rx="5" ry="9" fill="#7a7f87" ${S}/>
    <path d="M14 76 H90" stroke="#ddd" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'kytara', en: 'guitar', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <path d="M70 12 H108 V56 H70 Z" fill="#b5722f" ${S}/>
    <path d="M80 12 V56 M98 12 V56" stroke="#8b4a2b" stroke-width="3"/>
    <path d="M66 56 H112 V64 H66 Z" fill="#b5722f" ${S}/>
    <path d="M70 64 V96 M108 64 V96" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M70 64 V96 M108 64 V96" stroke="#b5722f" stroke-width="3.5" stroke-linecap="round"/>
    <g transform="translate(40 58) rotate(-25)">
      <path d="M-14 -30 V-92 H-4 V-30 Z" fill="#8b4a2b" ${S}/>
      <path d="M-16 -92 H-2 L0 -108 H-18 Z" fill="#333" ${S}/>
      <path d="M-20 -104 H-16 M-20 -98 H-16 M-2 -104 H2 M-2 -98 H2" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M-30 -14 Q-40 -30 -22 -32 Q-14 -32 -9 -26 Q-4 -32 4 -32 Q22 -30 12 -14 Q4 -2 12 14 Q22 40 -9 40 Q-40 40 -30 14 Q-22 -2 -30 -14 Z" fill="#f4a261" ${S}/>
      <circle cx="-9" cy="-4" r="9" fill="#333"/>
      <path d="M-11 -30 V20 M-9 -30 V20 M-7 -30 V20" stroke="#ddd" stroke-width="1.2"/>
      <rect x="-19" y="18" width="20" height="6" rx="2" fill="#333"/>
    </g>` },

  { cs: 'figura', en: 'chess piece; figure', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <rect x="4" y="62" width="112" height="34" fill="#ffe08a" ${S}/>
    <g fill="#b5722f">
      <rect x="4" y="62" width="16" height="17"/><rect x="36" y="62" width="16" height="17"/><rect x="68" y="62" width="16" height="17"/><rect x="100" y="62" width="16" height="17"/>
      <rect x="20" y="79" width="16" height="17"/><rect x="52" y="79" width="16" height="17"/><rect x="84" y="79" width="16" height="17"/>
    </g>
    <path d="M4 79 H116" stroke="#333" stroke-width="2"/>
    <path d="M36 70 H84 L78 58 H42 Z" fill="#fff" ${S}/>
    <path d="M48 58 L50 46 Q50 34 60 26 L58 14 L66 6 Q88 10 88 36 L84 46 L80 46 Q78 38 72 34 Q70 44 62 48 L74 46 V58 Z" fill="#fff" ${S}/>
    <circle cx="72" cy="16" r="2" fill="#333"/>
    <path d="M60 26 L54 22" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>` },

  { cs: 'varhany', en: 'organ (instrument)', pattern: 'plural only', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <rect x="8" y="50" width="104" height="46" fill="#8b4a2b" ${S}/>
    <rect x="16" y="6" width="88" height="46" fill="#b5722f" ${S}/>
    <path d="M22 50 V26 H30 V50 M34 50 V16 H42 V50 M46 50 V8 H54 V50 M58 50 V4 H66 V50 M70 50 V8 H78 V50 M82 50 V16 H90 V50 M94 50 V26 H102 V50" fill="#ddd" ${S}/>
    <path d="M26 32 L26 44 M38 22 V44 M50 14 V44 M62 10 V44 M74 14 V44 M86 22 V44 M98 32 V44" stroke="#9aa0a8" stroke-width="2"/>
    <rect x="16" y="60" width="88" height="24" fill="#fff" ${S}/>
    <path d="M27 60 V84 M38 60 V84 M49 60 V84 M60 60 V84 M71 60 V84 M82 60 V84 M93 60 V84" stroke="#333" stroke-width="1.5"/>
    <g fill="#333">
      <rect x="24" y="60" width="6" height="14"/><rect x="35" y="60" width="6" height="14"/><rect x="57" y="60" width="6" height="14"/><rect x="68" y="60" width="6" height="14"/><rect x="79" y="60" width="6" height="14"/>
    </g>` },

  { cs: 'kulisa', en: 'stage set, backdrop', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <rect x="4" y="80" width="112" height="16" fill="#b5722f" ${S}/>
    <rect x="4" y="4" width="14" height="76" fill="#e63946" ${S}/>
    <path d="M9 8 V76" stroke="#c0392b" stroke-width="2"/>
    <rect x="24" y="8" width="60" height="62" fill="#dff3ff" ${S}/>
    <path d="M24 56 H84 V70 H24 Z" fill="#8fd18a"/>
    <path d="M36 56 L44 26 L52 56 Z M60 56 L70 20 L80 56 Z M26 56 L32 40 L38 56 Z" fill="#3f9d55" ${S}/>
    <path d="M44 56 V62 M70 56 V64" stroke="#8b4a2b" stroke-width="3.5"/>
    <rect x="22" y="70" width="64" height="6" fill="#7a7f87" ${S}/>
    <circle cx="32" cy="80" r="5" fill="#333"/><circle cx="76" cy="80" r="5" fill="#333"/>
    <path d="M86 48 L96 46" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M86 48 L96 46" stroke="#ffd8b8" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M96 42 H110 L114 80 H92 Z" fill="#333" ${S}/>
    <circle cx="103" cy="34" r="9" fill="#ffd8b8" ${S}/>
    <path d="M94 34 Q94 25 103 25 Q112 25 112 34 Q108 30 94 34 Z" fill="#3b2a1a" ${S}/>
    <circle cx="100" cy="35" r="1.5" fill="#333"/><circle cx="106" cy="35" r="1.5" fill="#333"/>` },

  { cs: 'struna', en: 'string (of an instrument)', pattern: 'žena', gender: 'f', level: 'B2', official: null, topic: 'leisure', svg: `
    <rect x="4" y="4" width="112" height="92" fill="#f4a261" ${S}/>
    <circle cx="60" cy="50" r="24" fill="#333"/>
    <path d="M60 50 m-19 0 a19 19 0 1 0 38 0 a19 19 0 1 0 -38 0" fill="none" stroke="#b5722f" stroke-width="3"/>
    <rect x="96" y="18" width="12" height="64" rx="2" fill="#3b2a1a" ${S}/>
    <path d="M4 26 H96 M4 38 H96 M4 62 H96 M4 74 H96" stroke="#333" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M4 26 H96 M4 38 H96 M4 62 H96 M4 74 H96" stroke="#ddd" stroke-width="2" stroke-linecap="round"/>
    <path d="M4 50 H28 Q40 48 42 40 Q40 32 34 38 M96 50 H80 Q70 52 72 60 Q76 66 82 60" fill="none" stroke="#333" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M4 50 H28 Q40 48 42 40 Q40 32 34 38 M96 50 H80 Q70 52 72 60 Q76 66 82 60" fill="none" stroke="#ddd" stroke-width="2" stroke-linecap="round"/>
    <path d="M102 26 V74" stroke="#9aa0a8" stroke-width="2" stroke-dasharray="1 11" stroke-linecap="round"/>` }
);
