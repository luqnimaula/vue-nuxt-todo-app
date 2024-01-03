<template>
  <button 
    :type="type"
    :class="`todo-button-icon ${colorClass} ${sizeClass}`"
    :disabled="disabled"
  >
    <slot/>
  </button>
</template>
<script>
const buttonColorClasses = {
  primary: 'todo-button-icon-primary',
}

const buttonSizeClasses = {
  sm: 'todo-button-icon-small',
  md: 'todo-button-icon-medium',
  lg: 'todo-button-icon-large'
}

export default {
  name: 'ButtonIcon',
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
