<script setup lang="ts">
import { PropType } from "vue";
import { SearchCurrencyItem } from "../../api/coinpaprika/types";

const emit = defineEmits(["back"]);
defineProps({
  items: Array as PropType<Array<SearchCurrencyItem>>,
});
</script>

<template>
  <div class="card bg-primary border-light p-2 p-md-4 shadow-inset">
    <header
      class="card-header text-center pb-0 d-flex align-items-center justify-content-between flex-wrap"
    >
      <button
        class="btn btn-primary mr-1 mb-2 animate-left-2"
        type="button"
        @click="emit('back')"
      >
        <span class="mr-1"><span class="fas fa-angle-left"></span></span>
        Вернуться
      </button>

      <h2 class="h4 mb-2">Результаты поиска</h2>
    </header>

    <div class="card-body">
      <ul class="list-unstyled">
        <li
          v-for="item in items"
          :key="item.id"
          class="card bg-primary border-light shadow-soft mb-3 animate-up-2"
        >
          <RouterLink
            :to="{ name: 'coin', params: { id: item.id } }"
            class="p-2 p-md-3"
          >
            <span class="font-small">{{ item.symbol }}</span>
            <h3 class="font-weight-bold">{{ item.name }}</h3>

            <ul class="d-flex list-unstyled">
              <li>
                <span v-if="item.is_new" class="badge badge-secondary mr-1 mb-1"
                  >New</span
                >
              </li>
              <li>
                <span
                  v-if="item.is_active"
                  class="badge badge-success mr-1 mb-1"
                  >Active</span
                >
              </li>
            </ul>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
