// Technische instellingen die je niet via Pages CMS aanpast.

export const SITE_URL = 'https://blog.hb100.nl';
export const SITE_TITEL = 'blog.hb100.nl';

/**
 * Analytics. Staat nu uit.
 * Aanzetten: kies 'plausible' of 'umami' en vul de gegevens in.
 * - Plausible: domein = 'blog.hb100.nl'
 * - Umami: websiteId = de ID uit je Umami-dashboard, script = adres van script.js
 */
export const ANALYTICS: {
  aanbieder: 'geen' | 'plausible' | 'umami';
  domein?: string;
  websiteId?: string;
  script?: string;
} = {
  aanbieder: 'geen',
  domein: 'blog.hb100.nl',
  websiteId: '',
  script: '',
};
