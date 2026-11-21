// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/sitemap'],
  site: { url: 'https://davidannebicque.fr', name: 'David Annebicque' },
  sitemap: { exclude: ['/merci'] },
  nitro: { prerender: { routes: ['/'], crawlLinks: true } },
  tailwindcss: { cssPath: '~/assets/css/main.css' },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
    classSuffix: '',
    storageKey: 'theme'
  },
  app: {
    head: {
      title: 'David Annebicque',
      titleTemplate: '%s · David Annebicque',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "Enseignant-chercheur, développeur web Symfony, Vue et Nuxt. Portfolio, enseignements, publications et projets numériques pour l'enseignement supérieur."
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'David Annebicque' },
        { name: 'theme-color', content: '#FAF9FD', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0F0D18', media: '(prefers-color-scheme: dark)' },
        { property: 'og:site_name', content: 'David Annebicque' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: 'https://davidannebicque.fr/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://davidannebicque.fr/og.png' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  typescript: { strict: true }
})
