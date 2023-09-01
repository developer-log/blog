<template>
  <div class="post">
    <!--      <PostNavigation-->
    <!--        class="post__navigation"-->
    <!--        :navigation="navigation"-->
    <!--        :active-id="activeScrollingTitleId"-->
    <!--      />-->
    <div class="post__content">
      <div class="post__header header">
        <ATitle class="header__title">
          {{ data?.title }}
        </ATitle>
        <ul class="header__list">
          <li
            v-for="tag in data?.tags"
            :key="tag"
            class="header__item"
          >
            <NuxtLink
              :href="getTagSearchURL(tag)"
              class="header__tag-link"
            >
              <ATag class="header__tag">
                {{ tag }}
              </ATag>
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink
          v-if="data?.origin"
          class="origin"
          external
          target="_blank"
          :href="data.origin.url"
        >
          <Icon
            class="origin__icon"
            size="16"
            name="uil:link-h"
          />
          <AText
            secondary
            class="origin__text"
          >
            {{ data?.origin.type }}
          </AText>
        </NuxtLink>
      </div>
      <ContentRendererMarkdown
        class="post__render"
        :value="data"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryContent, useAsyncData, useI18n, useOg, useRequestURL, useSeoMeta } from "#imports";
import { getTagSearchURL } from "@/utils/search";
import type { PostItemContent } from "@t/content";

import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

const url = useRequestURL();
const { t } = useI18n();

const { data } = await useAsyncData(() => queryContent<PostItemContent & MarkdownParsedContent>(url.pathname).findOne());

useSeoMeta({
  ...useOg({
    title: `${t("title").split(" ").map(word => word[0].toUpperCase()).join("")}${data.value?.title ? `: ${data.value?.title}` : ""}`,
    image: {
      title: data.value?.title ?? "",
      description: data.value?.description ?? "",
    },
    url,
    author: "Daniil Shilo (tokiory) <tokiory.personal@gmail.com>",
  }),
});

// Navigation
// const navigation = computed<PostNavigationItem[]>(() => {
//   if (!data.value) {
//     return [];
//   }
//
//   return data.value.body.children
//     .filter(node => {
//       const headerRegex = /^h\d$/g;
//       const text = node.children?.at(0)?.type === "text" ? node.children?.at(0)?.value : "";
//       return node.tag && headerRegex.test(node.tag) && text;
//     })
//     .map((node, id) => {
//       const title = node.children?.at(0)?.value ?? "";
//       return {
//         title,
//         anchor: node.props?.id,
//         id
//       };
//     });
// });
// const activeScrollingTitleId = ref(0);
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 16px;
  min-height: calc(100vh - var(--size-header));

  &__content {
    width: 100%;
    max-width: 1024px;
  }

  &__render {
    margin-top: 48px;
  }

}

.origin {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--color-neutral-4);
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    border-color: var(--color-neutral-5);
  }

  &__icon {
    margin-top: 1px;
  }
}
.header {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__list {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__tag-link {
    color: inherit;
  }
}

@include from-sm {
  .post {
    padding: 32px;
  }
}

@include theme-dark {

  .origin {
    border-color: var(--color-neutral-9);
    &:hover {
      border-color: var(--color-neutral-8);
    }
  }
}
</style>
