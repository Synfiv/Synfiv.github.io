<template>
  <q-page>
    <div class="flex-center column">
      <div class="text-h3 text-weight-medium q-pa-sm">
        <q-card>
          <q-card-section> Commissions are currently open </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-sm">
        <q-card style="max-width: 1200px">
          <q-card-section>
            <div class="text-h6 text-grey-9">My Content</div>
            <div class="text-subtitle2">Name</div>
          </q-card-section>
          <q-separator inset></q-separator>
          <q-card-section>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque
            nisi aspernatur ea ipsum minus, labore molestias recusandae earum
            perferendis. Harum, dolores sapiente? Enim debitis voluptate
            incidunt, saepe neque adipisci.
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-sm">
        <q-card>
          <q-carousel animated v-model="currentSlide">
            <q-carousel-slide
              v-for="slide in slides"
              :key="slide.name"
              :name="slide.name"
              class="flex flex-center text-center"
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

    <!--
    <div class="row justify-evenly items-center bg-dark">
      <div class="column text-center q-pa-md col-xs-12 col-sm-12 col-md-5">
        <div class="text-h4 q-pa-md text-primary">
          Hi, I am Saru. I am an artist in the process of expanding my hobby.
        </div>
        <q-separator size="4px" color="grey" inset />
        <div class="text-body1 q-pa-md">
          I'm an artist who has been working with various forms of mostly 3D art
          for a few years now, and have recently began to focus on art more
          seriously.
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
          style="max-width: 600px"
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
            <q-img src="art1.jpg" class="border" />
          </q-carousel-slide>
          <q-carousel-slide name="2" class="flex justify-center">
            <q-img src="src/assets/gallery/art2.jpg" class="border" />
          </q-carousel-slide>
          <q-carousel-slide name="3" class="flex justify-center">
            <q-img src="src/assets/gallery/art3.jpg" class="border" />
          </q-carousel-slide>
          <q-carousel-slide name="4" class="flex justify-center">
            <q-img src="src/assets/gallery/art4.jpg" class="border" />
          </q-carousel-slide>
          <q-inner-loading :showing="showing" size="100px" />
        </q-carousel>
      </div>
    </div>
  -->
  </q-page>
</template>
<!--
<script>
import { ref } from "vue";

const showing = ref(true);


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
-->

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
