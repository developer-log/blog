<template>
  <main class="author">
    <section class="author__content content">
      <ATitle class="content__title title">
        Привет <NuxtImg
          class="title__image"
          src="/tokiory-cat-colorized.svg"
        />
      </ATitle>
      <div class="content__description description">
        <AText class="description__text">
          Я – опытный фронтэнд-разработчик с более чем четырьмя годами успешного опыта в создании и улучшении приложений. Мои навыки и знания охватывают широкий спектр современных веб-технологий, что позволяет мне разрабатывать высококачественные и интуитивно понятные приложения.
        </AText>
        <AText class="description__text">
          Моя роль включала разработку и поддержку веб-приложений, обеспечение их адаптивности и кросс-браузерной совместимости, а также интеграцию с бэкэнд-сервисами. Я активно участвовал в архитектурных решениях и всегда стремлюсь к улучшению процессов разработки.
        </AText>
        <AText class="description__text">
          Я стремлюсь продолжать расти как фронтэнд-разработчик, внося свой вклад в развитие современных и инновационных веб-приложений. Я активно веду блог, а также пишу на VC, Habr и в Telegram.
        </AText>
      </div>
      <ProfessionalStack
        v-bind="professionalStackContent"
        layout="row"
        class="content__professional"
      />
      <TechnologiesStack
        class="content__tech"
        v-bind="technologiesStackContent"
      />
    </section>
    <section class="author__waterfall waterfall">
      <WaterfallPattern
        class="waterfall__item"
        theme="heartbeat"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import {
  professionalStack as professionalStackContent,
  technologiesStack as technologiesStackContent
} from "@/data/content";
</script>

<style lang="scss" scoped>
.author {
  display: flex;
  min-height: calc(100vh - var(--size-header));
}

.content {
  @include content-padding;


  &__professional,
  &__tech {
    @include adaptive-margin(top, 24px);
    @include from-md {
      max-width: 1064px;
      width: 100%;
    }
  }

}
.title {
  color: var(--color-red-dark);
  &__image {
    height: 24px;
  }
}

.description {
  margin-top: 20px;

  &__text:not(:first-child) {
    margin-top: 24px;
  }
}

.waterfall {
  display: none;
  align-items: center;

  @include from-xl {
    display: flex;
  }

  &__item {
    width: 300px;

    @include from-xxl {
      width: 480px;
    }
  }
}
</style>
