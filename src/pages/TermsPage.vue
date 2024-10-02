<template>
  <q-page class="column flex-center" style="max-width: 100%;" padding>


    <!-- Main Div-->
    <div
      style="max-width: 1000px;"
      class="  column flex-center primary-transparent q-py-md rounded-borders"
      >

        <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>

        <!-- Headline -->
      <q-card-section>
        <div style="border-radius: 100px;" class="q-pa-md text-h5 text-center text-secondary text-weight-bold bg-accent">
          Terms of Service
        </div>
      </q-card-section>


      <!-- Intro Text -->
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <div class="dense-text text-h5 q-pb-sm">
          Commission Process
        </div>
      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <div class="dense-text q-pb-sm">
              When accepting a commission I first require a prompt - This can be as detailed or ambiguous as you'd like - along with any references should any be relevant.
            </div>
            <div class="dense-text q-pb-sm">
              Once I get an understanding of what it should be, I provide a very primitive sketch that conveys the broad strokes of what it would look like, for confirmation and any initial adjustments.
            </div>
            <div class="dense-text q-pb-sm">
              Should you find it satisfactory, a price will be agreed upon and paid in advance, and once the payment is transferred it will be added to my work queue.
            </div>
            <div class="dense-text q-pb-sm">
              During my work I tend to send frequent updates, the frequency can be toned down should that be desired.
            </div>
            <div class="dense-text q-pb-sm">
              In earlier stages of the drawing adjustments can be done at no cost. After lines are solidified and in particular after coloring and shading, changes may incure a cost depending on the effort required.
            </div>
            <div class="dense-text q-pb-sm">
              Once a piece is finalized, I will send it in the desired format (Usually JPEG/PNG) along with any relevant variances, exported at the resolution they are made in (Approximated 3000px on either side) via an archive file.
            </div>
      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <div class="dense-text text-h5 q-pb-sm">
          What I Will Draw
        </div>
      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <q-list separator class="column">
          <q-item>
              Human Characters
          </q-item>
          <q-item>
              Most Furry species
          </q-item>
          <q-item>
            Objects, Landscapes
          </q-item>
          <q-item>
            Designs
          </q-item>
        </q-list>

      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <div class="dense-text text-h5 q-pb-sm">
          What I Won't Draw
        </div>
      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <q-list separator class="column">
          <q-item class="text-left">
              Uncomfortable subjects such as Gore
          </q-item>
          <q-item>
            Certain kinks (Can be inquired)
          </q-item>
          <q-item>
            Underage Content
          </q-item>
          <q-item>
              Anime
          </q-item>
        </q-list>

      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>

      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <div class="dense-text text-h6 q-pb-sm">
              I reserve the right to deny a commission should I be too uncomfortable with it. In such a case, a full/partial refund (depending on the amount of work) will be provided.
            </div>
      </q-card-section>



      <q-card-section></q-card-section>
    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>

    <!-- Navigation Buttons -->
    <div class="q-py-md full-width flex-center justify-center text-no-wrap  row">
      <q-btn to="/" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="accent" color="secondary" label="Go Back" />
      <div class="q-py-md full-width flex-center justify-center text-no-wrap q-gutter-y-md q-gutter-x-xs row">
        <q-btn disable to="/Showcase" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-5 text-h5 text-weight-medium" text-color="secondary" color="accent" label="Showcase (WIP)" />
        <q-btn to="/aboutPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="About" />
        <q-btn to="/PricesPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="Commissions" />
      </div>
    </div>

    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>
  </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

const showing = ref(true);

export default {
  name: "TermsPage",
};
</script>
