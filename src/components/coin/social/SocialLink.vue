<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import type { LinkExtended } from "../../../api/coinpaprika/types";
import { LINK_EXTENDED_TYPES } from "../../../api/coinpaprika/types";
import { SOCIAL_ICONS_CLASSES } from "../../../types/social";

const props = defineProps({
  item: Object as PropType<LinkExtended>,
});

const iconClasses = computed(() => {
  if (!props.item) return "";

  switch (props.item.type) {
    case LINK_EXTENDED_TYPES.TWITTER:
      return SOCIAL_ICONS_CLASSES.TWITTER;
    case LINK_EXTENDED_TYPES.TELEGRAM:
      return SOCIAL_ICONS_CLASSES.TELEGRAM;
    case LINK_EXTENDED_TYPES.SLACK:
      return SOCIAL_ICONS_CLASSES.SLACK;
    case LINK_EXTENDED_TYPES.REDDIT:
      return SOCIAL_ICONS_CLASSES.REDDIT;
    case LINK_EXTENDED_TYPES.FACEBOOK:
      return SOCIAL_ICONS_CLASSES.FACEBOOK;
    case LINK_EXTENDED_TYPES.SOURCE_CODE:
      return SOCIAL_ICONS_CLASSES.GITHUB;
    case LINK_EXTENDED_TYPES.MEDIUM:
      return SOCIAL_ICONS_CLASSES.MEDIUM;
    case LINK_EXTENDED_TYPES.YOUTUBE:
      return SOCIAL_ICONS_CLASSES.YOUTUBE;
    case LINK_EXTENDED_TYPES.BLOG:
    case LINK_EXTENDED_TYPES.ANNOUNCEMENT:
      return SOCIAL_ICONS_CLASSES.BINANCE;
    default:
      return SOCIAL_ICONS_CLASSES.SITE;
  }
});
</script>

<template>
  <a
    :href="item.url"
    target="_blank"
    :title="item.url"
    class="d-inline-flex align-items-center btn btn-sm btn-primary py-1"
  >
    <span :class="[iconClasses, 'mr-1']"></span>
    <small>{{ $filters.hostname(item.url) }}</small>
  </a>
</template>
