// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'David Annebicque',
      titleTemplate: '%s · David Annebicque',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "Enseignant-chercheur, développeur web Symfony, Vue et Nuxt. Portfolio, enseignements, publications et projets numériques pour l'enseignement supérieur."
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'David Annebicque' },
        { name: 'theme-color', content: '#172554' },
        { property: 'og:site_name', content: 'David Annebicque' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/9027047?v=4' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:image', content: 'https://avatars.githubusercontent.com/u/9027047?v=4' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://davidannebicque.fr/' }
      ]
    }
  },
  typescript: {
    strict: true
  }
})
