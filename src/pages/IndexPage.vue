<template>
  <q-page class="text-brand q-mx-xl">
    <div class="">
      <div class="row justify-evenly items-center bg-dark">
        <div class="column text-center q-pa-md col-xs-12 col-sm-12 col-md-5">
          <div class="text-h4 q-pa-md text-primary">
            Hi, I am Saru. I am an artist in the process of expanding my hobby.
          </div>
          <q-separator size="4px" color="grey" inset />
          <div class="text-body1 q-pa-md">
            I'm an artist who has been working with various forms of mostly 3D
            art for a few years now, and have recently began to focus on art
            more seriously.
          </div>
          <div class="text-h5 q-pa-md">
            <p>
              I am currently:
              <span class="bg-black q-pa-xs rounded-borders text-green"
                >Accepting</span
              >
              Commissions
            </p>
          </div>
        </div>
        <q-separator size="4px" color="grey" inset vertical />
        <div class="q-pa-md col-xs-12 col-sm-12 col-md-5">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            height="max-content"
            autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            class="flex-center bg-accent"
          >
            <q-carousel-slide name="1" class="flex justify-center">
              <q-img
                src="src/assets/gallery/art1.jpg"
                style="max-width: 75%"
                class="border"
              />
            </q-carousel-slide>
            <q-carousel-slide name="2" class="flex justify-center">
              <q-img
                src="src/assets/gallery/art2.jpg"
                style="max-width: 75%"
                class="border"
              />
            </q-carousel-slide>
            <q-carousel-slide name="3" class="flex justify-center">
              <q-img
                src="src/assets/gallery/art3.jpg"
                style="max-width: 75%"
                class="border"
              />
            </q-carousel-slide>
            <q-carousel-slide name="4" class="flex justify-center">
              <q-img
                src="src/assets/gallery/art4.jpg"
                style="max-width: 75%"
                class="border"
              />
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "IndexPage",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
