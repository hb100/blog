import { getEntry } from 'astro:content';

export async function siteInstellingen() {
  const site = (await getEntry('instellingen', 'site'))?.data ?? {};
  return {
    naam: site.naam ?? '[Jouw naam]',
    tagline: site.tagline ?? '',
    korteBio: site.korteBio ?? '',
    foto: site.foto,
    linkedin: site.linkedin,
    contact: site.contact,
  };
}

export async function homeInstellingen() {
  return (await getEntry('instellingen', 'home'))?.data ?? {};
}
