<template>
  <details
    class="details"
  >
    <summary
      class="details__summary"
      role="button"
      :aria-expanded="active"
      tabindex="0"
      @click="active = !active"
      @keydown.enter="active = !active"
    >
      {{ title }}
      <Icon
        :name="active ? 'uil:angle-up' : 'uil:angle-down'"
        class="details__icon"
      />
    </summary>
    <div class="details__content">
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
import { ref } from "#imports";
interface ContentDetailsProperties {
  title: string;
}

defineProps<ContentDetailsProperties>();

const active = ref(false);
</script>

<style lang="scss" scoped>
.details {
  padding: 0 18px;
  border: 1px solid var(--color-neutral-4);
  border-radius: 6px;

  &[open] {
    padding-bottom: 12px;
  }

  &__icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &__summary {
    font-weight: 500;
    padding: 12px 0;
    position: relative;
    &::marker {
      content: '';
    }
  }
}

@include theme-dark {
  .details {
    border-color: var(--color-neutral-9);
  }
}
</style>
