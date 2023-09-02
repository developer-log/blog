<template>
  <footer class="footer">
    <AText>
      Collab by
      <NuxtLink :href="social.collab.tokiory">
        tokiory
      </NuxtLink>
      x
      <NuxtLink :href="social.collab.awamishi">
        awamishi
      </NuxtLink>
    </AText>
    <nav class="footer__social social">
      <ul class="social__list">
        <li
          v-for="item in footerSocial"
          :key="item"
          class="social__item"
        >
          <NuxtLink
            :href="item.url"
            external
            class="social__link"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
        <li class="social__item">
          <NuxtLink
            :to="{path: '/license'}"
            class="social__link"
          >
            License
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <LanguageSelect
      v-model="currentLocale"
      :languages="availableLocales as Array<keyof typeof languageFlag>"
      class="footer__language"
    />
  </footer>
</template>

<script setup lang="ts">
import { computed, useI18n } from "#imports";
import social from "@/data/content/social";
import languageFlag from "@/data/language-flag";

const { availableLocales, locale: defaultLocale, setLocale } = useI18n();
const currentLocale = computed({
  set: v => setLocale(v),
  get: () => defaultLocale.value,
});

const footerSocial = computed(() => {
  return [
    {
      name: "Telegram",
      url: social.telegram,
    },
    {
      name: "Codepen",
      url: social.codepen,
    },
    {
      name: "Github",
      url: social.github,
    },
  ];
});
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 12px 0;
  gap: 12px;
  background: rgba(255, 255, 255, 0.87);
  border-top: 1px solid var(--color-neutral-4);
  backdrop-filter: blur(10px);
}

.social {
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;

  }
}

@include from-sm {
  .social__list {
    gap: 64px;
  }
}

@include from-md {
  .footer__language {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
  }
}

@include theme-dark {
  .footer {
    background: rgba(51, 51, 51, 0.87);
    border-top: 1px solid var(--color-neutral-9);
  }
}
</style>
