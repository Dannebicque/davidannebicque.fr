<template>
  <article class="grid gap-x-8 gap-y-3 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] md:items-baseline">
    <div>
      <h3 class="text-2xl font-bold">{{ project.title }}</h3>
      <p class="eyebrow mt-1">{{ project.category }}</p>
      <p v-if="project.status" class="mt-2">
        <span class="inline-flex items-center gap-1.5 rounded-full border border-fg px-2.5 py-0.5 text-xs font-semibold">
          <span class="h-1.5 w-1.5 rounded-full bg-surface" aria-hidden="true"></span>
          <span class="sr-only">Statut : </span>{{ project.status }}
        </span>
      </p>
    </div>
    <div>
      <p class="text-muted">{{ project.description }}</p>
      <ul class="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
        <li v-for="t in project.stack" :key="t" class="tag">{{ t }}</li>
      </ul>
    </div>
    <ul class="flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:items-end md:gap-y-1">
      <li v-if="project.site">
        <ExtLink :href="project.site" class="link whitespace-nowrap">
          {{ project.siteLabel || 'Voir le site' }}<span class="sr-only"> de {{ project.title }}</span>
        </ExtLink>
      </li>
      <li>
        <ExtLink :href="project.url" class="link whitespace-nowrap">
          Code source<span class="sr-only"> de {{ project.title }}</span>
        </ExtLink>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
export interface Project {
  title: string
  kind: string
  category: string
  description: string
  stack: string[]
  url: string
  site?: string
  siteLabel?: string
  status?: string
  featured?: boolean
}
defineProps<{ project: Project }>()
</script>
