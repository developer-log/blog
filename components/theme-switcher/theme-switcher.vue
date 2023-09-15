<template>
  <button
    class="theme-switcher"
    :data-test="dtes.themeSwitcher"
    title="Кликните правой кнопкой мыши, чтобы сбросить настройки"
    @click="onClick"
    @click.right="onRightClick"
  >
    <Transition
      type="transition"
    >
      <Icon
        v-if="theme === 'dark'"
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
import localStorageKey from "@/data/local-storage-key";
import dtes from "@/tests/data-selectors";
import type { Theme } from "@/types/theme";

const localStorageTheme = useLocalStorageState<Theme>(localStorageKey.theme);

const theme = computed({
  set: (v: Theme | undefined) => localStorageTheme.value = v,
  get() {
    let fallback: Theme = "light";

    if (process.client) {
      fallback = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    return localStorageTheme.value ?? fallback;
  }
});

const onClick = () => {
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  switch (localStorageTheme.value) {
  case "dark": {
    localStorageTheme.value = "light";
    break;
  }
  case "light": {
    localStorageTheme.value = "dark";
    break;
  }
  default: {
    localStorageTheme.value = preferredTheme === "dark" ? "light" : "dark";
  }
  }
};

watch(localStorageTheme, () => {
  if (localStorageTheme.value) {
    document.body.dataset.theme = localStorageTheme.value;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.dataset.theme = "dark";
  } else {
    document.body.dataset.theme = "";
  }
});

const onRightClick = (event: Event) => {
  event.preventDefault();
  localStorageTheme.value = undefined;
  localStorage.removeItem(localStorageKey.theme);
};

onMounted(() => {
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  localStorageTheme.value = localStorageTheme.value ?? preferredTheme;
});
</script>

<style lang="scss" scoped>
.theme-switcher {
  cursor: pointer;
  padding: 8px;
  border: none;
  background: inherit;
}
.v-enter-active,
.v-leave-active {
  transition: transform 400ms ease-in-out,
  rotate 500ms linear,
  opacity 400ms ease-in-out
}

.v-enter-from,
.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: rotate(180deg);
}
</style>
