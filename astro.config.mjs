import { defineConfig } from 'astro/config';
import { SITE } from './src/content.ts';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: { defaultLocale: 'pl', locales: ['pl', 'en'], routing: { prefixDefaultLocale: false } },
  redirects: {
    '/go/livedelay/': 'https://livedelay.vxh.pl/',
    '/en/go/livedelay/': 'https://livedelay.vxh.pl/en/',
    '/delay/': 'https://livedelay.vxh.pl/',
    '/en/delay/': 'https://livedelay.vxh.pl/en/',
    '/go/intmouse/': 'https://intmouse.vxh.pl/',
    '/en/go/intmouse/': 'https://intmouse.vxh.pl/',
    '/go/overlays/': 'https://overlays.vxh.pl/',
    '/en/go/overlays/': 'https://overlays.vxh.pl/',
    '/go/pliki/': 'https://pliki.vxh.pl/',
    '/en/go/pliki/': 'https://pliki.vxh.pl/',
    '/go/chat/': 'https://chat.vxh.pl/',
    '/en/go/chat/': 'https://chat.vxh.pl/',
    '/go/fpsblindtest/': 'https://fpsblindtest.vxh.pl/',
    '/en/go/fpsblindtest/': 'https://fpsblindtest.vxh.pl/en/',
  },
});
