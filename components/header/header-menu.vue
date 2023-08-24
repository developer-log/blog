<template>
  <div
    v-if="modelValue"
    class="menu"
  >
    <ul class="menu__list">
      <li
        v-for="item in nav"
        :key="item"
        class="menu__item item"
        @click="() => navigate(item.url)"
      >
        <BLink
          :to="item.url"
          class="item__link"
        >
          <BTitle
            class="item__title"
            level="3"
          >
            {{ item.name }}
          </BTitle>
        </BLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Navigation } from "@t/navigation";

import useScrollLock from "@/composables/use-scroll-lock";
import nav from "@/data/navigation";
import { navigateTo,onUnmounted, watch } from "#imports";

interface HeaderMenuProperties {
  navigation: Navigation;
  modelValue: boolean;
}

const properties = defineProps<HeaderMenuProperties>();
const emit = defineEmits<{"update:modelValue": [value: boolean]}>();
const scrollLock = useScrollLock();

watch(() => properties.modelValue, () => {
  if (properties.modelValue) {
    scrollLock.lock();
  } else {
    scrollLock.unlock();
  }
});

const navigate = (url: string) => {
  emit("update:modelValue", false);
  navigateTo(url);
};

onUnmounted(scrollLock.unlock);
</script>

<style lang="scss" scoped>
.menu {
  @include zi(header-menu);
  padding: 32px 24px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
