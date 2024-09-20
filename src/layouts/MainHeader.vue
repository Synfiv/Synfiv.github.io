<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <div class="row flex-center bg-accent full-width q-pa-sm">
        <div>
          <q-img
            src="./website/SaruAvatar.svg"
            style="width: 64px; height: 64px"
          ></q-img>
        </div>
        <div class="text-h2 text-secondary text-weight-regular">Saru</div>
      </div>
      <q-separator size="4px" color="secondary"></q-separator>
      <q-toolbar class="text-black">
        <div class="row col">
          <div class="col-xs-0 col-sm-4"></div>
          <div class="col-xs-12 col-sm-2">
            <q-tabs class="text-h5 text-weight-bold">
              <q-route-tab label="Main" to="/" exact />
              <q-route-tab label="About" to="/AboutPage" exact />
              <q-route-tab label="Prices" to="/PricesPage" exact />
            </q-tabs>
          </div>
          <div class="row col-xs-12 col-sm-2 justify-center">
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
          <div class="col-xs-0 col-sm-4"></div>
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
