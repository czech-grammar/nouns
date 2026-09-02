// Topic: meals
WORDS.push(
  { cs: 'snídaně', en: 'breakfast', pattern: 'růže', gender: 'f', topic: 'meals', svg: `
    <circle cx="16" cy="16" r="9" fill="#f9c74f" ${S}/>
    <path d="M92 28 q-4 -6 0 -12 M102 28 q-4 -6 0 -12" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M108 38 Q115 38 115 47 Q115 56 108 56" fill="none" ${S}/>
    <path d="M84 30 H110 L107 60 H87 Z" fill="#fff" ${S}/>
    <ellipse cx="97" cy="30" rx="13" ry="4" fill="#f4a261" ${S}/>
    <ellipse cx="46" cy="80" rx="42" ry="14" fill="#fff" ${S}/>
    <ellipse cx="46" cy="80" rx="32" ry="9" fill="none" stroke="#ddd" stroke-width="2"/>
    <path d="M8 78 Q14 48 40 50 Q64 52 66 76 Q58 64 40 64 Q22 64 8 78 Z" fill="#f4a261" ${S}/>
    <path d="M24 57 L29 65 M39 51 L40 61 M53 54 L52 63" fill="none" stroke="#b5722f" stroke-width="2" stroke-linecap="round"/>
    <path d="M58 76 Q58 68 70 68 Q82 68 82 76 Q82 84 76 86 V90 H64 V86 Q58 84 58 76 Z" fill="#4fa3e3" ${S}/>
    <path d="M59 72 Q59 48 70 48 Q81 48 81 72 Z" fill="#fff" ${S}/>
    <path d="M63 60 Q70 53 77 60 Q70 65 63 60 Z" fill="#f9c74f" ${S}/>` },

  { cs: 'večeře', en: 'dinner', pattern: 'růže', gender: 'f', topic: 'meals', svg: `
    <path d="M18 8 A12 12 0 1 0 26 29 A10 10 0 1 1 18 8 Z" fill="#f9e27a" ${S}/>
    <ellipse cx="85" cy="14" rx="4" ry="7" fill="#f4a261" ${S}/>
    <rect x="80" y="20" width="10" height="32" fill="#ffe08a" ${S}/>
    <path d="M10 34 V48 Q10 56 18 56 Q26 56 26 48 V34 Z" fill="#9aa0a8" ${S}/>
    <path d="M14 36 V46 M18 36 V48 M22 36 V46" fill="none" stroke="#333" stroke-width="1.5"/>
    <rect x="15" y="54" width="6" height="40" rx="3" fill="#9aa0a8" ${S}/>
    <path d="M98 32 H106 Q111 36 111 48 V58 H98 Z" fill="#ddd" ${S}/>
    <rect x="100" y="58" width="7" height="36" rx="3" fill="#9aa0a8" ${S}/>
    <ellipse cx="60" cy="68" rx="36" ry="18" fill="#fff" ${S}/>
    <ellipse cx="60" cy="68" rx="27" ry="12" fill="none" stroke="#ddd" stroke-width="2"/>
    <ellipse cx="52" cy="66" rx="16" ry="9" fill="#b5722f" ${S}/>
    <ellipse cx="66" cy="76" rx="9" ry="5" fill="#f9c74f" ${S}/>
    <circle cx="74" cy="62" r="3" fill="#6cc06a"/><circle cx="80" cy="67" r="3" fill="#6cc06a"/><circle cx="76" cy="71" r="3" fill="#6cc06a"/>` },

  { cs: 'svačina', en: 'snack', pattern: 'žena', gender: 'f', topic: 'meals', svg: `
    <rect x="18" y="16" width="84" height="46" rx="5" fill="#bde0fe" ${S}/>
    <path d="M22 76 L46 34 L70 76 Z" fill="#f4a261" ${S}/>
    <path d="M30 70 L46 42 L62 70 Z" fill="#ffe08a"/>
    <path d="M29 66 Q38 60 46 66 Q54 60 63 66" fill="none" stroke="#6cc06a" stroke-width="4" stroke-linecap="round"/>
    <rect x="83" y="30" width="3" height="10" fill="#8b4a2b" ${S}/>
    <path d="M85 38 Q94 28 100 34 Q94 42 85 38 Z" fill="#6cc06a" ${S}/>
    <circle cx="84" cy="52" r="16" fill="#e63946" ${S}/>
    <rect x="14" y="62" width="92" height="32" rx="5" fill="#4fa3e3" ${S}/>
    <rect x="52" y="60" width="16" height="10" rx="2" fill="#f9c74f" ${S}/>` },

  { cs: 'restaurace', en: 'restaurant', pattern: 'růže', gender: 'f', topic: 'meals', svg: `
    <rect x="10" y="6" width="100" height="20" rx="4" fill="#e63946" ${S}/>
    <text x="60" y="21" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12" fill="#fff">RESTAURACE</text>
    <rect x="22" y="76" width="6" height="20" fill="#8b4a2b" ${S}/>
    <rect x="92" y="76" width="6" height="20" fill="#8b4a2b" ${S}/>
    <path d="M8 54 H112 L106 78 H14 Z" fill="#fff" ${S}/>
    <path d="M26 54 L27 78 M44 54 L44 78 M62 54 L62 78 M80 54 L80 78 M97 54 L96 78 M10 66 H110" fill="none" stroke="#e63946" stroke-width="4"/>
    <ellipse cx="46" cy="56" rx="24" ry="8" fill="#fff" ${S}/>
    <ellipse cx="46" cy="56" rx="15" ry="4" fill="none" stroke="#ddd" stroke-width="2"/>
    <path d="M76 30 H100 Q100 46 88 48 Q76 46 76 30 Z" fill="#dff3ff" ${S}/>
    <path d="M78 36 H98 Q96 46 88 48 Q80 46 78 36 Z" fill="#c0392b"/>
    <path d="M88 48 V56 M80 56 H96" fill="none" ${S}/>` },

  { cs: 'hospoda', en: 'pub', pattern: 'žena', gender: 'f', topic: 'meals', svg: `
    <rect x="12" y="4" width="96" height="18" rx="4" fill="#8b4a2b" ${S}/>
    <text x="60" y="18" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" fill="#ffe08a">HOSPODA</text>
    <path d="M78 52 H90 Q102 52 102 66 Q102 80 90 80 H78 V72 H88 Q94 72 94 66 Q94 60 88 60 H78 Z" fill="#f9c74f" ${S}/>
    <rect x="30" y="42" width="48" height="52" rx="4" fill="#f9c74f" ${S}/>
    <path d="M42 48 V88 M54 48 V88 M66 48 V88" fill="none" stroke="#f4a261" stroke-width="3" stroke-linecap="round"/>
    <path d="M26 48 Q24 34 36 36 Q40 26 52 30 Q60 22 70 30 Q84 28 82 48 Z" fill="#fff" ${S}/>
    <path d="M24 52 Q18 60 26 66" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
    <path d="M24 52 Q18 60 26 66" fill="none" ${S}/>` },

  { cs: 'kavárna', en: 'café', pattern: 'žena', gender: 'f', topic: 'meals', svg: `
    <path d="M8 8 H112 V26 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 Z" fill="#fff"/>
    <path d="M8 8 H21 V26 q-6.5 8 -13 0 Z M34 8 H47 V26 q-6.5 8 -13 0 Z M60 8 H73 V26 q-6.5 8 -13 0 Z M86 8 H99 V26 q-6.5 8 -13 0 Z" fill="#e63946"/>
    <path d="M8 8 H112 V26 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 q-6.5 8 -13 0 Z" fill="none" ${S}/>
    <rect x="8" y="84" width="104" height="10" rx="3" fill="#b5722f" ${S}/>
    <path d="M30 46 q-4 -6 0 -12 M40 46 q-4 -6 0 -12 M50 46 q-4 -6 0 -12" fill="none" stroke="#9aa0a8" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 58 Q76 58 75 68 Q74 80 60 80 L60 74 Q68 74 69 68 Q70 64 60 64 Z" fill="#fff" ${S}/>
    <path d="M18 52 H62 L58 84 H22 Z" fill="#fff" ${S}/>
    <ellipse cx="40" cy="52" rx="22" ry="5" fill="#5a3a22" ${S}/>
    <ellipse cx="94" cy="84" rx="20" ry="4" fill="#fff" ${S}/>
    <path d="M78 84 L82 56 H106 L110 84 Z" fill="#ffe08a" ${S}/>
    <path d="M81 66 H107 M80 74 H108" fill="none" stroke="#e94b8a" stroke-width="4"/>
    <circle cx="94" cy="52" r="5" fill="#e63946" ${S}/>` },

  { cs: 'sklenice', en: 'glass', pattern: 'růže', gender: 'f', topic: 'meals', svg: `
    <path d="M36 8 L84 8 L78 94 L42 94 Z" fill="#dff3ff" ${S}/>
    <path d="M39 50 H81 L78 94 H42 Z" fill="#f4a261" ${S}/>
    <path d="M46 18 L44 42" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    <path d="M45 58 L43 84" fill="none" stroke="#ffe08a" stroke-width="4" stroke-linecap="round"/>` },

  { cs: 'lžíce', en: 'spoon', pattern: 'růže', gender: 'f', topic: 'meals', svg: `
    <g transform="translate(60 50) rotate(-45)">
      <rect x="-6" y="-6" width="12" height="60" rx="6" fill="#9aa0a8" ${S}/>
      <ellipse cx="0" cy="-28" rx="18" ry="24" fill="#9aa0a8" ${S}/>
      <ellipse cx="-5" cy="-34" rx="5" ry="9" fill="#c9ced6"/>
    </g>` }
);
