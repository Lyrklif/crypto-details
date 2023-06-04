<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import API from "../../../api";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";

const { t } = useI18n();
const route = useRoute();

const AsyncContent = defineAsyncComponent(
  () => import("./list/TwitterList.vue")
);
</script>

<template>
  <SpoilerCard
    :title="t('twitter.title')"
    site="coinpaprika"
    :asyncComponent="AsyncContent"
    :apiMethod="API.coinpaprika.coinTwitter"
    :apiParams="{ coin_id: route.params.id }"
  />
</template>
