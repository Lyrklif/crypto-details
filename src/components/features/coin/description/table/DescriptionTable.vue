<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <table class="table">
    <tbody>
      <tr>
        <td class="py-1">{{ t("coin.started_at") }}</td>
        <td class="py-1">
          <span class="small">
            <i class="fa-solid fa-calendar-days mr-1" />
            <span>{{ $filters.date(coin.started_at) }}</span>
          </span>
        </td>
      </tr>
      <tr>
        <td class="py-1">{{ t("coin.last_data_at") }}</td>
        <td class="py-1">
          <span class="small">
            <i class="fa-solid fa-calendar-days mr-1" />
            <span>{{ $filters.date(coin.last_data_at) }}</span>
          </span>
        </td>
      </tr>
      <tr>
        <td class="py-1">{{ t("coin.hash_algorithm") }}</td>
        <td class="py-1">{{ coin.hash_algorithm }}</td>
      </tr>
      <tr>
        <td class="py-1">{{ t("coin.org_structure") }}</td>
        <td class="py-1">{{ coin.org_structure }}</td>
      </tr>
      <tr>
        <td class="py-1">{{ t("coin.proof_type") }}</td>
        <td class="py-1">{{ coin.proof_type }}</td>
      </tr>

      <tr>
        <td class="py-1">{{ t("coin.type") }}</td>
        <td class="py-1">{{ coin.type }}</td>
      </tr>
    </tbody>
  </table>
</template>
