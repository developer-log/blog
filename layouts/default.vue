<template>
  <div
    id="layout"
    class="default-layout"
  >
    <AHeader />
    <slot />
    <AFooter />
  </div>
</template>

<script setup lang="ts">
import { useI18n, useSeoMeta, watch } from "#imports";
const { t, locale } = useI18n();

const setMeta = () => useSeoMeta({
  title: t("title"),
});

setMeta();

watch(locale, setMeta);
</script>
