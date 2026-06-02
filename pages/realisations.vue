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
    title: 'ORéOF',
    description: 'Application de gestion des offres de formation pour les établissements d\'enseignement supérieur. Permet la création, la modification et la publication des offres de formation en ligne.',
    url: 'https://github.com/OReOF-URCA/oreof'
  },
  {
    title: 'redigeTonBut',
    description: 'Plateforme collaborative pour la rédaction des programmes nationaux du BUT. Interface ergonomique pour faciliter le travail des équipes pédagogiques.',
    url: 'https://github.com/Dannebicque/redigeTonBut'
  },
  {
    title: 'WWC - World Wide Company',
    description: 'Jeu de gestion d\'entreprise en ligne, développé pour les étudiants en BUT. Permet de simuler la gestion d\'une entreprise, avec des aspects financiers, marketing et opérationnels.',
    url: 'https://github.com/Dannebicque/wwc'
  },
    {
    title: 'HtmlToSpreadsheet',
    description: 'Outil de conversion de données HTML/Twig vers des feuilles de calcul. Bundle Symfony pour faciliter l\'export de données structurées vers Excel.',
    url: 'https://github.com/Dannebicque/htmlToSpreadsheet'
  },
    {
    title: 'UniEdt',
    description: 'Application de gestion des emplois du temps pour les établissements d\'enseignement supérieur, avec gestion des contraintes et du service prévisionnel.',
    url: 'https://github.com/Dannebicque/uniEdt'
  }
])

definePageMeta({
  layout: 'default'
})
</script>