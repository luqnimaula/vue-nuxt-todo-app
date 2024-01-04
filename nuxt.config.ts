// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  css: [
    "~/styles/main.scss",
  ],
  plugins: [
    "~/plugins/axios.js",
    "~/plugins/vuex.js"
  ],
  runtimeConfig:{
    public: {
      BASE_API: process.env.BASE_API,
      USER_ID: process.env.USER_ID
    }
  },
  app: {
    head: {
      title: 'Nuxt Todo App',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
