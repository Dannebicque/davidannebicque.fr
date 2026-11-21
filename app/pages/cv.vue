<template>
  <div class="space-y-20 sm:space-y-28 print:space-y-8">
    <PageHero eyebrow="Curriculum vitae" title="Parcours académique, responsabilités et expertise web.">
      Un parcours construit entre enseignement supérieur, pilotage pédagogique, recherche sur les traces d'apprentissage
      et développement d'applications web.
      <template #extra>
        <p class="print:hidden">
          <a href="/david-annebicque-cv.pdf" download class="btn btn-ghost">
            <ArrowDownTrayIcon class="h-5 w-5" aria-hidden="true" />
            Télécharger le CV (PDF)
          </a>
        </p>
      </template>
    </PageHero>

    <section aria-labelledby="exp-title">
      <SectionHeading id="exp-title" eyebrow="Expérience" title="Postes et responsabilités" />
      <ol class="mt-10 space-y-12 border-l-2 border-line pl-6 sm:pl-10">
        <li v-for="e in experiences.experiences" :key="e.periode" class="relative">
          <span class="absolute -left-[calc(1.5rem+7px)] top-1.5 h-3 w-3 rounded-full bg-surface sm:-left-[calc(2.5rem+7px)]" aria-hidden="true"></span>
          <p class="eyebrow">{{ e.periode }}</p>
          <h3 class="mt-2 text-2xl font-bold">{{ e.poste }}</h3>
          <p class="text-muted">{{ e.etablissement }}</p>
          <ul v-if="e.responsabilites?.length" class="mt-5 max-w-2xl">
            <li
              v-for="r in e.responsabilites"
              :key="r.titre"
              class="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span class="font-medium">{{ r.titre }}</span>
              <span class="font-mono text-sm text-muted">{{ r.periode }}</span>
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section aria-labelledby="comp-title">
      <SectionHeading id="comp-title" eyebrow="Compétences" title="Domaines d'expertise" />
      <div class="mt-10 grid gap-10 md:grid-cols-3">
        <article v-for="cat in competences.categories" :key="cat.nom">
          <h3 class="text-xl font-bold">{{ cat.nom }}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li v-for="c in cat.competences" :key="c" class="tag">{{ c }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section aria-labelledby="form-title">
      <SectionHeading id="form-title" eyebrow="Formation" title="Parcours universitaire" />
      <ol class="mt-8 border-t border-line">
        <li
          v-for="f in formations.formations"
          :key="f.annee"
          class="grid gap-x-8 gap-y-1 border-b border-line py-6 md:grid-cols-[6rem_minmax(0,1fr)]"
        >
          <p class="font-mono text-sm text-muted">{{ f.annee }}</p>
          <div>
            <h3 class="text-xl font-bold">{{ f.titre }}</h3>
            <p class="text-muted">{{ f.etablissement }}</p>
            <p v-if="f.description" class="mt-1 text-sm text-muted">{{ f.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section aria-labelledby="liens-title">
      <h2 id="liens-title" class="text-2xl font-bold">Me retrouver en ligne</h2>
      <ul class="mt-5 flex flex-wrap gap-3">
        <li v-for="l in social.links" :key="l.url">
          <ExtLink :href="l.url" class="btn btn-ghost">{{ l.name }}</ExtLink>
        </li>
      </ul>
    </section>

    <ContactBand />
  </div>
</template>

<script setup lang="ts">
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import competences from '~/data/cv/competences.json'
import experiences from '~/data/cv/experience.json'
import formations from '~/data/cv/formation.json'
import social from '~/data/cv/social.json'

usePageSeo({
  title: 'CV',
  description: "Curriculum vitae de David Annebicque : maître de conférences, responsabilités pédagogiques, compétences en développement web et parcours académique.",
  path: '/cv'
})
</script>
