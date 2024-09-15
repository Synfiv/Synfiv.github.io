<template>
  <q-page class="q-ma-xl">
    <!--//////////////////-->
    <!--Stuff Starts Below-->
    <!--//////////////////-->
    <!--////////////////////////-->
    <!--Whole ass page container-->
    <div
      class="text-grey-3 column justify-center items-stretch content-stretch"
    >
      <!--/////////////////////////////////////////////////-->
      <!--The top part where all the yapping and intro goes-->
      <div
        class="text-h4 row items-stretch text-center content-stretch justify-center text-weight-medium q-pa-sm"
      >
        <q-bar class="col-12 bg-secondary" style="min-height: 20px"></q-bar>
        <!--The Container for Hero Section-->
        <q-card
          flat
          class="q-pa-sm flex-center flex col-xl-2 col-lg-3 col-md-12 col-sm-12 col-xs-12 bg-accent"
        >
          <!--The stupid face container-->
          <q-card-section class="col-xl-8 col-lg-8 col-sm-10 q-pa-none flex">
            <!--div so the image fucking behaves-->
            <div class="flex" style="min-height: 256px">
              <q-img
                src="src/assets/website/SaruAvatar.svg"
                style="height: 256px; width: 256px"
              ></q-img>
            </div>
          </q-card-section>
        </q-card>

        <!--///////////////////////////////////////////////////////////////-->
        <!--The container for all the three text fields so that they behave-->
        <q-card
          flat
          square
          class="flex-center col-xl-10 col-lg-9 col-md-12 col-sm-12 col-xs-12 bg-accent"
        >
          <!--////////////////////////////////////////////-->
          <!--The container for the commission status part-->
          <q-card-section
            flat
            class="row col-2 q-gutter-x-md text-h3 flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="col-12">Hi! I'm Saru</div>
            <div>I'm currently:</div>
            <div class="text-weight-bold text-green">accepting</div>
            <div>commissions!</div>
          </q-card-section>

          <q-separator inset class="bg-grey-3"></q-separator>

          <!--////////////////////////////////////////////////////-->
          <!--Container for long ass text trying to present myself-->
          <q-card-section flat class="col-6">
            I'm a digital 2D and 3D artist living in Berlin and work mostly with
            drawing and 3D animation, here you can find my works and if you like
            what you see feel free to commission me
          </q-card-section>

          <q-separator inset class="bg-grey-3"></q-separator>

          <!--////////////////////////////////////////-->
          <!--Container for the short contact info bit-->
          <q-card-section flat class="col-4">
            You can contact me through my accounts on social media, or
            alternatively via E-mail at: synfiv@gmail.com
          </q-card-section>
        </q-card>
      </div>

      <!--////////////////////////////////////////-->
      <!--2nd Section - NEEDS DOING STILL-->
      <div class="q-pa-sm col-9">
        <q-card class="bg-accent">
          <q-carousel animated v-model="currentSlide">
            <q-carousel-slide
              v-for="slide in slides"
              :key="slide.name"
              :name="slide.name"
              class="bg-accent flex flex-center text-center"
            >
              <div>
                <h3>{{ slide.title }}</h3>
                <div>{{ slide.description }}</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <q-card-section class="text-center">
            <q-btn-toggle
              v-model="currentSlide"
              :options="[
                { label: '1', value: 'one' },
                { label: '2', value: 'two' },
                { label: '2', value: 'three' },
              ]"
            />
          </q-card-section>
        </q-card>
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
    const currentSlide = ref("one");
    const slides = [
      {
        name: "one",
        title: "One",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus molestias architecto enim blanditiis culpa fugiat perspiciatis praesentium repellendus, fugit laboriosam dicta quae natus sint quam alias optio ea dolor.",
      },
      {
        name: "two",
        title: "Two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus molestias architecto enim blanditiis culpa fugiat perspiciatis praesentium repellendus, fugit laboriosam dicta quae natus sint quam alias optio ea dolor.",
      },
      {
        name: "one",
        title: "One",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus molestias architecto enim blanditiis culpa fugiat perspiciatis praesentium repellendus, fugit laboriosam dicta quae natus sint quam alias optio ea dolor.",
      },
    ];

    return {
      slides,
      currentSlide,
    };
  },
};
</script>
