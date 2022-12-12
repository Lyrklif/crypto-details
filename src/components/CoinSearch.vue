<script setup lang="ts">
import { ref } from "vue";
import API from "../api";

const coins = ref([]);

// TODO uncomment
// async function load() {
//   const response = await API.coingecko.trending();
//   console.log("TTT response", response);
// }
// load();
</script>

<template>
  <form>
    <div class="form-group">
      <label class="input-group mb-4" for="coin-name">
        <input id="coin-name" type="text" class="form-control" />
      </label>
    </div>

    <ul v-if="coins.length" class="flex-row">
      <li v-for="item in coins" :key="item.id">
        <button
          type="button"
          class="btn btn-primary btn-pill text-dark mr-1 mb-1"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>

    <button type="submit" class="btn btn-block btn-primary">Поиск</button>
  </form>
</template>
