<template>
  <th class="post-content-th">
    <slot />
  </th>
</template>

<style lang="scss" scoped>
.post-content-th {
  padding: 0 16px;
  background: var(--color-neutral-3);
  border: 1px solid var(--color-neutral-6);
  border-radius: 4px;
  font-weight: 600;

}
</style>
