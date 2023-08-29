<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tag {
  font-size: var(--fz-text-secondary);
  display: flex;
  padding: 4px 8px;
  background: var(--color-red-light);
  border: 1px solid var(--color-red-normal-hover);
  border-radius: 4px;
}

@include from-sm {
  .tag {
    padding: 4px 12px;
  }
}
</style>
