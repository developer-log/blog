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
const { t, locale } = useI18n();

const setMeta = () => useSeoMeta({
  title: t("title"),
});

setMeta();

watch(locale, setMeta);
</script>
