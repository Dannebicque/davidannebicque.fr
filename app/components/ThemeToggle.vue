<template>
  <ClientOnly>
    <button
      type="button"
      class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg hover:border-fg"
      :aria-pressed="isDark"
      @click="toggle"
    >
      <span class="sr-only">Thème sombre</span>
      <MoonIcon v-if="!isDark" class="h-5 w-5" aria-hidden="true" />
      <SunIcon v-else class="h-5 w-5" aria-hidden="true" />
    </button>
    <template #fallback>
      <span class="inline-block h-11 w-11" aria-hidden="true"></span>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggle = () => { colorMode.preference = isDark.value ? 'light' : 'dark' }
</script>
