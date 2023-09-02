<template>
  <main class="license">
    <section class="license__support support" />
    <section class="license__content" />
  </main>
</template>

<style lang="scss" scoped>
.license {
  padding-top: 32px;
  min-height: calc(100vh - var(--size-header));
}

.hero {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 24px;

  &__avatars {
    display: flex;
    place-items: center;
  }

  &__description {
    font-weight: 600;
  }

  &__cross {
    padding: 0 64px;
  }
}
</style>
