import type { APIContext } from 'astro';
import { maakFeed } from '../lib/rss';

export const GET = (context: APIContext) => maakFeed(context);
