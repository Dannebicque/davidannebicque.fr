<template>
  <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <component :is="level" :id="id" class="mt-2 text-3xl font-bold sm:text-4xl">{{ title }}</component>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string; eyebrow?: string; level?: 'h1' | 'h2' | 'h3'; id?: string }>(), { level: 'h2' })
</script>
