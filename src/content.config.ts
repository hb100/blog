import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages CMS slaat lege velden soms op als lege tekst. Die tellen we als "niet ingevuld".
const leegIsNiets = (waarde: unknown) => (waarde === '' || waarde === null ? undefined : waarde);
const optioneleTekst = z.preprocess(leegIsNiets, z.string().optional());

export const ONDERWERPEN = ['Home Assistant', 'Data', 'Marketing', 'Fintech'] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      topics: z.array(z.enum(ONDERWERPEN)).min(1),
      cover: z.preprocess(leegIsNiets, image().optional()),
      coverAlt: optioneleTekst,
      featured: z.boolean().default(false),
      inHetKort: z
        .preprocess(
          leegIsNiets,
          z
            .object({
              doel: optioneleTekst,
              tools: optioneleTekst,
              tijd: optioneleTekst,
              kosten: optioneleTekst,
            })
            .optional(),
        ),
      watIkLeerde: optioneleTekst,
    }),
});

const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const instellingen = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/instellingen' }),
  schema: ({ image }) =>
    z.object({
      // site.yml
      naam: optioneleTekst,
      tagline: optioneleTekst,
      korteBio: optioneleTekst,
      foto: z.preprocess(leegIsNiets, image().optional()),
      linkedin: optioneleTekst,
      contact: optioneleTekst,
      // home.yml
      label: optioneleTekst,
      titel: optioneleTekst,
      intro: optioneleTekst,
      knopTekst: optioneleTekst,
      overMijTitel: optioneleTekst,
      overMijTekst: optioneleTekst,
    }),
});

export const collections = { posts, paginas, instellingen };
