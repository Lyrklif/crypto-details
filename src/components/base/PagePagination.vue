<script setup lang="ts">
import type { PropType } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
defineProps({
  count: {
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
      <li class="page-item" :class="{ disabled: +route.params.page <= 1 }">
        <RouterLink
          :to="{ name: routeName, params: { page: route.params.page - 1 } }"
          class="page-link"
        >
          <i class="icon-angle-double-right left-icon" />
        </RouterLink>
      </li>

      <li
        v-for="(_, index) in Array(count)"
        :key="`pagination-${index}`"
        class="page-item"
        :class="{ active: +route.params.page === index + 1 }"
      >
        <RouterLink
          :to="{ name: routeName, params: { page: index + 1 } }"
          v-slot="{ isActive }"
          :class="{ active: isActive }"
          class="page-link"
        >
          {{ index + 1 }}
        </RouterLink>
      </li>

      <li class="page-item" :class="{ disabled: +route.params.page >= count }">
        <RouterLink
          :to="{ name: routeName, params: { page: +route.params.page + 1 } }"
          class="page-link"
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
