<template>
  <div class="app">
    <NuxtLoadingIndicator
      :throttle="100"
      :duration="2000"
      color="#EE5899"
    />
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
    <CookieBanner v-model="isBannerShowed" />
  </div>
</template>

<script setup lang="ts">
import "@fontsource-variable/montserrat";
import { onMounted, ref, watch } from "#imports";
import useLocalStorageState from "@/composables/use-local-storage-state";
import localStorageKey from "@/data/local-storage-key";
import type { Theme } from "@t/theme";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/400-italic.css";
import "@fontsource/iosevka/700.css";
import "@fontsource/iosevka/700-italic.css";
import "@style/index.scss";

const isBannerShowed = ref(false);
const cookie = useLocalStorageState<boolean>(localStorageKey.cookie);
const theme = useLocalStorageState<Theme>(localStorageKey.theme);

onMounted(() => {
  isBannerShowed.value = !(cookie.value ?? false);
});

watch(theme, () => {
  console.log(theme.value);
  document.body.dataset.theme = theme.value ?? "initial";
});
</script>
