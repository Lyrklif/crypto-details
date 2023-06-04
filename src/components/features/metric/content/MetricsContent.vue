<script setup lang="ts">
import { computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetMetricDataResponse } from "../../../../api/messari/types";
import RoiByYearTable from "./table/RoiByYearTable.vue";
import RiskTable from "./table/RiskTable.vue";
import ActivityTable from "./table/ActivityTable.vue";
import SupplyTable from "./table/SupplyTable.vue";
import DistributionTable from "./table/DistributionTable.vue";

const { t } = useI18n();

const props = defineProps({
  data: Object as PropType<{ data: AssetMetricDataResponse }>,
});

const metric = computed((): AssetMetricDataResponse | null => {
  return props.data?.data || null;
});
</script>

<template>
  <div>
    <div class="flex flex-wrap">
      <RoiByYearTable class="col-12 md:col-6" :data="metric" />
      <RiskTable class="col-12 md:col-6" :data="metric" />
    </div>

    <div class="flex flex-wrap">
      <div class="col-12 md:col-6 mb-3">
        <SupplyTable class="mb-3" :data="metric" />
        <ActivityTable :data="metric" />
      </div>
      <DistributionTable class="col-12 md:col-6" :data="metric" />
    </div>
  </div>
</template>
