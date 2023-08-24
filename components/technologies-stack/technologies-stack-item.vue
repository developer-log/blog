<template>
  <ALink
    :href="url"
    class="technology"
  >
    <ACard class="technology__card">
      <AText class="technology__title">
        {{ title }}
      </AText>
      <AText
        class="technology__value"
      >
        {{ value }}
      </AText>
    </ACard>
  </ALink>
</template>

<script setup lang="ts">
import type { TechnologiesStackItemContent } from "@t/content";
defineProps<TechnologiesStackItemContent>();
</script>

<style lang="scss" scoped>
.technology {
  display: block;

  &__card {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  &:hover {
    color: inherit;
  }

  &__value {
    color: var(--color-neutral-8);
  }
}
</style>
