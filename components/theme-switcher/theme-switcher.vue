<template>
  <button
    class="theme-switcher"
    @click="onClick"
    @click.right="onRightClick"
  >
    <Transition
      type="transition"
    >
      <Icon
        v-if="localStorageTheme === 'dark'"
        class="theme-switcher__icon"
        size="24"
        name="fe:sunny-o"
      />
      <Icon
        v-else
        class="theme-switcher__icon"
        size="24"
        name="uil:moon"
      />
    </Transition>
  </button>
</template>

<script setup lang="ts">
import useLocalStorageState from "@/composables/use-local-storage-state";
import localStorageKey from "@/data/local-storage-key";
import type { Theme } from "@t/theme";

const localStorageTheme = useLocalStorageState<Theme>(localStorageKey.theme);

const onClick = () => {
  const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  if (localStorageTheme.value) {
    localStorageTheme.value = localStorageTheme.value === "light" ? "dark" : "light";
    return;
  }

  localStorageTheme.value = preferedTheme === "dark" ? "light" : "dark";
};

const onRightClick = (event: Event) => {
  event.preventDefault();
  localStorageTheme.value = "initial";
};
</script>

<style lang="scss" scoped>
.theme-switcher {
  cursor: pointer;
  padding: 8px;
  outline: none;
  border: none;
  background: inherit;
}
.v-enter-active,
.v-leave-active {
  transition: transform 400ms ease-in-out,
  scale 400ms ease-in-out,
  opacity 400ms ease-in-out
}

.v-leave-active {
  display: none;
}

.v-enter-from,
.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: translate(10px);
  scale: 1.5;
}
</style>
