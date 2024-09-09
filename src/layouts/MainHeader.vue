<template>
  <q-layout view="lHh lpr lFf">
    <div class="row justify-center">
      <q-header class="">
        <div class="flex items-stretch text-grey-10 bg-secondary">
          <div class="flex justify-end row-grow">
            <div class="flex q-px-lg text-h4 row-1">Saru</div>
          </div>
          <div class="flex justify-start row-1 row-grow">
            <q-tabs v-model="tab" shrink stretch>
              <q-route-tab to="/" label="Main Page" />
              <q-route-tab to="/AboutPage" label="About" />
              <q-route-tab to="/PricingPage" label="Pricing" />
            </q-tabs>
          </div>
        </div>
      </q-header>
    </div>

    <!-- (Optional) The Footer -->
    <q-footer class="bg-accent q-pb-md q-pt-sm">
      <q-tabs v-model="tab">
        <div class="row q-gutter-lg">
          <q-btn
            icon="img:src/assets/website/twitter.svg"
            href="https://twitter.com/SynfIV"
            target="_blank"
            size="max-content"
            label="Twitter"
            no-caps
            outline
            class="col-shrink"
          />
          <q-btn
            icon="img:src/assets/website/bluesky.svg"
            href="https://bsky.app/profile/synfiv.bsky.social"
            target="_blank"
            size="max-content"
            label="Bluesky"
            no-caps
            outline
            class="col-shrink"
          />
          <q-btn
            icon="img:src/assets/website/furaffinity.svg"
            href="https://www.furaffinity.net/user/synfiv"
            target="_blank"
            size="max-content"
            label="Furaffinity"
            no-caps
            outline
            class="col-shrink"
          />
        </div>
      </q-tabs>
    </q-footer>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("images"),
    };
  },
};
</script>
