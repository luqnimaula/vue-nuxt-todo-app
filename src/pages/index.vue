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
    </div>
  </div>
</template>
<script>
import TodoButton from '~/components/ui/Button.vue'
import TodoInput from '~/components/ui/Input.vue'

export default {
  name: 'HomePage',
  components: {
    TodoButton,
    TodoInput
  }
}
</script>