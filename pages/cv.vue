<template>
  <div class="space-y-10">
    <section class="relative overflow-hidden rounded-lg bg-blue-950 text-white shadow-2xl shadow-blue-950/20">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(30,64,175,0.9)_55%,_rgba(13,148,136,0.65))]"></div>
      <div class="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
        <div>
          <p class="text-sm font-semibold uppercase text-cyan-200">Curriculum Vitae</p>
          <h1 class="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Parcours académique, responsabilités et expertise web.
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Un parcours construit entre enseignement supérieur, pilotage pédagogique, recherche sur les traces d'apprentissage et développement d'applications web pour des besoins métiers.
          </p>
        </div>

        <aside class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
          <p class="font-semibold">Repères</p>
          <dl class="mt-5 grid grid-cols-2 gap-3">
            <div v-for="item in highlights" :key="item.label" class="rounded-lg bg-white/10 p-4">
              <dt class="text-sm text-blue-100">{{ item.label }}</dt>
              <dd class="mt-2 text-xl font-bold">{{ item.value }}</dd>
            </div>
          </dl>
          <div class="mt-5 flex flex-wrap gap-3">
            <a
              v-for="link in social.links"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {{ link.name }}
              <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
        <div class="flex items-center gap-3">
          <BriefcaseIcon class="h-8 w-8 text-cyan-600" />
          <div>
            <p class="text-sm font-semibold uppercase text-cyan-600">Expériences</p>
            <h2 class="text-3xl font-bold text-blue-950">Responsabilités et postes</h2>
          </div>
        </div>

        <div class="mt-8 space-y-7">
          <article
            v-for="experience in experiences.experiences"
            :key="experience.periode"
            class="relative border-l border-blue-200 pl-6"
          >
            <div class="absolute -left-2 top-1 h-4 w-4 rounded-full bg-cyan-500 ring-4 ring-cyan-100"></div>
            <p class="text-sm font-semibold text-cyan-700">{{ experience.periode }}</p>
            <h3 class="mt-2 text-xl font-bold text-blue-950">{{ experience.poste }}</h3>
            <p class="mt-1 leading-7 text-slate-600">{{ experience.etablissement }}</p>

            <div v-if="experience.responsabilites?.length" class="mt-4 grid gap-3">
              <div
                v-for="responsabilite in experience.responsabilites"
                :key="responsabilite.titre"
                class="rounded-lg bg-slate-50 p-4"
              >
                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p class="font-medium text-slate-700">{{ responsabilite.titre }}</p>
                  <span class="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {{ responsabilite.periode }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="space-y-6">
        <section class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
          <div class="flex items-center gap-3">
            <CodeBracketSquareIcon class="h-8 w-8 text-cyan-600" />
            <div>
              <p class="text-sm font-semibold uppercase text-cyan-600">Compétences</p>
              <h2 class="text-3xl font-bold text-blue-950">Domaines d'expertise</h2>
            </div>
          </div>

          <div class="mt-7 grid gap-4">
            <article
              v-for="categorie in competences.categories"
              :key="categorie.nom"
              class="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h3 class="font-semibold text-blue-950">{{ categorie.nom }}</h3>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="competence in categorie.competences"
                  :key="competence"
                  class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                >
                  {{ competence }}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section class="rounded-lg border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
          <div class="flex items-center gap-3">
            <AcademicCapIcon class="h-8 w-8 text-cyan-600" />
            <div>
              <p class="text-sm font-semibold uppercase text-cyan-600">Formation</p>
              <h2 class="text-3xl font-bold text-blue-950">Parcours</h2>
            </div>
          </div>

          <div class="mt-7 space-y-5">
            <article
              v-for="formation in formations.formations"
              :key="formation.annee"
              class="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5"
            >
              <p class="text-sm font-semibold text-cyan-700">{{ formation.annee }}</p>
              <h3 class="mt-2 font-semibold text-blue-950">{{ formation.titre }}</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ formation.etablissement }}</p>
              <p v-if="formation.description" class="mt-2 text-sm leading-6 text-slate-500">
                {{ formation.description }}
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  CodeBracketSquareIcon
} from '@heroicons/vue/24/outline'
import competences from '~/data/cv/competences.json'
import experiences from '~/data/cv/experience.json'
import formations from '~/data/cv/formation.json'
import social from '~/data/cv/social.json'

const highlights = [
  { label: 'Depuis', value: '2011' },
  { label: 'Poste', value: 'MCF' },
  { label: 'Terrain', value: 'IUT' },
  { label: 'Expertise', value: 'Web' }
]

useSeoMeta({
  title: 'CV',
  description: "Curriculum vitae de David Annebicque : enseignant-chercheur, maître de conférences, responsabilités pédagogiques, compétences en développement web et parcours académique.",
  ogTitle: 'CV · David Annebicque',
  ogDescription: "Parcours académique, responsabilités, compétences techniques et profil d'enseignant-chercheur développeur web.",
  ogUrl: 'https://davidannebicque.fr/cv',
  twitterTitle: 'CV · David Annebicque',
  twitterDescription: "Parcours, responsabilités pédagogiques et expertise web de David Annebicque."
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://davidannebicque.fr/cv' }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>
