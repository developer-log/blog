<template>
  <thead class="post-content-thead">
    <slot />
  </thead>
</template>

<style lang="scss" scoped>
.post-content-thead {
  background: var(--color-neutral-3);
  //border: 1px solid var(--color-neutral-6);
  height: 50px;
  //border-radius: 4px 4px 0 0;
}
</style>
