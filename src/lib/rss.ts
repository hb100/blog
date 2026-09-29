import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { alleArtikelen, artikelUrl } from './artikelen';
import { siteInstellingen } from './instellingen';

export async function maakFeed(context: APIContext) {
  const artikelen = await alleArtikelen();
  const site = await siteInstellingen();
  return rss({
    title: site.naam,
    description: site.tagline,
    site: context.site!,
    items: artikelen.map((artikel) => ({
      title: artikel.data.title,
      description: artikel.data.description,
      pubDate: artikel.data.date,
      link: artikelUrl(artikel),
      categories: artikel.data.topics,
    })),
    customData: '<language>nl-nl</language>',
  });
}
