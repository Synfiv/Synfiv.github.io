<template>
  <q-page padding class="row justify-center items-stretch content-stretch">
    <!-- content -->
    <div
      class="column items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"
    >
      <div class="column text-center col full-width">
        <q-card class="bg-accent q-pa-md column">
          <q-card-section
            flat
            class="text-h3 q-pa-xs bg-secondary column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-pa-md">Pricing</div>
          </q-card-section>
          <q-separator class="bg-blue-8" size="5px"></q-separator>
          <div class="q-px-xl">
            <q-card-section
              >In this page you can find a breakdown of how I tend to evaluate
              the cost for a commission.
            </q-card-section>
            <q-card-section>
              For further information on my terms and how I work, please refer
              to the About page
            </q-card-section>
          </div>
        </q-card>
      </div>
      <div class="column text-center col full-width">
        <q-card class="bg-accent q-pa-md row">
          <q-list bordered separator>
            <q-item v-for="item in juan" :key="item.label">
              <q-item-section>{{ item.label }} </q-item-section>
            </q-item>
          </q-list>

          <!--
          <div class="row q-gutter-md q-pa-md full-width">
            <div class="column col">
              <div class="text-h4">Lines</div>
              <div class="text-left row col q-gutter-md">
                <div class="column col full-width q-gutter-sm">
                  <div class="col no-wrap">Rough Sketch</div>
                  <div class="col">Sketch</div>
                  <div class="col">Solid Lines</div>
                  <div class="col">Inked Lines</div>
                </div>
                <div class="column col text-right q-gutter-sm">
                  <div class="col">15 €</div>
                  <div class="col">20 €</div>
                  <div class="col">30 €</div>
                  <div class="col">40 €</div>
                </div>
              </div>
            </div>
            <div class="column col">
              <div class="text-h4">Lines</div>
              <div class="row col q-gutter-md">
                <div class="column col flex-center q-gutter-sm">
                  <div class="col no-wrap">Rough Sketch</div>
                  <div class="col">Sketch</div>
                  <div class="col">Solid Lines</div>
                  <div class="col">Inked Lines</div>
                </div>
                <div class="column col flex-center q-gutter-sm">
                  <div class="col">15 €</div>
                  <div class="col">20 €</div>
                  <div class="col">30 €</div>
                  <div class="col">40 €</div>
                </div>
              </div>
            </div>
          </div>
          -->
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
    const juan = ref([
      {
        label: "one",
      },
      {
        label: "two",
      },
      {
        label: "three",
      },
    ]);
  },
};
</script>
