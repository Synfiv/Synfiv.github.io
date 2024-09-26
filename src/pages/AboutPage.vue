<template>
  <q-page
    padding
    class="smallerFont row justify-center q-pa-none items-stretch content-stretch"
  >
    <!-- content -->
    <div
      class="column items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"
    >
      <div class="column text-center col-shrink full-width">
        <q-card square flat class="bg-accent q-pa-none column">
          <q-card-section
            flat
            class="text-h3 q-pa-xs bg-secondary column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-py-md">
              A bit about myself and my history with art
            </div>
          </q-card-section>
          <q-separator class="bg-blue-8" size="5px"></q-separator>
          <div class="q-px-sm">
            <q-card-section class="q-px-none">
              <div class="q-px-none">
                Hello, I'm known as Saru, and art has been an interest of mine
                from a young age. After being a hobby in my younger years I have
                invested more time into it after getting a drawing tablet
                several years ago which allowed me to work digitally, through
                which I began to open my work to others.
              </div>
            </q-card-section>
            <q-card-section flat>
              <div>
                Most of my work tends to be oriented around subjects with a more
                recent expansions into scene and landscape oriented pieces,
                while at the same time I try to explore different styles and
                approaches to the drawing process. Thus I have been spending
                more time on it, which encouraged me to create my online
                presence and by extension this website.
              </div>
            </q-card-section>
            <q-card-section flat>
              <div>
                Most of my published work is in 2D, though I also have a history
                with 3D animation having gotten into it years ago with 3DS Max
                as a viewmodel animator, being particularly familiar with
                animations handling weapons. Since 2020 I have moved on from Max
                to Blender, having a learning curve to re-learn the workflows
                and picking up modelling/sculpting too.
              </div>
            </q-card-section>
            <q-card-section></q-card-section>
          </div>
        </q-card>
      </div>
      <div class="column text-center col-shrink full-width">
        <q-card flat class="bg-accent q-py-md column">
          <q-card-section
            flat
            class="text-h3 q-py-xs bg-secondary column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-pa-md">Interested in my work?</div>
          </q-card-section>
          <q-separator class="bg-blue-8" size="5px"></q-separator>
          <q-card-section flat>
            <div>
              I'm always working on improving my works and looking to challenge
              myself, so commissions are very much welcome so long as my queue
              is not full. I'm open to all subjects, even ones not included in
              my published works, inquiries are welcome!
            </div>
          </q-card-section>
          <q-card-section flat>
            <div>
              For more information, please view the Prices page where you can
              find my terms and basic pricing.
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="column text-center col-shrink full-width">
        <q-card flat square class="bg-accent q-pa-md column">
          <q-card-section flat
            ><div class="text-h6">
              Most importantly, thank you for your interest in me and my work!
            </div>
            <div class="text-subtitle1">
              This website is still in an early state, and will be expanded over
              time.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
