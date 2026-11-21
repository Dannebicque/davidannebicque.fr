// Génère public/david-annebicque-cv.pdf à partir de la page /cv servie localement.
// Usage : npx serve .output/public -l 3101  puis  CV_URL=http://localhost:3101/cv/ npm run cv:pdf
import { chromium } from 'playwright'

const url = process.env.CV_URL ?? 'http://localhost:3101/cv/'
const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle' })
await page.emulateMedia({ media: 'print', colorScheme: 'light' })
await page.pdf({
  path: 'public/david-annebicque-cv.pdf',
  format: 'A4',
  margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' },
  printBackground: true,
  tagged: true,
  outline: true
})
await browser.close()
console.log('PDF généré : public/david-annebicque-cv.pdf')
