<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import { useRoute } from "vue-router";
import type { GetTwitterItem } from "../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import TwitterList from "./list/TwitterList.vue";
import SpoilerCard from "../../base/SpoilerCard.vue";
import PoweredBy from "../source/PoweredBy.vue";

const { t } = useI18n();
const route = useRoute();
const list = ref<Array<GetTwitterItem>>();
const loading = ref<boolean>(false);
const error = ref<boolean>(false);

async function load() {
  try {
    loading.value = true;
    error.value = false;

    const response = await API.coinpaprika.coinTwitter(
      route.params.id as string
    );
    list.value = response.data;
  } catch (error: any) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("twitter.title") }}</h2>
    </header>

    <SpoilerCard
      :title="`${t('twitter.title')} ${
        list && list.length ? `(${list.length})` : ''
      }`"
      @firstOpen="load"
    >
      <template #content>
        <PoweredBy
          site="coinpaprika"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
        <TwitterList :list="list" />
      </template>
    </SpoilerCard>
  </section>
</template>
