<script setup lang="ts">
import API from "../api";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { GetCoinByIDResponse } from "../api/coinpaprika/types";

const coin = ref<GetCoinByIDResponse>();

async function load() {
  try {
    const route = useRoute();
    const response = await API.coinpaprika.getCoinByID(
      route.params.id as string
    );
    coin.value = response.data;
    console.log("TTT data", response.data);
  } catch (error: any) {
    console.log("TTT eroor", error.response);
  }
}

load();
</script>

<template>
  <div class="about">
    <h1>This is an coin page</h1>
  </div>
</template>
