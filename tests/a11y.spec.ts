import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = ['/', '/realisations/', '/enseignements/', '/publications/', '/cv/', '/contact/', '/merci/', '/mentions-legales/', '/accessibilite/']

for (const scheme of ['light', 'dark'] as const) {
  test.describe(`axe WCAG 2.2 AA · thème ${scheme}`, () => {
    test.use({ colorScheme: scheme })
    for (const route of routes) {
      test(route, async ({ page }) => {
        await page.goto(route)
        await page.evaluate(() => document.fonts.ready)
        const { violations } = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
          .analyze()
        expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`)).toEqual([])
      })
    }
  })
}
