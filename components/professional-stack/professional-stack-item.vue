<template>
  <ACard class="stack-item">
    <AText class="stack-item__title">
      {{ title }}
    </AText>
    <AText
      class="stack-item__description"
      secondary
    >
      {{ description }}
    </AText>
    <AText
      class="stack-item__term"
      secondary
    >
      {{ timeInUse }}
    </AText>
  </ACard>
</template>

<script setup lang="ts">
import type { ProfessionalStackItemContent } from "@t/content";

defineProps<ProfessionalStackItemContent>();
</script>

<style lang="scss" scoped>
.stack-item {
  height: 100%;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__description,
  &__term {
    color: var(--color-neutral-8);
  }
}
</style>
