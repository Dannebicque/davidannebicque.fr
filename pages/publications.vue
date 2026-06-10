<template>
  <div class="space-y-10">
    <section class="relative overflow-hidden rounded-lg bg-blue-950 text-white shadow-2xl shadow-blue-950/20">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(30,64,175,0.9)_55%,_rgba(13,148,136,0.65))]"></div>
      <div class="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-200">Publications</p>
          <h1 class="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Travaux de recherche et productions scientifiques.
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Mes publications s'inscrivent principalement autour des learning analytics, des environnements numériques d'apprentissage et de l'analyse des usages dans l'enseignement supérieur.
          </p>
        </div>

        <aside class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <p class="font-semibold">Source HAL</p>
          <p class="mt-3 text-sm leading-6 text-blue-100">
            Les références sont chargées depuis l'archive ouverte HAL et triées par date de publication décroissante.
          </p>
          <dl class="mt-5 grid grid-cols-2 gap-3">
            <div class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">Références</dt>
              <dd class="mt-2 text-2xl font-bold">{{ publications.length }}</dd>
            </div>
            <div class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">Auteur</dt>
              <dd class="mt-2 text-2xl font-bold">HAL</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-600">Bibliographie</p>
          <h2 class="mt-2 text-3xl font-bold text-blue-950">Sélection chronologique</h2>
        </div>
        <a
          href="https://hal.science/search/index/q/*/authIdHal_s/david-annebicque"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-950"
        >
          Profil HAL
          <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
        </a>
      </div>

      <div v-if="loading" class="flex items-center justify-center py-16">
        <div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-cyan-500"></div>
      </div>

      <div v-else-if="publications.length === 0" class="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 text-slate-600">
        Aucune publication n'a pu être chargée pour le moment.
      </div>

      <div v-else class="mt-8 space-y-5">
        <article
          v-for="pub in publications"
          :key="pub.docid"
          class="group rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
        >
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 class="text-xl font-bold text-blue-950">{{ pub.title }}</h3>
            <span :class="getTypeBadgeClasses(pub.docType)">
              {{ pub.type }}
            </span>
          </div>

          <p class="mt-4 leading-7 text-slate-700">
            <span v-for="(author, index) in pub.authors" :key="`${pub.docid}-${author}-${index}`">
              <span v-if="author.toLowerCase().includes('annebicque')" class="font-bold text-blue-950">
                {{ author }}
              </span>
              <span v-else>{{ author }}</span>
              <span v-if="index < pub.authors.length - 1">, </span>
            </span>
          </p>

          <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm font-medium text-slate-500">
              {{ pub.venue }}
              <span v-if="pub.year"> · {{ pub.year }}</span>
            </p>
            <a
              :href="pub.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-950"
            >
              Voir la publication
              <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

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
    ART: 'Article scientifique',
    COMM: 'Communication',
    POSTER: 'Poster',
    THESE: 'Thèse',
    HDR: 'HDR',
    COUV: "Chapitre d'ouvrage",
    OUV: 'Ouvrage',
    PROCEEDINGS: 'Actes de conférence',
    UNDEFINED: 'Publication',
    OTHER: 'Autre publication'
  }
  return types[type] || 'Publication'
}

const getTypeBadgeClasses = (docType: string): string => {
  const baseClasses = 'inline-flex w-fit shrink-0 rounded-full px-3 py-1 text-sm font-semibold'
  const typeClasses: Record<string, string> = {
    ART: 'bg-emerald-100 text-emerald-800',
    COMM: 'bg-blue-100 text-blue-800',
    POSTER: 'bg-purple-100 text-purple-800',
    THESE: 'bg-red-100 text-red-800',
    HDR: 'bg-yellow-100 text-yellow-800',
    COUV: 'bg-indigo-100 text-indigo-800',
    OUV: 'bg-pink-100 text-pink-800',
    PROCEEDINGS: 'bg-orange-100 text-orange-800'
  }
  return `${baseClasses} ${typeClasses[docType] || 'bg-slate-100 text-slate-700'}`
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
    }
  } catch (error) {
    console.error('Erreur lors du chargement des publications:', error)
  } finally {
    loading.value = false
  }
})

useSeoMeta({
  title: 'Publications',
  description: "Publications scientifiques de David Annebicque autour des learning analytics, environnements numériques d'apprentissage, pédagogie et analyse des usages.",
  ogTitle: 'Publications · David Annebicque',
  ogDescription: "Travaux de recherche, publications HAL et productions scientifiques de David Annebicque.",
  ogUrl: 'https://davidannebicque.fr/publications',
  twitterTitle: 'Publications · David Annebicque',
  twitterDescription: "Publications scientifiques autour des learning analytics et des environnements numériques d'apprentissage."
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://davidannebicque.fr/publications' }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>
