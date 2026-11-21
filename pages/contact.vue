<template>
  <div class="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
    <PageHero eyebrow="Contact" title="Parlons de votre projet.">
      Outil métier, audit d'accessibilité, modernisation d'une application Symfony ou Vue, intervention en formation :
      décrivez votre besoin, je réponds en général sous quelques jours.
      <template #extra>
        <p class="mt-8 text-base">
          Vous préférez écrire directement ?<br />
          <a class="link font-mono text-base" :href="`mailto:${site.email}`">{{ site.email }}</a>
        </p>
      </template>
    </PageHero>

    <!-- Formulaire géré par Netlify Forms : détecté au build grâce à data-netlify et au champ form-name. -->
    <form
      name="contact"
      method="POST"
      action="/merci"
      data-netlify="true"
      netlify-honeypot="champ-piege"
      class="space-y-6 rounded-3xl border border-line bg-panel p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Ne pas remplir si vous êtes humain : <input name="champ-piege" tabindex="-1" autocomplete="off" /></label>
      </p>

      <p class="text-sm text-muted">Les champs marqués d'un astérisque (<span aria-hidden="true">*</span><span class="sr-only">étoile</span>) sont obligatoires.</p>

      <div>
        <label for="nom" class="font-semibold">Nom <span aria-hidden="true">*</span></label>
        <input id="nom" name="nom" type="text" required autocomplete="name" class="field" />
      </div>

      <div>
        <label for="email" class="font-semibold">Adresse e-mail <span aria-hidden="true">*</span></label>
        <input id="email" name="email" type="email" required autocomplete="email" class="field" />
      </div>

      <div>
        <label for="sujet" class="font-semibold">Sujet</label>
        <select id="sujet" name="sujet" class="field">
          <option>Mission de développement</option>
          <option>Audit ou modernisation</option>
          <option>Accessibilité numérique</option>
          <option>Enseignement ou intervention</option>
          <option>Collaboration open source</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label for="message" class="font-semibold">Message <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows="6" required minlength="20" class="field" aria-describedby="message-aide"></textarea>
        <p id="message-aide" class="mt-1 text-sm text-muted">Contexte, contraintes, échéance : 20 caractères minimum.</p>
      </div>

      <p class="text-sm text-muted">
        Vos données servent uniquement à répondre à votre message. Détails dans les
        <NuxtLink to="/mentions-legales#donnees">mentions légales</NuxtLink>.
      </p>

      <button type="submit" class="btn btn-primary">Envoyer le message</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/data/site'

usePageSeo({
  title: 'Contact',
  description: "Contacter David Annebicque pour une mission de développement web, un audit d'accessibilité, une modernisation d'application ou une intervention en formation.",
  path: '/contact'
})
</script>
