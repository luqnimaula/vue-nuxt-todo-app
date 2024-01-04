import axios from "axios"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const api = axios.create({
    baseURL: config.public.BASE_API,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })

  return {
    provide: {
      api: api
    }
  }
})