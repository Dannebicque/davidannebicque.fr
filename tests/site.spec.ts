import { expect, test, type Page } from '@playwright/test'

/** Attend la fin de l'hydratation Nuxt : la page statique est affichée avant que Vue réagisse aux événements. */
const hydrated = (page: Page) =>
  page.waitForFunction(() => (window as unknown as { useNuxtApp?: () => { isHydrating: boolean } }).useNuxtApp?.().isHydrating === false)

const pages = ['/', '/realisations/', '/enseignements/', '/publications/', '/cv/', '/contact/', '/mentions-legales/', '/accessibilite/']

test.describe('structure et SEO de chaque page', () => {
  for (const route of pages) {
    test(route, async ({ page }) => {
      await page.goto(route)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
      await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', /^https:\/\/davidannebicque\.fr\//)
      await expect(page.locator('meta[name=description]').first()).toHaveAttribute('content', /.{40,}/)
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://davidannebicque.fr/og.png')
      await expect(page.locator('main#main')).toHaveCount(1)
    })
  }
})

test('le lien d\'évitement est le premier élément focalisable et mène au contenu', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skip = page.getByRole('link', { name: 'Aller au contenu' })
  await expect(skip).toBeFocused()
  await expect(skip).toBeVisible()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#main$/)
})

test('la navigation signale la page courante', async ({ page }) => {
  await page.goto('/realisations/')
  await expect(page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: 'Réalisations' })).toHaveAttribute('aria-current', 'page')
})

test.describe('menu mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('piège le focus, se ferme avec Échap et rend le focus au bouton', async ({ page }) => {
    await page.goto('/')
    await hydrated(page)
    const opener = page.getByRole('button', { name: 'Ouvrir le menu' })
    await opener.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog.getByRole('navigation', { name: 'Principal (mobile)' })).toBeVisible()
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab')
      expect(await page.evaluate(() => !!document.activeElement?.closest('[role=dialog]'))).toBe(true)
    }
    await page.keyboard.press('Escape')
    await expect(dialog).toHaveCount(0)
    await expect(opener).toBeFocused()
  })

  test('aucun défilement horizontal', async ({ page }) => {
    for (const route of pages) {
      await page.goto(route)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    }
  })
})

test('le thème sombre se bascule et persiste', async ({ page }) => {
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Thème sombre' })
  await expect(toggle).toHaveAttribute('aria-pressed', 'false')
  await toggle.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
})

test('les filtres des réalisations sont utilisables au clavier', async ({ page }) => {
  await page.goto('/realisations/')
  await hydrated(page)
  const status = page.getByRole('status')
  await expect(status).toContainText('16 projets')
  await page.getByRole('radio', { name: /Sites/ }).focus()
  await page.keyboard.press('Space')
  await expect(status).toContainText('3 projets')
})

test('les filtres des enseignements réduisent la liste', async ({ page }) => {
  await page.goto('/enseignements/')
  await hydrated(page)
  await page.locator('label', { hasText: 'S3' }).click()
  await expect(page.getByRole('status')).toContainText('2 cours')
  await page.getByLabel('Rechercher').fill('introuvable')
  await expect(page.getByText('Aucun cours ne correspond')).toBeVisible()
})

test('le formulaire de contact est déclaré pour Netlify avec un antispam', async ({ page }) => {
  await page.goto('/contact/')
  const form = page.locator('form[name=contact]')
  await expect(form).toHaveAttribute('data-netlify', 'true')
  await expect(form).toHaveAttribute('netlify-honeypot', 'champ-piege')
  await expect(form.locator('input[name=form-name]')).toHaveValue('contact')
  for (const name of ['nom', 'email', 'message']) await expect(form.locator(`[name=${name}]`)).toHaveAttribute('required', '')
  await expect(page.getByLabel(/Nom/)).toHaveAttribute('autocomplete', 'name')
})

test('la page 404 renvoie le bon statut', async ({ page }) => {
  const response = await page.goto('/cette-page-nexiste-pas/')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('sitemap, robots et ressources statiques', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const p of ['/cv', '/contact', '/realisations', '/accessibilite']) expect(sitemap).toContain(`https://davidannebicque.fr${p}`)
  expect(sitemap).not.toContain('/merci')
  expect((await request.get('/robots.txt')).ok()).toBe(true)
  for (const f of ['/og.png', '/david-annebicque-cv.pdf', '/images/portrait.png']) {
    expect((await request.get(f)).ok(), f).toBe(true)
  }
})
