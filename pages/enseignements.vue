<template>
  <div class="space-y-10">
    <section class="relative overflow-hidden rounded-lg bg-blue-950 text-white shadow-2xl shadow-blue-950/20">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(30,64,175,0.9)_55%,_rgba(13,148,136,0.65))]"></div>
      <div class="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-200">Enseignements</p>
          <h1 class="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Des cours web orientés pratique, progression et autonomie.
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Les enseignements présentés ici couvrent le développement web, la programmation orientée objet, Vue.js et Symfony, avec des supports accessibles en ligne pour accompagner le travail des étudiants.
          </p>
        </div>

        <aside class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <p class="font-semibold">Vue d'ensemble</p>
          <dl class="mt-5 grid grid-cols-2 gap-3">
            <div class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">Cours</dt>
              <dd class="mt-2 text-2xl font-bold">{{ courses.length }}</dd>
            </div>
            <div class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">Diplômes</dt>
              <dd class="mt-2 text-2xl font-bold">{{ diplomes.length }}</dd>
            </div>
            <div class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">Semestres</dt>
              <dd class="mt-2 text-2xl font-bold">{{ semestres.length }}</dd>
            </div>
            <div class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">Supports</dt>
              <dd class="mt-2 text-2xl font-bold">Web</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="rounded-lg border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5">
      <div class="grid gap-4 lg:grid-cols-[1fr_16rem_16rem]">
        <div>
          <label class="mb-2 block text-sm font-semibold text-blue-950" for="course-search">Rechercher</label>
          <div class="relative">
            <MagnifyingGlassIcon class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              id="course-search"
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher un cours..."
              class="block w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-slate-700 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100"
            />
          </div>
        </div>

        <div>
          <p class="mb-2 text-sm font-semibold text-blue-950">Diplômes</p>
          <Listbox v-model="selectedDiplomes" multiple>
            <div class="relative">
              <ListboxButton class="relative w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-3 pr-10 text-left text-slate-700 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100">
                <span class="block truncate">
                  {{ selectedDiplomes.length === 0 ? 'Tous les diplômes' : `${selectedDiplomes.length} diplôme(s)` }}
                </span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronUpDownIcon class="h-5 w-5 text-slate-400" />
                </span>
              </ListboxButton>
              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions class="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-xl ring-1 ring-slate-200 focus:outline-none">
                  <ListboxOption
                    v-for="diplome in diplomes"
                    :key="diplome"
                    v-slot="{ active, selected }"
                    :value="diplome"
                  >
                    <div
                      :class="[
                        active ? 'bg-blue-950 text-white' : 'text-slate-700',
                        'relative cursor-default select-none py-2 pl-10 pr-4'
                      ]"
                    >
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                        {{ diplome }}
                      </span>
                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-cyan-600',
                          'absolute inset-y-0 left-0 flex items-center pl-3'
                        ]"
                      >
                        <CheckIcon class="h-5 w-5" />
                      </span>
                    </div>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

        <div>
          <p class="mb-2 text-sm font-semibold text-blue-950">Semestres</p>
          <Listbox v-model="selectedSemestres" multiple>
            <div class="relative">
              <ListboxButton class="relative w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-3 pr-10 text-left text-slate-700 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100">
                <span class="block truncate">
                  {{ selectedSemestres.length === 0 ? 'Tous les semestres' : `${selectedSemestres.length} semestre(s)` }}
                </span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronUpDownIcon class="h-5 w-5 text-slate-400" />
                </span>
              </ListboxButton>
              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions class="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-xl ring-1 ring-slate-200 focus:outline-none">
                  <ListboxOption
                    v-for="semestre in semestres"
                    :key="semestre"
                    v-slot="{ active, selected }"
                    :value="semestre"
                  >
                    <div
                      :class="[
                        active ? 'bg-blue-950 text-white' : 'text-slate-700',
                        'relative cursor-default select-none py-2 pl-10 pr-4'
                      ]"
                    >
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                        Semestre {{ semestre }}
                      </span>
                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-cyan-600',
                          'absolute inset-y-0 left-0 flex items-center pl-3'
                        ]"
                      >
                        <CheckIcon class="h-5 w-5" />
                      </span>
                    </div>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>

      <div v-if="hasActiveFilters" class="mt-5 flex flex-wrap gap-2">
        <button
          v-for="diplome in selectedDiplomes"
          :key="`d-${diplome}`"
          class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800"
          @click="removeDiplome(diplome)"
        >
          {{ diplome }}
          <XMarkIcon class="ml-2 h-4 w-4" />
        </button>
        <button
          v-for="semestre in selectedSemestres"
          :key="`s-${semestre}`"
          class="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800"
          @click="removeSemestre(semestre)"
        >
          Semestre {{ semestre }}
          <XMarkIcon class="ml-2 h-4 w-4" />
        </button>
        <button
          class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          @click="clearFilters"
        >
          Effacer
          <XMarkIcon class="ml-2 h-4 w-4" />
        </button>
      </div>
    </section>

    <section>
      <div class="mb-5 flex items-end justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-600">Catalogue</p>
          <h2 class="mt-2 text-3xl font-bold text-blue-950">{{ filteredCourses.length }} cours affiché(s)</h2>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="cours in filteredCourses"
          :key="`${cours.title}-${cours.semestre}`"
          class="group rounded-lg border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/5 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-900/10"
        >
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-950 text-cyan-200 transition group-hover:bg-cyan-500 group-hover:text-white">
              <AcademicCapIcon class="h-6 w-6" />
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 class="text-xl font-bold text-blue-950">{{ cours.title }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {{ cours.diplome }}
                  </span>
                  <span class="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                    S{{ cours.semestre }}
                  </span>
                </div>
              </div>
              <p class="mt-2 text-sm font-semibold text-cyan-700">{{ cours.level }}</p>
              <p class="mt-3 leading-7 text-slate-600">{{ cours.description }}</p>
              <a
                :href="cours.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 inline-flex items-center rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Support de cours
                <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import coursesData from '~/data/enseignements/courses.json'

interface Course {
  title: string
  level: string
  description: string
  diplome: string
  semestre: number
  url: string
}

const searchQuery = ref('')
const selectedDiplomes = ref<string[]>([])
const selectedSemestres = ref<number[]>([])

const courses = ref<Course[]>(coursesData.courses)

const diplomes = computed(() => [...new Set(courses.value.map(course => course.diplome))])
const semestres = computed(() => [...new Set(courses.value.map(course => course.semestre))].sort())

const hasActiveFilters = computed(() => {
  return selectedDiplomes.value.length > 0 || selectedSemestres.value.length > 0 || searchQuery.value !== ''
})

const removeDiplome = (diplome: string) => {
  selectedDiplomes.value = selectedDiplomes.value.filter(d => d !== diplome)
}

const removeSemestre = (semestre: number) => {
  selectedSemestres.value = selectedSemestres.value.filter(s => s !== semestre)
}

const clearFilters = () => {
  selectedDiplomes.value = []
  selectedSemestres.value = []
  searchQuery.value = ''
}

const filteredCourses = computed(() => {
  let filtered = courses.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(course =>
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    )
  }

  if (selectedDiplomes.value.length > 0) {
    filtered = filtered.filter(course => selectedDiplomes.value.includes(course.diplome))
  }

  if (selectedSemestres.value.length > 0) {
    filtered = filtered.filter(course => selectedSemestres.value.includes(course.semestre))
  }

  return filtered
})

useSeoMeta({
  title: 'Enseignements',
  description: 'Cours et supports de David Annebicque en développement web, Vue.js, Symfony, programmation orientée objet et informatique pour les formations BUT.',
  ogTitle: 'Enseignements · David Annebicque',
  ogDescription: 'Supports de cours, enseignements web, Vue.js, Symfony et programmation orientée objet pour les étudiants en BUT.',
  ogUrl: 'https://davidannebicque.fr/enseignements',
  twitterTitle: 'Enseignements · David Annebicque',
  twitterDescription: 'Cours et supports en développement web, Symfony, Vue.js et programmation orientée objet.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://davidannebicque.fr/enseignements' }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>
