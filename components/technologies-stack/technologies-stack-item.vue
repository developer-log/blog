<template>
  <NuxtLink
    :href="url"
    class="technology"
  >
    <ACard class="technology__card">
      <AText class="technology__title">
        {{ t(title) }}
      </AText>
      <AText
        class="technology__value"
      >
        {{ value }}
      </AText>
    </ACard>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";
import type { TechnologiesStackItemContent } from "@t/content";
defineProps<TechnologiesStackItemContent>();

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.technology {
  display: block;
  color: inherit;

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
