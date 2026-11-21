<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main"
      class="sr-only z-[100] rounded-full bg-surface px-5 py-3 font-semibold text-on focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Aller au contenu
    </a>
    <AppNav />
    <main id="main" tabindex="-1" class="container-page flex-1 py-10 sm:py-14 focus:outline-none">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
