// Topic: school (neuter)
WORDS.push(
  { cs: 'slovo', en: 'word', pattern: 'město', gender: 'n', level: 'A1', official: 'A1', topic: 'school', svg: `
    <rect x="4" y="66" width="112" height="12" rx="2" fill="#8b4a2b" ${S}/>
    <g fill="#ffe08a" ${S}>
      <rect x="6" y="32" width="26" height="32" rx="3"/><rect x="34" y="32" width="26" height="32" rx="3"/>
      <rect x="62" y="32" width="26" height="32" rx="3"/><rect x="90" y="32" width="26" height="32" rx="3"/>
    </g>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="22" fill="#333" text-anchor="middle">
      <text x="19" y="56">A</text><text x="47" y="56">H</text><text x="75" y="56">O</text><text x="103" y="56">J</text>
    </g>` },

  { cs: 'číslo', en: 'number', pattern: 'město', gender: 'n', level: 'A1', official: 'A1', topic: 'school', svg: `
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" text-anchor="middle">
      <text x="22" y="30" font-size="18" fill="#e63946">1</text>
      <text x="100" y="28" font-size="18" fill="#3f9d55">3</text>
      <text x="16" y="82" font-size="18" fill="#f4a261">5</text>
      <text x="104" y="86" font-size="18" fill="#5a3fbf">9</text>
      <text x="100" y="58" font-size="14" fill="#e94b8a">2</text>
      <text x="60" y="84" font-size="84" fill="#4fa3e3" stroke="#333" stroke-width="2.5">7</text>
    </g>` },

  { cs: 'písmeno', en: 'letter (of the alphabet)', pattern: 'město', gender: 'n', level: 'A1', official: null, topic: 'school', svg: `
    <polygon points="22,32 42,12 102,12 82,32" fill="#ffe08a" ${S}/>
    <polygon points="82,32 102,12 102,72 82,92" fill="#f4a261" ${S}/>
    <rect x="22" y="32" width="60" height="60" fill="#f9c74f" ${S}/>
    <rect x="28" y="38" width="48" height="48" fill="none" stroke="#c0392b" stroke-width="2.5"/>
    <text x="52" y="79" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="44" fill="#e63946" stroke="#333" stroke-width="1.5">A</text>` },

  { cs: 'pero', en: 'pen', pattern: 'město', gender: 'n', level: 'A1', official: null, topic: 'school', svg: `
    <path d="M28 84 Q42 92 58 84 Q74 76 92 86" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <g transform="translate(60 50) rotate(-40)">
      <rect x="40" y="-7" width="14" height="14" rx="4" fill="#1d2a5a" ${S}/>
      <rect x="-24" y="-8" width="66" height="16" rx="3" fill="#4fa3e3" ${S}/>
      <rect x="16" y="-12" width="30" height="5" rx="2.5" fill="#9aa0a8" ${S}/>
      <polygon points="-24,-8 -44,0 -24,8" fill="#9aa0a8" ${S}/>
      <circle cx="-43" cy="0" r="1.8" fill="#333"/>
    </g>` },

  { cs: 'cvičení', en: 'exercise', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'school', svg: `
    <rect x="14" y="4" width="82" height="92" rx="3" fill="#fff" ${S}/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#333">
      <text x="22" y="32">1.</text><text x="22" y="56">2.</text><text x="22" y="80">3.</text>
    </g>
    <path d="M40 32 H76 M40 56 H76 M40 80 H76" stroke="#bbb" stroke-width="2" stroke-linecap="round"/>
    <path d="M42 28 Q48 22 54 28 T66 28 T74 28" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <path d="M42 52 Q48 46 54 52 T64 52" fill="none" stroke="#4fa3e3" stroke-width="3" stroke-linecap="round"/>
    <path d="M80 30 L86 36 L98 20" fill="none" stroke="#3f9d55" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <g transform="translate(66 52) rotate(45)">
      <polygon points="0,0 12,-6 12,6" fill="#ffe08a" ${S}/>
      <polygon points="0,0 5,-2.5 5,2.5" fill="#333"/>
      <rect x="12" y="-6" width="36" height="12" fill="#f9c74f" ${S}/>
      <rect x="48" y="-6" width="6" height="12" fill="#9aa0a8" ${S}/>
      <rect x="54" y="-6" width="8" height="12" rx="3" fill="#e94b8a" ${S}/>
    </g>` },

  { cs: 'zaměstnání', en: 'job, employment', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'school', svg: `
    <rect x="58" y="6" width="56" height="90" fill="#ddd" ${S}/>
    <g fill="#4fa3e3" ${S}>
      <rect x="64" y="12" width="10" height="10"/><rect x="81" y="12" width="10" height="10"/><rect x="98" y="12" width="10" height="10"/>
      <rect x="64" y="30" width="10" height="10"/><rect x="81" y="30" width="10" height="10"/><rect x="98" y="30" width="10" height="10"/>
      <rect x="64" y="48" width="10" height="10"/><rect x="81" y="48" width="10" height="10"/><rect x="98" y="48" width="10" height="10"/>
      <rect x="64" y="66" width="10" height="10"/><rect x="98" y="66" width="10" height="10"/>
    </g>
    <rect x="79" y="76" width="14" height="20" fill="#7a7f87" ${S}/>
    <path d="M16 42 H40 L46 84 H10 Z" fill="#1d2a5a" ${S}/>
    <path d="M22 42 L28 52 L34 42 Z" fill="#fff" ${S}/>
    <path d="M26 50 L22 58" stroke="#f9c74f" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="15" y="56" width="15" height="17" rx="2" fill="#fff" ${S}/>
    <rect x="15" y="56" width="15" height="5" fill="#4fa3e3"/>
    <circle cx="22.5" cy="66" r="2.5" fill="#ffd8b8"/>
    <path d="M18 71 H27" stroke="#9aa0a8" stroke-width="1.5"/>
    <rect x="16" y="84" width="10" height="12" fill="#333"/><rect x="30" y="84" width="10" height="12" fill="#333"/>
    <circle cx="28" cy="27" r="14" fill="#ffd8b8" ${S}/>
    <path d="M14 27 Q14 9 28 9 Q42 9 42 27 Q37 17 28 17 Q19 17 14 27 Z" fill="#3b2a1a" ${S}/>
    <circle cx="23" cy="28" r="2" fill="#333"/><circle cx="33" cy="28" r="2" fill="#333"/>
    <path d="M23 34 Q28 39 33 34" fill="none" ${S}/>
    <path d="M40 48 L48 68" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M40 48 L48 68" stroke="#1d2a5a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="49" cy="70" r="4" fill="#ffd8b8" ${S}/>
    <rect x="42" y="74" width="22" height="18" rx="2" fill="#8b4a2b" ${S}/>
    <path d="M49 74 V70 H57 V74" fill="none" ${S}/>
    <path d="M42 82 H64" stroke="#333" stroke-width="2"/>` },

  { cs: 'povolání', en: 'profession', pattern: 'stavení', gender: 'n', level: 'A1', official: 'A1', topic: 'school', svg: `
    <circle cx="16" cy="22" r="11" fill="#fff" ${S}/><circle cx="40" cy="22" r="11" fill="#fff" ${S}/>
    <circle cx="28" cy="13" r="11" fill="#fff" ${S}/>
    <rect x="8" y="28" width="40" height="14" rx="2" fill="#fff" ${S}/>
    <path d="M16 34 H40" stroke="#ddd" stroke-width="3" stroke-linecap="round"/>
    <path d="M74 8 V24 Q74 38 88 38 Q102 38 102 24 V8" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M74 8 V24 Q74 38 88 38 Q102 38 102 24 V8" fill="none" stroke="#7a7f87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M88 38 V50 Q88 60 98 60" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M88 38 V50 Q88 60 98 60" fill="none" stroke="#7a7f87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="105" cy="62" r="8" fill="#9aa0a8" ${S}/>
    <circle cx="105" cy="62" r="3.5" fill="#ddd"/>
    <circle cx="74" cy="7" r="3.5" fill="#333"/><circle cx="102" cy="7" r="3.5" fill="#333"/>
    <path d="M30 86 Q30 56 54 56 Q78 56 78 86 Z" fill="#e63946" ${S}/>
    <rect x="22" y="84" width="64" height="10" rx="4" fill="#c0392b" ${S}/>
    <path d="M48 66 H60 V76 Q60 80 54 82 Q48 80 48 76 Z" fill="#f9c74f" ${S}/>
    <path d="M54 56 V66" stroke="#333" stroke-width="3" stroke-linecap="round"/>` }
);
