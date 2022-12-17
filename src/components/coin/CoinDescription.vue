<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../api/coinpaprika/types";

defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <div>
    <a
      :href="coin.whitepaper.link"
      target="_blank"
      class="btn btn-primary mb-4 animate-up-2"
    >
      <i class="fa-solid fa-paperclip mr-1"></i>
      Whitepaper
    </a>

    <p class="lead mb-4">{{ coin.description }}</p>

    <table class="table col-12 col-md-8 col-lg-6">
      <tbody>
        <tr>
          <td class="py-1">Started at</td>
          <td class="py-1">
            <span class="small">
              <i class="fa-solid fa-calendar-days mr-1" />
              <span>{{ date(coin.started_at) }}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td class="py-1">Last data at</td>
          <td class="py-1">
            <span class="small">
              <i class="fa-solid fa-calendar-days mr-1" />
              <span>{{ date(coin.last_data_at) }}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td class="py-1">Hash algorithm</td>
          <td class="py-1">{{ coin.hash_algorithm }}</td>
        </tr>
        <tr>
          <td class="py-1">Org structure</td>
          <td class="py-1">{{ coin.org_structure }}</td>
        </tr>
        <tr>
          <td class="py-1">Proof type</td>
          <td class="py-1">{{ coin.proof_type }}</td>
        </tr>

        <tr>
          <td class="py-1">Type</td>
          <td class="py-1">{{ coin.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
