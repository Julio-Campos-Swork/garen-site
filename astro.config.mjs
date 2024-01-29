import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), vue(), icon()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
