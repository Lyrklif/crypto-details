<script setup lang="ts">
import { ref } from "vue";
import LocaleChanger from "../../features/LocaleChanger.vue";
import { useI18n } from "vue-i18n";
import { onClickOutside, useSwipe } from "@vueuse/core";
import { SwipeDirection } from "@vueuse/core";
import HeaderItem from "./item/HeaderItem.vue";
import HeaderPin from "./pin/HeaderPin.vue";
import HeaderToggle from "./toggle/HeaderToggle.vue";
import navLinks from "../../../constants/navLinks";

const { t } = useI18n();
const target = ref(null);
const show = ref(false);
const pin = ref(false);

onClickOutside(target, () => hideOnEvent());
const { direction } = useSwipe(target, {
  onSwipeEnd(e: TouchEvent, direction: SwipeDirection) {
    if (direction === SwipeDirection.RIGHT) hideOnEvent();
  },
});

const hideOnEvent = () => {
  if (!pin.value) {
    show.value = false;
    pin.value = false;
  }
};
const toggleShow = () => {
  show.value = !show.value;
  pin.value = false;
};
</script>

<template>
  <div ref="target" class="mh-100 h-100vh app-header">
    <HeaderToggle class="toggle mr-2 mt-2" :show="show" @click="toggleShow" />

    <header
      v-if="show"
      class="content card bg-primary shadow-soft p-2 h-100 pt-6"
    >
      <LocaleChanger class="mb-4" />

      <nav>
        <ul class="list-unstyled">
          <li
            class="animate-up-2 mb-3"
            v-for="item in navLinks"
            :key="t(item.text)"
          >
            <HeaderItem :item="item" />
          </li>
        </ul>
      </nav>

      <HeaderPin :pin="pin" @click="pin = !pin" class="w-100 mt-auto" />
    </header>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  position: fixed;
  top: 0;
  z-index: 99;

  @media screen and (min-width: 576px) {
    position: sticky;
  }
}

.toggle {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.content {
  border-radius: 0;
}
</style>
