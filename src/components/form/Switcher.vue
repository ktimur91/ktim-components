<template>
  <div class="form-switcher flex ai-c ggap-10">
    <input type="checkbox" :name="`form-switcher-${uid}`" :id="`form-switcher-${uid}`">
    <label :for="`form-switcher-${uid}`">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { getCurrentInstance, defineProps } from "vue";

// Props
const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  }
})

// Data
const uid = getCurrentInstance().uid
</script>

<style lang="scss" scoped>
.form-switcher {}
</style>
