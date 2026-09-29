import { getCollection, type CollectionEntry } from 'astro:content';

export type Artikel = CollectionEntry<'posts'>;

/** Alle artikelen, nieuwste eerst. */
export async function alleArtikelen(): Promise<Artikel[]> {
  const artikelen = await getCollection('posts');
  return artikelen.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const artikelUrl = (artikel: Artikel) => `/artikelen/${artikel.id}/`;

/** Leestijd in minuten: ongeveer 220 woorden per minuut, codeblokken tellen niet mee. */
export function leestijd(artikel: Artikel): number {
  const tekst = (artikel.body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_`\-\[\]()]/g, ' ');
  const woorden = tekst.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(woorden / 220));
}

export const leestijdTekst = (artikel: Artikel) => `${leestijd(artikel)} min lezen`;

const datumOpmaak = new Intl.DateTimeFormat('nl-NL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Amsterdam',
});

export const datumTekst = (datum: Date) => datumOpmaak.format(datum);

/** Het uitgelichte artikel: het nieuwste met featured: true, anders gewoon het nieuwste. */
export function uitgelicht(artikelen: Artikel[]): Artikel | undefined {
  return artikelen.find((a) => a.data.featured) ?? artikelen[0];
}

/** Twee gerelateerde artikelen: eerst met een gedeeld onderwerp, daarna de nieuwste. */
export function gerelateerd(artikel: Artikel, artikelen: Artikel[], aantal = 2): Artikel[] {
  const anderen = artikelen.filter((a) => a.id !== artikel.id);
  const gedeeld = (a: Artikel) => a.data.topics.filter((t) => artikel.data.topics.includes(t)).length;
  return [...anderen].sort((a, b) => gedeeld(b) - gedeeld(a)).slice(0, aantal);
}
