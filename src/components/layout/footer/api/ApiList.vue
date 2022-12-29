<script setup>
import { useI18n } from "vue-i18n";
import sourceAPI from "../../../../constants/sourceAPI";

const { t } = useI18n();
</script>

<template>
  <div class="d-flex flex-wrap justify-content-center">
    <ul
      class="list-unstyled d-inline-flex mb-2 flex-wrap justify-content-center"
    >
      <li v-for="key in Object.keys(sourceAPI)" :key="`footer-link-${key}`">
        <a
          target="_blank"
          :href="sourceAPI[key].site"
          :title="key"
          class="text-capitalize mr-2"
        >
          {{ key }}
        </a>
      </li>
    </ul>
  </div>
</template>
