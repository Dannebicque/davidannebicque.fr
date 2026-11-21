<template>
  <header class="max-w-4xl space-y-6 pb-12 sm:pb-16">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1 class="text-4xl font-extrabold leading-[1.05] sm:text-6xl">
      <slot name="title">{{ title }}</slot>
    </h1>
    <p v-if="$slots.default" class="max-w-prose text-lg text-muted"><slot /></p>
  </header>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string; title?: string }>()
</script>
