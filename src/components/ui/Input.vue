<template>
  <input 
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="`todo-input`"
  />
</template>
<script>

export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
