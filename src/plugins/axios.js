import axios from "axios"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const api = axios.create({
    baseURL: config.public.BASE_API,
  })

  return {
    provide: {
      api: api
    }
  }
})