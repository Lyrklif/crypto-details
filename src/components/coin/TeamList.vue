<script setup lang="ts">
import { PropType } from "vue";
import type { TeamItem } from "../../api/coinpaprika/types";

defineProps({
  links: Array as PropType<Array<TeamItem>>,
});
</script>

<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th colspan="2">Team</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in links" :key="item.id">
        <td class="border-0 py-1">{{ item.name }}</td>
        <td class="border-0 py-1">{{ item.position }}</td>
      </tr>
    </tbody>
  </table>
</template>
