import sharp from 'sharp';

const w = 1000;
const h = 500;
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b0e13"/>
      <stop offset="100%" stop-color="#121820"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="120" y="140" width="280" height="180" rx="18" fill="none" stroke="#7dd3fc" stroke-width="8"/>
  <rect x="520" y="180" width="280" height="180" rx="18" fill="none" stroke="#7dd3fc" stroke-width="8"/>
  <path d="M360 300 L420 220 L500 280" fill="none" stroke="#7dd3fc" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="420" cy="220" r="14" fill="#7dd3fc"/>
  <text x="500" y="90" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="42" font-weight="700" fill="#e8eef5"><tspan fill="#7dd3fc">INT</tspan>mouse</text>
  <text x="500" y="440" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="22" fill="#8b9bb0">Jedna mysz i klawiatura na kilku PC</text>
</svg>`);

await sharp(svg).webp({ quality: 86 }).toFile('public/img/intmouse-preview.webp');
await sharp(svg).png().toFile('public/img/intmouse-ui.png');
console.log('wrote intmouse preview images');
