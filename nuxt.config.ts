// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4
  },

  ssr: true,
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    dataValue: 'theme'
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true
  },

  app: {
    head: {
      title: 'KT-Learn - 前端学习路径',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tailwind CSS 及前端技术系统学习路径教程' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+SC:wght@300;400;500;600;700;900&family=Cinzel:wght@400;500;600;700;800;900&display=swap' 
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/themes.css',
    '~/assets/css/animations.css'
  ],

  typescript: {
    strict: true,
    typeCheck: true
  },

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  experimental: {
    viewTransition: true
  }
})
