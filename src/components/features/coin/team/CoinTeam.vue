<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";
import type { TeamItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../../base/SpoilerCard.vue";
import PoweredBy from "../../../base/PoweredBy.vue";

const { t } = useI18n();
const showCount = ref(false);
defineProps({
  links: Array as PropType<Array<TeamItem>>,
  loading: Boolean as PropType<boolean>,
  error: Boolean as PropType<boolean>,
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

        <table class="table table-striped mb-0">
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
