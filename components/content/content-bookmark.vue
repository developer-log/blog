<template>
  <NuxtLink
    v-if="!error"
    class="bookmark"
    :href="url"
    target="_blank"
  >
    <ACard
      v-if="pending"
      class="bookmark__card bookmark__card_pending"
    >
      <Icon
        size="32"
        name="svg-spinners:90-ring-with-bg"
      />
    </ACard>
    <ACard
      v-else
      hover
      class="bookmark__card"
    >
      <div class="bookmark__meta">
        <div class="bookmark__header">
          <img
            v-if="meta?.icon"
            class="bookmark__favicon bookmark__favicon_header"
            alt="favicon"
            :src="meta?.icon"
          >
          <AText class="bookmark__title">
            {{ meta?.title }}
          </AText>
        </div>
        <AText
          v-if="meta?.description"
          class="bookmark__description"
        >
          {{ meta?.description }}
        </AText>
        <div class="bookmark__link">
          <img
            v-if="meta?.icon"
            class="bookmark__favicon"
            alt="favicon"
            :src="meta?.icon"
          >
          <AText class="bookmark__url">
            {{ url }}
          </AText>
        </div>
      </div>
      <img
        v-if="meta?.image"
        class="bookmark__preview"
        :src="meta?.image"
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

const { data: meta, pending, error } = await useFetch<SiteMetaResponse>("/api/meta",
  {
    lazy: true,
    method: "POST",
    body: {
      url: properties.url
    },
    key: properties.url
  });
</script>

<style lang="scss" scoped>
.bookmark {
  display: block;
  color: inherit;
  margin: 24px 0;
  overflow: hidden;

  &:hover {
    color: inherit;
  }

  &__card {
    padding: 12px;
    display: block;
    height: 100%;

    &:hover {
      background: var(--color-neutral-2);
      border-color: var(--color-neutral-5);
    }

    &_pending {
      height: 120px;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      width: 100%;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    text-wrap: balance;
  }

  &__description {
    font-size: 14px;
    margin-top: 8px;
  }

  &__link {
    display: none;
    margin-top: 8px;
  }

  &__url {
    font-size: 14px;
  }

  &__favicon {
    width: 16px;
    height: 16px;

    &_header {
      float: left;
      margin-right: 8px;
    }
  }

  &__preview {
    max-width: 120px;
    height: 100%;
    max-height: 110px;
    display: none;
  }
}

@include from-sm {
  .bookmark {
    &__favicon_header {
      display: none;
    }

    &__link {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}

@include from-md {
  .bookmark {
    &__card {
      display: flex;
      gap: 32px;
      justify-content: space-between;
    }


    &__preview {
      display: block;
    }
  }
}

@include theme-dark {
  .bookmark {
    &__card {
      &:hover {
        color: inherit;
        background: var(--color-neutral-10);
        border-color: var(--color-neutral-8);
      }
    }
  }
}
</style>
