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
  async fetchTodos({ commit }, _this) {
    try {
      commit('setLoading', true)
      const { data } = await _this.$api.get('/todos', { params: {userId: getUserID()} })
      commit('setTodoList', data)
    } catch (error) {
      alert(error)
    } finally {
      commit('setLoading', false)
    }
  },
  async createTodo({ commit }, {_this, payload}) {
    try {
      const { data } = await _this.$api.post('/todos', {
        title: payload.title,
        completed: false,
        userId: getUserID()
      })
      commit('insertTodo', data)
      return data
    } catch (error) {
      alert(error)
      throw error
    }
  },
  async markTodoCompleted({ commit }, {_this, payload}) {
    try {
      const { data } = await _this.$api.patch(`/todos/${payload.id}`, {
        completed: payload.completed
      })
      commit('updateTodo', {
        id: payload.id,
        completed: payload.completed
      })
      return data
    } catch (error) {
      alert(error)
      throw error
    }
  },
  async deleteTodo({ commit }, {_this, id}) {
    try {
      await _this.$api.delete(`/todos/${id}`)
      commit('removeTodo', id)
      return true
    } catch (error) {
      alert(error)
      throw error
    }
  }
}

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },
  setTodoList(state, payload) {
    state.data = payload
  },
  insertTodo(state, payload) {
    state.data.unshift(payload)
  },
  updateTodo(state, payload) {
    state.data = state.data.map(record => 
      record.id === payload.id ? ({ ...record, ...payload }) : record
    )
  },
  removeTodo(state, id) {
    state.data = state.data.filter(record => record.id !== id)
  }
}