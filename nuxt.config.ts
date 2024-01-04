// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  css: [
    "~/styles/main.scss",
  ],
  plugins: [
    "~/plugins/axios.js",
  ],
  runtimeConfig:{
    public: {
      BASE_API: process.env.BASE_API
    }
  }
})
