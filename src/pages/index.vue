<template>
  <div class="todo-container">
    <div class="todo-card">
      <div class="todo-header">
        Todo App
      </div>
      <form 
        class="todo-form"
        @submit.prevent="onSubmit"
      >
        <todo-input 
          placeholder="Add a new todo"
          v-model="title"
          required
        />
        <todo-button 
          type="submit"
          color="primary"
          size="md"
          :disabled="submitting"
        >
          {{ submitting ? 'Adding...' : 'Add' }}
        </todo-button>
      </form>
      <div class="todo-list">
        <template v-if="isLoading">
          <div class="todo-list-loading-container">
            <span>Loading...</span>
          </div>
        </template>
        <template v-else>
          <todo-item 
            v-for="todo in todoList"
            :key="todo.id"
            :data="todo"
            @delete="onDeleteTodo"
            @change="onCheckTodo"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import TodoButton from '~/components/ui/Button.vue'
import TodoInput from '~/components/ui/Input.vue'
import TodoItem from '~/components/todo/TodoItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    TodoButton,
    TodoInput,
    TodoItem
  },
  mounted() {
    this.fetchTodos(this)
  },
  data() {
    return {
      submitting: false,
      title: ''
    }
  },
  methods: {
    ...mapActions({
      fetchTodos: 'todo/fetchTodos',
      createTodo: 'todo/createTodo',
      deleteTodo: 'todo/deleteTodo',
      markTodoCompleted: 'todo/markTodoCompleted'
    }),
    async onSubmit() {
      const value = this.title.trim()
      if (value && !this.submitting) {
        try {
          this.submitting = true
          await this.createTodo({
            _this: this,
            payload: { title: value }
          })
          this.title = ''
        } finally {
          this.submitting = false
        }
      }
    },
    onCheckTodo(e) {
      const { value, checked } = e?.target ?? {}
      if (value) this.markTodoCompleted({
        _this: this,
        payload: {
          id: parseInt(value),
          completed: !!checked
        }
      })
    },
    onDeleteTodo(id) {
      this.deleteTodo({ _this: this, id })
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'todo/isLoading',
      todoList: 'todo/todoList'
    })
  }
}
</script>