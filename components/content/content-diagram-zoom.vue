<template>
  <div
    v-if="diagram"
    class="image-zoom"
    role="button"
    tabindex="0"
    @click="imageZoom.hide"
  >
    <div
      ref="objectReference"
      class="image-zoom__object"
      :class="{active: scaleModifier === 2}"
      role="button"
      tabindex="0"
      aria-label="Zoom of the diagram"
      @keydown.enter="zoomIn"
      @keydown.esc="zoomOut"
      @click.stop="zoomIn"
      @click.right.prevent="zoomOut"
      v-html="diagram"
    />
  </div>
</template>

<script lang="ts" setup>
const objectReference = ref<HTMLObjectElement>();
const imageZoom = useDiagramZoom();
const scrollLock = useScrollLock();
const mousemoveNavigation = useMousemoveNavigation(objectReference);
const diagram = imageZoom.zoomDiagram();
const scaleModifier = ref(1);

const MAX_ZOOM = 2;

const zoomIn = () => {
  mousemoveNavigation.toggle(true);

  if (scaleModifier.value < MAX_ZOOM) {
    scaleModifier.value++;
  }
};

const zoomOut = () => {
  if (scaleModifier.value === 1)
    imageZoom.hide();

  if (scaleModifier.value > 1)
    scaleModifier.value--;

  if (scaleModifier.value === 1)
    mousemoveNavigation.toggle(false);
};

watch(diagram, diagram => {
  if (diagram !== null) {
    scrollLock.lock();
    return;
  }

  scrollLock.unlock();
});

watch(scaleModifier, modifier => {
  if (objectReference.value) {
    objectReference.value.style.scale = modifier.toString();
  }

  if (modifier > 1) {
    mousemoveNavigation.reload();
  }
});
</script>

<style lang="scss" scoped>
.image-zoom {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  inset: 0;
  padding: 18px;
  @include zi(zoom-image);


  &__object {
    transition: all 200ms ease-out;
    width: 100%;
    user-select: none;
    cursor: zoom-in;
    transform-origin: center;

    &.active {
      cursor: zoom-out;
    }

    &:deep(svg) {
      width: 100%;
      height: fit-content;
      font-family: "Virgil", 'Montserrat Variable', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }
  }
}

@include theme-dark {
  .image-zoom {
    background: rgba(0, 0, 0, 0.5);

    &__object {
      filter: invert(1);
    }
  }
}
</style>
