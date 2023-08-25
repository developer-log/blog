<template>
  <header
    class="header"
    :class="{active: isHeaderMenuActive}"
  >
    <div class="header__wrapper">
      <ALink
        class="header__logo"
        to="/"
        @click="isHeaderMenuActive = false"
      >
        <ALogo />
      </ALink>
      <nav class="header__navigation nav">
        <ul class="nav__list">
          <li
            v-for="item in navigation"
            :key="item"
            class="nav__item"
          >
            <ALink
              :to="item.url"
              class="nav__link"
            >
              {{ item.name }}
            </ALink>
          </li>
        </ul>
      </nav>
      <ul class="header__social social">
        <li
          v-for="item in social!.list"
          :key="item"
          class="social__item"
        >
          <ALink
            :href="item.url"
            target="_blank"
            class="social__link"
          >
            <Icon
              size="24"
              :name="item.icon"
            />
          </ALink>
        </li>
      </ul>
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
import { social } from "@/data/content";
import navigation from "@/data/navigation";
import { ref } from "#imports";

const isHeaderMenuActive = ref(false);
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-neutral-4);
  position: sticky;
  overflow: hidden;
  top: 0;
  @include zi(header);
  @include layout-padding;


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
      mask-image: url(/tokiory-cat-outlined.svg);
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

    @include from-md {
      margin: initial;
    }
  }

  &__social {
    margin-left: auto;
  }

  &__burger {
    cursor: pointer;
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    padding: 8px;
    @include zi(header-burger);


    @include from-md {
      display: none;
    }
  }
}

.nav {
  display: none;
  align-items: center;

  @include from-md {
    display: flex;
    padding-left: 64px;
  }

  @include from-xl {
    padding-left: 128px;
  }

  &__list {
    display: flex;
    gap: 24px;
  }

  &__link {
    color: inherit;
  }
}

.social {
  display: none;
  gap: 24px;

  @include from-md {
    display: flex;
  }

  &__link {
    color: inherit;
  }
}
</style>
