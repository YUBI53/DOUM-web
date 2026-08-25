const fs = require('fs');
const p = 'src/lib/content/about.ts';
let s = fs.readFileSync(p, 'utf8');
const NBSP = ' ';
const before = '하나씩 만들어 갔어요.';           // 하나씩 만들어 갔어요.
const after  = '하나씩 만들어' + NBSP + '갔어요.';
if (!s.includes(before)) { console.log('NOT FOUND'); process.exit(1); }
fs.writeFileSync(p, s.replace(before, after));
console.log('교체 완료');
