<template>
  <q-page class="column flex-center" style="max-width: 100%; overflow: clip;" padding>


    <!-- Main Div-->
    <div
      style="max-width: 1000px;"
      class="  column flex-center primary-transparent q-py-md rounded-borders"
      >

        <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>

        <!-- Commission Status -->
      <q-card-section>
        <div style="border-radius: 100px;" class="q-pa-md text-h5 text-center text-secondary text-weight-bold bg-accent">
          A bit about myself
        </div>
      </q-card-section>

      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>

      <!-- Intro Text -->
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
            <div class="dense-text q-pb-sm">
              Hi, my name is Saru, and I'm an aspiring digital artist and enjoyer of synthetic beings. I have been drawing casually for several years, and the past 6 years I have been working digitally and actively trying to improve my abilities.
            </div>
            <div class="dense-text q-pb-sm">
              Most of my work focuses on subject drawings, but I often try to branch out with experimental art-styles and subjects.
            </div>
            <div class="dense-text">
              Much of my work is of synths as I find the concept interesting and love their visual design. However, I still enjoy drawing most other types of subjects.
            </div>
      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <div class="dense-text">
          Thank you for your interest in my work, and should you be interested in a commission, you can find information in the Pricing and Terms pages
        </div>
      </q-card-section>
      <q-card-section></q-card-section>



    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>

    <!-- Navigation Buttons -->
    <div class="q-py-md full-width flex-center justify-center text-no-wrap  row">
      <q-btn to="/" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="accent" color="secondary" label="Go Back" />
      <div class="q-py-md full-width flex-center justify-center text-no-wrap q-gutter-y-md q-gutter-x-xs row">
        <q-btn disable to="/Showcase" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-5 text-h5 text-weight-medium" text-color="secondary" color="accent" label="Showcase (WIP)" />
        <q-btn to="/PricesPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="Commissions" />
        <q-btn to="/termsPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="Terms" />
      </div>
    </div>

    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
