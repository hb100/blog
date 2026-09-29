import { ONDERWERPEN } from '../content.config';

export type Onderwerp = (typeof ONDERWERPEN)[number];

export interface OnderwerpInfo {
  naam: Onderwerp;
  slug: string;
  omschrijving: string;
}

// De vier vaste onderwerpen. De omschrijving staat op de homepage en de onderwerppagina.
export const onderwerpen: OnderwerpInfo[] = [
  { naam: 'Home Assistant', slug: 'home-assistant', omschrijving: 'Slimmer wonen zonder gedoe' },
  { naam: 'Data', slug: 'data', omschrijving: 'Van ruwe cijfers naar inzicht' },
  { naam: 'Marketing', slug: 'marketing', omschrijving: 'Campagnes die je kunt meten' },
  { naam: 'Fintech', slug: 'fintech', omschrijving: 'Wat goede geldapps goed doen' },
];

export const onderwerpUrl = (naam: Onderwerp) =>
  `/onderwerpen/${onderwerpen.find((o) => o.naam === naam)!.slug}/`;
