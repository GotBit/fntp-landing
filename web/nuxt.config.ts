// https://nuxt.com/docs/api/configuration/nuxt-config
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      },
    },
  },
  app: {
    head: {
      title: 'FNTP',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'mask-icon',
          href: '/favicon.svg',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'msapplication-TileColor', content: '#121629' },
        { name: 'theme-color', content: '#ffffff' },

        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'FNTP' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-font-loader', 'nuxt-svgo'],
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    '@': __dirname,
  },
  fontLoader: {
    local: [
      {
        src: '/fonts/Switzer-Regular.woff2',
        family: 'Switzer-Regular',
        weight: '400',
        class: 'swit',
      },
      {
        src: '/fonts/Switzer-Medium.woff2',
        family: 'Switzer-Medium',
        weight: '500',
        class: 'swit-md',
      },
      {
        src: '/fonts/Switzer-Semibold.woff2',
        family: 'Switzer-Semibold',
        weight: '600',
        class: 'swit-sm',
      },
    ],
  },
  svgo: {
    defaultImport: 'component',
  },
  vite: {
    resolve: {
      alias: {
        process: 'process/browser',
        util: 'util',
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
        define: {
          global: 'globalThis',
        },
        plugins: [
          //@ts-ignore
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true,
          }),
          //@ts-ignore
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
  },
})
