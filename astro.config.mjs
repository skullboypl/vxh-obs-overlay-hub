import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { PATHS, SITE } from './src/content.ts';

// Pair PL and EN URLs even when their slugs differ (e.g. /o-vxh/ and /en/about/).
const pairs = Object.values(PATHS).map((p) => ({
  pl: `${SITE}/${p.pl}`,
  en: `${SITE}/en/${p.en}`,
}));

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: { defaultLocale: 'pl', locales: ['pl', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [
    sitemap({
      serialize(item) {
        const pair = pairs.find((p) => p.pl === item.url || p.en === item.url);
        if (pair) {
          item.links = [
            { url: pair.pl, lang: 'pl-PL' },
            { url: pair.en, lang: 'en-US' },
          ];
        }
        return item;
      },
    }),
  ],
});
