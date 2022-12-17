<script setup lang="ts">
import { ref } from "vue";
import API from "../../api";
import { useRoute } from "vue-router";
import type { GetTwitterItem } from "../../api/coinpaprika/types";

const list = ref<Array<GetTwitterItem>>();

async function loadSocial() {
  try {
    const route = useRoute();
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
      <h2>Twitter</h2>
    </header>

    <ul class="list list-unstyled col-12 col-md-8 col-lg-6">
      <li
        v-for="item in list"
        :key="item.status_id"
        class="mb-3 pt-3 pb-1 px-4 card bg-primary shadow-inset border-light"
      >
        <article :class="{ 'pl-3': item.is_retweet }">
          <address class="author">
            <a
              rel="author"
              target="_blank"
              :href="`https://twitter.com/${item.user_name}`"
              :title="item.user_name"
              class="d-flex flex-wrap align-items-center text-decoration-none"
            >
              <img
                :src="item.user_image_link"
                class="shadow-soft p-0 border border-light rounded-circle mr-2"
                :alt="item.user_name"
                height="48"
                width="48"
              />

              <div>
                <h3 class="d-block text-dark lh-100 my-0 h6">
                  {{ item.user_name }}
                </h3>
                <span class="text-gray-700 lh-100">
                  {{ `@${item.user_name}` }}
                </span>
              </div>
            </a>
          </address>

          <a
            :href="item.status_link"
            class="text-decoration-none"
            target="_blank"
          >
            <p class="h6">{{ item.status }}</p>

            <img
              v-if="item.media_link"
              :src="item.media_link"
              class="card-img-top rounded mb-2 image"
            />

            <footer class="d-flex flex-wrap align-items-center">
              <p class="mr-3 mb-1 small text-gray">
                <time :datetime="item.date">{{ date(item.date) }}</time>
              </p>
              <p class="mr-3 mb-1 small text-gray">
                <b>{{ item.retweet_count }}</b>
                Ретвитов
              </p>
              <p class="mr-3 mb-1 small text-gray">
                <b>{{ item.like_count }}</b>
                Лайков
              </p>
            </footer>
          </a>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.list {
  max-height: 500px;
  overflow: auto;
}

.image {
  max-width: 400px;
  max-height: 200px;
  object-fit: cover;
}
</style>
