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
import { onMounted, ref } from "#imports";
import useLS from "@/composables/use-ls";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/400-italic.css";
import "@fontsource/iosevka/700.css";
import "@fontsource/iosevka/700-italic.css";
import "@style/index.scss";

const isBannerShowed = ref(false);
const ls = useLS();

onMounted(() => {
  isBannerShowed.value = !(ls.cookie.agreement.get() ?? false);
});
</script>
