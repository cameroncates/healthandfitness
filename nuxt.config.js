
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: 'Health And Fitness',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Revenue Computation Generator' }
    ],
    script: [
      { src: "/custom.js"},
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"},
      { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"},
      { src: "https://unpkg.com/aos@2.3.1/dist/aos.js"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", rel: "stylesheet"},
      { href:"https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css", rel: "stylesheet"},
      { href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css", rel: "stylesheet"},
      { href:"https://fonts.gstatic.com", rel: "preconnect"},
      { href:"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap", rel: "stylesheet"},
      { href:"https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap", rel: "stylesheet"},
      { href:"https://unpkg.com/aos@2.3.1/dist/aos.css", rel: "stylesheet"},
      
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [      
    '~assets/style.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/helpers.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  router: {
    middleware: ["authenticated"]
  }, 
  /*
   ** Nuxt.js modules
   */
  modules: [
    // [
    //   "@nuxtjs/firebase",
    //   {
    //     config: {

        
    //     },
    //     services: {
    //       auth: true, // Just as example. Can be any other service.
    //       realtimeDb: true,
    //       storage: true
    //     }
    //   }
    // ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
