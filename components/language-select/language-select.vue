<template>
  <div
    ref="languageSelectReference"
    class="language-select"
  >
    <div class="language-select__wrapper">
      <div
        class="language-select__current"
        :class="{active}"
        @click="active = !active"
      >
        <Icon
          size="24"
          :name="`circle-flags:${languageFlag[modelValue]}`"
        />
      </div>

      <div
        class="language-select__options"
        :class="{active}"
      >
        <div
          v-for="item in otherLanguages"
          :key="item"
          class="language-select__option"
          @click="selectLanguage(item)"
        >
          <Icon
            size="24"
            :name="`circle-flags:${languageFlag[item]}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "#imports";
import languageFlag from "@/data/language-flag";

type Language = keyof typeof languageFlag;

interface LanguageSelectProperties {
  languages: Array<Language>;
  modelValue: Language;
}

const properties = defineProps<LanguageSelectProperties>();
const emit = defineEmits<{"update:modelValue": [value: Language]}>();

const languageSelectReference = ref<HTMLDivElement>();
const active = ref(false);

const selectLanguage = (language: Language) => {
  active.value = false;
  emit("update:modelValue", language);
};

const otherLanguages = computed(() => {
  return properties.languages.filter(item => item !== properties.modelValue);
});



const handleOutsideClick = (event: MouseEvent) => {
  if (!languageSelectReference.value) {
    return;
  }

  if (
    !(event.target === languageSelectReference.value
      || languageSelectReference.value.contains(event.target as Node))
  ) {
    active.value = false;
  }
};

onMounted(() => {
  document.body.addEventListener("click",  handleOutsideClick);
});

onUnmounted(() => {
  document.body.removeEventListener("click",  handleOutsideClick);
});
</script>

<style lang="scss" scoped>
.language-select {
  &__wrapper {
    position: relative;
  }


  &__current,
  &__option {
    cursor: pointer;
  }

  &__current {
    @include base-transition;
    opacity: .4;

    &.active,
    &:hover {
      opacity: 1;
    }
  }

  &__options {
    display: none;
    padding: 12px;
    background: var(--color-neutral-2);
    border: 1px solid var(--color-neutral-4);
    border-radius: 4px;
    flex-direction: column;
    gap: 24px;
    position: absolute;
    bottom: 48px;
    left: -14px;

    &.active {
      display: flex;
    }
  }
}
</style>
