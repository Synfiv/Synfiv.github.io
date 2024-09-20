<template>
  <q-page style="height: 95vh">
    <div class="row justify-center fit">
      <div class="column bg-info col-xl-6 col-lg-8 col-md-10 col-xs-12 no-wrap">
        <div class="column bg-accent col-grow">
          <q-carousel
            v-model="currentSlide"
            class="col bg-accent"
            transition-next="slide-left"
            transition-prev="slide-right"
            control-color="black"
            animated
            navigation
            swipeable
            infinite
            arrows
            :fullscreen="fullscreen"
          >
            <template #control>
              <q-carousel-control>
                <q-btn
                  color="secondary"
                  text-color="grey-3"
                  icon="fullscreen"
                  dense
                  @click="fullscreen = !fullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
            <q-carousel-slide
              v-for="slide in slides"
              class=""
              :key="slide.name"
              :name="slide.name"
            >
              <q-img class="fit" fit="scale-down" :src="slide.imgSrc1"></q-img>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="column col-shrink text-center">
          <q-separator size="2px"></q-separator>
          <q-card flat square class="column bg-accent">
            <q-card-section flat class="q-px-auto col-shrink q-py-none">
              I'm Saru, a 2D/3D digital artist from Berlin working with
              Sketches, Drawings, Animations and more
            </q-card-section>
            <q-card-section
              flat
              class="row q-gutter-x-sm col-shrink q-py-xs text-h3 flex-center text-weight-medium text-primary self-center text-shadow"
            >
              <div>I'm currently</div>
              <div class="text-weight-bold text-secondary">accepting</div>
              <div>commissions!</div>
            </q-card-section>
            <q-card-section class="q-py-xs col-shrink">
              <div>
                You can contact me through my accounts on social media, or
                alternatively via E-mail at:
              </div>
              <div class="text-primary text-weight-bold text-shadow q-py-none">
                synfiv@gmail.com
              </div>
            </q-card-section>
          </q-card>
          <q-separator size="2px"></q-separator>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

const showing = ref(true);

export default {
  name: "IndexPage",

  setup() {
    const fullscreen = ref(false);
    const currentSlide = ref("one");
    const slides = [
      {
        name: "one",
        title: "One",
        imgSrc1: "Gallery1.jpg",
      },
      {
        name: "two",
        title: "Two",
        imgSrc1: "Gallery2.jpg",
      },
      {
        name: "three",
        title: "Three",
        imgSrc1: "Gallery3.jpg",
      },
      {
        name: "four",
        title: "Four",
        imgSrc1: "Gallery4.jpg",
      },
    ];

    return {
      fullscreen,
      slides,
      currentSlide,
    };
  },
};
</script>
