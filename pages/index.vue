<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div class="relative px-8 py-16 sm:px-16 sm:py-24">
          <div class="max-w-3xl">
            <h1 class="text-4xl font-bold text-white mb-6">
              Bienvenue sur mon site académique
            </h1>
            <p class="text-xl text-blue-100">
              Je suis enseignant-chercheur à l'IUT de Troyes (Université de Reims Champagne-Ardenne). Mes domaines de recherche incluent le développement web, les learning analytics et l'innovation pédagogique.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Actualités -->
    <div class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-blue-900 mb-6">Actualités</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <div class="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow">
          <span class="text-sm text-blue-600 font-medium">2024</span>
          <h3 class="text-lg font-semibold text-blue-900 mt-2">Directeur des études du BUT Informatique</h3>
          <p class="text-blue-700 mt-2">Responsable pédagogique du département informatique de l'IUT de Troyes.</p>
        </div>
        <div class="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow">
          <span class="text-sm text-blue-600 font-medium">2024</span>
          <h3 class="text-lg font-semibold text-blue-900 mt-2">Développement d'INTRANET</h3>
          <p class="text-blue-700 mt-2">Outil de gestion pédagogique pour les départements d'IUT.</p>
        </div>
      </div>
    </div>

    <!-- Domaines de recherche -->
    <div class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-blue-900 mb-6">Domaines de recherche</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="p-6 border border-blue-100 rounded-xl hover:border-blue-300 transition-colors">
          <h3 class="text-lg font-semibold text-blue-900">Learning Analytics</h3>
          <p class="text-blue-700 mt-2">Analyse des données d'apprentissage pour améliorer l'enseignement et le suivi des étudiants.</p>
        </div>
        <div class="p-6 border border-blue-100 rounded-xl hover:border-blue-300 transition-colors">
          <h3 class="text-lg font-semibold text-blue-900">Innovation Pédagogique</h3>
          <p class="text-blue-700 mt-2">Développement de nouvelles approches pédagogiques et outils pour l'enseignement.</p>
        </div>
        <div class="p-6 border border-blue-100 rounded-xl hover:border-blue-300 transition-colors">
          <h3 class="text-lg font-semibold text-blue-900">Développement Web</h3>
          <p class="text-blue-700 mt-2">Création d'applications web modernes et performantes pour l'éducation.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>