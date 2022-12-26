import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CoinView from "../views/CoinView.vue";
import NewsView from "../views/NewsView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      meta: { title: "pagination.last_news" },
    },
    {
      path: "/coin/:id",
      name: "coin",
      component: CoinView,
      meta: { title: "pagination.coin" },
    },
  ],
});

export default router;
