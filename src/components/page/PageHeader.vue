<script setup lang="ts">
import { RouterLink } from "vue-router";

const links: Array<{ to: string; text: string }> = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
];
</script>

<template>
  <header class="header-global">
    <nav
      :class="`
      navbar navbar-main navbar-expand-lg navbar-theme-primary
      headroom navbar-light headroom--not-bottom headroom--not-top headroom--pinned justify-content-center
      `"
    >
      <ul class="nav nav-pills nav-fill flex-row">
        <li
          class="nav-item mr-3 mr-md-0 mb-0"
          v-for="item in links"
          :key="item.text"
        >
          <RouterLink :to="item.to" v-slot="{ isActive }" :title="item.text">
            <span class="btn btn-primary" :class="{ active: isActive }">
              {{ item.text }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
