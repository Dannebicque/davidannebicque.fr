<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg border-b border-blue-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo et titre -->
          <NuxtLink to="/" class="flex items-center space-x-4">
            <img src="https://avatars.githubusercontent.com/u/9027047?v=4" alt="Logo" class="h-12 w-12 rounded-full shadow-lg" />
            <div class="hidden sm:block">
              <span class="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">David ANNEBICQUE</span>
              <p class="text-sm text-blue-600">Enseignant-Chercheur</p>
            </div>
          </NuxtLink>

          <!-- Navigation desktop -->
          <div class="hidden sm:flex items-center space-x-8">
            <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
            <NuxtLink to="/publications" class="nav-link">Publications</NuxtLink>
            <NuxtLink to="/enseignements" class="nav-link">Enseignements</NuxtLink>
            <NuxtLink to="/cv" class="nav-link">CV</NuxtLink>
            <NuxtLink to="/realisations" class="nav-link">Réalisations</NuxtLink>
          </div>

          <!-- Bouton menu mobile -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span class="sr-only">Ouvrir le menu principal</span>
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>

        <!-- Menu mobile -->
        <div 
          v-show="mobileMenuOpen" 
          class="sm:hidden"
        >
          <div class="pt-2 pb-4 space-y-1 border-t border-blue-100">
            <NuxtLink 
              v-for="(link, index) in navigation" 
              :key="index"
              :to="link.to"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-b from-white to-blue-50 py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center text-blue-600 text-sm">
          © {{ new Date().getFullYear() }} David ANNEBICQUE - Tous droits réservés
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const navigation = [
  { text: 'Accueil', to: '/' },
  { text: 'Publications', to: '/publications' },
  { text: 'Enseignements', to: '/enseignements' },
  { text: 'CV', to: '/cv' },
  { text: 'Réalisations', to: '/realisations' }
]
</script>

<style>
.nav-link {
  @apply inline-flex items-center px-3 pt-1 text-sm font-medium text-blue-600 hover:text-blue-800 relative;
}

.nav-link.router-link-active {
  @apply text-blue-800;
}

.nav-link.router-link-active::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full;
}

.nav-link:hover::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full transition-all duration-300;
}

.mobile-nav-link {
  @apply block px-4 py-2 text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors;
}

.mobile-nav-link.router-link-active {
  @apply text-blue-800 bg-blue-50 border-l-4 border-blue-600;
}
</style>