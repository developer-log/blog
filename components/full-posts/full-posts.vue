<template>
  <ul class="posts-list">
    <li
      v-for="key in groups.keys()"
      :key="key"
      class="posts-list__item"
    >
      <FullPostsGroup
        class="posts-list__group"
        :date="key"
        :group="groups?.get(key) ?? []"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PostDateGroups } from "@t/posts";

defineProps<{groups: PostDateGroups}>();
</script>

<style lang="scss" scoped>
.posts-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    left: 150px;
    background: var(--color-neutral-5);
    display: none;
  }
}

@include from-xl {
  .posts-list {
    padding-left: 180px;
    &::before {
      display: block;
    }
  }
}
</style>
