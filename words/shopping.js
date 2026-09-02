// Topic: shopping
WORDS.push(
  { cs: 'koruna', en: 'crown (money)', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <circle cx="60" cy="50" r="45" fill="#f9c74f" ${S}/>
    <circle cx="60" cy="50" r="36" fill="#ffe08a" ${S}/>
    <path d="M48 34 L46 20 L54 27 L60 16 L66 27 L74 20 L72 34 Z" fill="#f4a261" ${S}/>
    <text x="52" y="78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="40" fill="#333">1</text>
    <text x="78" y="76" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="17" fill="#333">Kč</text>` },

  { cs: 'cena', en: 'price', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <path d="M30 46 Q10 30 18 8" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round"/>
    <path d="M30 46 Q10 30 18 8" fill="none" stroke="#b5722f" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 50 L36 22 H100 a6 6 0 0 1 6 6 v44 a6 6 0 0 1 -6 6 H36 Z" fill="#f4a261" ${S}/>
    <circle cx="32" cy="50" r="5" fill="#fff" ${S}/>
    <text x="72" y="58" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="21" fill="#333">99 Kč</text>` },

  { cs: 'peněženka', en: 'wallet', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <rect x="18" y="32" width="84" height="56" rx="8" fill="#8b4a2b" ${S}/>
    <rect x="32" y="14" width="50" height="32" rx="3" fill="#8fd18a" ${S}/>
    <rect x="38" y="20" width="38" height="20" fill="none" stroke="#3f9d55" stroke-width="2"/>
    <circle cx="57" cy="30" r="6" fill="#3f9d55"/>
    <circle cx="90" cy="34" r="11" fill="#f9c74f" ${S}/>
    <circle cx="90" cy="34" r="6" fill="#ffe08a"/>
    <path d="M18 52 H102 V80 a8 8 0 0 1 -8 8 H26 a8 8 0 0 1 -8 -8 Z" fill="#b5722f" ${S}/>
    <circle cx="86" cy="70" r="5" fill="#f9c74f" ${S}/>` },

  { cs: 'taška', en: 'bag', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <path d="M36 40 Q36 12 60 12 Q84 12 84 40" fill="none" stroke="#333" stroke-width="9" stroke-linecap="round"/>
    <path d="M36 40 Q36 12 60 12 Q84 12 84 40" fill="none" stroke="#8b4a2b" stroke-width="4" stroke-linecap="round"/>
    <path d="M44 42 L47 18 L59 18 L60 42 Z" fill="#f4a261" ${S}/>
    <path d="M53 18 L46 6 M53 18 L54 4 M53 18 L62 7" fill="none" stroke="#3f9d55" stroke-width="4" stroke-linecap="round"/>
    <rect x="66" y="20" width="12" height="24" fill="#fff" ${S}/>
    <path d="M67 20 L60 8 M72 20 L72 5 M77 20 L85 8" fill="none" stroke="#3f9d55" stroke-width="5" stroke-linecap="round"/>
    <path d="M22 40 H98 L104 94 H16 Z" fill="#e63946" ${S}/>
    <path d="M42 56 H78" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>` },

  { cs: 'pokladna', en: 'checkout, till', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <rect x="40" y="10" width="42" height="20" rx="3" fill="#1d2a5a" ${S}/>
    <text x="61" y="25" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#6cc06a">45 Kč</text>
    <rect x="57" y="30" width="8" height="8" fill="#7a7f87" ${S}/>
    <rect x="26" y="20" width="14" height="18" fill="#fff" ${S}/>
    <path d="M29 26 H37 M29 31 H37" stroke="#bbb" stroke-width="2" stroke-linecap="round"/>
    <path d="M24 66 L28 38 H94 L98 66 Z" fill="#ddd" ${S}/>
    <g fill="#7a7f87">
      <rect x="40" y="44" width="8" height="6" rx="1.5"/><rect x="52" y="44" width="8" height="6" rx="1.5"/><rect x="64" y="44" width="8" height="6" rx="1.5"/><rect x="76" y="44" width="8" height="6" rx="1.5"/>
      <rect x="39" y="54" width="8" height="6" rx="1.5"/><rect x="51" y="54" width="8" height="6" rx="1.5"/><rect x="63" y="54" width="8" height="6" rx="1.5"/><rect x="75" y="54" width="8" height="6" rx="1.5"/>
    </g>
    <rect x="12" y="66" width="96" height="28" rx="4" fill="#9aa0a8" ${S}/>
    <rect x="20" y="72" width="80" height="16" rx="2" fill="#7a7f87" ${S}/>
    <rect x="50" y="78" width="20" height="4" rx="2" fill="#ddd"/>` },

  { cs: 'karta', en: 'card', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <rect x="10" y="22" width="100" height="62" rx="8" fill="#4fa3e3" ${S}/>
    <rect x="10" y="34" width="100" height="12" fill="#1d2a5a"/>
    <rect x="20" y="52" width="18" height="14" rx="3" fill="#f9c74f" ${S}/>
    <path d="M20 59 H38 M29 52 V66" stroke="#333" stroke-width="1.5"/>
    <path d="M46 62 H58 M64 62 H76 M82 62 H94" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    <path d="M20 76 H52" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'banka', en: 'bank', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <rect x="8" y="86" width="104" height="8" fill="#9aa0a8" ${S}/>
    <rect x="16" y="46" width="12" height="40" fill="#ddd" ${S}/>
    <rect x="40" y="46" width="12" height="40" fill="#ddd" ${S}/>
    <rect x="68" y="46" width="12" height="40" fill="#ddd" ${S}/>
    <rect x="92" y="46" width="12" height="40" fill="#ddd" ${S}/>
    <rect x="53" y="60" width="14" height="26" fill="#8b4a2b" ${S}/>
    <rect x="12" y="34" width="96" height="12" fill="#fff" ${S}/>
    <text x="60" y="44" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#333">BANKA</text>
    <path d="M8 34 L60 6 L112 34 Z" fill="#bde0fe" ${S}/>
    <circle cx="60" cy="24" r="6" fill="#f9c74f" ${S}/>` },

  { cs: 'pošta', en: 'post office', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <rect x="14" y="30" width="92" height="64" fill="#ffe08a" ${S}/>
    <rect x="8" y="24" width="104" height="8" fill="#4fa3e3" ${S}/>
    <rect x="30" y="38" width="60" height="14" rx="2" fill="#4fa3e3" ${S}/>
    <text x="60" y="49" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="10" fill="#fff">POŠTA</text>
    <rect x="22" y="58" width="14" height="14" fill="#bde0fe" ${S}/>
    <rect x="46" y="66" width="20" height="28" fill="#8b4a2b" ${S}/>
    <rect x="62" y="62" width="50" height="32" rx="2" fill="#fff" ${S}/>
    <rect x="98" y="66" width="10" height="10" fill="#e63946" ${S}/>
    <path d="M67 78 H87 M67 85 H93" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>` },

  { cs: 'lékárna', en: 'pharmacy', pattern: 'žena', gender: 'f', topic: 'shopping', svg: `
    <path d="M24 10 H40 V26 H56 V42 H40 V58 H24 V42 H8 V26 H24 Z" fill="#3f9d55" ${S}/>
    <rect x="70" y="10" width="20" height="14" rx="2" fill="#7a7f87" ${S}/>
    <rect x="64" y="24" width="32" height="68" rx="6" fill="#f4a261" ${S}/>
    <rect x="70" y="42" width="20" height="26" fill="#fff" ${S}/>
    <path d="M80 48 V62 M73 55 H87" stroke="#3f9d55" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(28 82) rotate(-30)">
      <rect x="-15" y="-6" width="30" height="12" rx="6" fill="#fff" ${S}/>
      <path d="M0 -6 H9 A6 6 0 0 1 9 6 H0 Z" fill="#e63946" ${S}/>
    </g>
    <circle cx="50" cy="88" r="7" fill="#fff" ${S}/>
    <path d="M44 88 H56" ${S}/>` }
);
