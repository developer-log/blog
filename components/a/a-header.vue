<template>
  <header
    class="header"
    :class="{active: isHeaderMenuActive}"
  >
    <div class="header__wrapper">
      <NuxtLink
        class="header__logo"
        :to="{path: localePath('/')}"
        @click="isHeaderMenuActive = false"
      >
        <ALogo />
      </NuxtLink>
      <nav class="header__navigation nav">
        <ul class="nav__list">
          <li
            v-for="item in navigation"
            :key="item"
            class="nav__item"
          >
            <NuxtLink
              :to="{path: localePath(item.url), external: true}"
              class="nav__link"
            >
              {{ capitalize($t(item.name)) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="header__social social">
        <li
          v-for="item in social!.list"
          :key="item"
          class="social__item"
        >
          <NuxtLink
            external
            :to="item.url"
            target="_blank"
            class="social__link"
          >
            <Icon
              size="24"
              :name="item.icon"
            />
          </NuxtLink>
        </li>
      </ul>
      <ThemeSwitcher class="header__theme" />
      <HeaderBurger
        v-model="isHeaderMenuActive"
        class="header__burger"
      />
    </div>
    <HeaderMenu
      v-model="isHeaderMenuActive"
      :navigation="navigation"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, useLocalePath } from "#imports";
import { social } from "@/data/content";
import navigation from "@/data/navigation";

import { capitalize } from "vue";

const isHeaderMenuActive = ref(false);
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 0.87);
  border-bottom: 1px solid var(--color-neutral-4);
  backdrop-filter: blur(10px);
  position: sticky;
  overflow: hidden;
  top: 0;
  @include zi(header);
  @include spacing-layout;

  &.active {
    border: none;
    bottom: 0;
    height: 100vh;

    &::after {
      content: '';
      background-color: var(--color-red-normal);
      opacity: 0.35;
      mask-size: 380px;
      width: 380px;
      height: 296px;
      position: fixed;
      right: -100px;
      bottom: 0;
      mask-repeat: no-repeat;
      mask-image: url(/tokiory/outline.svg);
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__logo {
    margin: 0 auto;
    width: 55px;
    height: 55px;
  }

  &__social {
    margin-left: auto;
  }

  &__theme {
    margin-left: 32px;
    color: inherit;
  }

  &__burger {
    cursor: pointer;
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    padding: 8px;
    color: inherit;
    @include zi(header-burger);
  }
}

.nav {
  display: none;
  align-items: center;

  &__list {
    display: flex;
    gap: 24px;
  }

  &__link {
    color: inherit;

    &:hover {
      color: var(--color-red-dark-hover);
    }
  }
}

.social {
  display: none;
  gap: 24px;

  &__link {
    color: inherit;

    &:hover {
      color: var(--color-red-dark-hover);
    }
  }
}

@include from-md {
  .social {
    display: flex;
  }

  .nav {
    display: flex;
    padding-left: 64px;
  }

  .header {
    &__logo {
      margin: initial;
    }

    &__burger {
      display: none;
    }
  }
}

@include from-xl {
  .nav {
    padding-left: 128px;
  }
}

@include theme-dark {
  .header {
    background: rgba(51, 51, 51, 0.87);
    border-bottom: 1px solid var(--color-neutral-9);

    &.active::after {
      background-color: var(--color-green-normal);
    }
  }

  .nav__link:hover,
  .social__link:hover {
    color: var(--color-green-normal-hover);
  }
}
</style>
