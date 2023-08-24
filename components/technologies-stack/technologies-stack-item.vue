<template>
  <BLink
    :href="url"
    class="technology"
  >
    <BCard class="technology__card">
      <BText class="technology__title">
        {{ title }}
      </BText>
      <BText
        class="technology__value"
      >
        {{ value }}
      </BText>
    </BCard>
  </BLink>
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
