const sharp = require('sharp');
(async () => {
  const [, , src, outBase, rowsArg] = process.argv;
  const meta = await sharp(src).metadata();
  const rowH = Number(rowsArg || 1550);
  const n = Math.ceil(meta.height / rowH);
  console.log(`원본 ${meta.width}x${meta.height} → ${n}조각`);
  for (let i = 0; i < n; i++) {
    const top = i * rowH;
    const h = Math.min(rowH, meta.height - top);
    if (h < 40) continue;
    const out = `${outBase}-${String(i + 1).padStart(2, '0')}.png`;
    await sharp(src).extract({ left: 0, top, width: meta.width, height: h }).toFile(out);
    console.log('  ' + out.split('/').pop());
  }
})();
