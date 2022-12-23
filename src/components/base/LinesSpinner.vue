<template>
  <div class="spinner text-center">
    <div
      class="scale"
      v-for="(_, index) in Array(10)"
      :key="`scale-${index}`"
      :style="{ 'animation-delay': `0.${index + 1}s` }"
    />
  </div>
</template>

<style scoped lang="scss">
@-webkit-keyframes v-scaleStretchDelay {
  0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
}

@keyframes v-scaleStretchDelay {
  0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
}

.scale {
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-name: v-scaleStretchDelay;
  display: inline-block;
  margin: 4px;
  width: 6px;
  height: 40px;
  background-color: var(--gray-800);
}
</style>
