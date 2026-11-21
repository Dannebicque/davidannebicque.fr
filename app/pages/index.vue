<template>
  <div class="space-y-24 sm:space-y-32">
    <!-- Hero -->
    <section class="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]" aria-labelledby="hero-title">
      <div class="space-y-7">
        <p class="eyebrow">Enseignant-chercheur · IUT de Troyes · Développeur web</p>
        <h1 id="hero-title" class="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
          Je conçois des outils web qui <span class="hl">servent vraiment</span> l'enseignement.
        </h1>
        <p class="max-w-prose text-lg text-muted">
          Symfony, Vue, accessibilité et learning analytics. Je construis des applications métiers et des plateformes
          pédagogiques, et je les publie en open source.
        </p>
        <ul class="flex flex-wrap gap-2" aria-label="Domaines">
          <li v-for="t in tags" :key="t" class="tag">{{ t }}</li>
        </ul>
        <div class="flex flex-wrap gap-3 pt-1">
          <NuxtLink to="/realisations" class="btn btn-primary">
            Voir les réalisations
            <ArrowRightIcon class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
          <a href="#contact" class="btn btn-ghost">Me contacter</a>
        </div>
      </div>

      <div class="relative mx-auto w-64 sm:w-72">
        <div class="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[2rem] bg-surface" aria-hidden="true"></div>
        <img
          :src="site.avatar"
          alt="Portrait de David Annebicque"
          width="295"
          height="295"
          fetchpriority="high"
          class="relative aspect-square w-full rounded-[2rem] border-2 border-fg object-cover"
        />
      </div>
    </section>

    <!-- Ce que je fais -->
    <section aria-labelledby="focus-title">
      <p class="eyebrow">Trois façons de travailler</p>
      <h2 id="focus-title" class="mt-2 text-3xl font-bold sm:text-4xl">Enseigner, construire, mesurer.</h2>
      <div class="mt-10 grid gap-10 md:grid-cols-3">
        <article v-for="f in focusAreas" :key="f.title" class="space-y-4">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-on">
            <component :is="f.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 class="text-xl font-bold">{{ f.title }}</h3>
          <p class="text-muted">{{ f.description }}</p>
        </article>
      </div>
    </section>

    <!-- Réalisations -->
    <section>
      <SectionHeading eyebrow="Réalisations" title="Des outils ouverts, du terrain à la recherche">
        <NuxtLink to="/realisations" class="link whitespace-nowrap">Tous les projets</NuxtLink>
      </SectionHeading>
      <div class="mt-8 border-t border-line">
        <ProjectItem v-for="p in featured" :key="p.title" :project="p" />
      </div>
    </section>

    <ContactBand />
  </div>
</template>

<script setup lang="ts">
import { AcademicCapIcon, ArrowRightIcon, ChartBarSquareIcon, CodeBracketSquareIcon } from '@heroicons/vue/24/outline'
import projectsData from '~/data/projects.json'
import { site } from '~/data/site'

const tags = ['Symfony', 'Vue.js', 'Accessibilité', 'Open source', 'Learning analytics']

const featured = projectsData.projects.filter((p) => p.featured)

const focusAreas = [
  {
    title: 'Enseigner',
    description: 'Transmettre les fondamentaux du développement web et de l\'accessibilité par des situations concrètes et progressives.',
    icon: AcademicCapIcon
  },
  {
    title: 'Construire',
    description: 'Développer des outils métiers et des bibliothèques open source qui simplifient le suivi, les formations et les usages.',
    icon: CodeBracketSquareIcon
  },
  {
    title: 'Mesurer',
    description: "Analyser les traces d'apprentissage pour comprendre les parcours et mieux accompagner les étudiants.",
    icon: ChartBarSquareIcon
  }
]

usePageSeo({
  title: 'Accueil',
  description: "David Annebicque, enseignant-chercheur à l'IUT de Troyes et développeur web Symfony, Vue et Nuxt. Réalisations, enseignements, publications et contact.",
  path: '/'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        url: site.url,
        image: `${site.url}/images/portrait.png`,
        jobTitle: 'Maître de conférences',
        worksFor: { '@type': 'CollegeOrUniversity', name: 'IUT de Troyes, Université de Reims Champagne-Ardenne' },
        knowsAbout: ['Symfony', 'Vue.js', 'Accessibilité numérique', 'Learning analytics'],
        sameAs: [site.github, site.linkedin]
      })
    }
  ]
})
</script>
