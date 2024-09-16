<template>
  <q-page class="row justify-center items-stretch content-stretch">
    <!--//////////////////-->
    <!--Stuff Starts Below-->
    <!--//////////////////-->
    <!--////////////////////////-->
    <!--Whole ass page container-->
    <div
      class="column bg-accent items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"
    >
      <!--/////////////////////////////////////////////////-->
      <!--The top part where all the yapping and intro goes-->
      <div class="column text-center col-shrink full-width">
        <!--///////////////////////////////////////////////////////////////-->
        <!--The container for all the three text fields so that they behave-->
        <q-card flat square class="column bg-accent">
          <!--////////////////////////////////////////////-->
          <!--The container for the hi bit-->
          <q-card-section
            flat
            class="text-h3 q-pa-xs bg-secondary column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-pa-md">Hi! I'm Saru</div>
          </q-card-section>
          <q-separator class="bg-blue-8" size="5px"></q-separator>

          <q-card-section>
            <!--div so the image fucking behaves-->
            <q-img
              src="src/assets/website/SaruAvatar.svg"
              style="width: 256px; height: auto"
            ></q-img>
          </q-card-section>

          <!--////////////////////////////////////////////////////-->
          <!--Container for long ass text trying to present myself-->
          <q-card-section flat class="q-px-auto q-py-none">
            I'm a digital 2D and 3D artist living in Berlin and work mostly with
            drawing, sketching, animation and more. Here you can find my works
            and if you like what you see feel free to commission me.
          </q-card-section>
          <!--////////////////////////////////////////////-->
          <!--The container for the commission status part-->
          <q-card-section
            flat
            class="row q-gutter-x-sm q-py-md text-h3 flex-center text-weight-medium text-primary self-center text-shadow"
          >
            <div>I'm currently</div>
            <div class="text-weight-bold text-secondary">accepting</div>
            <div>commissions!</div>
          </q-card-section>

          <!--////////////////////////////////////////-->
          <!--Container for the short contact info bit-->
          <q-card-section class="q-py-none">
            You can contact me through my accounts on social media, or
            alternatively via E-mail at:
          </q-card-section>
          <q-card-section
            class="text-primary text-weight-bold text-shadow q-py-none"
            >synfiv@gmail.com</q-card-section
          >
          <q-card-section></q-card-section>
        </q-card>
      </div>

      <!--////////////////////////////////////////-->
      <!--2nd Section - NEEDS DOING STILL-->
      <div class="col-grow column">
        <q-carousel
          v-model="currentSlide"
          animated
          class="bg-accent col"
          transition-next="slide-left"
          transition-prev="slide-right"
          navigation
          control-color="secondary"
          swipeable
          padding
          autoplay
          infinite
          :fullscreen="fullscreen"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-bind="btnProps"
              size="lg"
              :icon="active ? 'circle' : 'radio_button_unchecked'"
              @click="onClick"
            />
          </template>
          <template #control>
            <q-carousel-control position="top-left" class="text-center">
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
            :key="slide.name"
            :name="slide.name"
            class="column col"
          >
            <div class="flex flex-center q-pb-md col">
              <q-img
                fit="contain"
                class="col"
                :src="slide.imgSrc1"
                position="top"
              ></q-img>
            </div>
          </q-carousel-slide>
        </q-carousel>
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
        imgSrc1: "src/assets/gallery/gallery1.jpg",
      },
      {
        name: "two",
        title: "Two",
        imgSrc1: "src/assets/gallery/gallery3.jpg",
      },
      {
        name: "three",
        title: "Three",
        imgSrc1: "src/assets/gallery/gallery2.jpg",
      },
      {
        name: "four",
        title: "Four",
        imgSrc1: "src/assets/gallery/gallery4.jpg",
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
