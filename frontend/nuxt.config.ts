export default defineNuxtConfig({
  modules: ["@ant-design-vue/nuxt"],
  antd: {
    extractStyle: true,
  },
  css: ["ant-design-vue/dist/reset.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
