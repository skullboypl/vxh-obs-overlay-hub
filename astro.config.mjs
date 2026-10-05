import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vxh.pl',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: { defaultLocale: 'pl', locales: ['pl', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pl', locales: { pl: 'pl-PL', en: 'en-US' } },
    }),
  ],
});
