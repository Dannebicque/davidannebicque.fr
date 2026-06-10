<template>
  <div class="space-y-10">
    <section class="relative overflow-hidden rounded-lg bg-slate-950 text-white shadow-2xl shadow-blue-950/20">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,_rgba(37,99,235,0.9),_rgba(15,23,42,0.96)_52%,_rgba(20,184,166,0.55))]"></div>
      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"></div>

      <div class="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-14">
        <div class="flex flex-col justify-between gap-10">
          <div class="max-w-3xl">
            <p class="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Enseignant-chercheur · IUT de Troyes · Développeur web
            </p>
            <h1 class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Faire dialoguer pédagogie, données et applications web utiles.
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Je conçois des outils numériques pour l'enseignement supérieur, j'accompagne les étudiants en BUT Métiers du Multimédia et de l'Internet (MMI) et je mène des travaux autour des learning analytics et de l'innovation pédagogique, mais aussi de l'Industrie 4.0 et les Jumeaux numériques.
            </p>
          </div>

          <div class="flex flex-col gap-4 sm:flex-row">
            <NuxtLink
              to="/realisations"
              class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-900 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Voir mon portfolio
              <ArrowRightIcon class="ml-2 h-4 w-4" />
            </NuxtLink>
            <a
              href="https://www.linkedin.com/in/davidannebicque/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Discuter d'une mission
            </a>
          </div>
        </div>

        <aside class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <div class="flex items-center gap-4 border-b border-white/15 pb-5">
            <img
              src="https://avatars.githubusercontent.com/u/9027047?v=4"
              alt="Portrait de David Annebicque"
              class="h-20 w-20 rounded-lg border border-white/30 object-cover shadow-xl"
            />
            <div>
              <p class="text-xl font-semibold">David Annebicque</p>
              <p class="mt-1 text-sm leading-6 text-blue-100">
                Directeur adjoint IUT de Troyes - Pédagogie et Innovation numérique, développeur Symfony/Vue et enseignant en développement web et A11y.
              </p>
            </div>
          </div>

          <dl class="mt-5 grid grid-cols-2 gap-3">
            <div v-for="stat in stats" :key="stat.label" class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">{{ stat.label }}</dt>
              <dd class="mt-2 text-2xl font-bold">{{ stat.value }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
        <p class="text-sm font-semibold uppercase text-cyan-600">Positionnement</p>
        <h2 class="mt-3 text-3xl font-bold text-blue-950">Un profil à l'intersection du code et de la formation.</h2>
        <p class="mt-5 leading-7 text-slate-600">
          Mon travail relie conception d'applications, pilotage pédagogique et analyse des usages. L'objectif : créer des environnements numériques fiables, compréhensibles et réellement utiles aux équipes comme aux étudiants.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span v-for="tag in tags" :key="tag" class="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <article
          v-for="focus in focusAreas"
          :key="focus.title"
          class="group rounded-lg border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/5 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-900/10"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 text-cyan-200 transition group-hover:bg-cyan-500 group-hover:text-white">
            <component :is="focus.icon" class="h-6 w-6" />
          </div>
          <h3 class="mt-5 text-lg font-semibold text-blue-950">{{ focus.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ focus.description }}</p>
        </article>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="rounded-lg bg-blue-950 p-7 text-white shadow-xl shadow-blue-950/15">
        <p class="text-sm font-semibold uppercase text-cyan-200">Développement web</p>
        <h2 class="mt-3 text-3xl font-bold">Des applications métiers pensées avec les utilisateurs.</h2>
        <p class="mt-5 leading-7 text-blue-100">
          Mon profil hybride me permet de comprendre les besoins de terrain, de cadrer les usages, puis de livrer des interfaces robustes. J'interviens particulièrement sur des outils internes, plateformes pédagogiques, exports de données et applications Symfony/Vue.
        </p>
        <div class="mt-7 grid gap-3 sm:grid-cols-2">
          <div v-for="service in services" :key="service.title" class="rounded-lg border border-white/15 bg-white/10 p-4">
            <component :is="service.icon" class="h-6 w-6 text-cyan-200" />
            <h3 class="mt-3 font-semibold">{{ service.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-blue-100">{{ service.description }}</p>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
        <p class="text-sm font-semibold uppercase text-cyan-600">Disponible pour</p>
        <h2 class="mt-3 text-3xl font-bold text-blue-950">Missions de conseil, conception et développement.</h2>
        <div class="mt-6 space-y-4">
          <div v-for="mission in missionTypes" :key="mission" class="flex gap-3">
            <CheckCircleIcon class="mt-0.5 h-5 w-5 flex-none text-cyan-600" />
            <p class="leading-7 text-slate-600">{{ mission }}</p>
          </div>
        </div>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/realisations" class="inline-flex items-center justify-center rounded-full bg-blue-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
            Réalisations web
            <ArrowRightIcon class="ml-2 h-4 w-4" />
          </NuxtLink>
          <a
            href="https://github.com/Dannebicque"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50"
          >
            GitHub
            <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <section class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-600">Portfolio</p>
          <h2 class="mt-2 text-3xl font-bold text-blue-950">Quelques réalisations représentatives</h2>
        </div>
        <NuxtLink to="/realisations" class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-950">
          Tout le portfolio
          <ArrowRightIcon class="ml-2 h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="mt-7 grid gap-5 md:grid-cols-3">
        <article
          v-for="project in featuredProjects"
          :key="project.title"
          class="rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg"
        >
          <p class="text-sm font-semibold uppercase text-cyan-700">{{ project.type }}</p>
          <h3 class="mt-4 text-xl font-semibold text-blue-950">{{ project.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ project.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <section class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-600">Actualités</p>
          <h2 class="mt-2 text-3xl font-bold text-blue-950">En ce moment</h2>
        </div>
        <NuxtLink to="/cv" class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-950">
          Parcours complet
          <ArrowRightIcon class="ml-2 h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="mt-7 grid gap-5 md:grid-cols-2">
        <article
          v-for="news in newsItems"
          :key="news.title"
          class="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
        >
          <div class="flex items-center justify-between gap-4">
            <span class="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">{{ news.year }}</span>
            <component :is="news.icon" class="h-6 w-6 text-blue-700" />
          </div>
          <h3 class="mt-5 text-xl font-semibold text-blue-950">{{ news.title }}</h3>
          <p class="mt-3 leading-7 text-slate-600">{{ news.description }}</p>
        </article>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-3">
      <article
        v-for="research in researchAreas"
        :key="research.title"
        class="rounded-lg bg-blue-950 p-7 text-white shadow-xl shadow-blue-950/15"
      >
        <p class="text-sm font-semibold uppercase text-cyan-200">{{ research.kicker }}</p>
        <h2 class="mt-4 text-2xl font-bold">{{ research.title }}</h2>
        <p class="mt-4 leading-7 text-blue-100">{{ research.description }}</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'

const stats = [
  { label: 'Ancrage', value: 'IUT' },
  { label: 'Formation', value: 'BUT MMI' },
  { label: 'Stack', value: 'Web' },
  { label: 'Approche', value: 'Data' }
]

const tags = ['Symfony', 'Vue.js', 'Learning analytics', 'BUT MMI', 'Innovation pédagogique']

const services = [
  {
    title: 'Applications métiers',
    description: 'Interfaces sur mesure pour piloter des processus internes, formations, données et workflows.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Architecture pragmatique',
    description: 'Choix techniques lisibles, maintenables et adaptés aux contraintes réelles des équipes.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Modernisation',
    description: 'Refonte progressive, amélioration UX, nettoyage fonctionnel et montée en qualité.',
    icon: RocketLaunchIcon
  },
  {
    title: 'Données et exports',
    description: 'Tableaux de bord, exports, automatisations et valorisation des données pédagogiques.',
    icon: ChartBarSquareIcon
  }
]

const missionTypes = [
  "Cadrage fonctionnel et technique d'un outil web métier.",
  "Développement Symfony, Vue.js, Nuxt ou intégration d'API.",
  "Audit, reprise ou modernisation d'une application existante.",
  "Conception d'interfaces pour des équipes pédagogiques ou administratives."
]

const featuredProjects = [
  {
    type: 'Gestion pédagogique',
    title: 'INTRANET',
    description: "Application de suivi pédagogique pour départements d'IUT : étudiants, notes, absences et accompagnement.",
    stack: ['Symfony', 'Vue.js', 'UX métier']
  },
  {
    type: 'Offre de formation',
    title: 'ORéOF',
    description: "Plateforme de création et publication d'offres de formation pour l'enseignement supérieur.",
    stack: ['Workflow', 'Données', 'Web app']
  },
  {
    type: 'Outil pédagogique',
    title: 'WWC',
    description: "Jeu de gestion d'entreprise en ligne pour mettre les étudiants en situation de décision.",
    stack: ['Simulation', 'Pédagogie', 'Interface']
  }
]

const focusAreas = [
  {
    title: 'Enseigner',
    description: 'Transmettre les fondamentaux du développement web avec des situations concrètes et progressives.',
    icon: AcademicCapIcon
  },
  {
    title: 'Construire',
    description: 'Développer des outils métiers pour simplifier le suivi, les formations et les usages pédagogiques.',
    icon: CodeBracketSquareIcon
  },
  {
    title: 'Mesurer',
    description: "Analyser les traces d'apprentissage pour mieux comprendre les parcours et accompagner les étudiants.",
    icon: ChartBarSquareIcon
  }
]

const newsItems = [
  {
    year: '2021',
    title: 'Directeur adjoint de l\'IUT de Troyes',
    description: "Responsable de la pédagogie, de l'innovation numérique et du développement d'outils au service des formations et des équipes.",
    icon: PresentationChartLineIcon
  },
  {
    year: '2023',
    title: "Développement d'ORéOF",
    description: "Plateforme de création et publication d'offres de formation pour l'enseignement supérieur.",
    icon: CpuChipIcon
  }
]

const researchAreas = [
  {
    kicker: 'Recherche',
    title: 'Learning Analytics',
    description: "Analyse des données d'apprentissage pour améliorer le suivi, l'accompagnement et la compréhension des trajectoires étudiantes."
  },
  {
    kicker: 'Pédagogie',
    title: 'Innovation pédagogique',
    description: "Expérimentation d'approches, d'outils et de dispositifs favorisant l'autonomie, la progression et la réussite."
  },
  {
    kicker: 'Développement',
    title: 'Applications web',
    description: "Création d'applications modernes, robustes et maintenables au service des formations et des établissements."
  }
]

useSeoMeta({
  title: 'Accueil',
  description: "David Annebicque, enseignant-chercheur à l'IUT de Troyes et développeur web Symfony, Vue et Nuxt. Portfolio, missions de développement, enseignements et recherche.",
  ogTitle: 'David Annebicque · Enseignant-chercheur et développeur web',
  ogDescription: "Portfolio et site personnel de David Annebicque : applications web, pédagogie, learning analytics et projets pour l'enseignement supérieur.",
  ogUrl: 'https://davidannebicque.fr/',
  twitterTitle: 'David Annebicque · Enseignant-chercheur et développeur web',
  twitterDescription: "Portfolio, enseignements, publications et réalisations web autour de Symfony, Vue, Nuxt et de l'innovation pédagogique."
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://davidannebicque.fr/' }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>
