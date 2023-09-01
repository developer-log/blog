<template>
  <div class="post-content-code">
    <div class="post-content-code__nav">
      <AText
        secondary
        class="post-content-code__filename"
      >
        {{ filename }}
      </AText>
      <button
        class="post-content-code__copy"
        :class="{active: copied}"
        @click="copy"
      >
        <Icon name="uil:copy" />
      </button>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";

interface ProseCodeProperties {
  code: string;
  language: string;
  filename: string;
  highlights: number[];
  meta: string;
}

const properties = defineProps<ProseCodeProperties>();
const copied = ref(false);

const copy = async () => {
  navigator.clipboard.writeText(properties.code.trim())
    .then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 3000);
    })
    .catch(console.error);
};
</script>

<style lang="scss">
.post-content-code {
  position: relative;
  padding: 8px 12px;
  border-radius: 4px;
  background: var(--color-neutral-2);
  border: 1px solid var(--color-neutral-4);
  margin: 24px 0;

  &__nav {
    border-bottom: 1px solid var(--color-neutral-4);
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    gap: 12px;
  }

  &__filename {
    opacity: 0.3;
    display: none;
  }

  &__copy {
    color: var(--color-neutral-6);
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
    padding: 8px;

    &:hover {
      color: var(--color-neutral-8);
    }

    &.active {
      color: var(--color-red-dark);
    }
  }

  pre {
    margin: 0;
  }

  code {
    font-family: 'Iosevka', Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-size: 14px;
    letter-spacing: 0.7px;
  }
}

@include from-sm {
  .post-content-code__copy {
    display: block;
  }
}

@include from-md {
  .post-content-code__nav {
    border: none;
    position: absolute;
    top: 0;
    right: 0;
  }
}

@include theme-dark {
  .post-content-code {
    background: var(--color-neutral-10);
    border: 1px solid var(--color-neutral-9);

    &__nav {
      border-bottom-color: var(--color-neutral-9);
    }

    &__copy {
      color: var(--color-neutral-9);

      &:hover {
        color: var(--color-neutral-8);
      }

      &.active {
        color: var(--color-green-dark);
      }
    }
  }
}
</style>
