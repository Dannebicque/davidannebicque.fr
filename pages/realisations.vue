<template>
  <div class="space-y-20 sm:space-y-28">
    <div>
      <PageHero eyebrow="Réalisations" title="Des outils construits pour des usages réels.">
        Applications métiers, plateformes pédagogiques et briques techniques. Elles partagent une même intention : rendre
        des processus complexes plus fiables, lisibles et agréables à utiliser. Tous les projets sont open source.
      </PageHero>
      <h2 class="sr-only">Liste des projets</h2>
      <div class="border-t border-line">
        <ProjectItem v-for="p in projects" :key="p.title" :project="p" />
      </div>
      <p class="mt-6 text-muted">
        Plus de code sur <ExtLink class="link" :href="site.github">mon GitHub</ExtLink>.
      </p>
    </div>

    <section aria-labelledby="approche-title">
      <p class="eyebrow">Démarche</p>
      <h2 id="approche-title" class="mt-2 text-3xl font-bold sm:text-4xl">Comprendre avant de coder.</h2>
      <div class="mt-10 grid gap-10 md:grid-cols-3">
        <article v-for="a in approach" :key="a.title" class="space-y-4">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-on">
            <component :is="a.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 class="text-xl font-bold">{{ a.title }}</h3>
          <p class="text-muted">{{ a.description }}</p>
        </article>
      </div>
    </section>

    <ContactBand />
  </div>
</template>

<script setup lang="ts">
import { ClipboardDocumentCheckIcon, PresentationChartLineIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import projectsData from '~/data/projects.json'
import { site } from '~/data/site'

const projects = projectsData.projects

const approach = [
  {
    title: 'Cadrer avec les utilisateurs',
    description: 'Le terrain, les contraintes et les usages guident les choix techniques, avant la première ligne de code.',
    icon: ClipboardDocumentCheckIcon
  },
  {
    title: 'Livrer ce qui sert',
    description: 'Je privilégie les fonctionnalités qui simplifient réellement le quotidien des équipes et des étudiants.',
    icon: PresentationChartLineIcon
  },
  {
    title: 'Construire durable',
    description: 'Architecture lisible, code maintenable, accessibilité prise en compte dès la conception.',
    icon: WrenchScrewdriverIcon
  }
]

usePageSeo({
  title: 'Réalisations',
  description: "Réalisations web de David Annebicque : applications métiers, plateformes pédagogiques et outils open source Symfony, Vue et Nuxt pour l'enseignement supérieur.",
  path: '/realisations'
})
</script>
