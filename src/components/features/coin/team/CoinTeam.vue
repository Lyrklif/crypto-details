<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";
import type { TeamItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../../base/SpoilerCard.vue";
import PoweredBy from "../../../base/PoweredBy.vue";
import AlertMessage from "../../../base/AlertMessage.vue";
import LinesSpinner from "../../../base/LinesSpinner.vue";

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
      @firstOpen="showCount = true"
    >
      <template #content>
        <PoweredBy
          site="coinpaprika"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />

        <LinesSpinner v-if="loading" />
        <AlertMessage v-else-if="error" :text="errorText" type="error" />
        <AlertMessage v-else-if="!links.length" :text="t('errors.empty')" />

        <table v-else class="table table-striped mb-0">
          <tbody>
            <tr v-for="item in links" :key="`team-${item.id}`">
              <td class="border-0 py-1">{{ item.name }}</td>
              <td class="border-0 py-1">{{ item.position }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </SpoilerCard>
  </section>
</template>
