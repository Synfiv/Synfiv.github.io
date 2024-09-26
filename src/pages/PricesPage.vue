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
          <q-card-section
            flat
            class="text-h3 q-py-xs q-px-none bg-secondary column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-pa-md">Detailed Pricing Information</div>
          </q-card-section>
          <q-separator class="bg-blue-8" size="5px"></q-separator>
          <div class="q-px-xl">
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
          </div>
        </q-card>
      </div>
      <div class="column text-center col-grow full-width">
        <q-card flat square class="bg-accent q-py-md column col">
          <q-separator
                    inline
                    size="4px"
                    color="primary"
                  ></q-separator>
          <q-card-section
            flat
            class="text-h3 q-py-xs q-px-none bg-dark column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-pa-md">Base Cost</div>
          </q-card-section>
          <q-separator
                    inline
                    size="4px"
                    color="primary"
                  ></q-separator>
          <q-separator
                    inline
                    size="10px"
                    color="accent"
                  ></q-separator>
          <div class="col-grow bg-accent">
            <q-list class="row">
              <!---->
              <q-list class="col-grow">
                <div>
                  <q-item-section class="text-h2 text-primary bg-dark q-pb-sm"
                    >Framing</q-item-section
                  >
                  <q-separator
                    inline
                    size="2px"
                    color="secondary"
                  ></q-separator>
                </div>
                <div class="row">
                  <div class="column col no-wrap text-center">
                    <q-item v-for="item in framingEntries" :key="item.label">
                      <q-item-section class="col text-no-wrap smallerFont"
                        >{{ item.label }}
                      </q-item-section>
                    </q-item>
                  </div>
                  <q-separator vertical color="grey-3" inset></q-separator>
                  <div class="column col text-center">
                    <q-item v-for="item in framingEntries" :key="item.price">
                      <q-item-section>{{ item.price }} </q-item-section>
                    </q-item>
                  </div>
                </div>
              </q-list>
              <q-list class="col-grow">
                <div>
                  <q-item-section class="text-h2 text-primary bg-dark q-pb-sm"
                    >Lineart</q-item-section
                  >
                  <q-separator
                    inline
                    size="2px"
                    color="secondary"
                  ></q-separator>
                </div>
                <!---->
                <div class="row">
                  <div class="column col no-wrap text-center">
                    <q-item v-for="item in lineartEntries" :key="item.label">
                      <q-item-section class="col text-no-wrap smallerFont"
                        >{{ item.label }}
                      </q-item-section>
                    </q-item>
                  </div>
                  <q-separator vertical color="grey-3" inset></q-separator>
                  <div class="column col text-center">
                    <q-item v-for="item in lineartEntries" :key="item.price">
                      <q-item-section>{{ item.price }} </q-item-section>
                    </q-item>
                  </div>
                </div>
              </q-list>
              <!---->
              <q-list class="col-grow">
                <div>
                  <q-item-section class="text-h2 text-primary bg-dark q-pb-sm"
                    >Color</q-item-section
                  >
                  <q-separator
                    inline
                    size="2px"
                    color="secondary"
                  ></q-separator>
                </div>
                <div class="row">
                  <div class="column col no-wrap text-center">
                    <q-item v-for="item in colorEntries" :key="item.label">
                      <q-item-section class="col text-no-wrap smallerFont"
                        >{{ item.label }}
                      </q-item-section>
                    </q-item>
                  </div>
                  <q-separator vertical color="grey-3" inset></q-separator>
                  <div class="column col text-center">
                    <q-item v-for="item in colorEntries" :key="item.price">
                      <q-item-section>{{ item.price }} </q-item-section>
                    </q-item>
                  </div>
                </div>
              </q-list>
              <!---->
              <q-list class="col-grow">
                <div>
                  <q-item-section class="text-h2 text-primary bg-dark q-pb-sm"
                    >Shading</q-item-section
                  >
                  <q-separator
                    inline
                    size="2px"
                    color="secondary"
                  ></q-separator>
                </div>
                <div class="row">
                  <div class="column col no-wrap text-center">
                    <q-item v-for="item in shadingEntries" :key="item.label">
                      <q-item-section class="col text-no-wrap smallerFont"
                        >{{ item.label }}
                      </q-item-section>
                    </q-item>
                  </div>
                  <q-separator vertical color="grey-3" inset></q-separator>
                  <div class="column col text-center">
                    <q-item v-for="item in shadingEntries" :key="item.price">
                      <q-item-section>{{ item.price }} </q-item-section>
                    </q-item>
                  </div>
                </div>
              </q-list>
            </q-list>
          </div>
          <q-separator
                    inline
                    size="4px"
                    color="primary"
                  ></q-separator>
          <q-card-section
            flat
            class="text-h3 q-py-xs q-px-none bg-dark column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-pa-md">Additional Costs</div>
          </q-card-section>
          <q-separator
                    inline
                    size="4px"
                    color="primary"
                  ></q-separator>
          <q-separator
                    inline
                    size="10px"
                    color="accent"
                  ></q-separator>
          <div class="row col-grow">
            <!--

            First Card
            -->
            <q-card flat class="col-md-6 col-sm-12 bg-accent column">
              <!--Headline-->
              <div class="text-h2 bg-dark q-pb-sm text-primary text-shadow">
                Characters
              </div>
              <q-bar style="height: 2px" class="bg-secondary"></q-bar>

              <!--Pricing Body

              -->
              <q-card-section class="text-left no-wrap column bg-info col">
                <!--First Line

                -->
                <div class="col">
                  <div class="row q-pa-md bg-accent flex-center fit">
                    <div class="col-6 text-h5 flex-center text-shadow">
                      Additional Characters:
                    </div>
                    <div class="col-6 row text-h5 flex-center text-shadow">
                      <div>
                        <span>An added 50% of</span>
                        <span class="q-pl-sm text-primary">base cost</span>
                      </div>
                    </div>
                    <div class="col-12 q-pt-md">
                      Each additional character will add an extra 50% of the
                      base (Lineart, Color, Shading) cost
                    </div>
                  </div>
                  <q-separator size="1px" color="secondary"></q-separator>
                </div>

                <!--Second Line

                -->
                <div class="col">
                  <div class="row q-pa-md bg-accent flex-center fit">
                    <div class="col-6 text-h5 flex-center text-shadow">
                      Complex Bodies / Complex Patterns
                    </div>
                    <div class="col-6 text-h5 text-shadow text-center">
                      Free <q-icon name="east"></q-icon> Variable
                    </div>
                    <div class="col-12 q-pt-md">
                      With particularly compelx characters there may be an
                      additional charge depending on the added time and effort
                      required
                    </div>
                  </div>
                  <q-separator size="1px" color="secondary"></q-separator>
                </div>

                <!--Third Line

                -->
                <div class="col">
                  <div class="row q-pa-md bg-accent flex-center fit">
                    <div class="col-6 text-h5 flex-center text-shadow">
                      Outfits/Clothing and Objects
                    </div>
                    <div class="col-6 text-h5 text-shadow text-center">
                      Free <q-icon name="east"></q-icon> Variable
                    </div>
                    <div class="col-12 q-pt-md">
                      Depending on technical complexity these may be free, or
                      incur a charge based on the time and effort required
                    </div>
                  </div>
                  <q-separator size="1px" color="secondary"></q-separator>
                </div>
              </q-card-section>
            </q-card>

            <!--Second Card

            -->
            <q-card square flat class="col-md-6 col-sm-12 bg-accent column">
              <div class="text-h2 bg-dark text-primary q-pb-sm text-shadow">
                Extras
              </div>
              <q-bar style="height: 2px" class="bg-secondary q-pb-none"></q-bar>

              <!--Pricing Body

            -->
              <q-card-section class="text-left column bg-info col">
                <!--First Line

            -->
                <div class="col">
                  <div class="row q-pa-md bg-accent flex-center fit">
                    <div class="col-6 text-h5 q-pl-sm text-shadow">
                      Additional Views/Multiple Panels
                    </div>
                    <div class="col-6 text-h5 text-shadow text-center">
                      Variable
                    </div>
                    <div class="col-12 q-pt-md">
                      Price will depend on how much re-drawing is necessary for
                      the additional views
                    </div>
                  </div>
                  <q-separator size="1px" color="secondary"></q-separator>
                </div>

                <!--Second Line

            -->
                <div class="col">
                  <div class="row q-pa-md bg-accent flex-center fit">
                    <div class="col-6 text-h5 flex-center text-shadow">
                      Edited / Alternative Versions
                    </div>
                    <div class="col-6 text-h5 text-shadow text-center">
                      Free <q-icon name="east"></q-icon> Variable
                    </div>
                    <div class="col-12 q-pt-md">
                      Simple edits can be included for no charge, however
                      complex changes may incur a charge
                    </div>
                  </div>
                  <q-separator size="1px" color="secondary"></q-separator>
                </div>

                <!--Third Line

            -->
                <div class="col">
                  <div class="row q-pa-md bg-accent flex-center fit">
                    <div class="col-6 text-h5 flex-center text-shadow">
                      Backgrounds
                    </div>
                    <div class="col-6 text-h5 text-shadow text-center">
                      Free <q-icon name="east"></q-icon> Variable
                    </div>
                    <div class="col-12 q-pt-md">
                      A basic background (color, simplistic scene) is provided
                      for free, a detailed background may incure a charge
                    </div>
                  </div>
                  <q-separator size="1px" color="secondary"></q-separator>
                </div>
              </q-card-section>
            </q-card>
            <q-card
              flat
              class="col-12 row justify-around items-center bg-accent"
            >
              <q-card-section class="row justify-around">
                <div
                  class="bg-dark q-px-xl q-py-md text-h4 text-primary text-shadow text-weight-medium"
                >
                  NSFW subjects add +5 € to the final price
                </div>
              </q-card-section>
            </q-card>
          </div>
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
