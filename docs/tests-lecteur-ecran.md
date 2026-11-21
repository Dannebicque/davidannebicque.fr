# Tests manuels : lecteur d'écran et clavier

Les contrôles automatisés (axe, Playwright, Lighthouse) ne couvrent qu'une partie des critères. À refaire à la main
avant une évolution majeure, avec **NVDA + Firefox** (Windows), **VoiceOver + Safari** (macOS et iOS) et **TalkBack**
(Android).

## Sur chaque page

- [ ] Le titre de page est annoncé, puis le lien d'évitement au premier `Tab`.
- [ ] La liste des repères (landmarks) contient banner, navigation (×2 avec le pied de page), main, contentinfo.
- [ ] La liste des titres est cohérente : un seul `h1`, pas de saut de niveau.
- [ ] Les liens externes annoncent « s'ouvre dans un nouvel onglet » ; les liens « Code source » citent le projet.
- [ ] Le zoom à 200 % et 400 % ne cache aucune information et ne crée pas de défilement horizontal.

## Parcours spécifiques

- **Menu mobile** : ouverture, annonce du dialogue « Menu », focus prisonnier, fermeture avec Échap, retour du focus.
- **Thème** : le bouton annonce son état « activé / désactivé ».
- **Réalisations** : changer de filtre annonce le nombre de projets affichés.
- **Enseignements** : cocher un diplôme ou un semestre met à jour le compteur ; « Réinitialiser » est atteignable.
- **Contact** : chaque champ annonce son étiquette, son caractère obligatoire et l'aide du message ; l'envoi mène à la page « Merci ».
- **Publications** : navigation par titres d'année, puis par liens.
- **CV (PDF)** : ouvrir avec Acrobat Reader ou NVDA, vérifier l'ordre de lecture et les titres.

## Réglages système à essayer

- Réduire les animations, thème sombre, contraste renforcé (Windows), texte agrandi.
