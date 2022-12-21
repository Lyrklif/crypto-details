<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <div>
    <p class="lead mb-4">{{ coin.description }}</p>

    <table class="table col-12 col-md-8 col-lg-6">
      <tbody>
        <tr>
          <td class="py-1">{{ t("coin.started_at") }}</td>
          <td class="py-1">
            <span class="small">
              <i class="fa-solid fa-calendar-days mr-1" />
              <span>{{ date(coin.started_at) }}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td class="py-1">{{ t("coin.last_data_at") }}</td>
          <td class="py-1">
            <span class="small">
              <i class="fa-solid fa-calendar-days mr-1" />
              <span>{{ date(coin.last_data_at) }}</span>
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

    <a
      :href="coin.whitepaper.link"
      target="_blank"
      :title="t('coin.whitepaper')"
      class="btn btn-primary mb-4 animate-up-2"
    >
      <i class="fa-solid fa-paperclip mr-1"></i>
      {{ t("coin.whitepaper") }}
    </a>
  </div>
</template>
