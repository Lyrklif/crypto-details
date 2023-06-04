<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";

const { t } = useI18n();
const store = useCoinStore();
const fields = "technology,token_distribution,background,organizations";

const AsyncContent = defineAsyncComponent(
  () => import("./content/ProfileContent.vue")
);
</script>

<template>
  <SpoilerCard
    v-if="store.symbol"
    :title="t('profile.title')"
    site="messari"
    :asyncComponent="AsyncContent"
    :apiMethod="API.messari.assetProfile"
    :apiParams="{ assetKey: store.symbol, fields }"
  />
</template>
