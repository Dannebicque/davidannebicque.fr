<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <slot />
    <ArrowUpRightIcon class="ml-1 inline h-4 w-4 align-[-2px]" aria-hidden="true" />
    <span class="sr-only"> (s'ouvre dans un nouvel onglet)</span>
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
defineProps<{ href: string }>()
</script>
