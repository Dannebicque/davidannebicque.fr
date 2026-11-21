<template>
  <NuxtLayout>
    <section class="mx-auto max-w-prose py-16 text-center">
      <p class="eyebrow">Erreur {{ error?.statusCode ?? 500 }}</p>
      <h1 class="mt-4 text-4xl font-bold sm:text-6xl">
        {{ is404 ? 'Cette page a pris la fuite.' : 'Quelque chose a planté.' }}
      </h1>
      <p class="mt-5 text-muted">
        {{ is404 ? "L'adresse demandée n'existe pas ou a changé." : "Réessayez dans un instant, ou revenez à l'accueil." }}
      </p>
      <button type="button" class="btn btn-primary mt-8" @click="handleError">Retour à l'accueil</button>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error?.statusCode === 404)
useHead({ title: is404.value ? 'Page introuvable' : 'Erreur' })
const handleError = () => clearError({ redirect: '/' })
</script>
