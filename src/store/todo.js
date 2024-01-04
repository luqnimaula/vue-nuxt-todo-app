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

const getUserID = () => useRuntimeConfig().public.USER_ID

export const actions = {
  async fetchTodos({ state }, _this) {
    try {
      state.loading = true
      const { data } = await _this.$api.get('/todos', { params: {userId: getUserID()} })
      state.data = data
    } catch (error) {
      alert(error)
    } finally {
      state.loading = false
    }
  },
  async createTodo({ state }, {_this, payload}) {
    try {
      const { data } = await _this.$api.post('/todos', {
        title: payload.title,
        completed: false,
        userId: getUserID()
      })
      state.data.unshift(data)
      return data
    } catch (error) {
      alert(error)
      throw error
    }
  },
  async deleteTodo({ state }, {_this, id}) {
    try {
      await _this.$api.delete(`/todos/${id}`)
      state.data = state.data.filter(record => record.id !== id)
      return true
    } catch (error) {
      alert(error)
      throw error
    }
  }
}