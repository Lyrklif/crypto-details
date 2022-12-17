<script setup lang="ts">
import API from "../api";
import { useRoute } from "vue-router";
import { ref, Ref } from "vue";
import { GetCoinByIDResponse } from "../api/coinpaprika/types";
import SocialLinks from "../components/coin/social/SocialLinks.vue";
import TeamList from "../components/coin/TeamList.vue";
import TagList from "../components/coin/TagList.vue";

let coin: Ref<GetCoinByIDResponse | undefined> = ref();

async function load() {
  try {
    const route = useRoute();
    const response = await API.coinpaprika.getCoinByID(
      route.params.id as string
    );
    coin.value = response.data;
  } catch (error: any) {
    // TODO error
  }
}

load();
</script>

<template>
  <div v-if="coin">
    <header class="d-flex flex-wrap align-items-center">
      <div
        class="border border-light icon icon-shape-sm mr-3 rounded-circle shadow-inset"
      >
        <img :src="coin.logo" :alt="coin.name" height="40" width="40" />
      </div>
      <h1 class="mr-1">{{ coin.name }}</h1>
      <span>{{ coin.symbol }}</span>
    </header>

    <ul class="d-flex flex-row list-unstyled">
      <li class="mr-1 mb-1">
        <span v-if="coin.is_new" class="badge badge-info">New</span>
      </li>
      <li class="mr-1 mb-1">
        <span class="badge badge-info">Rank {{ coin.rank }}</span>
      </li>
      <li v-if="coin.is_active" class="mr-1 mb-1">
        <span class="badge badge-success">Active</span>
      </li>
      <li v-if="coin.open_source" class="mr-1 mb-1">
        <span class="badge badge-success">Open Source</span>
      </li>
      <li v-if="coin.hardware_wallet" class="mr-1 mb-1">
        <span class="badge badge-success">Hardware Wallet</span>
      </li>
      <li class="mr-1 mb-1">
        <span class="badge badge-success">{{ coin.development_status }}</span>
      </li>
    </ul>

    <TagList :links="coin.tags" />
    <SocialLinks :links="coin.links_extended" />

    <p class="lead">{{ coin.description }}</p>

    <div class="d-flex align-items-center">
      <p class="mb-0 mr-2">Started at</p>
      <span class="small">
        <i class="fa-solid fa-calendar-days mr-1" />
        <span>{{ date(coin.started_at) }}</span>
      </span>
    </div>
    <div class="d-flex align-items-center">
      <p class="mb-0 mr-2">Last data at</p>
      <span class="small">
        <i class="fa-solid fa-calendar-days mr-1" />
        <span>{{ date(coin.last_data_at) }}</span>
      </span>
    </div>

    <p>Hash algorithm: {{ coin.hash_algorithm }}</p>
    <p>Org structure: {{ coin.org_structure }}</p>
    <p>Proof type: {{ coin.proof_type }}</p>
    <p>Type: {{ coin.type }}</p>
    <a :href="coin.whitepaper.link" target="_blank">
      {{ coin.whitepaper.link }}
    </a>

    <TeamList :links="coin.team" />
  </div>
</template>
