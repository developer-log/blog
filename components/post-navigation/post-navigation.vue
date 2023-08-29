<template>
  <nav class="post-navigation">
    <ul class="post-navigation__list">
      <li
        v-for="item in navigation"
        :key="item"
        class="post-navigation__item"
      >
        <NuxtLink
          :href="item.anchor"
          class="post-navigation__link"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { PostNavigationItem } from "@t/posts";

interface PostNavigationProperties {
  navigation: PostNavigationItem[];
  activeId: PostNavigationItem["id"];
}
defineProps<PostNavigationProperties>();
</script>
