// Serveur statique minimal pour .output/public (tests et aperçu local), sans dépendance.
// Reproduit le comportement de Netlify : /cv -> /cv/index.html, sinon 404.html avec statut 404.
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { brotliCompressSync, gzipSync } from 'node:zlib'

const root = join(process.cwd(), '.output/public')
const port = Number(process.env.PORT ?? 3101)
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.xml': 'application/xml', '.png': 'image/png', '.ico': 'image/x-icon', '.pdf': 'application/pdf',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.xsl': 'text/xsl'
}

// Mêmes règles de cache que netlify.toml
const cacheFor = (p, status) => {
  if (status !== 200) return 'no-cache'
  if (p.startsWith('/_nuxt/')) return 'public, max-age=31536000, immutable'
  if (p.startsWith('/images/') || /\.(png|ico|pdf|woff2)$/.test(p)) return 'public, max-age=2592000'
  return 'public, max-age=0, must-revalidate'
}

const isFile = async (p) => (await stat(p).catch(() => null))?.isFile() ?? false

createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname)
  const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
  const candidates = [join(root, safe), join(root, safe, 'index.html')]
  let file = null
  for (const c of candidates) if (c.startsWith(root) && (await isFile(c))) { file = c; break }
  const status = file ? 200 : 404
  file ??= join(root, '404.html')
  try {
    let body = await readFile(file)
    const type = types[extname(file)] ?? 'application/octet-stream'
    const headers = { 'content-type': type, 'cache-control': cacheFor(safe, status) }
    // Compression des textes, comme le CDN de Netlify
    if (/^(text\/|application\/(json|xml)|image\/svg)/.test(type)) {
      const accept = String(req.headers['accept-encoding'] ?? '')
      if (accept.includes('br')) { body = brotliCompressSync(body); headers['content-encoding'] = 'br' }
      else if (accept.includes('gzip')) { body = gzipSync(body); headers['content-encoding'] = 'gzip' }
      headers.vary = 'Accept-Encoding'
    }
    res.writeHead(status, headers)
    res.end(body)
  } catch {
    res.writeHead(500).end('Build manquant : lancer npm run generate')
  }
}).listen(port, () => console.log(`Serveur statique sur http://localhost:${port}`))
