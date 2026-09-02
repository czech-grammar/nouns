// B1 deck: clothes, school, other (feminine)
WORDS.push(
  { cs: 'kapsa', en: 'pocket', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'clothes', svg: `
    <path d="M24 20 H96 L100 94 H70 L60 52 L50 94 H20 Z" fill="#4fa3e3" ${S}/>
    <path d="M60 20 V52" fill="none" stroke="#1d2a5a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M21 86 H50 M70 86 H99" stroke="#1d2a5a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M96 20 Q94 36 78 46" fill="none" stroke="#1d2a5a" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="22" y="8" width="76" height="12" rx="2" fill="#1d2a5a" ${S}/>
    <circle cx="60" cy="14" r="2.5" fill="#f9c74f"/>
    <path d="M58 2 V24" stroke="#333" stroke-width="13" stroke-linecap="round"/>
    <path d="M58 2 V24" stroke="#e63946" stroke-width="9" stroke-linecap="round"/>
    <circle cx="57" cy="31" r="7.5" fill="#ffd8b8" ${S}/>
    <path d="M24 20 H56 Q56 38 42 48 L27 48 Z" fill="#f9c74f" ${S}/>` },

  { cs: 'skvrna', en: 'stain, spot', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'clothes', svg: `
    <path d="M40 38 L26 44 L16 72 L30 76 L32 94 H88 L90 76 L104 72 L94 44 L80 38 L70 42 L60 50 L50 42 Z" fill="#fff" ${S}/>
    <path d="M50 42 L60 50 L70 42 L66 36 H54 Z" fill="#fff" ${S}/>
    <circle cx="60" cy="60" r="2" fill="#9aa0a8"/><circle cx="60" cy="70" r="2" fill="#9aa0a8"/><circle cx="60" cy="80" r="2" fill="#9aa0a8"/>
    <path d="M40 58 Q46 50 54 56 Q62 48 66 58 Q76 60 70 68 Q76 78 66 78 Q62 86 54 80 Q44 84 44 74 Q34 68 40 58 Z" fill="#e63946" ${S}/>
    <path d="M50 80 V90" stroke="#e63946" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="91" r="3" fill="#e63946"/>
    <circle cx="82" cy="50" r="3" fill="#e63946"/><circle cx="36" cy="48" r="2" fill="#e63946"/>
    <circle cx="60" cy="20" r="14" fill="#ffd8b8" ${S}/>
    <path d="M46 18 Q46 6 60 6 Q74 6 74 18 Q68 12 60 12 Q52 12 46 18 Z" fill="#8b4a2b" ${S}/>
    <path d="M52 15 L57 18 M68 15 L63 18" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <circle cx="55" cy="21" r="2" fill="#333"/><circle cx="65" cy="21" r="2" fill="#333"/>
    <path d="M54 28 Q57 25 60 28 Q63 31 66 28" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M77 12 q-3 5 -3 7 a3 3 0 0 0 6 0 q0 -2 -3 -7 z" fill="#4fa3e3"/>` },

  { cs: 'uniforma', en: 'uniform', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'clothes', svg: `
    <path d="M74 26 V16 Q74 8 80 8 Q86 8 86 14" fill="none" stroke="#7a7f87" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 30 L32 52 L46 56 V94 H102 V56 L116 52 L102 30 L88 26 L74 40 L60 26 Z" fill="#1d2a5a" ${S}/>
    <path d="M60 26 L74 44 L66 64 L58 62 Z" fill="#2f4180" ${S}/>
    <path d="M88 26 L74 44 L82 64 L90 62 Z" fill="#2f4180" ${S}/>
    <rect x="46" y="26" width="16" height="6" rx="2" fill="#f9c74f" transform="rotate(-14 54 29)" ${S}/>
    <rect x="86" y="26" width="16" height="6" rx="2" fill="#f9c74f" transform="rotate(14 94 29)" ${S}/>
    <circle cx="74" cy="68" r="2.5" fill="#f9c74f" stroke="#333" stroke-width="1.5"/><circle cx="74" cy="78" r="2.5" fill="#f9c74f" stroke="#333" stroke-width="1.5"/><circle cx="74" cy="88" r="2.5" fill="#f9c74f" stroke="#333" stroke-width="1.5"/>
    <polygon points="56,63.6 58.1,69.2 64,69.4 59.3,73.1 60.9,78.8 56,75.5 51.1,78.8 52.7,73.1 48,69.4 53.9,69.2" fill="#f9c74f" ${S}/>
    <rect x="84" y="72" width="12" height="10" fill="none" ${S}/>
    <path d="M6 28 Q6 10 22 10 Q38 10 38 28 Z" fill="#1d2a5a" ${S}/>
    <rect x="6" y="24" width="32" height="4" fill="#e63946"/>
    <polygon points="4,28 40,28 36,34 10,34" fill="#333" ${S}/>
    <circle cx="22" cy="20" r="4" fill="#f9c74f" ${S}/>` },

  { cs: 'tabulka', en: 'table, chart; bar (of chocolate)', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="6" y="6" width="72" height="88" fill="#fff" ${S}/>
    <rect x="12" y="16" width="60" height="14" fill="#2a9d8f" ${S}/>
    <g fill="#fff" ${S}>
      <rect x="12" y="30" width="20" height="14"/><rect x="32" y="30" width="20" height="14"/><rect x="52" y="30" width="20" height="14"/>
      <rect x="12" y="44" width="20" height="14"/><rect x="32" y="44" width="20" height="14"/><rect x="52" y="44" width="20" height="14"/>
      <rect x="12" y="58" width="20" height="14"/><rect x="32" y="58" width="20" height="14"/><rect x="52" y="58" width="20" height="14"/>
    </g>
    <path d="M32 16 V30 M52 16 V30" fill="none" ${S}/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9" text-anchor="middle" fill="#fff">
      <text x="22" y="26.5">A</text><text x="42" y="26.5">B</text><text x="62" y="26.5">C</text>
    </g>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" text-anchor="middle" fill="#333">
      <text x="22" y="40">1</text><text x="42" y="40">2</text><text x="62" y="40">3</text>
      <text x="22" y="54">4</text><text x="42" y="54">5</text><text x="62" y="54">6</text>
      <text x="22" y="68">7</text><text x="42" y="68">8</text><text x="62" y="68">9</text>
    </g>
    <path d="M14 80 H50 M14 86 H40" fill="none" stroke="#bbb" stroke-width="2" stroke-linecap="round"/>
    <rect x="82" y="30" width="32" height="64" rx="3" fill="#8b4a2b" ${S}/>
    <path d="M82 46 H114 M82 62 H114 M82 78 H114 M98 30 V94" fill="none" stroke="#3b2a1a" stroke-width="2.5"/>
    <rect x="80" y="22" width="36" height="16" rx="2" fill="#c7b6f5" ${S}/>` },

  { cs: 'poznámka', en: 'note', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="10" y="6" width="80" height="88" fill="#fff" ${S}/>
    <path d="M18 18 H82 M18 26 H70 M18 74 H82 M18 82 H60" fill="none" stroke="#bbb" stroke-width="2" stroke-linecap="round"/>
    <g transform="translate(48 50) rotate(-8)">
      <rect x="-24" y="-22" width="48" height="44" fill="#f9c74f" ${S}/>
      <path d="M-16 -10 Q-10 -16 -4 -10 T8 -10 M-16 0 Q-8 -6 -2 0 T12 0 M-16 10 Q-10 4 -4 10 T6 10" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    </g>
    <circle cx="50" cy="28" r="5" fill="#e63946" ${S}/>
    <g transform="translate(74 60) rotate(45)">
      <polygon points="0,0 12,-5 12,5" fill="#ffe08a" ${S}/>
      <polygon points="0,0 5,-2 5,2" fill="#333"/>
      <rect x="12" y="-5" width="26" height="10" fill="#4fa3e3" ${S}/>
      <rect x="38" y="-5" width="4" height="10" fill="#9aa0a8" ${S}/>
      <rect x="42" y="-5" width="6" height="10" rx="3" fill="#e94b8a" ${S}/>
    </g>` },

  { cs: 'knížka', en: 'book (small)', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="6" y="6" width="60" height="88" rx="3" fill="#1d2a5a" ${S}/>
    <rect x="6" y="6" width="10" height="88" rx="3" fill="#4fa3e3" ${S}/>
    <path d="M28 26 H56 M28 34 H50" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <rect x="60" y="10" width="4" height="80" fill="#fff" stroke="#333" stroke-width="1.5"/>
    <g transform="translate(92 72) rotate(8)">
      <rect x="-18" y="-22" width="36" height="44" rx="2" fill="#e94b8a" ${S}/>
      <rect x="-18" y="-22" width="6" height="44" rx="2" fill="#f9c74f" ${S}/>
      <polygon points="4,-14 6.1,-8.4 12,-8.2 7.3,-4.5 8.9,1.2 4,-2.1 -0.9,1.2 0.7,-4.5 -4,-8.2 1.9,-8.4" fill="#f9c74f" ${S}/>
      <path d="M-6 10 H12" stroke="#6cc06a" stroke-width="4" stroke-linecap="round"/>
    </g>` },

  { cs: 'kresba', en: 'drawing', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="22" y="6" width="76" height="88" fill="#fff" ${S}/>
    <circle cx="82" cy="24" r="7" fill="#f9c74f" stroke="#333" stroke-width="2"/>
    <path d="M82 12 V15 M82 33 V36 M70 24 H73 M91 24 H94 M73.5 15.5 L75.5 17.5 M88.5 30.5 L90.5 32.5 M90.5 15.5 L88.5 17.5 M75.5 30.5 L73.5 32.5" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <rect x="66" y="34" width="6" height="12" fill="#9aa0a8" stroke="#333" stroke-width="2"/>
    <polygon points="34,50 56,30 78,50" fill="#e63946" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
    <rect x="38" y="50" width="36" height="30" fill="#ffe08a" stroke="#333" stroke-width="2"/>
    <rect x="52" y="64" width="9" height="16" fill="#b5722f" stroke="#333" stroke-width="2"/>
    <rect x="41" y="55" width="8" height="8" fill="#bde0fe" stroke="#333" stroke-width="2"/>
    <path d="M45 55 V63 M41 59 H49" fill="none" stroke="#333" stroke-width="1.5"/>
    <path d="M28 84 Q31 78 34 84 T40 84 M78 84 Q81 78 84 84 T90 84" fill="none" stroke="#3f9d55" stroke-width="2" stroke-linecap="round"/>
    <g transform="translate(12 30) rotate(90)">
      <polygon points="0,0 12,-5 12,5" fill="#ffe08a" ${S}/>
      <polygon points="0,0 5,-2 5,2" fill="#333"/>
      <rect x="12" y="-5" width="26" height="10" fill="#e63946" ${S}/>
      <rect x="38" y="-5" width="4" height="10" fill="#9aa0a8" ${S}/>
      <rect x="42" y="-5" width="6" height="10" rx="3" fill="#e94b8a" ${S}/>
    </g>
    <g transform="translate(108 36) rotate(88)">
      <polygon points="0,0 12,-5 12,5" fill="#ffe08a" ${S}/>
      <polygon points="0,0 5,-2 5,2" fill="#333"/>
      <rect x="12" y="-5" width="26" height="10" fill="#6cc06a" ${S}/>
      <rect x="38" y="-5" width="4" height="10" fill="#9aa0a8" ${S}/>
      <rect x="42" y="-5" width="6" height="10" rx="3" fill="#e94b8a" ${S}/>
    </g>` },

  { cs: 'nula', en: 'zero', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="16" y="4" width="88" height="24" rx="3" fill="#1d2a5a" ${S}/>
    <text x="60" y="22" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="16" fill="#f9c74f">0 : 0</text>
    <ellipse cx="56" cy="64" rx="26" ry="30" fill="#4fa3e3" ${S}/>
    <ellipse cx="56" cy="64" rx="12" ry="17" fill="#fff" ${S}/>
    <circle cx="102" cy="84" r="9" fill="#fff" ${S}/>
    <polygon points="102,79 106.5,82.5 104.8,88 99.2,88 97.5,82.5" fill="#333"/>` },

  { cs: 'jednička', en: 'number one; top mark', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="26" y="4" width="68" height="92" fill="#fff" ${S}/>
    <path d="M34 22 H60 M34 32 H58 M34 42 H60" fill="none" stroke="#bbb" stroke-width="2.5" stroke-linecap="round"/>
    <text x="60" y="88" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="72" fill="#e63946" stroke="#333" stroke-width="2.5">1</text>
    <polygon points="78,12 80.9,19.9 89.4,20.3 82.8,25.6 85.1,33.7 78,29 70.9,33.7 73.2,25.6 66.6,20.3 75.1,19.9" fill="#f9c74f" ${S}/>` },

  { cs: 'školka', en: 'nursery school', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="30" y="4" width="60" height="14" rx="3" fill="#6cc06a" ${S}/>
    <text x="60" y="15" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">ŠKOLKA</text>
    <path d="M4 92 H116" fill="none" ${S}/>
    <rect x="92" y="84" width="5" height="8" fill="#ffd8b8" ${S}/>
    <rect x="101" y="84" width="5" height="8" fill="#ffd8b8" ${S}/>
    <path d="M89 52 H109 L114 84 H84 Z" fill="#e94b8a" ${S}/>
    <path d="M89 60 L84 76" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M89 60 L84 76" stroke="#ffd8b8" stroke-width="5" stroke-linecap="round"/>
    <circle cx="99" cy="40" r="10" fill="#ffd8b8" ${S}/>
    <path d="M89 40 Q89 30 99 30 Q109 30 109 40 L110 56 H105 L104 42 Q102 35 99 35 Q96 35 94 42 L93 56 H88 Z" fill="#8b4a2b" ${S}/>
    <circle cx="96" cy="41" r="1.8" fill="#333"/><circle cx="102" cy="41" r="1.8" fill="#333"/>
    <path d="M96 46 Q99 48 102 46" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 70 H30 L34 92 H8 Z" fill="#4fa3e3" ${S}/>
    <circle cx="21" cy="60" r="8" fill="#ffd8b8" ${S}/>
    <path d="M13 60 Q13 52 21 52 Q29 52 29 60 Q25 56 21 56 Q17 56 13 60 Z" fill="#3b2a1a" ${S}/>
    <circle cx="18" cy="61" r="1.5" fill="#333"/><circle cx="24" cy="61" r="1.5" fill="#333"/>
    <path d="M18 65 Q21 67 24 65" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M62 70 H80 L84 92 H58 Z" fill="#6cc06a" ${S}/>
    <circle cx="71" cy="60" r="8" fill="#ffd8b8" ${S}/>
    <path d="M63 60 Q63 52 71 52 Q79 52 79 60 L80 72 H76 L75 62 Q74 56 71 56 Q68 56 67 62 L66 72 H62 Z" fill="#f2c14e" ${S}/>
    <circle cx="68" cy="61" r="1.5" fill="#333"/><circle cx="74" cy="61" r="1.5" fill="#333"/>
    <path d="M68 65 Q71 67 74 65" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <rect x="36" y="80" width="12" height="12" fill="#e63946" ${S}/>
    <rect x="48" y="80" width="12" height="12" fill="#4fa3e3" ${S}/>
    <rect x="42" y="68" width="12" height="12" fill="#f9c74f" ${S}/>
    <g font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" text-anchor="middle" fill="#fff">
      <text x="42" y="89">A</text><text x="54" y="89">B</text><text x="48" y="77" fill="#333">C</text>
    </g>` },

  { cs: 'obálka', en: 'envelope', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'school', svg: `
    <rect x="6" y="22" width="108" height="70" rx="3" fill="#fff7ea" ${S}/>
    <path d="M14 32 H36 M14 39 H30" fill="none" stroke="#bbb" stroke-width="2" stroke-linecap="round"/>
    <rect x="84" y="30" width="22" height="26" fill="#fff" stroke="#333" stroke-width="2" stroke-dasharray="2 2"/>
    <rect x="87" y="33" width="16" height="20" fill="#4fa3e3"/>
    <text x="95" y="46.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" fill="#fff">10</text>
    <path d="M56 36 Q62 32 68 36 T80 36 M56 43 Q62 39 68 43 T80 43 M56 50 Q62 46 68 50 T80 50" fill="none" stroke="#7a7f87" stroke-width="2" stroke-linecap="round"/>
    <path d="M22 64 H66 M22 73 H58 M22 82 H70" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'stopa', en: 'footprint, trace', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <rect x="4" y="14" width="112" height="82" rx="4" fill="#ffe08a" ${S}/>
    <g fill="#b5722f" stroke="#333" stroke-width="1.5">
      <g transform="translate(22 78) rotate(-10) scale(1.3)"><ellipse cx="0" cy="1" rx="5.5" ry="9"/><circle cx="-3.5" cy="-11" r="2.4"/><circle cx="0" cy="-12.5" r="1.8"/><circle cx="3" cy="-12" r="1.6"/><circle cx="5.4" cy="-10.3" r="1.4"/><circle cx="7" cy="-8" r="1.2"/></g>
      <g transform="translate(44 64) rotate(10) scale(1.1)"><ellipse cx="0" cy="1" rx="5.5" ry="9"/><circle cx="-3.5" cy="-11" r="2.4"/><circle cx="0" cy="-12.5" r="1.8"/><circle cx="3" cy="-12" r="1.6"/><circle cx="5.4" cy="-10.3" r="1.4"/><circle cx="7" cy="-8" r="1.2"/></g>
      <g transform="translate(58 51) rotate(-10) scale(0.9)"><ellipse cx="0" cy="1" rx="5.5" ry="9"/><circle cx="-3.5" cy="-11" r="2.4"/><circle cx="0" cy="-12.5" r="1.8"/><circle cx="3" cy="-12" r="1.6"/><circle cx="5.4" cy="-10.3" r="1.4"/><circle cx="7" cy="-8" r="1.2"/></g>
      <g transform="translate(70 41) rotate(10) scale(0.75)"><ellipse cx="0" cy="1" rx="5.5" ry="9"/><circle cx="-3.5" cy="-11" r="2.4"/><circle cx="0" cy="-12.5" r="1.8"/><circle cx="3" cy="-12" r="1.6"/><circle cx="5.4" cy="-10.3" r="1.4"/><circle cx="7" cy="-8" r="1.2"/></g>
      <g transform="translate(80 33) rotate(-10) scale(0.6)"><ellipse cx="0" cy="1" rx="5.5" ry="9"/><circle cx="-3.5" cy="-11" r="2.4"/><circle cx="0" cy="-12.5" r="1.8"/><circle cx="3" cy="-12" r="1.6"/><circle cx="5.4" cy="-10.3" r="1.4"/><circle cx="7" cy="-8" r="1.2"/></g>
      <g transform="translate(88 26) rotate(10) scale(0.5)"><ellipse cx="0" cy="1" rx="5.5" ry="9"/><circle cx="-3.5" cy="-11" r="2.4"/><circle cx="0" cy="-12.5" r="1.8"/><circle cx="3" cy="-12" r="1.6"/><circle cx="5.4" cy="-10.3" r="1.4"/><circle cx="7" cy="-8" r="1.2"/></g>
      <g transform="translate(96 66) rotate(-8) scale(1.0)"><ellipse cx="0" cy="1" rx="5.5" ry="9"/><circle cx="-3.5" cy="-11" r="2.4"/><circle cx="0" cy="-12.5" r="1.8"/><circle cx="3" cy="-12" r="1.6"/><circle cx="5.4" cy="-10.3" r="1.4"/><circle cx="7" cy="-8" r="1.2"/></g>
    </g>
    <circle cx="96" cy="66" r="15" fill="none" stroke="#333" stroke-width="7"/>
    <circle cx="96" cy="66" r="15" fill="none" stroke="#bde0fe" stroke-width="3"/>
    <path d="M106 77 L113 86" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M106 77 L113 86" stroke="#b5722f" stroke-width="5" stroke-linecap="round"/>` },

  { cs: 'díra', en: 'hole', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <path d="M44 6 H74 V50 Q74 60 66 64 L34 80 Q20 86 14 76 Q10 66 24 60 L44 52 Z" fill="#6cc06a" ${S}/>
    <rect x="42" y="6" width="34" height="10" rx="2" fill="#3f9d55" ${S}/>
    <path d="M47 26 H71 M47 36 H71" stroke="#f9c74f" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="28" cy="68" rx="9" ry="7" fill="#333"/>
    <circle cx="20" cy="72" r="6" fill="#ffd8b8" ${S}/>
    <ellipse cx="17" cy="71" rx="2" ry="1.5" fill="#fff"/>
    <path d="M62 82 Q68 70 76 82 Z" fill="#b5722f" ${S}/>
    <rect x="62" y="82" width="54" height="14" fill="#6cc06a" ${S}/>
    <ellipse cx="90" cy="82" rx="16" ry="6" fill="#333" ${S}/>` },

  { cs: 'planeta', en: 'planet', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <rect x="4" y="4" width="112" height="92" rx="6" fill="#1d2a5a" ${S}/>
    <circle cx="16" cy="16" r="1.5" fill="#fff"/><circle cx="30" cy="86" r="1.5" fill="#fff"/><circle cx="70" cy="14" r="1.5" fill="#fff"/><circle cx="104" cy="84" r="1.5" fill="#fff"/><circle cx="48" cy="90" r="1.5" fill="#fff"/><circle cx="12" cy="40" r="1.5" fill="#fff"/>
    <polygon points="20,66 22,70 26,72 22,74 20,78 18,74 14,72 18,70" fill="#f9c74f"/>
    <polygon points="108,66 110,70 114,72 110,74 108,78 106,74 102,72 106,70" fill="#f9c74f"/>
    <polygon points="36,14 37.5,17 40.5,18.5 37.5,20 36,23 34.5,20 31.5,18.5 34.5,17" fill="#f9c74f"/>
    <ellipse cx="56" cy="52" rx="46" ry="11" fill="none" stroke="#333" stroke-width="8"/>
    <ellipse cx="56" cy="52" rx="46" ry="11" fill="none" stroke="#c7b6f5" stroke-width="4"/>
    <circle cx="56" cy="50" r="26" fill="#f4a261" ${S}/>
    <path d="M34 40 H78" stroke="#ffe08a" stroke-width="5" stroke-linecap="round"/>
    <path d="M33 58 H79" stroke="#c0392b" stroke-width="4" stroke-linecap="round"/>
    <path d="M10 52 A46 11 0 0 0 102 52" fill="none" stroke="#333" stroke-width="8"/>
    <path d="M10 52 A46 11 0 0 0 102 52" fill="none" stroke="#c7b6f5" stroke-width="4"/>
    <circle cx="100" cy="22" r="9" fill="#4fa3e3" ${S}/>
    <path d="M94 18 Q98 14 102 18 Q104 22 99 24 Q94 23 94 18 Z" fill="#6cc06a"/>
    <path d="M103 26 Q107 24 107 28 Q104 30 103 26 Z" fill="#6cc06a"/>` },

  { cs: 'hromada', en: 'pile, heap', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <path d="M4 92 H116" fill="none" ${S}/>
    <path d="M36 44 H56 L54 64 Q46 70 38 64 Z" fill="#9aa0a8" ${S}/>
    <path d="M4 92 Q10 62 30 52 Q52 40 66 60 Q76 72 78 92 Z" fill="#ffe08a" ${S}/>
    <circle cx="30" cy="80" r="1.5" fill="#f4a261"/><circle cx="50" cy="84" r="1.5" fill="#f4a261"/><circle cx="40" cy="68" r="1.5" fill="#f4a261"/><circle cx="60" cy="78" r="1.5" fill="#f4a261"/><circle cx="20" cy="88" r="1.5" fill="#f4a261"/><circle cx="22" cy="72" r="1.5" fill="#f4a261"/>
    <path d="M46 46 L40 8" stroke="#333" stroke-width="8" stroke-linecap="round"/>
    <path d="M46 46 L40 8" stroke="#b5722f" stroke-width="4" stroke-linecap="round"/>
    <rect x="32" y="2" width="16" height="8" rx="4" fill="#b5722f" ${S}/>
    <rect x="82" y="80" width="34" height="12" rx="2" fill="#e63946" ${S}/>
    <rect x="80" y="68" width="34" height="12" rx="2" fill="#4fa3e3" ${S}/>
    <rect x="84" y="56" width="30" height="12" rx="2" fill="#6cc06a" ${S}/>
    <rect x="82" y="44" width="30" height="12" rx="2" fill="#f9c74f" transform="rotate(-6 97 50)" ${S}/>
    <path d="M88 86 H96 M86 74 H94 M90 62 H98" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'kapka', en: 'drop', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <rect x="28" y="2" width="16" height="8" rx="3" fill="#e63946" ${S}/>
    <rect x="34" y="8" width="4" height="6" fill="#7a7f87" ${S}/>
    <rect x="20" y="12" width="46" height="12" rx="5" fill="#9aa0a8" ${S}/>
    <rect x="52" y="20" width="14" height="14" rx="2" fill="#9aa0a8" ${S}/>
    <rect x="50" y="32" width="18" height="5" rx="2" fill="#7a7f87" ${S}/>
    <path d="M59 42 Q74 62 74 72 A15 15 0 1 1 44 72 Q44 62 59 42 Z" fill="#4fa3e3" ${S}/>
    <ellipse cx="52" cy="72" rx="3" ry="5" fill="#bde0fe"/>
    <ellipse cx="59" cy="93" rx="34" ry="4" fill="#bde0fe" ${S}/>
    <g fill="#4fa3e3" stroke="#333" stroke-width="1.5">
      <circle cx="28" cy="80" r="3"/><circle cx="92" cy="80" r="3"/><circle cx="36" cy="68" r="2"/><circle cx="82" cy="68" r="2"/>
    </g>` },

  { cs: 'nádrž', en: 'tank, reservoir', pattern: 'píseň (gen. nádrže)', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <rect x="26" y="10" width="4" height="8" fill="#7a7f87" ${S}/>
    <circle cx="28" cy="9" r="7" fill="#fff" ${S}/>
    <path d="M28 9 L32 5" stroke="#e63946" stroke-width="2" stroke-linecap="round"/>
    <rect x="44" y="12" width="16" height="6" rx="2" fill="#7a7f87" ${S}/>
    <rect x="8" y="18" width="66" height="62" rx="8" fill="#ddd" ${S}/>
    <path d="M11 50 Q26 46 41 50 T71 50 V72 Q71 77 66 77 H16 Q11 77 11 72 Z" fill="#4fa3e3"/>
    <text x="41" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="8" fill="#333">1000 L</text>
    <rect x="16" y="80" width="6" height="14" fill="#7a7f87" ${S}/>
    <rect x="60" y="80" width="6" height="14" fill="#7a7f87" ${S}/>
    <rect x="74" y="60" width="42" height="8" fill="#7a7f87" ${S}/>
    <rect x="92" y="54" width="4" height="6" fill="#333"/>
    <circle cx="94" cy="49" r="7" fill="#e63946" ${S}/>
    <path d="M87 49 H101 M94 42 V56" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <rect x="86" y="76" width="24" height="18" rx="2" fill="#e63946" ${S}/>
    <rect x="88" y="70" width="8" height="6" fill="#7a7f87" ${S}/>
    <path d="M98 76 V71 H106 V76" fill="none" ${S}/>` },

  { cs: 'tyč', en: 'pole, rod', pattern: 'píseň (gen. tyče)', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <path d="M4 94 H116" fill="none" ${S}/>
    <rect x="24" y="86" width="20" height="8" rx="2" fill="#7a7f87" ${S}/>
    <rect x="31" y="8" width="6" height="80" fill="#9aa0a8" ${S}/>
    <circle cx="34" cy="7" r="4" fill="#f9c74f" ${S}/>
    <path d="M37 10 H80 V24 H37 Z" fill="#fff" ${S}/>
    <path d="M37 24 H80 V38 H37 Z" fill="#e63946" ${S}/>
    <polygon points="37,10 60,24 37,38" fill="#1d2a5a" ${S}/>
    <path d="M84 20 Q92 40 90 74" fill="none" stroke="#333" stroke-width="1.5"/>
    <path d="M112 92 L84 20" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M112 92 L84 20" stroke="#b5722f" stroke-width="4" stroke-linecap="round"/>
    <circle cx="100" cy="76" r="5" fill="#7a7f87" ${S}/>
    <circle cx="90" cy="76" r="4" fill="#e63946" ${S}/>
    <path d="M90 80 V88 q0 4 4 3" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>` },

  { cs: 'čtvrtina', en: 'quarter', pattern: 'žena', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <path d="M48 54 V14 A40 40 0 1 0 88 54 Z" fill="#f4a261" ${S}/>
    <path d="M48 54 V21 A33 33 0 1 0 81 54 Z" fill="#f9c74f"/>
    <g fill="#e63946" stroke="#333" stroke-width="1.5">
      <circle cx="34" cy="36" r="5"/><circle cx="24" cy="58" r="5"/><circle cx="40" cy="74" r="5"/><circle cx="62" cy="72" r="5"/><circle cx="70" cy="52" r="5"/>
    </g>
    <g transform="translate(58 44)">
      <path d="M0 0 V-40 A40 40 0 0 1 40 0 Z" fill="#f4a261" ${S}/>
      <path d="M0 0 V-33 A33 33 0 0 1 33 0 Z" fill="#f9c74f"/>
      <circle cx="12" cy="-24" r="5" fill="#e63946" stroke="#333" stroke-width="1.5"/><circle cx="22" cy="-10" r="5" fill="#e63946" stroke="#333" stroke-width="1.5"/>
    </g>
    <rect x="86" y="76" width="30" height="18" rx="3" fill="#fff" ${S}/>
    <text x="101" y="89.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#e63946">1/4</text>` },

  { cs: 'konference', en: 'conference', pattern: 'růže', gender: 'f', level: 'B1', official: null, topic: 'other', svg: `
    <rect x="12" y="4" width="96" height="14" rx="2" fill="#1d2a5a" ${S}/>
    <text x="60" y="15" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="9.5" fill="#fff">KONFERENCE</text>
    <path d="M98 18 V24" stroke="#333" stroke-width="2"/>
    <rect x="80" y="24" width="36" height="28" fill="#fff" ${S}/>
    <rect x="86" y="38" width="6" height="10" fill="#4fa3e3"/><rect x="95" y="30" width="6" height="18" fill="#e63946"/><rect x="104" y="34" width="6" height="14" fill="#6cc06a"/>
    <path d="M10 52 H30 L32 68 H8 Z" fill="#2a9d8f" ${S}/>
    <circle cx="20" cy="42" r="9" fill="#ffd8b8" ${S}/>
    <path d="M11 42 Q11 33 20 33 Q29 33 29 42 Q25 37 20 37 Q15 37 11 42 Z" fill="#3b2a1a" ${S}/>
    <circle cx="17" cy="43" r="1.6" fill="#333"/><circle cx="23" cy="43" r="1.6" fill="#333"/>
    <path d="M17 47 Q20 49 23 47" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M34 52 H54 L56 68 H32 Z" fill="#e94b8a" ${S}/>
    <circle cx="44" cy="42" r="9" fill="#ffd8b8" ${S}/>
    <path d="M35 42 Q35 33 44 33 Q53 33 53 42 L54 56 H49 L48 44 Q47 38 44 38 Q41 38 40 44 L39 56 H34 Z" fill="#f2c14e" ${S}/>
    <circle cx="41" cy="43" r="1.6" fill="#333"/><circle cx="47" cy="43" r="1.6" fill="#333"/>
    <path d="M41 47 Q44 49 47 47" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <path d="M58 52 H78 L80 68 H56 Z" fill="#c7b6f5" ${S}/>
    <circle cx="68" cy="42" r="9" fill="#ffd8b8" ${S}/>
    <path d="M59 42 Q59 33 68 33 Q77 33 77 42 Q73 37 68 37 Q63 37 59 42 Z" fill="#8b4a2b" ${S}/>
    <circle cx="65" cy="43" r="1.6" fill="#333"/><circle cx="71" cy="43" r="1.6" fill="#333"/>
    <path d="M65 47 Q68 49 71 47" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    <rect x="4" y="66" width="112" height="10" rx="2" fill="#b5722f" ${S}/>
    <rect x="10" y="76" width="6" height="18" fill="#8b4a2b" ${S}/>
    <rect x="104" y="76" width="6" height="18" fill="#8b4a2b" ${S}/>
    <g fill="#fff" stroke="#333" stroke-width="1.5">
      <rect x="12" y="60" width="16" height="8" rx="1"/><rect x="36" y="60" width="16" height="8" rx="1"/><rect x="60" y="60" width="16" height="8" rx="1"/>
    </g>
    <path d="M15 64 H25 M39 64 H49 M63 64 H73" fill="none" stroke="#4fa3e3" stroke-width="2" stroke-linecap="round"/>
    <circle cx="94" cy="57" r="3" fill="#333"/>
    <path d="M94 60 V66" stroke="#333" stroke-width="2"/>` }
);
