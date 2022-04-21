<template>
  <component :is="tag" class="kt-base-btn pl-20 pr-20" :class="classes" @click="emits('onClick')">
    <slot>Button</slot>
  </component>
</template>

<script setup>
import { defineEmits, defineProps, computed } from 'vue';

// Emits
const emits = defineEmits(['onClick'])

// Props
const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    validator: function (value) {
      return ['sm', 'md', 'lg'].indexOf(value) !== -1;
    },
  },
})

// Computed
const classes = computed(() => ({
  [props.type]: true,
  [props.size || 'md']: true
}))
</script>

<style lang="scss" scoped>
.kt-base-btn {
  display: flex;
  align-items: center;
  background-color: #EEE;
  color: #000;
  border: 0;
  border-radius: var(--br);

  // State
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #DDD;
  }
  &:focus {
    background-color: #EEE;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  // Size
  &.sm {
    height: 32px;
  }
  &.md {
    height: 40px;
  }
  &.lg {
    height: 46px;
  }

  // Style
  &.primary {
    background-color: red;
  }
  &.secondary {
    background-color: blue;
  }
  &.outline {
    background-color: #FFF;
    border: var(--b1);
  }
}
</style>
