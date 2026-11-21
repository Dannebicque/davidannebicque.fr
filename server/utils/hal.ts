export interface Publication {
  docid: string
  title: string
  authors: string[]
  venue: string
  year: string
  url: string
  type: string
  docType: string
}

export interface HalDoc {
  docid: string | number
  title_s?: string[]
  authFullName_s?: string[]
  journalTitle_s?: string[]
  conferenceTitle_s?: string[]
  bookTitle_s?: string[]
  publicationDate_s?: string
  uri_s?: string
  docType_s?: string
}

export interface HalResponse {
  response?: { docs?: HalDoc[] }
}

const TYPES: Record<string, string> = {
  ART: 'Article',
  COMM: 'Communication',
  POSTER: 'Poster',
  THESE: 'Thèse',
  HDR: 'HDR',
  COUV: "Chapitre d'ouvrage",
  OUV: 'Ouvrage',
  PROCEEDINGS: 'Actes de conférence',
  UNDEFINED: 'Publication',
  OTHER: 'Autre'
}

const venueOf = (d: HalDoc): string => {
  switch (d.docType_s) {
    case 'ART': return d.journalTitle_s?.[0] || ''
    case 'COMM':
    case 'POSTER': return d.conferenceTitle_s?.[0] || ''
    case 'COUV':
    case 'OUV': return d.bookTitle_s?.[0] || ''
    case 'THESE': return 'Thèse de doctorat'
    case 'HDR': return 'Habilitation à diriger des recherches'
    default: return d.journalTitle_s?.[0] || d.conferenceTitle_s?.[0] || d.bookTitle_s?.[0] || ''
  }
}

export const normalizeHal = (docs: HalDoc[]): Publication[] =>
  docs.map((d): Publication => ({
    docid: String(d.docid),
    title: d.title_s?.[0] || 'Sans titre',
    authors: d.authFullName_s || [],
    venue: venueOf(d),
    year: d.publicationDate_s?.substring(0, 4) || '',
    url: d.uri_s || '',
    type: TYPES[d.docType_s || 'UNDEFINED'] || 'Publication',
    docType: d.docType_s || 'UNDEFINED'
  }))
