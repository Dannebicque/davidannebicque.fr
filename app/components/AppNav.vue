<template>
  <header class="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur print:hidden">
    <div class="container-page flex h-16 items-center justify-between gap-4">
      <NuxtLink to="/" class="group flex items-center gap-3 font-display text-lg font-bold" aria-label="David Annebicque, accueil">
        <span class="h-7 w-7 -rotate-6 rounded-lg bg-surface transition motion-safe:group-hover:rotate-6" aria-hidden="true"></span>
        <span>David Annebicque</span>
      </NuxtLink>

      <nav aria-label="Principal" class="hidden lg:block">
        <ul class="flex items-center gap-1">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="nav-link rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-muted hover:text-fg"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <NuxtLink to="/contact" class="btn btn-primary hidden min-h-[44px]! py-1.5! lg:inline-flex">Contact</NuxtLink>
        <ThemeToggle />
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg hover:border-fg lg:hidden"
          aria-haspopup="dialog"
          :aria-expanded="open"
          @click="open = true"
        >
          <span class="sr-only">Ouvrir le menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>

    <Dialog :open="open" class="relative z-50 lg:hidden" @close="open = false">
      <div class="fixed inset-0 bg-fg/40" aria-hidden="true"></div>
      <DialogPanel class="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col gap-8 bg-bg p-6 shadow-2xl">
        <div class="flex items-center justify-between">
          <DialogTitle class="font-display text-lg font-bold">Menu</DialogTitle>
          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line hover:border-fg"
            @click="open = false"
          >
            <span class="sr-only">Fermer le menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Principal (mobile)">
          <ul class="flex flex-col">
            <li v-for="item in navigation" :key="item.to" class="border-b border-line">
              <NuxtLink :to="item.to" class="nav-link-mobile block py-4 font-display text-2xl font-bold" @click="open = false">
                {{ item.text }}
              </NuxtLink>
            </li>
            <li class="border-b border-line">
              <NuxtLink to="/contact" class="nav-link-mobile block py-4 font-display text-2xl font-bold" @click="open = false">Contact</NuxtLink>
            </li>
          </ul>
        </nav>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { navigation } from '~/data/site'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>
