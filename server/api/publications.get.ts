import { normalizeHal, type HalResponse, type Publication } from '../utils/hal'

const HAL = 'https://api.archives-ouvertes.fr/search/'

/** Publications HAL, récupérées côté serveur (prérendues au build, mises en cache 1 h en SSR). */
export default defineCachedEventHandler(
  async (): Promise<Publication[]> => {
    try {
      const data = await $fetch<HalResponse>(HAL, {
        query: {
          q: 'authIdHal_s:david-annebicque',
          fl: 'docid,title_s,authFullName_s,journalTitle_s,conferenceTitle_s,bookTitle_s,publicationDate_s,uri_s,docType_s',
          sort: 'publicationDate_s desc',
          rows: 200
        },
        timeout: 10000
      })
      return normalizeHal(data?.response?.docs ?? [])
    } catch (error) {
      console.warn('[publications] HAL indisponible :', (error as Error).message)
      return []
    }
  },
  { maxAge: 60 * 60, swr: true, getKey: () => 'publications' }
)
