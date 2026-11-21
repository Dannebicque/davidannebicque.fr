<template>
  <div class="space-y-16">
    <PageHero eyebrow="Publications" title="Travaux de recherche et productions scientifiques.">
      Mes travaux portent sur les learning analytics, les environnements numériques d'apprentissage et l'analyse des
      usages dans l'enseignement supérieur. Les références viennent de l'archive ouverte HAL.
    </PageHero>

    <section aria-labelledby="biblio-title">
      <SectionHeading id="biblio-title" eyebrow="Bibliographie" :title="`${publications.length} références`">
        <ExtLink class="link whitespace-nowrap" href="https://hal.science/search/index/q/*/authIdHal_s/david-annebicque">
          Profil HAL
        </ExtLink>
      </SectionHeading>

      <p v-if="publications.length === 0" class="mt-8 rounded-2xl border border-line bg-panel p-6 text-muted">
        La liste n'a pas pu être chargée pour le moment. Elle reste consultable sur
        <ExtLink class="link" href="https://hal.science/search/index/q/*/authIdHal_s/david-annebicque">HAL</ExtLink>.
      </p>

      <div v-else class="mt-10 space-y-12">
        <section v-for="group in byYear" :key="group.year" :aria-labelledby="`y-${group.year}`">
          <h3 :id="`y-${group.year}`" class="border-b border-line pb-2 font-mono text-sm font-medium tracking-wider text-muted">
            {{ group.year }}
          </h3>
          <ul>
            <li v-for="pub in group.items" :key="pub.docid" class="border-b border-line py-6">
              <p class="eyebrow">{{ pub.type }}</p>
              <h4 class="mt-2 font-display text-xl font-bold leading-snug">
                <ExtLink v-if="pub.url" :href="pub.url" class="hover:text-accent hover:underline hover:underline-offset-4">{{ pub.title }}</ExtLink>
                <template v-else>{{ pub.title }}</template>
              </h4>
              <p class="mt-2 text-muted">
                <template v-for="(author, i) in pub.authors" :key="`${pub.docid}-${i}`">
                  <strong v-if="isMe(author)" class="font-semibold text-fg">{{ author }}</strong>
                  <template v-else>{{ author }}</template><template v-if="i < pub.authors.length - 1">, </template>
                </template>
              </p>
              <p v-if="pub.venue" class="mt-1 text-sm italic text-muted">{{ pub.venue }}</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
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
}

const { data } = await useFetch<Publication[]>('/api/publications', { default: () => [] })
const publications = computed(() => data.value ?? [])

const isMe = (author: string) => author.toLowerCase().includes('annebicque')

const byYear = computed(() => {
  const map = new Map<string, Publication[]>()
  for (const p of publications.value) {
    const y = p.year || 'Sans date'
    map.set(y, [...(map.get(y) ?? []), p])
  }
  return [...map.entries()].map(([year, items]) => ({ year, items }))
})

usePageSeo({
  title: 'Publications',
  description: "Publications scientifiques de David Annebicque : learning analytics, environnements numériques d'apprentissage et analyse des usages.",
  path: '/publications'
})
</script>
