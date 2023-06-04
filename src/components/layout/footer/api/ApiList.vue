<script setup>
import { useI18n } from "vue-i18n";
import sourceAPI from "../../../../constants/sourceAPI";

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-wrap justify-content-center">
    <ul
      class="list-unstyled inline-flex mb-2 flex-wrap justify-content-center my-0"
    >
      <li
        v-for="key in Object.keys(sourceAPI)"
        :key="`footer-link-${key}`"
        class="mr-2 mb-2"
      >
        <a
          target="_blank"
          :href="sourceAPI[key].site"
          :title="key"
          class="py-2 capitalize p-button-sm p-button p-component p-button-secondary p-button-outlined no-underline"
        >
          {{ key }}
        </a>
      </li>
    </ul>
  </div>
</template>
