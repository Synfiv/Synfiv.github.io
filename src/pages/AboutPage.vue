<template>
  <q-page
    padding
    class="row justify-center q-pa-none items-stretch content-stretch"
  >
    <!-- content -->
    <div
      class="column items-stretch content-stretch col-lg-6 col-md-8 col-xs-12 no-wrap"
    >
      <div class="column text-center col-shrink full-width">
        <q-card class="bg-accent q-pa-none column">
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
                Art has been a hobby of mine since a young age, although I did
                not invest in it as much as I would have liked at a younger age.
                In recent years I have begun to make a concerted effort towards
                furthering my artistic abilities, with a particular focus on
                digital 2D art. The majority of my work is oriented towards
                digital sketches, drawing and paintings, and I enjoy doing all
                forms of content both subject oriented and scenic or object
                oriented.
              </div>
            </q-card-section>
            <q-card-section flat>
              <div>
                More recently I have also been trying to learn frame-by-frame
                animation with some success, and while I am able to make them it
                still takes me time and quite a bit of effort, so while I am not
                opposed to trying and make some (Ask me if it interests you for
                details) I'm not including it as a public part of my offerings.
              </div>
            </q-card-section>
            <q-card-section flat>
              <div>
                In contrast to 2D animation, 3D animation was my mainstay for a
                long time. I have been animating for years after having picked
                it up as a hobby, and although I don't have much finished and
                properly rendered animations to showcase I have contributed to a
                few projects in a volunteer capacity and one or two of my works
                is publically available. My focus on First-Person "Viewmodel"
                animations, in particular the handling of guns. I have moved on
                from 3DS Max, the original program I learned to animate with, to
                Blender and have been learning 3D modelling and sculpting with
                some success, and I hope to eventually include editing and
                model-making as part of my offerings, alongside animation.
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
            class="text-h3 q-py-xs q-mx-md bg-secondary column flex-center text-weight-medium text-primary text-shadow"
          >
            <div class="q-pa-md">Interested in my work?</div>
          </q-card-section>
          <q-card-section flat>
            <div>
              If you like what you see and are interested in commissioning me,
              don't hesitate to contact me and inquire about what I can do for
              you!
            </div>
            <div>(so long as my queue isn't full)</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="column text-center col-shrink full-width">
        <q-card flat class="bg-accent q-pa-md column">
          <q-card-section flat
            ><div>
              Thank you for your interest in me as I develop my skills and grow
              better!
            </div>
            <div>
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
