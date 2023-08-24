<template>
  <div
    id="layout"
    class="default-layout"
  >
    <AHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useI18n, useSeoMeta } from "#imports";
const { t } = useI18n();

useSeoMeta({
  title: t("title"),
});
</script>
