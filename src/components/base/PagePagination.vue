<script setup lang="ts">
import type { PropType } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
defineProps({
  count: {
    type: Number as PropType<number>,
    required: true,
  },
  page: {
    type: Number as PropType<number>,
    required: true,
  },
  routeName: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>

<template>
  <nav>
    <ol class="pagination circle-pagination">
      <li class="page-item" :class="{ disabled: page <= 1 }">
        <RouterLink
          :to="{ name: routeName, params: { page: page - 1 } }"
          class="page-link"
          :disabled="page <= 1"
          :event="page <= 1 ? '' : 'click'"
        >
          <i class="icon-angle-double-right left-icon" />
        </RouterLink>
      </li>

      <li
        v-for="index in [...Array(count).keys()].map((i) => i + 1)"
        :key="`pagination-${index}`"
        class="page-item"
        :class="{ active: page === index }"
      >
        <span v-if="page === index" class="page-link">
          {{ index }}
        </span>
        <RouterLink
          v-else
          :to="{ name: routeName, params: { page: index } }"
          class="page-link"
        >
          {{ index }}
        </RouterLink>
      </li>

      <li class="page-item" :class="{ disabled: page >= count }">
        <RouterLink
          :to="{ name: routeName, params: { page: page + 1 } }"
          class="page-link"
          :disabled="page >= count"
          :event="page >= count ? '' : 'click'"
        >
          <i class="icon-angle-double-right" />
        </RouterLink>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.left-icon {
  transform: rotate(180deg);
}
</style>
