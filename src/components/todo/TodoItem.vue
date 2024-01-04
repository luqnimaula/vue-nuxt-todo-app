<template>
  <div class="todo-item">
    <todo-checkbox 
      :id="`task-${data.id}`"
      :label="data.title"
      :checked="data.completed"
    />
    <todo-button-icon
      type="button"
      size="sm"
    >
      <img 
        alt=""
        src="~/assets/icons/trash.svg"
      />
    </todo-button-icon>
  </div>
</template>
<script>
import TodoCheckbox from '~/components/ui/Checkbox.vue'
import TodoButtonIcon from '~/components/ui/ButtonIcon.vue'
export default {
  name: 'TodoItem',
  components: {
    TodoCheckbox,
    TodoButtonIcon
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
