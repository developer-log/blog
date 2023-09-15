<template>
  <NuxtLink
    :href="_path"
    class="post"
    :data-test="dataSelectors.compactPost.item"
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
          <ClientOnly>
            <NuxtLink
              class="nav__link"
              :to="getTagSearchURL(tag)"
              @click.stop
            >
              <ATag class="nav__tag">
                {{ tag }}
              </ATag>
            </NuxtLink>
          </ClientOnly>
        </li>
      </ul>
      <Icon
        class="nav__angle"
        name="uil:angle-right"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import dataSelectors from "@/tests/data-selectors";
import type { PostItemContent } from "@t/content/post";
defineProps<PostItemContent>();
</script>

<style lang="scss" scoped>
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

  &__link {
    display: block;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }

  &__angle {
    display: none;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}

@include from-md {
  .post {
    flex-direction: row;
    align-items: center;
  }

  .nav {
    &__list {
      gap: 12px;
    }

    &__angle {
      display: block;
    }
  }
}

@include theme-dark {
  .post {
    color: var(--color-neutral-2);
  }
}
</style>
