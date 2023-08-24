<template>
  <BCard class="stack-item">
    <BText class="stack-item__title">
      {{ title }}
    </BText>
    <BText
      class="stack-item__description"
      secondary
    >
      {{ description }}
    </BText>
    <BText
      class="stack-item__term"
      secondary
    >
      {{ timeInUse }}
    </BText>
  </BCard>
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
