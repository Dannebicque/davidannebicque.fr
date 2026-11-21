<template>
  <article class="group grid gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] md:items-baseline">
    <div>
      <h3 class="text-2xl font-bold">{{ project.title }}</h3>
      <p class="eyebrow mt-1">{{ project.category }}</p>
    </div>
    <div>
      <p class="text-muted">{{ project.description }}</p>
      <ul class="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
        <li v-for="t in project.stack" :key="t" class="tag">{{ t }}</li>
      </ul>
    </div>
    <ExtLink :href="project.url" class="link whitespace-nowrap md:justify-self-end">
      Code source<span class="sr-only"> de {{ project.title }}</span>
    </ExtLink>
  </article>
</template>

<script setup lang="ts">
export interface Project {
  title: string
  category: string
  description: string
  stack: string[]
  url: string
  featured?: boolean
}
defineProps<{ project: Project }>()
</script>
