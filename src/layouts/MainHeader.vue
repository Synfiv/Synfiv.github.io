<template>
<q-layout view="hHh lpr fFf">
  <q-page-container>

      <!-- Site Background Image -->
      <div class="site-background">
        <div class="primary-transparent fit"></div>
      </div>

      <!-- Main Content Container -->
        <div style="width: 100%; min-width: 300px;"  class="flex flex-center flex-no-wrap">
          <!-- v-slot="{ Component }" -->
          <!--
          <transition

          leave-active-class="animated fast fadeOut"
          enter-active-class="animated delay-1s fadeIn"
          >
          <component :is="Component" />
        </transition>-->
          <router-view >
          </router-view>
        </div>



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
