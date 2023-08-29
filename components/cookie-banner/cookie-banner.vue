<template>
  <div
    v-if="model"
    class="banner"
  >
    <ACard class="banner__wrapper">
      <div class="banner__description description">
        <AText class="description__text">
          Мы используем cookie. Это позволяет нам анализировать взаимодействие посетителей с сайтом и делать его лучше.
        </AText>
        <AText class="description__text">
          Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.
        </AText>
      </div>
      <AButton
        class="banner__button"
        @click="handleAccept"
      >
        Принять
      </AButton>
    </ACard>
  </div>
</template>

<script lang="ts" setup>
import { defineModel } from "#imports";
import useLS from "@/composables/use-ls";

const model = defineModel<boolean>();
const ls = useLS();

const handleAccept = () => {
  ls.cookie.agreement.set(true);
  model.value = false;
};
</script>

<style lang="scss" scoped>
.banner {
  position: fixed;
  bottom: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 16px;
  right: 16px;

  &__wrapper {
    max-width: 1388px;
    width: 100%;
    background: var(--color-neutral-2);
    border-color: var(--color-red-normal-active);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
  }

  &__button {
    width: 100%;
  }
}

.description {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__text {
    display: inline;
  }
}

@include from-xl {
  .description {
    display: block;
  }

  .banner {
    left: 2vw;
    right: 2vw;

    &__wrapper {
      flex-direction: row;
    }

    &__button {
      width: fit-content;
    }
  }
}
</style>
