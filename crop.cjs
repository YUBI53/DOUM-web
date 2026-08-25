const sharp = require('sharp');
const [,, src, out, left, top, w, h] = process.argv;
sharp(src).extract({ left:+left, top:+top, width:+w, height:+h })
  .toFile(out).then(() => console.log('ok', out)).catch(e => console.error(e.message));
