<template>
  <NuxtLayout name="default">
    <NuxtPage />
    <CookieBanner v-model="isBannerShowed" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import "@style/index.scss";
import "@fontsource-variable/montserrat";

import useLS from "@/composables/use-ls";
import { onMounted,ref } from "#imports";

const isBannerShowed = ref(false);
const ls = useLS();

onMounted(() => {
  isBannerShowed.value = !(ls.cookie.agreement.get() ?? false);
});
</script>
