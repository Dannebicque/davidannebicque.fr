<template>
  <div class="space-y-20 sm:space-y-28">
    <div>
      <PageHero eyebrow="Réalisations" title="Des outils construits pour des usages réels.">
        Applications métiers, plateformes pédagogiques et briques techniques. Elles partagent une même intention : rendre
        des processus complexes plus fiables, lisibles et agréables à utiliser. Tous les projets sont open source, du bundle Symfony à l'éditeur GRAFCET.
      </PageHero>
      <h2 class="sr-only">Liste des projets</h2>
      <fieldset class="mb-8">
        <legend class="eyebrow">Filtrer par type</legend>
        <div class="mt-3 flex flex-wrap gap-2">
          <label v-for="k in kinds" :key="k.value" class="chip-label">
            <input v-model="kind" type="radio" name="kind" :value="k.value" class="peer sr-only" />
            <span class="chip">{{ k.label }}<span class="ml-2 font-mono text-xs">{{ k.count }}</span></span>
          </label>
        </div>
      </fieldset>
      <p class="sr-only" role="status">{{ shown.length }} projet{{ shown.length > 1 ? 's' : '' }} affiché{{ shown.length > 1 ? 's' : '' }}</p>
      <div class="border-t border-line">
        <ProjectItem v-for="p in shown" :key="p.title" :project="p" />
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
import type { Project } from '~/components/ProjectItem.vue'

const projects: Project[] = projectsData.projects

const kind = ref('all')
const kinds = [
  { value: 'all', label: 'Tous', count: projects.length },
  ...[...new Set(projects.map((p) => p.kind))].map((k) => ({
    value: k,
    label: k,
    count: projects.filter((p) => p.kind === k).length
  }))
]
const shown = computed(() => (kind.value === 'all' ? projects : projects.filter((p) => p.kind === kind.value)))

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
