<template>
  <img
    loading="lazy"
    class="post-content-image"
    :src="src"
    :alt="alt"
  >
</template>

<script setup lang="ts">
interface ProseImgProperties {
  src: string;
  alt: string;
}

defineProps<ProseImgProperties>();
</script>

<style lang="scss" scoped>
.post-content-image {
  margin: 24px 0;
  width: 100%;
  border: 1px solid var(--color-neutral-4);
  border-radius: 6px;
}
</style>
