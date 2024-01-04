<template>
  <div class="todo-container">
    <div class="todo-card">
      <div class="todo-header">
        Todo App
      </div>
      <form class="todo-form">
        <todo-input placeholder="Add a new todo"/>
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
  methods: {
    ...mapActions({
      fetchTodos: 'todo/fetchTodos'
    })
  },
  computed: {
    ...mapGetters({
      todoList: 'todo/todoList'
    })
  }
}
</script>