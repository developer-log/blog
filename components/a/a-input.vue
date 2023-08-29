<template>
  <input
    v-bind="$attrs"
    v-model="model"
    class="input"
  >
</template>

<script lang="ts" setup>
import { defineModel } from "#imports";
const model = defineModel<string>();
</script>

<style lang="scss" scoped>
.input {
  padding: 12px;
  border: 1px solid var(--color-neutral-5);
  border-radius: 6px;
}
</style>
