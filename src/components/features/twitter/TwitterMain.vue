<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import { useRoute } from "vue-router";
import type { GetTwitterItem } from "../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import TwitterList from "./list/TwitterList.vue";

const { t } = useI18n();
const route = useRoute();
const list = ref<Array<GetTwitterItem>>();

async function loadSocial() {
  try {
    const response = await API.coinpaprika.coinTwitter(
      route.params.id as string
    );
    list.value = response.data;
  } catch (error: any) {
    // TODO error
  }
}

loadSocial();
</script>

<template>
  <section v-if="list && list.length">
    <header>
      <h2>{{ t("twitter.title") }}</h2>
    </header>

    <TwitterList :list="list" class="col-12 col-md-8 col-lg-6" />
  </section>
</template>
