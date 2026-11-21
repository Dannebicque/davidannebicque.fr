export const site = {
  name: 'David Annebicque',
  role: 'Enseignant-chercheur · Développeur web',
  url: 'https://davidannebicque.fr',
  // À renseigner : l'adresse affichée dans le footer et sur la page contact.
  email: '',
  linkedin: 'https://www.linkedin.com/in/davidannebicque/',
  github: 'https://github.com/Dannebicque',
  avatar: 'https://avatars.githubusercontent.com/u/9027047?v=4'
}

export const navigation = [
  { text: 'Accueil', to: '/' },
  { text: 'Réalisations', to: '/realisations' },
  { text: 'Enseignements', to: '/enseignements' },
  { text: 'Publications', to: '/publications' },
  { text: 'CV', to: '/cv' }
]

export const contactHref = site.email ? `mailto:${site.email}` : site.linkedin
