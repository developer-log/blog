<template>
  <NuxtLink
    class="link"
    v-bind="properties"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { NuxtLinkProps } from "#app";
const properties = withDefaults(defineProps<NuxtLinkProps>(), {
  noPrefetch: undefined,
  prefetch: false,
});
</script>

<style scoped lang="scss">
.link {
  &:hover {
    color: var(--color-red-dark);
    cursor: pointer;
  }

  &:active {
    color: var(--color-red-dark-hover);
  }
}
</style>
