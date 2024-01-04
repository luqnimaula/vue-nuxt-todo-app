export const state = () => ({
  loading: false,
  data: []
})

export const getters = {
  isLoading(state) {
    return state.loading
  },
  todoList(state) {
    return state.data
  }
}

export const actions = {
  async fetchTodos({ state }, instance) {
    try {
      state.loading = true
      const { data } = await instance.$api.get('/todos')
      state.data = data
    } catch (error) {
      alert(error)
    } finally {
      state.loading = false
    }
  }
}