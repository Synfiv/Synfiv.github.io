<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="text-accent">
        <div class="row col-12">
          <div class="col-xs-0 col-sm-4 col-md-4"></div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <q-tabs class="text-h5 text-weight-bold">
              <q-route-tab label="Main" to="/" exact />
              <q-route-tab label="About" to="/AboutPage" exact />
              <q-route-tab label="Prices" to="/PricesPage" exact />
            </q-tabs>
          </div>
          <div class="flex col-xs-12 col-sm-4 col-md-4 flex-center">
            <q-tabs
              class="row q-gutter-x-sm q-my-sm flex-center justify-center"
            >
              <q-btn
                href="https://twitter.com/SynfIV"
                target="_blank"
                size="max-content"
                no-caps
                outline
                class="q-mx-xs bg-secondary"
              >
                <q-icon><q-img src="./website/bluesky.svg"></q-img></q-icon>
              </q-btn>
              <q-btn
                href="https://bsky.app/profile/synfiv.bsky.social"
                target="_blank"
                size="max-content"
                no-caps
                outline
                class="q-mx-xs bg-secondary"
              >
                <q-icon><q-img src="./website/twitter.svg"></q-img></q-icon>
              </q-btn>
              <q-btn
                href="https://www.furaffinity.net/user/synfiv"
                target="_blank"
                size="max-content"
                no-caps
                outline
                class="q-mx-xs bg-secondary"
              >
                <q-icon><q-img src="./website/furaffinity.svg"></q-img></q-icon>
              </q-btn>
            </q-tabs>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
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
