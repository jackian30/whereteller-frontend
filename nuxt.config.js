export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "whereteller-frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "./plugins/echo", mode: "client" }
  ],
  // echo: {
  //   authModule: true,
  //   connectOnLogin: false,
  //   disconnectOnLogout: true,
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // "nuxt-vite",

    // "@nuxtjs/laravel-echo",
    // [
    //   "@nuxtjs/laravel-echo",
    //   {
    //     broadcaster: "pusher",
    //     key: "local",
    //     wsHost: "localhost",
    //     wsPort: 6001,
    //     encrypted: true,
    //     forceTLS: false,
    //     disableStats: true,
    //     // authEndpoint: "http://localhost/broadcasting/auth",
    //   },
    // ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/auth-next",
  ],

  auth: {
    // plugins: [{ src: "./plugins/echo", mode: "client" }],
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/",
    },
    watchLoggedIn: true,
    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: "http://localhost",
        endpoints: {
          login: {
            url: "/api/login",
          },
          logout: {
            url: "/api/logout",
          },
        },
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        codeChallengeMethod: "",
        responseType: "code",
        endpoints: {
          token: process.env.GOOGLE_AUTH_CALLBACK,
          userInfo: process.env.AUTH_API_USERINFO,
        },
      },
      facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID,
        codeChallengeMethod: "",
        responseType: "code",
        endpoints: {
          token: process.env.FACEBOOK_AUTH_CALLBACK,
          userInfo: process.env.AUTH_API_USERINFO,
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseURL: "http://localhost/api",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
