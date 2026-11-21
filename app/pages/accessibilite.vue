<template>
  <div>
    <PageHero eyebrow="Accessibilité" title="Déclaration d'accessibilité">
      L'accessibilité fait partie de mon métier, je l'applique donc à ce site. Voici où nous en sommes, sans enjoliver.
    </PageHero>
    <div class="prose-page max-w-prose">
      <h2>État de conformité</h2>
      <p>
        Ce site n'a pas fait l'objet d'un audit RGAA complet par un tiers : son niveau de conformité n'est donc pas
        déclaré. Il est conçu pour viser le niveau AA des WCAG 2.2.
      </p>

      <h2>Ce qui est en place</h2>
      <ul>
        <li>Lien d'évitement « Aller au contenu » et structure de titres hiérarchisée sur chaque page.</li>
        <li>Navigation entièrement utilisable au clavier, avec focus visible. Le menu mobile piège le focus et se ferme avec la touche Échap.</li>
        <li>Contrastes de texte d'au moins 4,5:1 en thème clair comme en thème sombre ; le thème suit les préférences du système.</li>
        <li>Animations réduites ou supprimées si votre système le demande.</li>
        <li>Liens externes signalés aux lecteurs d'écran, cibles tactiles d'au moins 44 pixels.</li>
        <li>Formulaires avec étiquettes explicites et champs obligatoires indiqués.</li>
      </ul>

      <h2>Comment ce site est vérifié</h2>
      <p>
        Contrôles automatisés avec axe-core sur toutes les pages, dans les deux thèmes, et tests au clavier, relancés à chaque modification du code. Ces outils ne
        détectent qu'une partie des problèmes : un test avec lecteur d'écran et un audit manuel complet restent à faire.
      </p>

      <h2>Limites connues</h2>
      <ul>
        <li>La liste des publications provient de l'archive ouverte HAL, dont les métadonnées sont de qualité variable.</li>
        <li>Le CV au format PDF est généré depuis la page web ; sa structure est balisée mais n'a pas été auditée.</li>
        <li>Les supports de cours et dépôts externes ne relèvent pas de ce site.</li>
      </ul>

      <h2>Signaler un problème</h2>
      <p>
        Une difficulté d'accès à un contenu ? Écrivez-moi à <a :href="`mailto:${site.email}`">{{ site.email }}</a> ou via le
        <NuxtLink to="/contact">formulaire de contact</NuxtLink>, en indiquant la page concernée et votre outil. Je réponds
        sous quelques jours.
      </p>
      <p>
        Sans réponse satisfaisante, vous pouvez saisir le
        <ExtLink href="https://formulaire.defenseurdesdroits.fr">Défenseur des droits</ExtLink>.
      </p>
      <p class="text-sm">Déclaration établie en novembre 2026.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/data/site'

usePageSeo({
  title: 'Accessibilité',
  description: "Déclaration d'accessibilité du site de David Annebicque : mesures en place, méthode de vérification, limites connues et contact.",
  path: '/accessibilite'
})
</script>
