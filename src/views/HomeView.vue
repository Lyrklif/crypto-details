<script setup lang="ts">
import CoinSearch from "@/components/CoinSearch.vue";
</script>

<template>
  <div class="row justify-content-center mt-7">
    <div class="col-12 col-md-8 col-lg-6 justify-content-center">
      <div class="card bg-primary shadow-soft border-light p-4">
        <div class="card-header text-center pb-0">
          <h2 class="h4">Введите название криптовалюты</h2>
        </div>
        <div class="card-body">
          <CoinSearch />
        </div>
      </div>
    </div>
  </div>
</template>
