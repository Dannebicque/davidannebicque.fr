<template>
  <section
    id="contact"
    aria-labelledby="contact-title"
    class="flex flex-col gap-8 rounded-[2rem] bg-surface p-8 text-on sm:p-12 lg:flex-row lg:items-center lg:justify-between"
  >
    <div class="max-w-xl space-y-3">
      <h2 id="contact-title" class="text-3xl font-extrabold sm:text-5xl">Un projet, une question, une mission ?</h2>
      <p class="text-lg">
        Outil métier, audit d'accessibilité, modernisation d'une application Symfony ou Vue : parlons-en.
      </p>
      <p class="font-mono text-sm">{{ site.email }}</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <a
        :href="`mailto:${site.email}`"
        class="inline-flex min-h-[44px] items-center justify-center rounded-full bg-on px-6 py-3 font-bold text-surface hover:opacity-90"
      >
        Écrire un e-mail
      </a>
      <ExtLink
        :href="site.linkedin"
        class="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-on px-6 py-3 font-bold hover:bg-on/10"
      >
        LinkedIn
      </ExtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { site } from '~/data/site'
</script>
