<script setup lang="ts">
import { PropType } from "vue";
import type { GetTwitterItem } from "../../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  item: Object as PropType<GetTwitterItem>,
});
</script>

<template>
  <footer class="d-flex flex-wrap align-items-center">
    <p class="mr-3 mb-1 small text-gray">
      <time :datetime="item.date">
        {{ $filters.date(item.date) }}
      </time>
    </p>
    <p class="mr-3 mb-1 small text-gray">
      <b>{{ item.retweet_count }}</b>
      {{ t("twitter.retweets") }}
    </p>
    <p class="mr-3 mb-1 small text-gray">
      <b>{{ item.like_count }}</b>
      {{ t("twitter.likes") }}
    </p>
  </footer>
</template>
