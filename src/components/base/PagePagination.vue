<script setup lang="ts">
import type { PropType } from "vue";

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
      <li class="page-item">
        <a class="page-link" href="#"
          ><i class="fas fa-angle-double-left"></i
        ></a>
      </li>

      <li
        class="page-item"
        v-for="(_, index) in Array(count)"
        :key="`pagination-${index}`"
      >
        <a class="page-link" href="#">1</a>
        <RouterLink
          :to="{ name: routeName, params: { page: index + 1 } }"
          v-slot="{ isActive }"
          :class="{ active: isActive }"
        >
          {{ index + 1 }}
        </RouterLink>
      </li>

      <li class="page-item">
        <a class="page-link" href="#"
          ><i class="fas fa-angle-double-right"></i
        ></a>
      </li>
    </ol>
  </nav>
</template>
