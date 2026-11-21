<template>
  <div class="space-y-16">
    <PageHero eyebrow="Enseignements" title="Des cours web orientés pratique et autonomie.">
      Développement web, programmation orientée objet, Vue.js et Symfony, avec des supports en ligne pour accompagner le
      travail des étudiants.
    </PageHero>

    <section aria-labelledby="filtres-title">
      <h2 id="filtres-title" class="sr-only">Filtrer les cours</h2>
      <div class="grid gap-6 rounded-3xl border border-line bg-panel p-6 md:grid-cols-[1fr_auto_auto]">
        <div>
          <label for="course-search" class="eyebrow block">Rechercher</label>
          <div class="relative mt-2">
            <MagnifyingGlassIcon class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              id="course-search"
              v-model="searchQuery"
              type="search"
              placeholder="Vue, Symfony, objet…"
              class="min-h-[44px] w-full rounded-full border border-line bg-bg py-2.5 pl-10 pr-4 text-fg placeholder:text-muted"
            />
          </div>
        </div>

        <fieldset>
          <legend class="eyebrow">Diplôme</legend>
          <div class="mt-2 flex flex-wrap gap-2">
            <label v-for="d in diplomes" :key="d" class="chip-label">
              <input v-model="selectedDiplomes" type="checkbox" :value="d" class="peer sr-only" />
              <span class="chip">{{ d }}</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend class="eyebrow">Semestre</legend>
          <div class="mt-2 flex flex-wrap gap-2">
            <label v-for="s in semestres" :key="s" class="chip-label">
              <input v-model="selectedSemestres" type="checkbox" :value="s" class="peer sr-only" />
              <span class="chip">S{{ s }}</span>
            </label>
          </div>
        </fieldset>
      </div>
    </section>

    <section aria-labelledby="catalogue-title">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="eyebrow">Catalogue</p>
          <h2 id="catalogue-title" class="mt-2 text-3xl font-bold sm:text-4xl">Supports de cours</h2>
        </div>
        <div class="flex items-center gap-4">
          <p class="text-muted" role="status">{{ filteredCourses.length }} cours affiché{{ filteredCourses.length > 1 ? 's' : '' }}</p>
          <button v-if="hasActiveFilters" type="button" class="btn btn-ghost !min-h-[40px] !py-1.5" @click="clearFilters">
            Réinitialiser
          </button>
        </div>
      </div>

      <ul v-if="filteredCourses.length" class="mt-8 border-t border-line">
        <li
          v-for="c in filteredCourses"
          :key="`${c.title}-${c.semestre}`"
          class="grid gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] md:items-baseline"
        >
          <div>
            <h3 class="text-2xl font-bold">{{ c.title }}</h3>
            <p class="eyebrow mt-1">{{ c.level }}</p>
          </div>
          <div>
            <p class="text-muted">{{ c.description }}</p>
            <ul class="mt-3 flex flex-wrap gap-2" aria-label="Diplôme et semestre">
              <li class="tag">{{ c.diplome }}</li>
              <li class="tag">S{{ c.semestre }}</li>
            </ul>
          </div>
          <ExtLink :href="c.url" class="link whitespace-nowrap md:justify-self-end">
            Support de cours<span class="sr-only"> : {{ c.title }}</span>
          </ExtLink>
        </li>
      </ul>
      <p v-else class="mt-8 rounded-2xl border border-line bg-panel p-6 text-muted">
        Aucun cours ne correspond à ces filtres.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import coursesData from '~/data/enseignements/courses.json'

interface Course {
  title: string
  level: string
  description: string
  diplome: string
  semestre: number
  url: string
}

const courses: Course[] = coursesData.courses
const searchQuery = ref('')
const selectedDiplomes = ref<string[]>([])
const selectedSemestres = ref<number[]>([])

const diplomes = [...new Set(courses.map((c) => c.diplome))]
const semestres = [...new Set(courses.map((c) => c.semestre))].sort((a, b) => a - b)

const hasActiveFilters = computed(
  () => selectedDiplomes.value.length > 0 || selectedSemestres.value.length > 0 || searchQuery.value !== ''
)

const clearFilters = () => {
  selectedDiplomes.value = []
  selectedSemestres.value = []
  searchQuery.value = ''
}

const filteredCourses = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return courses.filter(
    (c) =>
      (!q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) &&
      (!selectedDiplomes.value.length || selectedDiplomes.value.includes(c.diplome)) &&
      (!selectedSemestres.value.length || selectedSemestres.value.includes(c.semestre))
  )
})

usePageSeo({
  title: 'Enseignements',
  description: 'Cours et supports de David Annebicque : développement web, Vue.js, Symfony et programmation orientée objet en BUT.',
  path: '/enseignements'
})
</script>

<style scoped>
.chip {
  @apply inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-line bg-bg px-4 text-[0.95rem] font-semibold text-fg transition hover:border-fg;
}
.chip-label input:checked + .chip {
  @apply border-surface bg-surface text-on;
}
.chip-label input:focus-visible + .chip {
  @apply outline outline-[3px] outline-offset-4 outline-accent;
}
</style>
