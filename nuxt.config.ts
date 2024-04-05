export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      title: "Tiat Social",
      script: [],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
      ],
    },
    baseURL: process.env.NODE_ENV === 'production' ? "/about-us/" : "",
    buildAssetsDir: process.env.NODE_ENV === 'production' ? "assets" : "",
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ["ant-design-vue/dist/reset.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devServer: {
    // host: "",
    port: 3001,
  },

  typescript: {
    shim: false,
  },

  modules: ["@ant-design-vue/nuxt", "@vueuse/nuxt", "@nuxt/image", '@nuxtjs/color-mode', '@pinia/nuxt'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  antd: {
    extractStyle: true,
  },

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      // apiBase:
      //   process.env.NODE_ENV === "production"
      //     ? process.env.API_BASE_PRODUCT
      //     : process.env.API_BASE,
      // apiBase: "http://192.168.1.40:4000",
    },
  },
});
