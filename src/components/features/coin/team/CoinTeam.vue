<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";
import type { TeamItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../../base/SpoilerCard.vue";
import PoweredBy from "../../../base/PoweredBy.vue";
import AlertMessage from "../../../base/AlertMessage.vue";
import LinesSpinner from "../../../base/LinesSpinner.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ROWS, ROWS_PER_PAGE } from "@/constants/table";

const { t } = useI18n();
const showCount = ref(false);
defineProps({
  links: { type: Array as PropType<Array<TeamItem>>, default: [] },
  loading: { type: Boolean as PropType<boolean>, default: false },
  error: { type: Boolean as PropType<boolean>, default: false },
  errorText: { type: String as PropType<string>, default: "" },
});
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("coin.team") }}</h2>
    </header>

    <SpoilerCard
      :title="`${t('coin.team')} ${
        showCount && links.length ? `(${links.length})` : ''
      }`"
      site="coinpaprika"
      :loading="loading"
      :fall="error"
      @firstOpen="showCount = true"
    >
      <LinesSpinner v-if="loading" />
      <AlertMessage v-else-if="error" :text="errorText" type="error" />
      <AlertMessage v-else-if="!links.length" :text="t('errors.empty')" />
      <DataTable
        v-else
        :value="links"
        class="w-full p-datatable-sm"
        stripedRows
        removableSort
        paginator
        :rows="ROWS"
        :rowsPerPageOptions="ROWS_PER_PAGE"
        :alwaysShowPaginator="false"
      >
        <Column
          field="name"
          :header="t('team.name')"
          sortable
          sortField="name"
        />
        <Column
          field="position"
          :header="t('team.position')"
          sortable
          sortField="position"
        />
      </DataTable>
    </SpoilerCard>
  </section>
</template>
