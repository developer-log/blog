<template>
  <main
    class="posts"
  >
    <AInput
      v-model.trim="search"
      class="posts__input"
      :placeholder="t('page.posts.searchPlaceholder')"
    />
    <div
      v-if="pending && !filteredPosts"
      class="posts__loading"
    >
      <Icon
        size="48"
        name="line-md:loading-twotone-loop"
      />
    </div>
    <FullPosts
      v-else-if="filteredPosts"
      :groups="filteredPosts"
      class="posts__list"
    />
  </main>
</template>

<script lang="ts" setup>
import { computed, queryContent, ref, useAsyncData, useI18n, useOg, useRequestURL, useRoute, useSeoMeta, watch } from "#imports";
import type { PostItemContent } from "@t/content";
import type { PostDateGroups, PostDateKey } from "@t/posts";

const { t, getLocaleCookie } = useI18n();
const url = useRequestURL();

useSeoMeta({
  ...useOg({
    title: `${t("title")}: ${t("page.posts.tabTitle")}`,
    image: {
      title: `${t("title")}: ${t("page.posts.tabTitle")}`,
      description: t("page.home.hero").split(".").slice(0, 2).join(".") + ".",
    },
    url,
    author: "Daniil Shilo (tokiory) <tokiory.personal@gmail.com>",
  }),
});

const route = useRoute();
const search = ref(route.query?.search ?? "");

const locale = getLocaleCookie() ?? "ru";

// Watch
watch(() => route.query?.search, (v) => {
  if (typeof v === "string") {
    search.value = v;
  }
});

// Methods
const groupPostsByDate = (posts: PostItemContent[]): PostDateGroups => {
  const groups: PostDateGroups = new Map();

  for (const post of posts) {
    const date = new Date(post.date);
    const dateKey = date.toLocaleDateString(locale, {
      month: "short",
      year: "numeric",
    }) as PostDateKey;

    if (groups.has(dateKey)) {
      groups.set(dateKey,
        [ ...groups.get(dateKey)!, post ]
      );
    } else {
      groups.set(dateKey, [ post ]);
    }
  }

  return groups;
};

const { data: posts, pending } = useAsyncData(async () => {
  const fields: Array<keyof PostItemContent> = [
    "_id",
    "_path",
    "title",
    "date",
    "tags",
    "description",
  ];

  const posts = await queryContent<PostItemContent>("posts").where({
    _draft: { $ne: true },
  }).only(fields).find();

  const sortedPosts = posts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });

  return groupPostsByDate(sortedPosts);
});

const filteredPosts = computed(() => {
  const filteredPostsGroups: PostDateGroups = new Map();
  const loweredQuery = search.value?.toLowerCase();

  if (!posts.value) {
    return filteredPostsGroups;
  }

  if (search.value === "") {
    return posts.value;
  }

  for (const date of posts.value.keys()) {
    const filteredPosts = (posts.value.get(date) ?? [])
      .filter(post => {
        return post.title.toLowerCase().includes(loweredQuery)
          || post.description.toLowerCase().includes(loweredQuery)
          || post.tags.some(tag => tag.includes(loweredQuery.replace("#", "")));
      });

    if (filteredPosts?.length) {
      filteredPostsGroups.set(date, filteredPosts);
    }
  }

  return filteredPostsGroups;
});
</script>

<style lang="scss" scoped>
.posts {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: calc(100vh - var(--size-header));

  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  &__list {
    margin-top: 18px;
  }
}

@include from-xl {
  .posts__input {
    margin-left: 180px;
  }
}
</style>
