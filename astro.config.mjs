// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { readdirSync } from 'node:fs';
import { watIkLeerde } from './src/plugins/wat-ik-leerde.mjs';
import { lichtCobalt } from './src/plugins/shiki-licht-cobalt.mjs';

// Oude adressen van de Hugo-blog blijven werken via een doorverwijzing.
// Elk artikel had het adres /posts/<bestandsnaam>/.
const artikelen = readdirSync('./src/content/posts')
  .filter((bestand) => bestand.endsWith('.md'))
  .map((bestand) => bestand.replace(/\.md$/, ''));

const oudeTags = ['blog', 'linux', 'fedora', 'onedrive', 'howto', 'vpn', 'promotion'];

/** @type {Record<string, string>} */
const redirects = {
  '/posts': '/artikelen/',
  '/tags': '/artikelen/',
  '/categories': '/artikelen/',
  ...Object.fromEntries(artikelen.map((slug) => [`/posts/${slug}`, `/artikelen/${slug}/`])),
  ...Object.fromEntries(oudeTags.map((tag) => [`/tags/${tag}`, '/artikelen/'])),
};

const oudeAdressen = Object.keys(redirects);

export default defineConfig({
  site: 'https://blog.hb100.nl',
  redirects,
  integrations: [
    sitemap({
      filter: (pagina) => !oudeAdressen.some((pad) => new URL(pagina).pathname.startsWith(pad + '/')),
    }),
  ],
  markdown: {
    processor: satteri({
      features: { directive: true },
      mdastPlugins: [watIkLeerde],
    }),
    shikiConfig: {
      theme: lichtCobalt,
      wrap: false,
    },
  },
});
