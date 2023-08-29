<template>
  <div class="error">
    <NuxtImg
      class="error__cat"
      src="/tokiory/cry.svg"
    />
    <template v-if="code === 404">
      <ATitle class="error__title">
        Страница не найдена
      </ATitle>
      <AText class="error__text">
        Мы долго искали данную страницу, но так и не смогли найти ее
      </AText>
      <AText class="error__text">
        Возможно вы указали неверный адрес, ну или страницу украли злые барсуки 🦡
      </AText>
      <AButton
        class="error__button"
        @click="onGoToHome"
      >
        Перейти на главную
      </AButton>
    </template>
    <template v-else>
      <ATitle class="error__title">
        Произошла чудовищная ошибка
      </ATitle>
      <AText class="error__text">
        Команда котов-инженеров уже занимается этим вопросом 🐈 🐈‍⬛ 🐈
      </AText>
      <AButton
        class="error__button"
        @click="onReloadPage"
      >
        Перезагрузить страницу
      </AButton>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, useError } from "#imports";
import { clearError, NuxtError } from "#app";

const error = useError() as Ref<NuxtError>;

// We're don't using computed, 'cause statusCode will be cleared on redirect
// and template v-if will blink
const message = error.value?.message;
const code = error.value?.statusCode;

onMounted(() => {
  console.error(message);
});

const onGoToHome = async () => {
  await clearError({ redirect: "/" });

  // https://github.com/nuxt/nuxt/issues/13309
  window.location.reload();
};
const onReloadPage = () => window.location.reload();
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  padding: 32px;

  &__cat {
    width: 250px;
    margin-bottom: 48px;
  }

  &__text {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }

  &__title + &__text {
    margin-top: 24px;
  }

  &__button {
    margin-top: 32px;
  }

  &__icon {
    display: flex;
    height: fit-content;
  }
}
</style>
