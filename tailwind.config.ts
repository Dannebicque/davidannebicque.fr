import type { Config } from 'tailwindcss'

const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`

export default <Partial<Config>>{
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        panel: token('panel'),
        fg: token('fg'),
        muted: token('muted'),
        line: token('line'),
        accent: token('accent'), // liens et texte coloré (violet)
        surface: token('surface'), // fonds d'action (corail)
        on: token('on'), // texte posé sur surface
        hi: token('hi') // surligneur
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      maxWidth: { page: '72rem', prose: '62ch' }
    }
  }
}
