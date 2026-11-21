# davidannebicque.fr

Site personnel de David Annebicque : vitrine, réalisations, enseignements, publications et contact.

**Stack** : Nuxt 4 (statique), Tailwind CSS 4, Headless UI, polices auto-hébergées (Fontsource), hébergé sur Netlify.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # build statique dans .output/public
```

## Structure

- `app/data/site.ts` : nom, e-mail, liens, navigation
- `app/data/projects.json` : projets (ceux marqués `featured` apparaissent sur l'accueil)
- `app/data/cv/`, `app/data/enseignements/` : contenu du CV et des cours
- `app/assets/css/main.css` : configuration Tailwind 4 (`@theme`), tokens de design (couleurs clair/sombre) et composants
- `server/api/publications.get.ts` : publications récupérées depuis HAL au build
- `app/composables/usePageSeo.ts` : meta, canonical et Open Graph de chaque page

## CV en PDF

`public/david-annebicque-cv.pdf` est généré depuis la page `/cv` (feuille de style d'impression, PDF balisé).
Après une modification du CV : `npm run generate`, servir `.output/public`, puis `npm run cv:pdf` (nécessite Playwright).

## Formulaire de contact

Le formulaire de `/contact` est géré par Netlify Forms (détecté au build). Activer les notifications e-mail dans
*Netlify → Forms → Form notifications*.

## Déploiement (Netlify)

La configuration est dans `netlify.toml` (`npm run generate`, publication de `.output/public`).
Les publications HAL sont figées au moment du build : relancer un déploiement les met à jour.

## Qualité

```bash
npm run lint          # ESLint (@nuxt/eslint)
npm run typecheck     # vue-tsc
npm run generate      # build statique
npm test              # Playwright : axe WCAG 2.2 AA (clair + sombre), clavier, SEO, formulaire Netlify
npm run lighthouse    # Lighthouse CI : perf >= 90, a11y 100, bonnes pratiques >= 90, SEO >= 95
```

La CI GitHub Actions (`.github/workflows/ci.yml`) enchaîne ces étapes. Playwright demande
`npx playwright install chromium` en local (ou `PW_CHROMIUM_PATH` vers un Chromium existant).
Dependabot propose les mises à jour chaque semaine.
Tests manuels au lecteur d'écran : [docs/tests-lecteur-ecran.md](docs/tests-lecteur-ecran.md).

## Accessibilité

Lien d'évitement, navigation clavier, focus visible, contrastes WCAG AA dans les deux thèmes,
`prefers-reduced-motion` respecté.
