import { createStore } from "vuex"
import * as todoStore from './todo'

export default createStore({
  modules: {
    todo: {
      namespaced: true,
      ...todoStore
    }
  }
})