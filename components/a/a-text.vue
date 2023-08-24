<template>
  <div
    class="text"
    :class="{bold, secondary, italic}"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface TextProperties {
  bold?: boolean;
  italic?: boolean;
  secondary?: boolean;
}

defineProps<TextProperties>();
</script>

<style lang="scss" scoped>
.text {
  display: block;
  font-size: var(--fz-text);
  line-height: 120%;
  letter-spacing: 0.27px;

  &.bold {
    font-weight: 600;
  }

  &.italic {
    font-style: italic;
  }

  &.secondary {
    font-size: var(--fz-text-secondary);
    letter-spacing: 0.21px;
  }
}
</style>
