<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="text-black">
        <div class="col">
          <div class="row flex-center">
            <q-avatar>
              <q-img src="src/assets/website/avatarsmall.png"></q-img>
            </q-avatar>
            <q-toolbar-title class="text-h3 text-weight-bolder"
              >Saru</q-toolbar-title
            >
          </div>
        </div>
        <div class="col">
          <q-tabs class="text-h5 text-weight-bold">
            <q-tab>Main</q-tab>
            <q-tab>About</q-tab>
            <q-tab>Pricing</q-tab>
          </q-tabs>
        </div>
        <div class="col">
          <q-tabs>
            <q-btn
              icon="img:src/assets/website/twitter.svg"
              href="https://twitter.com/SynfIV"
              target="_blank"
              size="max-content"
              label="Twitter"
              no-caps
              outline
              class="col-shrink q-mx-xs"
            />
            <q-btn
              icon="img:src/assets/website/bluesky.svg"
              href="https://bsky.app/profile/synfiv.bsky.social"
              target="_blank"
              size="max-content"
              label="Bluesky"
              no-caps
              outline
              class="col-shrink q-mx-xs"
            />
            <q-btn
              icon="img:src/assets/website/furaffinity.svg"
              href="https://www.furaffinity.net/user/synfiv"
              target="_blank"
              size="max-content"
              label="Furaffinity"
              no-caps
              outline
              class="col-shrink q-mx-xs"
            />
          </q-tabs>
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
