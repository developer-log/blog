<template>
  <div
    :id="selectors.appContainer.id"
    :data-theme="theme"
    :class="selectors.appContainer.class"
  >
    <NuxtLoadingIndicator
      :throttle="100"
      :duration="2000"
      :color="accentColor"
    />
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
    <CookieBanner v-model="isBannerShowed" />
  </div>
</template>

<script setup lang="ts">
import "@fontsource-variable/montserrat";
import { useTheme } from "#imports";
import localStorageKey from "@/data/local-storage-key";
import selectors from "@/data/selectors";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/400-italic.css";
import "@fontsource/iosevka/700.css";
import "@fontsource/iosevka/700-italic.css";
import "@style/index.scss";

const isBannerShowed = ref(false);
const cookie = useLocalStorageState<boolean>(localStorageKey.cookie);
const { theme, accentColor } = useTheme();
console.log(theme.value);

// watch(theme, () => {
//   if (theme.value) {
//     document.body.dataset.theme = localStorageTheme.value;
//   } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     document.body.dataset.theme = "dark";
//   } else {
//     document.body.dataset.theme = "";
//   }
// });

// onMounted(() => {
//   const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   localStorageTheme.value = localStorageTheme.value ?? preferredTheme;
// });

onMounted(() => {
  isBannerShowed.value = !(cookie.value ?? false);
});
</script>
