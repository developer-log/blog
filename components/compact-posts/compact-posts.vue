<template>
  <ul class="posts">
    <li
      v-for="post in posts"
      :key="post"
      class="posts__item"
    >
      <CompactPostsItem
        class="posts__post"
        v-bind="post"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PostContent } from "@t/content";

interface CompactPostsProperties {
  posts: PostContent,
}

defineProps<CompactPostsProperties>();
</script>

<style lang="scss" scoped>
.posts {
  &__item {
    border: 1px solid var(--color-neutral-5);
    border-radius: 4px;

    &:hover {
      background: var(--color-neutral-3);
      z-index: 1;
    }

    & + & {
      margin-top: -1px;
      border-radius: 0;
    }

    &:first-child {
      border-radius: 4px 4px 0 0;
    }

    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
}
</style>
