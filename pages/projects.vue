<template>
  <main class="projects">
    <ul class="projects__menu menu">
      <li
        v-for="(item, idx) in projects?.list"
        :key="idx"
        class="menu__item"
        @click="activeProject = item"
      >
        <ACard
          :class="{active: activeProject === item}"
          class="menu__card"
        >
          <AText class="menu__title">
            {{ item.name }}
          </AText>
          <AText class="menu__description">
            {{ item.description.short }}
          </AText>
        </ACard>
      </li>
    </ul>
    <div
      v-if="activeProject"
      class="projects__view view"
    >
      <ATitle class="view__title">
        {{ activeProject.name }}
      </ATitle>
      <AText
        v-for="(item, idx) in activeProject.description.long"
        :key="idx"
        class="view__description"
      >
        {{ item }}
      </AText>
      <div
        v-if="isStackVisible"
        class="view__stack stack"
      >
        <ATitle
          level="2"
          class="stack__title"
        >
          Стек
        </ATitle>
        <ul class="stack__list stack__list_primary">
          <li
            v-for="(item, idx) in activeProject.stack.primary"
            :key="idx"
            class="stack__item"
          >
            <NuxtImg
              class="stack__image"
              :src="`/stack/${item}.svg`"
              :alt="item"
              width="55"
            />
          </li>
        </ul>
        <ul class="stack__list stack__list_additional">
          <li
            v-for="(item, idx) in activeProject.stack.additional"
            :key="idx"
            class="stack__item"
          >
            <NuxtImg
              class="stack__image"
              width="55"
              :alt="item"
              :src="`/stack/${item}.svg`"
            />
          </li>
        </ul>
      </div>
      <div
        v-if="isLinksVisible"
        class="view__links links"
      >
        <ATitle
          level="2"
          class="links__title"
        >
          Ссылки
        </ATitle>
        <ul class="links__list">
          <li
            v-for="item in activeProject.links"
            :key="item"
            class="links__item"
          >
            <ALink
              class="links__link"
              :href="item.url"
            >
              {{ item.url }}
            </ALink>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-else
      class="projects__empty empty"
    >
      <NuxtImg
        class="empty__cat"
        src="/tokiory-cat-question.svg"
      />
      <ATitle class="empty__title">
        Выберите один из проектов
      </ATitle>
      <AText class="empty__text">
        Для того чтобы продолжить, вам нужно выбрать один из проектов из списка.
      </AText>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { ProjectContent } from "@t/content";

import { computed, queryContent, ref, useAsyncData } from "#imports";

const activeProject = ref<ProjectContent["list"][number]>();
const { data: projects } = useAsyncData("projects", () => {
  return queryContent<ProjectContent>("projects").findOne();
});

const isStackVisible = computed(() => {
  if (activeProject.value?.stack) {
    return activeProject.value.stack.primary.length > 0
      || activeProject.value.stack.additional.length > 0;
  }

  return false;
});

const isLinksVisible = computed(() => {
  return activeProject.value?.links && activeProject.value.links.length > 0;
});
</script>

<style lang="scss" scoped>
.projects {
  @include content-padding;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include from-xl {
    flex-direction: row;
  }
}

.menu {
  display: flex;
  gap: 24px;
  flex-shrink: 0;
  overflow: auto;
  flex-wrap: nowrap;
  padding: 12px 0;
  max-height: calc(100vh - var(--size-header) - 64px);

  // Scrollbar
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-neutral-3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-red-normal);    /* цвет плашки */
    border-radius: 2px;       /* закругления плашки */
  }

  @include from-xl {
    padding: 0 12px;
    width: 415px;
    flex-direction: column;
    overflow: auto;
  }

  &__item {
    width: 100%;
    min-width: 300px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
  }

  &__description {
    margin-top: 8px;
    color: var(--color-neutral-8);
  }

  &__card {
    height: 100%;
    padding: 18px;
    &.active {
      border-color: var(--color-red-normal);
    }
  }
}

.view {
  &__title {
    color: var(--color-red-dark);
  }

  &__description {
    @include adaptive-margin(top, 12px);
  }
}

.stack {
  margin-top: 24px;

  &__list {
    margin-top: 12px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  &__image {
    display: block;
    border: 1px solid var(--color-neutral-4);
    border-radius: 4px;
    height: 100%;
    padding: 8px;
  }
}

.links {
  margin-top: 24px;

  &__list {
    margin-top: 12px;
    padding-left: 20px;
  }

  &__item {
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      background: var(--color-red-dark);
      border-radius: 50%;
      width: 8px;
      height: 8px;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: calc(100% - 16px);

  @include from-sm {
    flex-grow: 1;
  }

  @include from-xl {
    width: calc(100% - 92px);
  }

  &__cat {
    max-width: 184px;
    width: 100%;
  }

  &__title {
    margin-top: 24px;
    text-align: center;
  }

  &__text {
    margin-top: 12px;
    text-align: center;
  }

  @media screen and (min-height: 670px) {
    &__cat {
      max-width: 280px;
    }
    padding-top: 24px;
    padding-bottom: 10vh;
  }
}
</style>
