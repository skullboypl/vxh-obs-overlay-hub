import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const svg = readFileSync('public/logo.svg');
await sharp(svg, { density: 300 }).resize(512, 512).png().toFile('public/logo.png');
await sharp(svg, { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(svg, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
const lockup = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 1200 320">
<rect width="1200" height="320" fill="#0b0b0c"/>
<g transform="translate(40,32) scale(1.0)">${readFileSync('public/logo.svg','utf8').replace(/<svg[^>]*>|<\/svg>/g,'')}</g>
<text x="330" y="150" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="104" fill="#ffffff">VXH</text>
<text x="334" y="215" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="44" fill="#9c9ca3">Visual eXtras Hub</text>
</svg>`;
await sharp(Buffer.from(lockup)).png().toFile('public/logo-lockup.png');
console.log('logo ok');
