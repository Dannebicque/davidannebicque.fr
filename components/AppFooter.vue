<template>
  <footer class="border-t border-line">
    <div class="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <p class="font-display text-xl font-bold">{{ site.name }}</p>
        <p class="mt-2 max-w-sm text-muted">
          Enseignant-chercheur à l'IUT de Troyes. Je développe des outils open source pour l'enseignement supérieur.
        </p>
        <p v-if="site.email" class="mt-4">
          <a class="link" :href="`mailto:${site.email}`">{{ site.email }}</a>
        </p>
      </div>

      <nav aria-label="Plan du site">
        <p class="eyebrow">Naviguer</p>
        <ul class="mt-4 space-y-2">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink :to="item.to" class="hover:text-accent hover:underline hover:underline-offset-4">{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <p class="eyebrow">Ailleurs</p>
        <ul class="mt-4 space-y-2">
          <li v-for="l in social.links" :key="l.url">
            <ExtLink :href="l.url" class="hover:text-accent hover:underline hover:underline-offset-4">{{ l.name }}</ExtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-line">
      <p class="container-page py-5 text-sm text-muted">
        © {{ new Date().getFullYear() }} {{ site.name }}.
        <NuxtLink to="/mentions-legales" class="underline underline-offset-4 hover:text-fg">Mentions légales</NuxtLink>
        ·
        <NuxtLink to="/accessibilite" class="underline underline-offset-4 hover:text-fg">Accessibilité</NuxtLink>
        ·
        <ExtLink :href="`${site.github}/davidannebicque.fr`" class="underline underline-offset-4 hover:text-fg">Code du site</ExtLink>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import social from '~/data/cv/social.json'
import { navigation, site } from '~/data/site'
</script>
