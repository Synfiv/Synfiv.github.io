<template>
  <q-page
    padding
    class="row justify-center items-stretch content-stretch q-pa-none"
  >
    <!-- content -->
    <div
      class="column items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"
    >
      <div class="column text-center col-shrink full-width">
        <q-card class="bg-accent q-pb-md column">

          <!-- Headline -->
          <q-card-section
            flat
            class="text-h4 q-px-none bg-secondary column flex-center text-weight-medium text-primary text-shadow"
          >
            <div>Detailed Pricing Information</div>
          </q-card-section>
          <q-separator class="bg-blue-8" size="5px"></q-separator>

          <!-- Text -->
            <q-card-section
              >In this page you can find the rough guideliens of how I evaluate
              the cost for a commission. To contact me, please message my social
              media accounts, or use my E-mail:
              <div class="text-primary text-weight-regular text-shadow">
                synfiv@gmail.com
              </div>
            </q-card-section>
            <q-card-section>
              I tend to set the price based on the amount of effort as-well as
              time that certain aspects of a piece take. The tables set out in
              this page are guidelines for the prince range I will be asking
              based on the desired outcome. It is flexible and depends on the
              piece in question.
            </q-card-section>
            <q-card-section>
              A very basic sketch can be provided ahead of the payment being
              transferred to demonstrate the skeleton of the piece at no charge
              or commitment (within reason), and once a satisfactory price is
              agreed on a partial payment of the price will be asked for before
              work starts.
            </q-card-section>
            <q-card-section class="text-primary text-shadow">
              For questions and inquiries regarding 3D modelling or animation,
              please contact me directly.
            </q-card-section>
        </q-card>
      </div>
      <div class="column text-center col-grow full-width">
        <q-card flat square class="bg-accent q-py-md column col">

          <!-- Headline -->
          <q-section>
            <q-separator
                      inline
                      size="4px"
                      color="primary"
                    ></q-separator>
            <q-card-section
              flat
              class="text-h3 q-py-xs q-px-none bg-dark column flex-center text-weight-medium text-primary text-shadow"
            >
              <div class="q-pa-md">Headshot</div>
            </q-card-section>
            <q-separator
                      inline
                      size="4px"
                      color="primary"
                    ></q-separator>
          </q-section>

          <!-- Contents-->
          <q-section class="row justify-center">
            <div class="column">
              <div>Section</div>
              <div>Section</div>
            </div>
          </q-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PricesPage",

  setup() {
    const lineartEntries = ref([
      {
        label: "Rough Lines",
        price: "5 €",
      },
      {
        label: "Sketched Lines",
        price: "10 €",
      },
      {
        label: "Solid Lines",
        price: "20 €",
      },
      {
        label: "Inked Lines",
        price: "30 €",
      },
    ]);
    const colorEntries = ref([
      {
        label: "Monochrome",
        price: "None",
      },
      {
        label: "Flat Colors",
        price: "5 €",
      },
      {
        label: "Simple Tones",
        price: "10 €",
      },
      {
        label: "Complex Tones",
        price: "20 €",
      },
    ]);
    const shadingEntries = ref([
      {
        label: "No Shading",
        price: "None",
      },
      {
        label: "Basic Shading",
        price: "5 €",
      },
      {
        label: "Complex Shading",
        price: "10 €",
      },
      {
        label: "Rendered Shading",
        price: "20 €",
      },
    ]);
    const framingEntries = ref([
      {
        label: "Headshot",
        price: "5 €",
      },
      {
        label: "Upper-Body",
        price: "10 €",
      },
      {
        label: "¾-Body",
        price: "15 €",
      },
      {
        label: "Full-Body",
        price: " 20€",
      },
    ]);
    return {
      lineartEntries,
      colorEntries,
      shadingEntries,
      framingEntries,
    };
  },
};
</script>
