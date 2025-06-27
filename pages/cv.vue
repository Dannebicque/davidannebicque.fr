<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <div class="flex justify-between items-start mb-8">
      <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Curriculum Vitae
      </h1>
      <div class="flex space-x-4">
        <a v-for="link in social.links" 
           :key="link.name"
           :href="link.url"
           target="_blank"
           class="text-blue-600 hover:text-blue-800 transition-colors">
          <div v-if="link.icon === 'github'" class="w-6 h-6">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
          <div v-if="link.icon === 'linkedin'" class="w-6 h-6">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div v-if="link.icon === 'researchgate'" class="w-6 h-6">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93.043-.372.064-.773.064-1.202 0-.775-.089-1.38-.366-1.92-.276-.54-.737-.97-1.376-1.287-.64-.317-1.462-.475-2.468-.475zm-15.193.03c-.124 0-.266.004-.424.011V0h-3.95v2.565h1.832l.003.023.75 3.033L0 10.273h4.225l.003-.023.82-3.32-.017-.068-.77-3.114V3.73h.872c.506 0 .853.082 1.043.245.19.164.285.456.285.877 0 .122-.01.276-.03.464-.02.187-.057.395-.108.623L6.252 6.4h3.796l.088-.042c.072-.324.107-.678.107-1.063 0-.797-.117-1.464-.352-2.003-.234-.539-.609-.947-1.124-1.223C8.253.79 7.555.653 6.674.653a12.223 12.223 0 0 0-2.28.227zm15.193 2.66c.345 0 .611.047.796.137.184.09.309.219.371.384.063.165.094.368.094.61 0 .241-.031.445-.094.61a.705.705 0 0 1-.37.384c-.186.09-.452.136-.797.136-.344 0-.61-.046-.795-.136a.704.704 0 0 1-.37-.384 1.909 1.909 0 0 1-.095-.61c0-.242.031-.445.094-.61a.705.705 0 0 1 .37-.384c.186-.09.452-.137.796-.137zM4.383 7.213l-.02.084-1.167 4.73h1.548l1.15-4.73-.018-.084zm5.172 3.525c-.124 0-.264.004-.422.011v-.04H5.182v2.565h1.832v.023l.75 3.033-2.604 4.651h4.224l.003-.023.82-3.32-.017-.068-.77-3.114v-.018h.872c.506 0 .853.082 1.043.245.19.164.285.456.285.877 0 .122-.01.276-.03.464-.02.187-.057.395-.108.623l-.07.463h3.796l.088-.042c.072-.324.107-.678.107-1.063 0-.797-.117-1.464-.352-2.003-.234-.539-.609-.947-1.124-1.223-.515-.277-1.213-.414-2.094-.414a12.223 12.223 0 0 0-2.28.227zm4.83 3.525l-.02.084-1.167 4.73h1.548l1.15-4.73-.018-.084zM7.65 21.176a3.097 3.097 0 0 0-.391.027l-.618.069v2.701h2.497v-2.701l-.618-.069a3.097 3.097 0 0 0-.39-.027h-.48z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
    
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Colonne gauche -->
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Expériences Professionnelles et Responsabilités</h2>
          <div class="space-y-6">
            <div v-for="experience in experiences.experiences" 
                 :key="experience.periode"
                 class="relative pl-6 border-l-2 border-blue-200 hover:border-blue-600 transition-colors">
              <div class="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
              <p class="text-blue-600 font-medium">{{ experience.periode }}</p>
              <p class="font-semibold text-blue-900 mt-1">{{ experience.poste }}</p>
              <p class="text-blue-700">{{ experience.etablissement }}</p>
              <div class="mt-4 space-y-2">
                <div v-for="responsabilite in experience.responsabilites" 
                     :key="responsabilite.titre"
                     class="flex items-center justify-between">
                  <span class="text-blue-600">• {{ responsabilite.titre }}</span>
                  <span class="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {{ responsabilite.periode }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Colonne droite -->
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Compétences</h2>
          <div class="grid gap-4">
            <div v-for="categorie in competences.categories" 
                 :key="categorie.nom"
                 class="bg-blue-50 p-4 rounded-xl">
              <h3 class="font-medium text-blue-900">{{ categorie.nom }}</h3>
              <ul class="mt-2 space-y-2 text-blue-700">
                <li v-for="competence in categorie.competences" 
                    :key="competence">{{ competence }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Formation</h2>
          <div class="space-y-6">
            <div v-for="formation in formations.formations" 
                 :key="formation.annee"
                 class="relative pl-6 border-l-2 border-blue-200 hover:border-blue-600 transition-colors">
              <div class="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
              <p class="text-blue-600 font-medium">{{ formation.annee }}</p>
              <p class="font-semibold text-blue-900 mt-1">{{ formation.titre }}</p>
              <p class="text-blue-700">{{ formation.etablissement }}</p>
              <p v-if="formation.description" class="text-blue-600 mt-1">{{ formation.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import formations from '~/data/cv/formation.json'
import competences from '~/data/cv/competences.json'
import experiences from '~/data/cv/experience.json'
import social from '~/data/cv/social.json'

definePageMeta({
  layout: 'default'
})
</script>