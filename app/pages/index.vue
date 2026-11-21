<template>
  <div class="space-y-24 sm:space-y-32">
    <!-- Hero -->
    <section class="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]" aria-labelledby="hero-title">
      <div class="space-y-7">
        <p class="eyebrow">Enseignant-chercheur · IUT de Troyes · Développeur web</p>
        <h1 id="hero-title" class="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
          Je conçois des systèmes fiables et des outils web qui <span class="hl">servent vraiment</span>.
        </h1>
        <p class="max-w-prose text-lg text-muted">
          Chercheur en automatique et industrie 4.0, je travaille sur la fiabilité des systèmes et la valeur des données.
          Développeur Symfony et Vue, je construis aussi des applications métiers et des plateformes pédagogiques,
          publiées en open source.
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

    <!-- Recherche -->
    <section
      aria-labelledby="recherche-title"
      class="rounded-3xl border border-line bg-panel p-8 sm:p-12"
    >
      <p class="eyebrow">Recherche</p>
      <h2 id="recherche-title" class="mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">
        Des systèmes industriels aux données : rendre le complexe fiable.
      </h2>
      <p class="mt-5 max-w-prose text-lg text-muted">
        Mon parcours de chercheur vient de l'automatique et de l'informatique industrielle. Il nourrit trois axes,
        qui se prolongent dans mes outils open source.
      </p>
      <div class="mt-10 grid gap-10 md:grid-cols-3">
        <article v-for="r in researchAreas" :key="r.title" class="space-y-4">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-on">
            <component :is="r.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 class="text-xl font-bold">{{ r.title }}</h3>
          <p class="text-muted">{{ r.description }}</p>
        </article>
      </div>
      <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <NuxtLink to="/publications" class="link">Mes publications</NuxtLink>
        <NuxtLink to="/realisations" class="link">Les outils associés</NuxtLink>
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
import {
  AcademicCapIcon,
  ArrowRightIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'
import projectsData from '~/data/projects.json'
import { site } from '~/data/site'

const tags = ['Industrie 4.0', 'Vérification formelle', 'Data', 'Symfony', 'Vue.js', 'Accessibilité']

const featured = projectsData.projects.filter((p) => p.featured)

const researchAreas = [
  {
    title: 'Industrie 4.0 et jumeaux numériques',
    description:
      'Modèles, supervision et commande des systèmes de production : relier le système réel à sa représentation numérique pour le concevoir, le simuler et le superviser.',
    icon: CpuChipIcon
  },
  {
    title: 'Vérification formelle',
    description:
      "Spécifier un comportement avec précision, puis vérifier qu'il respecte ses propriétés avant de le déployer. C'est l'esprit de SFC Editor, éditeur et validateur de GRAFCET.",
    icon: ShieldCheckIcon
  },
  {
    title: 'Données et aide à la décision',
    description:
      "Exploiter les traces des systèmes de production et des parcours d'apprentissage pour éclairer la décision et favoriser la coopération entre l'humain et la machine, thème de ma thèse.",
    icon: CircleStackIcon
  }
]

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
    description: "Analyser les données, des parcours d'apprentissage aux systèmes de production, pour décider et mieux accompagner.",
    icon: ChartBarSquareIcon
  }
]

usePageSeo({
  title: 'Accueil',
  description: "David Annebicque, enseignant-chercheur à l'IUT de Troyes : automatique, industrie 4.0, vérification formelle et données, et développeur web Symfony, Vue et Nuxt. Recherche, réalisations, enseignements et contact.",
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
        knowsAbout: ['Automatique', 'Industrie 4.0', 'Vérification formelle', 'Jumeaux numériques', 'Aide à la décision', 'Symfony', 'Vue.js', 'Accessibilité numérique', 'Learning analytics'],
        sameAs: [site.github, site.linkedin]
      })
    }
  ]
})
</script>
