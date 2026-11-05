import sharp from 'sharp';

// Source: 1920x1080 capture of the live studio (links show overlays.vxh.pl)
const src = 'assets-src/overlays/studio.webp';

// Home card: the live scene preview cropped to 2:1
await sharp(src)
  .extract({ left: 384, top: 178, width: 1116, height: 558 })
  .resize(1000, 500)
  .webp({ quality: 82 })
  .toFile('public/img/overlays-preview.webp');

// Overview page window shot: whole studio
await sharp(src).resize({ width: 1600 }).webp({ quality: 82 }).toFile('public/img/overlays-studio.webp');
console.log('wrote overlays preview images');
