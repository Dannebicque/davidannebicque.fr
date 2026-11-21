<template>
  <section class="mx-auto max-w-prose py-12 text-center">
    <p class="eyebrow">Message envoyé</p>
    <h1 class="mt-4 text-4xl font-extrabold sm:text-6xl">Merci !</h1>
    <p class="mt-5 text-lg text-muted">Votre message est bien parti. Je vous réponds dès que possible.</p>
    <NuxtLink to="/" class="btn btn-primary mt-8">Retour à l'accueil</NuxtLink>
  </section>
</template>

<script setup lang="ts">
useHead({ title: 'Message envoyé', meta: [{ name: 'robots', content: 'noindex' }] })
</script>
