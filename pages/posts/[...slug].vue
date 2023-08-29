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
      </div>
      <ContentRendererMarkdown
        class="post__render"
        :value="data"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryContent, useAsyncData, useRoute  } from "#imports";
import { getTagSearchURL } from "@/utils/search";
import type { PostItemContent } from "@t/content";

import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

const route = useRoute();
console.log(route.path);
const { data } = await useAsyncData(() => queryContent<PostItemContent & MarkdownParsedContent>(route.path).findOne());

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
</style>
