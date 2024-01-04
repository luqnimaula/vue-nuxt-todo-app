<template>
  <input 
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    class="todo-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
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
    },
    modelValue: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
