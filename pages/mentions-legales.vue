<template>
  <div>
    <PageHero eyebrow="Informations légales" title="Mentions légales" />
    <div class="prose-page max-w-prose">
      <h2>Éditeur du site</h2>
      <p>
        {{ site.name }}, personne physique, maître de conférences à l'IUT de Troyes (Université de Reims Champagne-Ardenne).
        Directeur de la publication : {{ site.name }}.<br />
        Contact : <a :href="`mailto:${site.email}`">{{ site.email }}</a>
      </p>
      <p>
        Les opinions exprimées sur ce site sont personnelles et n'engagent pas l'Université de Reims Champagne-Ardenne.
      </p>

      <h2>Hébergement</h2>
      <p>
        Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis.
        <ExtLink href="https://www.netlify.com">netlify.com</ExtLink>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes et visuels de ce site sont la propriété de leur auteur, sauf mention contraire. Les projets présentés
        sont publiés sous les licences indiquées dans leurs dépôts GitHub. Le code du site est disponible sur
        <ExtLink :href="`${site.github}/davidannebicque.fr`">GitHub</ExtLink>.
      </p>

      <h2 id="donnees">Données personnelles</h2>
      <p>
        Le seul traitement de données personnelles est le formulaire de contact. Les informations saisies (nom, adresse
        e-mail, sujet, message) sont utilisées uniquement pour répondre à votre demande, sur la base de votre
        consentement. Elles sont transmises par Netlify Forms, qui les stocke pour le compte de l'éditeur, et conservées
        au plus 12 mois après le dernier échange.
      </p>
      <p>
        Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>. En cas de difficulté, vous pouvez saisir la
        <ExtLink href="https://www.cnil.fr/fr/plaintes">CNIL</ExtLink>.
      </p>

      <h2>Cookies et mesure d'audience</h2>
      <p>
        Ce site n'utilise ni cookie, ni outil de mesure d'audience, ni service tiers de suivi. Votre choix de thème
        (clair ou sombre) est conservé dans le stockage local de votre navigateur, uniquement pour cet usage. Les polices
        sont hébergées sur le site lui-même.
      </p>

      <h2>Liens externes</h2>
      <p>
        Ce site renvoie vers des sites tiers (GitHub, LinkedIn, HAL, ResearchGate). Leur contenu et leurs pratiques ne
        relèvent pas de la responsabilité de l'éditeur.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/data/site'

usePageSeo({
  title: 'Mentions légales',
  description: 'Mentions légales du site de David Annebicque : éditeur, hébergement, données personnelles et cookies.',
  path: '/mentions-legales'
})
</script>
