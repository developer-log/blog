<template>
  <NuxtLink
    v-if="!error"
    class="bookmark"
    :href="url"
    target="_blank"
  >
    <ACard
      hover
      class="bookmark__card"
    >
      <div class="bookmark__meta">
        <AText class="bookmark__title">
          {{ data?.title }}
        </AText>
        <AText class="bookmark__description">
          {{ data?.description }}
        </AText>
        <div class="bookmark__link">
          <img
            v-if="data?.icon"
            class="bookmark__favicon"
            alt="favicon"
            :src="data?.icon"
          >
          <AText class="bookmark__url">
            {{ url }}
          </AText>
        </div>
      </div>
      <img
        v-if="data?.image"
        class="bookmark__preview"
        :src="data?.image"
        alt="preview"
      >
    </ACard>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useFetch } from "#imports";
import type { SiteMetaResponse } from "@t/api/meta";

interface BookmarkProperties {
  url: string;
}

const properties = defineProps<BookmarkProperties>();

const { data, error } = await useFetch<SiteMetaResponse>("/api/meta",
  {
    method: "POST",
    body: {
      url: properties.url
    },
    key: properties.url
  },);
</script>

<style lang="scss" scoped>
.bookmark {
  display: block;
  color: inherit;
  margin: 24px 0;

  &__card {
    padding: 12px;
    display: flex;
    gap: 32px;
    justify-content: space-between;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__title {
    font-size: 24px;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__favicon {
    width: 16px;
    height: 16px;
  }

  &__preview {
    max-width: 120px;
    height: 100%;
  }
}
</style>
