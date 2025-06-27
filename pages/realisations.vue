<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">
      Réalisations Web
    </h1>
    
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="(project, index) in projects" 
           :key="index" 
           class="group">
        <div class="bg-blue-50 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-xl">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-blue-700 mt-3">{{ project.description }}</p>
            <div class="mt-4">
              <a :href="project.url" 
                 target="_blank" 
                 class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Voir le projet
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  url: string
}

const projects = ref<Project[]>([
  {
    title: 'INTRANET',
    description: 'Application web de gestion pédagogique pour les départements d\'IUT. Développée avec Symfony et Vue.js, elle permet la gestion des étudiants, des notes, des absences et du suivi pédagogique.',
    url: 'https://github.com/Dannebicque/intranetV3'
  },
  {
    title: 'TableauxDeBord',
    description: 'Outil d\'analyse et de visualisation des données pédagogiques. Développé avec Symfony et ChartJS, il permet de suivre la progression des étudiants et d\'identifier les points d\'amélioration.',
    url: 'https://github.com/Dannebicque/TableauxDeBord'
  },
  {
    title: 'redigeTonBut',
    description: 'Plateforme collaborative pour la rédaction des programmes nationaux du BUT. Interface ergonomique pour faciliter le travail des équipes pédagogiques.',
    url: 'https://github.com/Dannebicque/redigeTonBut'
  },
  {
    title: 'OrdonanceurLp',
    description: 'Application de gestion des plannings et des emplois du temps pour les formations en alternance. Optimisation des périodes entreprise/formation.',
    url: 'https://github.com/Dannebicque/ordonanceurLp'
  }
])

definePageMeta({
  layout: 'default'
})
</script>