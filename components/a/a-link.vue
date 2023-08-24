<template>
  <NuxtLink
    class="link"
    v-bind="properties"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { NuxtLinkProps } from "#app";
const properties = withDefaults(defineProps<NuxtLinkProps>(), {
  noPrefetch: undefined,
  prefetch: false,
});
</script>

<style scoped lang="scss">
.link {
  color: var(--color-red-dark);

  &:hover {
    color: var(--color-red-dark-hover);
    cursor: pointer;
  }

  &:active {
    color: var(--color-red-dark-active);
  }
}
</style>
