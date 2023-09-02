<template>
  <ContentDetails
    title="Навигация"
    class="navigation"
  >
    <ul class="navigation__list">
      <li
        v-for="item in navigation"
        :key="item"
        class="navigation__item"
      >
        <NuxtLink
          class="navigation__item"
          :href="getNavigationUrl(item.anchor)"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </ContentDetails>
</template>

<script setup lang="ts">
import { useRoute } from "#imports";
import type { PostNavigationItem } from "@t/posts";

interface PostNavigationMobileProperties {
  navigation: PostNavigationItem[];
}
defineProps<PostNavigationMobileProperties>();

const route = useRoute();
const getNavigationUrl = (id: string) => `${route.path}#${encodeURI(id)}`;
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    display: block;
  }
}
</style>
