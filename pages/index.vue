<template>
  <main class="home">
    <section class="home__content content">
      <BTitle class="content__title">
        Лог разработчика
      </BTitle>
      <div class="content__subtitle subtitle">
        <Icon
          size="24"
          name="uil:document-layout-left"
          class="subtitle__icon"
        />
        <BText class="subtitle__text">
          Лог разработчика глазами разработчика
        </BText>
      </div>
      <BText class="content__text">
        "Лог разработчика" – блог опытного фронтэнд-разработчика, предлагающий туториалы, заметки и статьи о современных веб-технологиях и методах разработки. Автор делится своим опытом и знаниями, представляя доступные руководства по погружению в мир разработки от основ до продвинутых техник. Особенность блога – понятное изложение сложных тем для широкой аудитории. Будьте в курсе новейших тенденций и улучшайте свои навыки вместе с "Логом разработчика".
      </BText>
      <BLink
        :href="social!.telegram"
        target="_blank"
        class="content__link"
      >
        <BButton
          theme="primary"
          class="content__telegram"
        >
          Перейти в телеграм
        </BButton>
      </BLink>
      <div class="content__posts posts">
        <BTitle level="2">
          Перейти к чтению
        </BTitle>
        <CompactPosts
          class="posts__list"
          :posts="posts!"
        />
      </div>
    </section>
    <section class="home__waterfall waterfall">
      <WaterfallPattern
        class="waterfall__item"
        theme="circle"
      />
      <WaterfallPattern
        class="waterfall__item"
        theme="lava"
      />
      <WaterfallPattern
        class="waterfall__item"
        theme="line"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import type { PostItemContent, SocialContent } from "@t/content";

import { queryContent, useAsyncData } from "#imports";

const { data: posts } = useAsyncData("posts", async () => {
  const posts = await queryContent<PostItemContent>().limit(5).find();
  posts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
  return posts;
});

const { data: social } = useAsyncData("social", () => {
  return queryContent<SocialContent>("social").findOne();
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  min-height: calc(100vh - var(--size-header));
}

.content {
  @include content-padding;

  &__title {
    font-size: 32px;
    font-weight: 800;

    @include from-md {
      font-size: 48px;
    }

    @include from-xxl {
      font-size: 72px;
    }
  }

  &__subtitle {
    margin-top: 12px;
  }

  &__text,
  &__telegram,
  &__posts {
    margin-top: 32px;
  }
}

.subtitle {
  display: flex;
  gap: 12px;

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    display: flex;
    align-items: center;
  }
}

.posts {
  &__list {
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
    width: 200px;

    @include from-xxl {
      width: 250px;
    }
  }
}
</style>
