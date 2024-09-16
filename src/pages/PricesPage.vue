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
              >In this page you can find a breakdown of how I tend to evaluate
              the cost for a commission. For information on contacting me,
              please use the links provided in the top bar, or refer to the
              About page.
            </q-card-section>
            <q-card-section>
              I tend to set the price based on the amount of effort and
              especially time that certain aspects of art can take. The tables
              set out in this page are the approximate cost I will be asking for
              based on the desired outcome, though it is flexible and will be
              discussed before agreeing to a commission.
            </q-card-section>
            <q-card-section>
              Before a commission is accepted, I will ask for a part of the
              payment in advance (after the price has been discussed).
            </q-card-section>
          </div>
        </q-card>
      </div>
      <div class="column text-center col-grow full-width">
        <q-card class="bg-accent q-pa-md column col">
          <div class="col-grow bg-accent">
            <q-list class="row q-gutter-lg">
              <!---->
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
                  <q-item-section class="text-subtitle1 q-py-sm"
                    >The lineart finishes I can offer</q-item-section
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
                      <q-item-section class="col text-no-wrap"
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
                  <q-item-section class="text-subtitle1 q-py-sm"
                    >The color techniques I can offer</q-item-section
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
                      <q-item-section class="col text-no-wrap"
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
                  <q-item-section class="text-subtitle1 q-py-sm"
                    >The shading methods I can offer</q-item-section
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
                      <q-item-section class="col text-no-wrap"
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
          <div class="row col-grow">
            <q-card class="col-md-6 col-sm-12 bg-accent">
              <q-card-section class="bg-dark text-primary">
                <div class="text-h2 text-weight-medium text-shadow">
                  Characters
                </div>
                <div class="text-h4 text-weight-medium text-shadow">
                  Subject related details which can modify the price
                </div>
              </q-card-section>
              <q-card-section class="text-left">
                <q-separator size="1px" color="secondary"></q-separator>
                <div class="row q-pa-md flex-center">
                  <div class="col-6 text-h5 q-pl-sm text-shadow">
                    Additional Characters:
                  </div>
                  <div class="col-6 row text-h5 flex-center text-shadow">
                    <div>
                      <span>An added 50% of</span>
                      <span class="q-pl-sm text-primary">base cost</span>
                    </div>
                  </div>
                  <div class="col-12 q-pt-md">
                    While a single character (or subject) will carry no
                    additional price, each additional character will incur an
                    additional 50% of the base cost
                  </div>
                </div>
                <q-separator size="1px" color="secondary"></q-separator>
                <div class="row q-pa-md flex-center">
                  <div class="col-6 text-h5 flex-center text-shadow">
                    Complex Bodies / Complex Patterns
                  </div>
                  <div class="col-6 text-h5 text-shadow text-center">
                    Free <q-icon name="east"></q-icon> Variable
                  </div>
                  <div class="col-12 q-pt-md">
                    In some cases where a character can be complex; Multiple
                    limbs, highly detailed features, particularly complex
                    shapes, etc., I may charge an additional fee depending on
                    how much difficulty and work hours are added. This will be
                    assesed ahead of payment and will be discussed.
                  </div>
                </div>
                <q-separator size="1px" color="secondary"></q-separator>
                <div class="row q-pa-md flex-center">
                  <div class="col-6 text-h5 flex-center text-shadow">
                    Outfits/Clothing and Objects
                  </div>
                  <div class="col-6 text-h5 text-shadow text-center">
                    Free <q-icon name="east"></q-icon> Variable
                  </div>
                  <div class="col-12 q-pt-md">
                    Depending on what kind of apparel or objects are requested,
                    they may or may not incur an additional cost depending on
                    the level of complexity. In particular either very ornate
                    (complex costume, intricate patterns) or technically robust
                    (highly accurate depiction of complex equipment, vehicles,
                    machines, etc.) which are likely to take a significant
                    effort to draw will incur a cost that will be discussed
                    ahead of payment.
                  </div>
                </div>
                <q-separator size="1px" color="secondary"></q-separator>
              </q-card-section>
            </q-card>
            <q-card class="col-md-6 col-sm-12 bg-accent">
              <q-card-section class="bg-dark text-primary">
                <div class="text-h2 text-weight-medium text-shadow">Extras</div>
                <div class="text-h4 text-weight-medium text-shadow">
                  Additional Options that may be Chosen
                </div>
              </q-card-section>
              <q-card-section class="text-left">
                <q-separator size="1px" color="secondary"></q-separator>
                <div class="row q-pa-md flex-center">
                  <div class="col-6 text-h5 q-pl-sm text-shadow">
                    Additional Views/Multiple Panels
                  </div>
                  <div class="col-6 text-h5 text-shadow text-center">
                    Variable
                  </div>
                  <div class="col-12 q-pt-md">
                    Depending on how different the angle, and thus the amount
                    that is requires to be re-drawn is, it might not incur a
                    cost. If a complex addition is wanted, the price will be
                    discussed.
                  </div>
                </div>
                <q-separator size="1px" color="secondary"></q-separator>
                <div class="row q-pa-md flex-center">
                  <div class="col-6 text-h5 flex-center text-shadow">
                    Edited / Alternative Versions
                  </div>
                  <div class="col-6 text-h5 text-shadow text-center">
                    Free <q-icon name="east"></q-icon> Variable
                  </div>
                  <div class="col-12 q-pt-md">
                    In most cases an alt version of an image can be provided at
                    no charge, however if the desired result requires
                    significant redrawing an additional cost may be incurred
                  </div>
                </div>
                <q-separator size="1px" color="secondary"></q-separator>
                <div class="row q-pa-md flex-center">
                  <div class="col-6 text-h5 flex-center text-shadow">
                    Backgrounds
                  </div>
                  <div class="col-6 text-h5 text-shadow text-center">
                    Free <q-icon name="east"></q-icon> Variable
                  </div>
                  <div class="col-12 q-pt-md">
                    If a background is not desired then either a transparent or
                    flat color background can be provided, or alternatively a
                    simplistic/sketchy background. If a detailed background,
                    particularly one meant to be a significant aspect of the
                    image, may incur an additional cost depending on the
                    complexity.
                  </div>
                </div>
                <q-separator size="1px" color="secondary"></q-separator>
              </q-card-section>
            </q-card>
            <q-card class="col-12 row justify-around items-center bg-accent">
              <q-card-section class="row justify-around">
                <div
                  class="bg-dark col-md-8 col-sm-12 q-px-xl q-py-md text-h4 text-primary text-shadow text-weight-medium"
                >
                  Any NSFW commissions will incur an additional 10€ flat price,
                  not included in the base price.
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
        price: "10 €",
      },
      {
        label: "Sketched Lines",
        price: "15 €",
      },
      {
        label: "Solid Lines",
        price: "25 €",
      },
      {
        label: "Inked Lines",
        price: "35 €",
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
        price: "15 €",
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
        price: "10 €",
      },
      {
        label: "Complex Shading",
        price: "15 €",
      },
      {
        label: "Rendered Shading",
        price: " 20€",
      },
    ]);
    return {
      lineartEntries,
      colorEntries,
      shadingEntries,
    };
  },
};
</script>
