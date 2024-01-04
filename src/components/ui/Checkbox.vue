<template>
  <div :class="`todo-checkbox ${disabled ? 'disabled' : ''}`">
    <input 
      type="checkbox"
      :id="id"
      :value="value"
      :checked="checked"
      @change="$emit('change')"
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
    value: {
      type: String,
      required: false,
      default: undefined
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
