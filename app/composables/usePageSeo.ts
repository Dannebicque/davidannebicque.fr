import { site } from '~/data/site'

interface PageSeo {
  title: string
  description: string
  path: string
}

/** Meta de page unifiées : titre, description, canonical, Open Graph et Twitter. */
export function usePageSeo({ title, description, path }: PageSeo) {
  const url = `${site.url}${path}`
  const fullTitle = path === '/' ? `${site.name} · Enseignant-chercheur et développeur web` : `${title} · ${site.name}`
  useSeoMeta({
    title,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogUrl: url,
    ogImage: `${site.url}/og.png`,
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: `${site.url}/og.png`
  })
  useHead({ link: [{ rel: 'canonical', href: url }] })
}
