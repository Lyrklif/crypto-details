<script setup lang="ts">
import { ref } from "vue";
import LocaleChanger from "../../features/LocaleChanger.vue";
import CurrencyChanger from "../../features/CurrencyChanger.vue";
import { useI18n } from "vue-i18n";
import { onClickOutside, SwipeDirection, useSwipe } from "@vueuse/core";
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

    <header v-if="show" class="card p-2 h-100 shadow-2 pt-8">
      <LocaleChanger class="mb-4" />
      <CurrencyChanger class="mb-4" />

      <nav>
        <ul class="list-unstyled">
          <li v-for="item in navLinks" :key="t(item.text)" class="mb-3">
            <RouterLink
              class="p-button p-component p-button-link p-button-secondary p-button-outlined"
              :to="{ name: item.name, params: item.params }"
              :title="t(item.text)"
            >
              {{ t(item.text) }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <HeaderPin :pin="pin" @click="pin = !pin" class="mt-auto mx-auto" />
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
</style>
