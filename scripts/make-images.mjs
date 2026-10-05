import sharp from 'sharp';
import { mkdirSync, rmSync } from 'node:fs';

const OUT = 'public/img';
mkdirSync(OUT, { recursive: true });
// placeholders and AI backgrounds from earlier iterations are no longer used
for (const f of ['hero-bg', 'og-bg', 'faceit-art', 'lol-art', 'obs-art']) rmSync(`${OUT}/${f}.png`, { force: true });

const webp = (src, name, width, extract) => {
  let img = sharp(src);
  if (extract) img = img.extract(extract);
  return img.resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${OUT}/${name}.webp`);
};

// Faceit: real captures from the Faceit Banner Studio repo
await webp('assets-src/faceit/generator.jpg', 'faceit-generator', 1600);
await webp('assets-src/faceit/generator.jpg', 'faceit-preview', 1000, { left: 915, top: 368, width: 845, height: 414 });
await webp('assets-src/faceit/gallery-solo.jpg', 'faceit-solo', 1600);
await webp('assets-src/faceit/gallery-versus.jpg', 'faceit-versus', 1600);

// LoL: real captures of the Studio (Playwright, sample data)
await webp('assets-src/lol/lol-generator.png', 'lol-generator', 1600);
const lol = ['crest', 'lane', 'compact', 'card', 'split', 'minimal', 'tower', 'scoreboard'];
for (const s of lol) await webp(`assets-src/lol/lol-${s}.png`, `lol-${s}`, 900);
await webp('assets-src/lol/lol-crest.png', 'lol-preview', 1000);

// LoL gallery: 4x2 contact sheet of the real layout previews
const cw = 640, ch = 340, gap = 8;
const tiles = await Promise.all(lol.map((s) => sharp(`assets-src/lol/lol-${s}.png`).resize(cw, ch, { fit: 'cover' }).toBuffer()));
await sharp({ create: { width: cw * 2 + gap, height: ch * 4 + gap * 3, channels: 3, background: '#0b0b0c' } })
  .composite(tiles.map((input, i) => ({ input, left: (i % 2) * (cw + gap), top: Math.floor(i / 2) * (ch + gap) })))
  .webp({ quality: 82 }).toFile(`${OUT}/lol-gallery.webp`);

// Open Graph: Faceit and LoL previews side by side under the logo lockup
const og = { w: 1200, h: 630 };
const a = await sharp('assets-src/faceit/generator.jpg').extract({ left: 915, top: 368, width: 845, height: 414 }).resize(540, 265, { fit: 'cover' }).toBuffer();
const b = await sharp('assets-src/lol/lol-crest.png').resize(540, 265, { fit: 'cover' }).toBuffer();
const lock = await sharp('public/logo-lockup.png').resize({ width: 760 }).toBuffer();
await sharp({ create: { width: og.w, height: og.h, channels: 3, background: '#0b0b0c' } })
  .composite([
    { input: lock, left: 40, top: 30 },
    { input: a, left: 40, top: 300 },
    { input: b, left: 620, top: 300 },
  ])
  .png().toFile(`${OUT}/og.png`);
console.log('images ok');
