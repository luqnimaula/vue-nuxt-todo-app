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
          v-for="task in todoList"
          :key="task.id"
          :data="task"
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
      createTodo: 'todo/createTodo'
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
    }
  },
  computed: {
    ...mapGetters({
      todoList: 'todo/todoList'
    })
  }
}
</script>