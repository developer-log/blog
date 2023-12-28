<template>
  <div class="post">
    <PostNavigation
      v-model="activeAnchor"
      class="post__navigation post__navigation_desktop"
      :navigation="navigation"
    />
    <div
      ref="contentReference"
      class="post__content"
    >
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
              :href="localePath({path: '/posts', query: {search: tag}})"
              class="header__tag-link"
            >
              <ATag class="header__tag">
                {{ tag }}
              </ATag>
            </NuxtLink>
          </li>
        </ul>
        <PostSource
          v-if="data?.origin"
          :url="data.origin.url"
        />
      </div>
      <PostNavigationMobile
        v-if="navigation.length > 1"
        class="post__navigation post__navigation_mobile"
        :navigation="navigation"
      />
      <article
        ref="articleReference"
        class="post__render"
      >
        <ContentRendererMarkdown
          :value="data"
        />
      </article>
      <div
        v-if="data?.references"
        class="post__references references"
      >
        <ATitle class="references__title">
          Референсы
        </ATitle>
        <ContentBookmark
          v-for="reference in data.references"
          :key="reference"
          class="references__list"
          :url="reference?.url ?? ''"
        />
      </div>
    </div>
    <ContentImageZoom />
    <ContentDiagramZoom />
  </div>
</template>

<script setup lang="ts">
import type { PostItemContent } from "@/types/content";
import type { PostNavigationItem } from "@/types/posts";
import { getPostSlug } from "@/utils/post";

import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

const url = useRequestURL();
const { t } = useI18n();
const localePath = useLocalePath();
const articleReference = ref<HTMLDivElement>();

const { data } = await useAsyncData(() => queryContent<PostItemContent & MarkdownParsedContent>(getPostSlug(url)).findOne());

const shortDescription = (description: string) => {
  return description.split(".").slice(0, 1).join(".");
};

useSeoMeta({
  ...useOg({
    title: `${t("title").split(" ").map(word => word[0].toUpperCase()).join("")}${data.value?.title ? `: ${data.value?.title}` : ""}`,
    image: {
      title: data.value?.title ?? "",
      description: shortDescription(data.value?.description ?? ""),
    },
    url,
    author: "Daniil Shilo (tokiory) <tokiory.personal@gmail.com>",
  }),
});

// Navigation section
const navigation = computed<PostNavigationItem[]>(() => {
  if (!data.value) {
    return [];
  }

  return data.value.body.children
    .filter(node => {
      const headerRegex = /^h\d$/g;
      const text = node.children?.at(0)?.type === "text" ? node.children?.at(0)?.value : "";
      return node.tag && headerRegex.test(node.tag) && text;
    })
    .map((node, id) => {
      const title = node.children?.at(0)?.value ?? "";
      const level = Number.parseInt(node.tag?.replaceAll(/\D/g, "") ?? "");
      return {
        title,
        level: Number.isNaN(level) ? 0 : level - 1,
        anchor: node.props?.id,
        id
      };
    });
});

const activeAnchor = ref(decodeURI(url.hash).replace("#", ""));
let observer: IntersectionObserver | null;
let onScroll = (entries: IntersectionObserverEntry[]) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      activeAnchor.value = entry.target.id;
    }
  }
};

onMounted(() => {
  const titles = articleReference.value?.querySelectorAll(".title") ?? [];
  if (titles.length <= 0) {
    return;
  }

  // eslint-disable-next-line compat/compat
  observer = new IntersectionObserver(onScroll, { rootMargin: "-5% 0% -85% 0%" });
  for (const item of titles) {
    if (!item.id) {
      continue;
    }
    observer.observe(item);
  }
});

onUnmounted(() => {
  if (observer !== null) {
    observer?.disconnect();
  }

  observer = null;
});
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 16px;
  min-height: calc(100vh - var(--size-header));
  scroll-behavior: smooth;

  &__content {
    width: 100%;
    max-width: 1024px;
    flex-shrink: 2;
  }

  &__navigation {
    &_mobile {
      margin-top: 32px;
    }

    &_desktop {
      position: initial;
      top: calc(var(--size-header) + 32px);
      height: fit-content;
      display: none;
      flex-shrink: 1;
    }
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
}

.references {
  margin-top: 64px;
}

@include from-sm {
  .post {
    padding: 32px;
  }
}

@include from-xl {
  .post {
    &__navigation {
      &_mobile {
        display: none;
      }
      &_desktop {
        display: block;
        position: sticky;
      }
    }
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
