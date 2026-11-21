# davidannebicque.fr

Site personnel de David Annebicque : vitrine, réalisations, enseignements, publications et contact.

**Stack** : Nuxt 3 (statique), Tailwind CSS, headless UI, polices auto-hébergées (Fontsource), hébergé sur Netlify.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # build statique dans .output/public
```

## Structure

- `data/site.ts` : nom, e-mail, liens, navigation
- `data/projects.json` : projets (ceux marqués `featured` apparaissent sur l'accueil)
- `data/cv/`, `data/enseignements/` : contenu du CV et des cours
- `assets/css/main.css` : tokens de design (couleurs clair/sombre) et composants utilitaires
- `server/api/publications.get.ts` : publications récupérées depuis HAL au build
- `composables/usePageSeo.ts` : meta, canonical et Open Graph de chaque page

## Déploiement (Netlify)

La configuration est dans `netlify.toml` (`npm run generate`, publication de `.output/public`).
Les publications HAL sont figées au moment du build : relancer un déploiement les met à jour.

## Accessibilité

Lien d'évitement, navigation clavier, focus visible, contrastes WCAG AA dans les deux thèmes,
`prefers-reduced-motion` respecté.
