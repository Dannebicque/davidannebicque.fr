<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">
      Enseignements
    </h1>

    <!-- Barre de filtres -->
    <div class="mb-8 bg-blue-50 rounded-xl p-4">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Champ de recherche -->
        <div class="flex-grow">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon class="h-5 w-5 text-blue-400" />
            </div>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Rechercher un cours..."
              class="block w-full pl-10 pr-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <!-- Menu déroulant Diplômes -->
        <div class="relative w-full md:w-64">
          <Listbox v-model="selectedDiplomes" multiple>
            <div class="relative">
              <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-blue-200 rounded-lg cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <span class="block truncate">
                  {{ selectedDiplomes.length === 0 ? 'Diplômes' : `${selectedDiplomes.length} diplôme(s)` }}
                </span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon class="h-5 w-5 text-blue-400" />
                </span>
              </ListboxButton>
              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions class="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <ListboxOption
                    v-for="diplome in diplomes"
                    :key="diplome"
                    :value="diplome"
                    v-slot="{ active, selected }"
                  >
                    <div :class="[
                      active ? 'text-white bg-blue-600' : 'text-blue-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4'
                    ]">
                      <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                        {{ diplome }}
                      </span>
                      <span v-if="selected" :class="[
                        active ? 'text-white' : 'text-blue-600',
                        'absolute inset-y-0 left-0 flex items-center pl-3'
                      ]">
                        <CheckIcon class="h-5 w-5" />
                      </span>
                    </div>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

        <!-- Menu déroulant Semestres -->
        <div class="relative w-full md:w-64">
          <Listbox v-model="selectedSemestres" multiple>
            <div class="relative">
              <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-blue-200 rounded-lg cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <span class="block truncate">
                  {{ selectedSemestres.length === 0 ? 'Semestres' : `${selectedSemestres.length} semestre(s)` }}
                </span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon class="h-5 w-5 text-blue-400" />
                </span>
              </ListboxButton>
              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions class="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <ListboxOption
                    v-for="semestre in semestres"
                    :key="semestre"
                    :value="semestre"
                    v-slot="{ active, selected }"
                  >
                    <div :class="[
                      active ? 'text-white bg-blue-600' : 'text-blue-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4'
                    ]">
                      <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                        Semestre {{ semestre }}
                      </span>
                      <span v-if="selected" :class="[
                        active ? 'text-white' : 'text-blue-600',
                        'absolute inset-y-0 left-0 flex items-center pl-3'
                      ]">
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

      <!-- Filtres actifs -->
      <div v-if="hasActiveFilters" class="mt-4 flex flex-wrap gap-2">
        <div v-for="diplome in selectedDiplomes" :key="`d-${diplome}`" 
             class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
          {{ diplome }}
          <XMarkIcon class="h-4 w-4 ml-2 cursor-pointer" @click="removeDiplome(diplome)" />
        </div>
        <div v-for="semestre in selectedSemestres" :key="`s-${semestre}`"
             class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
          Semestre {{ semestre }}
          <XMarkIcon class="h-4 w-4 ml-2 cursor-pointer" @click="removeSemestre(semestre)" />
        </div>
        <button v-if="hasActiveFilters" 
                @click="clearFilters"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
          Effacer les filtres
          <XMarkIcon class="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
    
    <!-- Liste des cours -->
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="(cours, index) in filteredCourses" 
           :key="index" 
           class="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <AcademicCapIcon class="h-6 w-6 text-white" />
            </div>
          </div>
          <div class="ml-4 flex-grow">
            <div class="flex justify-between items-start">
              <h2 class="text-xl font-semibold text-blue-900">{{ cours.title }}</h2>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {{ cours.diplome }}
                </span>
                <span class="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  S{{ cours.semestre }}
                </span>
              </div>
            </div>
            <p class="text-blue-600 mt-1">{{ cours.level }}</p>
            <p class="text-blue-700 mt-2">{{ cours.description }}</p>
            
            <!-- Lien vers le support de cours -->
            <div class="mt-4">
              <a :href="cours.url"
                 target="_blank"
                 class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors">
                <DocumentTextIcon class="h-4 w-4 mr-2" />
                Support de cours
                <ArrowTopRightOnSquareIcon class="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { 
  ChevronUpDownIcon, 
  CheckIcon, 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  AcademicCapIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon
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

definePageMeta({
  layout: 'default'
})
</script>