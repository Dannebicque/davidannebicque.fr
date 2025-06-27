<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">Publications</h1>
    
    <div v-if="loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
    </div>
    
    <div v-else class="space-y-6">
      <div v-for="pub in publications" 
           :key="pub.docid" 
           class="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-start justify-between">
          <h3 class="text-xl font-semibold text-blue-900 flex-grow">{{ pub.title }}</h3>
          <span :class="getTypeBadgeClasses(pub.docType)" class="ml-4 px-3 py-1 text-sm rounded-full whitespace-nowrap">
            {{ pub.type }}
          </span>
        </div>
        <p class="text-blue-700 mt-2 font-medium">
          <span v-for="(author, index) in pub.authors" :key="index">
            <span v-if="author.toLowerCase().includes('annebicque')" class="font-bold text-blue-800 border-b-2 border-blue-400">
              {{ author }}
            </span>
            <span v-else>{{ author }}</span>
            <span v-if="index < pub.authors.length - 1">, </span>
          </span>
        </p>
        <p class="text-blue-600 mt-1">
          {{ pub.venue }}
          <span v-if="pub.year">, {{ pub.year }}</span>
        </p>
        <a :href="pub.url" 
           target="_blank" 
           class="inline-flex items-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Voir la publication
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Publication {
  docid: string
  title: string
  authors: string[]
  venue: string
  year: string
  url: string
  type: string
  docType: string
}

const loading = ref(true)
const publications = ref<Publication[]>([])

const getVenue = (pub: any): string => {
  switch (pub.docType_s) {
    case 'ART':
      return pub.journalTitle_s?.[0] || 'Journal non spécifié'
    case 'COMM':
    case 'POSTER':
      return pub.conferenceTitle_s?.[0] || 'Conférence non spécifiée'
    case 'COUV':
    case 'OUV':
      return pub.bookTitle_s?.[0] || 'Ouvrage non spécifié'
    case 'THESE':
      return 'Thèse de doctorat'
    case 'HDR':
      return 'Habilitation à Diriger des Recherches'
    default:
      if (pub.submittedDate_s) {
        return `Soumis le ${pub.submittedDate_s}`
      }
      if (pub.journalTitle_s?.[0]) return pub.journalTitle_s[0]
      if (pub.conferenceTitle_s?.[0]) return pub.conferenceTitle_s[0]
      if (pub.bookTitle_s?.[0]) return pub.bookTitle_s[0]
      return 'Lieu de publication non spécifié'
  }
}

const getDocType = (type: string): string => {
  const types: Record<string, string> = {
    'ART': 'Article scientifique',
    'COMM': 'Communication',
    'POSTER': 'Poster',
    'THESE': 'Thèse',
    'HDR': 'HDR',
    'COUV': 'Chapitre d\'ouvrage',
    'OUV': 'Ouvrage',
    'PROCEEDINGS': 'Actes de conférence',
    'UNDEFINED': 'Publication',
    'OTHER': 'Autre publication'
  }
  return types[type] || 'Publication'
}

const getTypeBadgeClasses = (docType: string): string => {
  const baseClasses = 'inline-block px-3 py-1 text-sm rounded-full'
  const typeClasses: Record<string, string> = {
    'ART': 'bg-green-100 text-green-800',
    'COMM': 'bg-blue-100 text-blue-800',
    'POSTER': 'bg-purple-100 text-purple-800',
    'THESE': 'bg-red-100 text-red-800',
    'HDR': 'bg-yellow-100 text-yellow-800',
    'COUV': 'bg-indigo-100 text-indigo-800',
    'OUV': 'bg-pink-100 text-pink-800',
    'PROCEEDINGS': 'bg-orange-100 text-orange-800'
  }
  return `${baseClasses} ${typeClasses[docType] || 'bg-gray-100 text-gray-800'}`
}

onMounted(async () => {
  try {
    const response = await useFetch('https://api.archives-ouvertes.fr/search/?q=authIdHal_s:david-annebicque&fl=docid,title_s,authFullName_s,journalTitle_s,conferenceTitle_s,bookTitle_s,publicationDate_s,uri_s,docType_s,submittedDate_s&sort=publicationDate_s desc')
    const data = response.data.value as any
    if (data?.response?.docs) {
      publications.value = data.response.docs.map((pub: any) => ({
        docid: pub.docid,
        title: pub.title_s?.[0] || 'Sans titre',
        authors: pub.authFullName_s || [],
        venue: getVenue(pub),
        year: pub.publicationDate_s?.substring(0, 4) || '',
        url: pub.uri_s || '',
        type: getDocType(pub.docType_s || 'UNDEFINED'),
        docType: pub.docType_s || 'UNDEFINED'
      }))
      console.log('Publications brutes:', data.response.docs)
      console.log('Publications transformées:', publications.value)
    }
  } catch (error) {
    console.error('Erreur lors du chargement des publications:', error)
  } finally {
    loading.value = false
  }
})

definePageMeta({
  layout: 'default'
})
</script>