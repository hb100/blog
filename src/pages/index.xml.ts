// De oude Hugo-blog had zijn feed op /index.xml. Bestaande abonnees blijven zo gewoon updates krijgen.
import type { APIContext } from 'astro';
import { maakFeed } from '../lib/rss';

export const GET = (context: APIContext) => maakFeed(context);
