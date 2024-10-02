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
          Commission Prices
        </div>
      </q-card-section>

      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>

      <!-- Intro Text -->
      <q-card-section style="width: 75%; min-width: 300px;" class="flex flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <div class="dense-text q-pb-sm">
              Below you can find a rough breakdown of the prices I would charge for different types of art. Note that while the price will not vary by a lot from the written sum, the exact cost will depend on the piece.
            </div>
            <div class="dense-text q-pb-sm">
              You can find specific information on what I will and will not draw in the Terms page.
            </div>
            <div class="dense-text q-pb-sm">
              For questions or inquiries about Animation (both 2D and 3D) or modelling, please contact me.
            </div>
      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>

      <!-- Pricing -->
       <q-card-section style="width: 100%; min-width: 300px;" class="row flex-center text-center text-body1 text-weight-medium q-px-sm text-accent items-stretch" >
        <!-- List -->
        <q-card-section class="col-12-xs col-md-4">
           <q-card style="max-width: 50%; min-width: 300px;" class="dense-text bg-primary column col">
             <q-card-section class="q-py-sm">Lineart</q-card-section>
             <q-separator size="2px" style="width: 90%;" class="rounded-borders self-center bg-accent"></q-separator>
             <q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Rough Sketch</div>
                 <div class="col text-right">5 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Refined Sketch</div>
                 <div class="col text-right">10 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Solid Lines</div>
                 <div class="col text-right">15 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Inked Lines</div>
                 <div class="col text-right">15 €</div>
               </q-card-section>
             </q-card-section>
           </q-card>
         </q-card-section>

         <!-- List -->
         <q-card-section class="col-12-xs col-md-4">
           <q-card style="max-width: 50%; min-width: 300px;" class="dense-text full-height bg-primary column col">
             <q-card-section class="q-py-sm">Framing</q-card-section>
             <q-separator size="2px" style="width: 90%;" class="rounded-borders self-center bg-accent"></q-separator>
             <q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Headshot</div>
                 <div class="col text-right">+5 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Upper Body</div>
                 <div class="col text-right">+10 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Full Body</div>
                 <div class="col text-right">+20 €</div>
               </q-card-section>
             </q-card-section>
           </q-card>
         </q-card-section>
       </q-card-section>
      <q-card-section style="width: 100%; min-width: 300px;" class="row flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">



         <!-- List -->
         <q-card-section class="col-12-xs col-md-4">
           <q-card style="max-width: 50%; min-width: 300px;" class="dense-text bg-primary column col">
            <q-card-section class="q-py-sm">Rendering</q-card-section>
             <q-separator size="2px" style="width: 90%;" class="rounded-borders self-center bg-accent"></q-separator>
             <q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Color</div>
                 <div class="col text-right">+5 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Lighting</div>
                 <div class="col text-right">+10 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Shading</div>
                 <div class="col text-right">+15 €</div>
               </q-card-section>
             </q-card-section>
           </q-card>
         </q-card-section>

         <!-- List -->
         <q-card-section class="col-12 row flex-center">
           <q-card style="max-width: 50%; min-width: 300px;" class="dense-text bg-primary column col">
             <q-card-section class="q-py-sm">Other</q-card-section>
             <q-separator size="2px" style="width: 90%;" class="rounded-borders  self-center bg-accent"></q-separator>
             <q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Simple Background</div>
                 <div class="col text-right">+5 €</div>
               </q-card-section>
               <q-card-section class="row text-no-wrap q-py-xs">
                 <div class="col text-left">Detailed Background</div>
                 <div class="col text-right">+10 €</div>
               </q-card-section>
             </q-card-section>
           </q-card>
         </q-card-section>
      </q-card-section>
      <q-card-section style="width: 100%; min-width: 300px;" class="row flex-center text-center text-body1 text-weight-medium q-px-sm text-accent">
        <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>
        <!-- List -->
        <q-card-section style="width: 100%;" class="column flex-center">
          <q-card style="max-width: 100%; min-width: 300px;" class="dense-text bg-primary column col">
            <q-card-section class="q-py-sm">Additional price points</q-card-section>
            <q-card-section class="q-py-sm">These costs will be discussed and agreed upon with the initial commission</q-card-section>
             <q-separator size="2px" style="width: 90%;" class="rounded-borders self-center bg-accent"></q-separator>
             <q-card-section class="q-gutter-md">
              <q-card-section class="row q-py-xs">
                 <div class="col">Additional characters will add 50% of the Lineart & Framing cost</div>
               </q-card-section>
               <q-card-section class="row q-py-xs">
                 <div class="col">Detailed or highly technical objects may incur a flat variable cost</div>
               </q-card-section>
               <q-card-section class="row q-py-xs">
                 <div class="col">Complex outfits or bodies may incur a flat variable cost</div>
               </q-card-section>
               <q-card-section class="row q-py-xs">
                 <div class="col">NSFW subjects cost an additional flat +5 €</div>
               </q-card-section>
             </q-card-section>
           </q-card>
         </q-card-section>
      </q-card-section>
      <q-separator size="2px" style="width: 30%;" class="rounded-borders bg-accent"></q-separator>


      <q-card-section></q-card-section>
    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>

    <!-- Navigation Buttons -->
    <div class="q-py-md full-width flex-center justify-center text-no-wrap  row">
      <q-btn to="/" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="accent" color="secondary" label="Go Back" />
      <div class="q-py-md full-width flex-center justify-center text-no-wrap q-gutter-y-md q-gutter-x-xs row">
        <q-btn disable to="/Showcase" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-5 text-h5 text-weight-medium" text-color="secondary" color="accent" label="Showcase (WIP)" />
        <q-btn to="/aboutPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="About" />
        <q-btn to="/termsPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="Terms" />
      </div>
    </div>

    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>
  </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PricesPage",
};
</script>
