<template>
  <button
    class="button"
    :class="theme"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface ButtonProperties {
  theme: "primary" | "secondary"
}
withDefaults(defineProps<ButtonProperties>(), {
  theme: "primary",
});
</script>

<style scoped lang="scss">
.button {
  padding: 12px 36px;
  border: 1px solid var(--color-neutral-5);
  border-radius: 6px;

  &.primary {
    background: var(--color-red-normal);
    border-color: var(--color-red-dark);
    color: var(--color-neutral-1);

    &:hover {
      background: var(--color-red-normal-hover);
    }

    &:active {
      background: var(--color-red-normal-active);
    }
  }

  &.secondary {
    background: var(--color-neutral-4);

    &:hover {
      border-color: var(--color-neutral-5);
    }

    &:active {
      background: var(--color-neutral-5);
      border-color: var(--color-neutral-5);
    }
  }
}
</style>
