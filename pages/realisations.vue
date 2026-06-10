<template>
  <div class="space-y-10">
    <section class="relative overflow-hidden rounded-lg bg-blue-950 text-white shadow-2xl shadow-blue-950/20">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(30,64,175,0.9)_55%,_rgba(13,148,136,0.65))]"></div>
      <div class="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-200">Portfolio web</p>
          <h1 class="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Des outils numériques construits pour des usages réels.
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Mes réalisations couvrent des applications métiers, plateformes pédagogiques, outils de gestion et briques techniques. Elles partagent une même intention : rendre des processus complexes plus fiables, lisibles et agréables à utiliser.
          </p>
        </div>

        <div class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <p class="font-semibold">Mon approche développeur</p>
          <div class="mt-5 grid gap-3">
            <div v-for="point in approach" :key="point.title" class="rounded-lg bg-white/10 p-4">
              <div class="flex items-start gap-3">
                <component :is="point.icon" class="mt-0.5 h-5 w-5 flex-none text-cyan-200" />
                <div>
                  <h2 class="font-semibold">{{ point.title }}</h2>
                  <p class="mt-1 text-sm leading-6 text-blue-100">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-5 md:grid-cols-3">
      <article
        v-for="service in services"
        :key="service.title"
        class="rounded-lg border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/5"
      >
        <component :is="service.icon" class="h-8 w-8 text-cyan-600" />
        <h2 class="mt-4 text-xl font-semibold text-blue-950">{{ service.title }}</h2>
        <p class="mt-3 leading-7 text-slate-600">{{ service.description }}</p>
      </article>
    </section>

    <section class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-600">Projets</p>
          <h2 class="mt-2 text-3xl font-bold text-blue-950">Réalisations sélectionnées</h2>
        </div>
        <a
          href="https://github.com/Dannebicque"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-950"
        >
          Voir GitHub
          <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
        </a>
      </div>

      <div class="mt-7 grid gap-6 lg:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group flex min-h-full flex-col rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-900/10"
        >
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase text-cyan-700">{{ project.category }}</p>
              <h3 class="mt-2 text-2xl font-bold text-blue-950">{{ project.title }}</h3>
            </div>
            <span class="w-fit rounded-full bg-blue-950 px-3 py-1 text-sm font-semibold text-white">
              {{ project.scope }}
            </span>
          </div>

          <p class="mt-5 leading-7 text-slate-600">{{ project.description }}</p>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-blue-950">Rôle</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ project.role }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-blue-950">Apport</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ project.impact }}</p>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-auto pt-6">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-950"
            >
              Voir le projet
              <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </article>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-lg bg-blue-950 p-7 text-white shadow-xl shadow-blue-950/15">
        <p class="text-sm font-semibold uppercase text-cyan-200">Missions possibles</p>
        <h2 class="mt-3 text-3xl font-bold">Besoin d'un regard technique et métier ?</h2>
        <p class="mt-5 leading-7 text-blue-100">
          Je peux intervenir sur le cadrage, la conception, le développement, l'audit ou la modernisation d'applications web, avec une attention particulière portée aux usages et à la maintenabilité.
        </p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.linkedin.com/in/davidannebicque/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-cyan-50"
          >
            Me contacter
            <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
          </a>
          <NuxtLink to="/cv" class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir mon parcours
          </NuxtLink>
        </div>
      </div>

      <div class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
        <p class="text-sm font-semibold uppercase text-cyan-600">Compétences mobilisées</p>
        <div class="mt-5 grid gap-3 sm:grid-cols-2">
          <div v-for="skill in skills" :key="skill" class="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
            <CheckCircleIcon class="h-5 w-5 flex-none text-cyan-600" />
            <span class="font-medium text-slate-700">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowTopRightOnSquareIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'

interface Project {
  title: string
  category: string
  scope: string
  description: string
  role: string
  impact: string
  stack: string[]
  url: string
}

const approach = [
  {
    title: 'Comprendre avant de coder',
    description: 'Le cadrage métier, les contraintes et les utilisateurs guident les choix techniques.',
    icon: ClipboardDocumentCheckIcon
  },
  {
    title: 'Livrer utile',
    description: 'Je privilégie les fonctionnalités qui simplifient réellement le quotidien des équipes.',
    icon: PresentationChartLineIcon
  },
  {
    title: 'Construire durable',
    description: 'Architecture lisible, code maintenable et trajectoire de modernisation progressive.',
    icon: WrenchScrewdriverIcon
  }
]

const services = [
  {
    title: 'Applications métiers',
    description: 'Outils internes, gestion pédagogique, workflows administratifs et plateformes de suivi.',
    icon: CodeBracketSquareIcon
  },
  {
    title: 'Données et automatisation',
    description: 'Exports, tableaux de bord, exploitation de traces, synchronisations et consolidation de données.',
    icon: ChartBarSquareIcon
  },
  {
    title: 'Conseil et modernisation',
    description: "Audit d'existant, refonte UX, amélioration de la qualité et accompagnement technique.",
    icon: CpuChipIcon
  }
]

const projects: Project[] = [
  {
    title: 'INTRANET',
    category: 'Gestion pédagogique',
    scope: 'Application métier',
    description: "Application web de gestion pédagogique pour les départements d'IUT : étudiants, notes, absences, suivi pédagogique et organisation quotidienne.",
    role: 'Conception fonctionnelle, architecture applicative et développement Symfony/Vue.',
    impact: "Centralisation des données pédagogiques et simplification du suivi pour les équipes d'enseignement.",
    stack: ['Symfony', 'Vue.js', 'API', 'Gestion pédagogique'],
    url: 'https://github.com/Dannebicque/intranetV3'
  },
  {
    title: 'ORéOF',
    category: 'Offres de formation',
    scope: 'Plateforme',
    description: "Application de gestion des offres de formation pour les établissements d'enseignement supérieur, de la création à la publication.",
    role: 'Contribution à la structuration des processus, modélisation des données et interfaces de gestion.',
    impact: 'Meilleure cohérence des offres, traçabilité des validations et publication plus maîtrisée.',
    stack: ['Workflow', 'Données', 'Enseignement supérieur', 'Interface admin'],
    url: 'https://github.com/OReOF-URCA/oreof'
  },
  {
    title: 'redigeTonBut',
    category: 'Collaboration pédagogique',
    scope: 'Outil collaboratif',
    description: 'Plateforme collaborative pour accompagner la rédaction des programmes nationaux du BUT.',
    role: 'Conception de parcours de contribution, organisation des contenus et développement web.',
    impact: 'Travail collectif facilité, contenus mieux structurés et coordination plus fluide.',
    stack: ['Collaboration', 'BUT', 'UX', 'Web app'],
    url: 'https://github.com/Dannebicque/redigeTonBut'
  },
  {
    title: 'WWC - World Wide Company',
    category: 'Simulation pédagogique',
    scope: 'Jeu sérieux',
    description: "Jeu de gestion d'entreprise en ligne pour placer les étudiants dans des situations de décision économiques, marketing et opérationnelles.",
    role: 'Conception du moteur pédagogique, des écrans de jeu et des interactions de suivi.',
    impact: "Apprentissage actif, mise en situation et meilleure compréhension des arbitrages d'entreprise.",
    stack: ['Simulation', 'Pédagogie', 'Interface', 'Données'],
    url: 'https://github.com/Dannebicque/wwc'
  },
  {
    title: 'HtmlToSpreadsheet',
    category: 'Productivité développeur',
    scope: 'Bundle Symfony',
    description: "Outil de conversion de données HTML/Twig vers des feuilles de calcul pour faciliter l'export de données structurées.",
    role: "Création d'une brique réutilisable pour accélérer les besoins d'exports dans des applications Symfony.",
    impact: 'Exports plus rapides à produire, logique mutualisée et intégration naturelle aux vues existantes.',
    stack: ['Symfony', 'Twig', 'Excel', 'Bundle'],
    url: 'https://github.com/Dannebicque/htmlToSpreadsheet'
  },
  {
    title: 'UniEdt',
    category: 'Planification',
    scope: 'Application métier',
    description: 'Application de gestion des emplois du temps pour établissements, avec contraintes, services et organisation prévisionnelle.',
    role: 'Modélisation métier, développement des fonctionnalités et prise en compte des contraintes de planification.',
    impact: 'Vision plus claire des charges, des disponibilités et de la construction des emplois du temps.',
    stack: ['Planification', 'Contraintes', 'Web app', 'Gestion'],
    url: 'https://github.com/Dannebicque/uniEdt'
  }
]

const skills = [
  'Symfony et architecture applicative',
  'Vue.js, Nuxt et interfaces réactives',
  'Modélisation métier et workflows',
  'Exports, API et traitement de données',
  'UX pour outils internes',
  'Contexte enseignement supérieur'
]

useSeoMeta({
  title: 'Réalisations web',
  description: 'Portfolio de réalisations web : applications métiers, plateformes pédagogiques, outils Symfony, Vue, Nuxt et projets numériques pour l’enseignement supérieur.',
  ogTitle: 'Réalisations web · David Annebicque',
  ogDescription: 'Applications métiers, outils pédagogiques, plateformes web et projets de développement réalisés par David Annebicque.',
  ogUrl: 'https://davidannebicque.fr/realisations',
  twitterTitle: 'Réalisations web · David Annebicque',
  twitterDescription: 'Portfolio de projets web Symfony, Vue, Nuxt, outils métiers et plateformes pédagogiques.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://davidannebicque.fr/realisations' }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>
