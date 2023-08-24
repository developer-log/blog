<template>
  <div
    v-if="model"
    class="banner"
  >
    <BCard class="banner__wrapper">
      <div class="banner__description description">
        <BText class="description__text">
          Мы используем cookie. Это позволяет нам анализировать взаимодействие посетителей с сайтом и делать его лучше.
        </BText>
        <BText class="description__text">
          Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.
        </BText>
      </div>
      <BButton
        class="banner__button"
        @click="handleAccept"
      >
        Принять
      </BButton>
    </BCard>
  </div>
</template>

<script lang="ts" setup>
import useLS from "@/composables/use-ls";
import { defineModel } from "#imports";

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

  @include from-xl {
    left: 2vw;
    right: 2vw;
  }

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

    @include from-xl {
      flex-direction: row;
    }
  }

  &__button {
    width: 100%;

    @include from-xl {
      width: fit-content;
    }
  }
}

.description {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @include from-xl {
    display: block;
  }

  &__text {
    display: inline;
  }
}
</style>
