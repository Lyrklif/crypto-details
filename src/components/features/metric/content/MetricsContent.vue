<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetMetricDataResponse } from "../../../../api/messari/types";
import RoiByYearTable from "./table/RoiByYearTable.vue";
import RiskTable from "./table/RiskTable.vue";
import ActivityTable from "./table/ActivityTable.vue";
import SupplyTable from "./table/SupplyTable.vue";
import DistributionTable from "./table/DistributionTable.vue";

const { t } = useI18n();

defineProps({
  data: Object as PropType<AssetMetricDataResponse>,
});
</script>

<template>
  <div>
    <div class="flex flex-wrap">
      <RoiByYearTable class="col-12 md:col-6" :data="data" />
      <RiskTable class="col-12 md:col-6" :data="data" />
    </div>

    <div class="flex flex-wrap">
      <div class="col-12 md:col-6 mb-3">
        <SupplyTable class="mb-3" :data="data" />
        <ActivityTable :data="data" />
      </div>
      <DistributionTable class="col-12 md:col-6" :data="data" />
    </div>
  </div>
</template>
