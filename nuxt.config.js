export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Color Patterns CRUD',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.result.access_token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 300
        },
        endpoints: {
          login: { url: '/api/admin/login_json', method: 'post' },
          logout: false,
          user: false
        },
        redirect: {
          login: '/login',
          logout: '/login',
          home: '/',
        },
        watchLoggedIn: true,
        rewriteRedirects: true,
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  axios: {
    baseURL: 'https://sys-dev.searchandstay.com'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  loading: '~/components/Loading.vue',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
