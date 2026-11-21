export const site = {
  name: 'David Annebicque',
  role: 'Enseignant-chercheur · Développeur web',
  url: 'https://davidannebicque.fr',
  email: 'contact@davidannebicque.fr',
  linkedin: 'https://www.linkedin.com/in/davidannebicque/',
  github: 'https://github.com/Dannebicque',
  avatar: '/images/portrait.png'
}

export const navigation = [
  { text: 'Accueil', to: '/' },
  { text: 'Réalisations', to: '/realisations' },
  { text: 'Enseignements', to: '/enseignements' },
  { text: 'Publications', to: '/publications' },
  { text: 'CV', to: '/cv' }
]

export const contactHref = site.email ? `mailto:${site.email}` : site.linkedin
