export default {
  mode: 'universal',  // universal is for SSR mode , spa is normal vue js mode
  /*
   ** Headers of the page
   */
  head: {
    title: "Product Module",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: "Product Module"
      }

    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Raleway&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [

    '~assets/styles/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [

  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/bootstrap-vue',
    '@nuxtjs/moment',
    ['@nuxtjs/moment', {
      tdefaultLocale: 'en',
      locales: ['en']
    }]
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://5e44419a3dfe6c001421f667.mockapi.io/vivense/product/',
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },


}
