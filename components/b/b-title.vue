<template>
  <div
    :style="styles"
    class="title"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Properties as CSS } from "csstype";

import { computed } from "#imports";

interface TitleProperties {
  level?: "1" | "2" | "3";
  fz?: string;
  wght?: string;
}

const properties = defineProps<TitleProperties>();

const preset: Record<NonNullable<TitleProperties["level"]>, CSS> = {
  "1": {
    fontSize: "var(--fz-title-h1)",
    fontWeight: "800",
  },
  "2": {
    fontSize: "var(--fz-title-h1)",
    fontWeight: "700",
  },
  "3": {
    fontSize: "var(--fz-title-h1)",
    fontWeight: "600",
  }
};

const styles = computed(() => {
  if (properties.level) {
    return preset[properties.level];
  }

  return {
    fontSize: properties.fz,
    fontWeight: properties.wght,
  };
});
</script>

<style lang="scss" scoped>
.title {
  line-height: 130%;
}
</style>
