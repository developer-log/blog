<template>
  <ul class="post-content-ul">
    <slot />
  </ul>
</template>

<style lang="scss">
.post-content-ul {
  @include spacing-adaptive(top, 8px);
  padding-left: 26px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > li {
    position: relative;

    &::before {
      background: var(--color-neutral-13);
      top: 50%;
      translate: 0% -50%;
      position: absolute;
      content: '';
      left: -14px;
      width: 5px;
      height: 5px;
      border-radius: 5px;
    }
  }
}
</style>
