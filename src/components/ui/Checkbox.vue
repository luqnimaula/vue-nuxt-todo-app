<template>
  <div :class="`todo-checkbox ${disabled ? 'disabled' : ''}`">
    <input 
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="emit('change')"
    />
    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>
<script>

export default {
  name: 'Checkbox',
  props: {
    id: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
