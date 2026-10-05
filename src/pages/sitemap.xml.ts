import type { APIRoute } from 'astro';
import { PATHS, SITE, urlFor, type PageId } from '../content';

// One flat sitemap: 20 URLs do not need an index. Each entry lists both language versions.
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const loc = (id: PageId, lang: 'pl' | 'en') => SITE + urlFor(id, lang);
  const ids = Object.keys(PATHS) as PageId[];

  const entries = ids.flatMap((id) =>
    (['pl', 'en'] as const).map((lang) => `  <url>
    <loc>${loc(id, lang)}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="pl" href="${loc(id, 'pl')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${loc(id, 'en')}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(id, 'pl')}" />
  </url>`),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
