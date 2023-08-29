<template>
  <code class="code">
    <slot />
  </code>
</template>

<style lang="scss" scoped>
.code {
  display: inline-block;
  line-height: 1;
  font-family: 'Iosevka', Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 16px;
  color: var(--color-red-dark);
  //border: 1.5px solid var(--color-red-normal);
  background: var(--color-neutral-3);
  padding: 2px 5px;
  margin: 0 3px;
  border-radius: 4px;
}
</style>
