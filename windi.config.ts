import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import '@windicss/plugin-question-mark'
import '@windicss/plugin-interaction-variants'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  plugins: [
    typography(),
    require('@windicss/plugin-question-mark'),
    require('@windicss/plugin-interaction-variants'),
    scrollSnapPlugin,
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 0,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },

    },
  },

})
