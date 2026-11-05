import sharp from 'sharp';

// Sources: 1920x1080 captures of the live sites (assets-src/<tool>/site.webp).
// Home card: a 2:1 crop of the main UI. Overview page window shot: the whole page.
const CROPS = {
  pliki: { left: 556, top: 100, width: 800, height: 400 },
  chat: { left: 640, top: 130, width: 640, height: 320 },
  fpsblindtest: { left: 580, top: 120, width: 760, height: 380 },
};
for (const [tool, crop] of Object.entries(CROPS)) {
  const src = `assets-src/${tool}/site.webp`;
  await sharp(src).extract(crop).resize(1000, 500).webp({ quality: 82 }).toFile(`public/img/${tool}-preview.webp`);
  await sharp(src).resize({ width: 1600 }).webp({ quality: 82 }).toFile(`public/img/${tool}-site.webp`);
}
console.log('wrote pliki, chat and fpsblindtest preview images');
