<template>
  <ALink
    :href="_path"
    class="post"
  >
    <div class="post__info info">
      <Icon
        class="info__icon"
        size="16"
        name="uil:align-left"
      />
      <AText class="info__title">
        {{ title }}
      </AText>
    </div>
    <div class="post__nav nav">
      <ul
        class="nav__list"
      >
        <li
          v-for="tag in tags"
          :key="tag"
          class="nav__item"
        >
          <ATag class="nav__tag">
            {{ tag }}
          </ATag>
        </li>
      </ul>
      <Icon
        class="nav__angle"
        name="uil:angle-right"
      />
    </div>
  </ALink>
</template>

<script setup lang="ts">
import type { PostItemContent } from "@t/content/post";
defineProps<PostItemContent>();
</script>

<style lang="scss" scoped>
$adaptive-row-from: md;

.post {
  padding: 12px;
  color: var(--color-neutral-13);
  border-color: var(--color-neutral-5);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  &:hover {
    color: inherit;
  }

  @include breakpoint($adaptive-row-from) {
    flex-direction: row;
    align-items: center;
  }

}

.info {
  display: flex;
  align-items: center;
  gap: 12px;

  &__icon {
    flex-shrink: 0;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;

  &__angle {
    display: none;

    @include breakpoint($adaptive-row-from) {
      display: block;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 4px;

    @include from-md {
      gap: 12px;
    }
  }
}
</style>
