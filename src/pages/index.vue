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
        >
          Add
        </todo-button>
      </form>
      <div class="todo-list">
        <todo-item 
          v-for="todo in todoList"
          :key="todo.id"
          :data="todo"
          @delete="onDeleteTodo"
          @change="onCheckTodo"
        />
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
      if (value) {
        await this.createTodo({
          _this: this,
          payload: { title: value }
        })
        this.title = ''
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
      todoList: 'todo/todoList'
    })
  }
}
</script>