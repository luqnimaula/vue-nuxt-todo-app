<template>
  <button 
    type="button"
    :class="`todo-button ${colorClass} ${sizeClass}`"
    :disabled="disabled"
  >
    button
  </button>
</template>
<script>
const buttonColorClasses = {
  primary: 'todo-button-primary',
}

const buttonSizeClasses = {
  sm: 'todo-button-small',
  md: 'todo-button-medium',
  lg: 'todo-button-large'
}

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'md'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    colorClass() {
      return buttonColorClasses?.[this.color] || ''
    },
    sizeClass() {
      return buttonSizeClasses?.[this.size] || ''
    }
  }
}
</script>
