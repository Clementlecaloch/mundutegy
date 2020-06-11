
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nat & Gil - Mundutegy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "css/reset.css",
    "css/main.css",
    "aos/dist/aos.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~/plugins/aos", ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment',
  ],
  moment: {
    locales: ['fr'],
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/apollo',
  ],
  markdownit: {
    injected: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://afternoon-river-68648.herokuapp.com/graphql'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['aos']
  }
}
