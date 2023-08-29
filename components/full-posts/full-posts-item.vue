<template>
  <NuxtLink
    :to="{path: _path}"
    class="post"
  >
    <ACard class="post__card">
      <AText class="post__title">
        {{ title }}
      </AText>
      <div class="post__info info">
        <ul class="info__tags tags">
          <li
            v-for="(tag, idx) in tags"
            :key="idx"
            class="tags__item"
          >
            <ATag class="tags__tag">
              {{ tag }}
            </ATag>
          </li>
        </ul>
        <Icon
          class="info__icon"
          name="uil:angle-right"
        />
      </div>
    </ACard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PostItemContent } from "@t/content";

defineProps<PostItemContent>();
</script>

<style lang="scss" scoped>
.post {
  color: inherit;

  &:hover {
    .tags__tag {
      color: var(--color-neutral-13);
    }
  }

  &__card {
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &:hover {
      @include base-transition;
      border-color: var(--color-red-dark);
    }
  }
}

.info {
  display: flex;
  align-items: center;
  gap: 16px;

  &__icon {
    display: none;
  }
}

.tags {
  display: flex;
  gap: 8px;
  align-items: center;
}

@include from-sm {
  .post__card {
    gap: 24px;
    padding: 12px 36px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .info__icon {
    display: flex;
  }
}
</style>
