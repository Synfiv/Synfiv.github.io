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
            <div class="q-pa-md">
              A bit about myself and my history with art
            </div>
          </q-card-section>
          <q-separator class="bg-blue-8" size="5px"></q-separator>
          <div class="q-px-xl">
            <q-card-section
              >Art has been a hobby of mine since a young age, although I did
              not invest in it as much as I would have liked at a younger age.
              In recent years I have begun to make a concerted effort towards
              furthering my artistic abilities, with a particular focus on
              digital 2D art. The majority of my work is oriented towards
              digital sketches, drawing and paintings, and I enjoy doing all
              forms of content both subject oriented and scenic or object
              oriented.
            </q-card-section>
            <q-card-section>
              While no longer the mainstay of my craft, I was also an avid 3D
              animator and have contributed to a few projects in a volunteered
              capacity. My work was focused on First-Person "Viewmodel"
              animations, in particular the handling of guns. I have moved on
              from 3DS Max, the original program I learned to animate with, to
              Blender and have been learning 3D modelling.
            </q-card-section>
            <q-card-section
              >If my art is of interest to you, you can find the majority of my
              work uploaded either on my Twitter/Bluesky account where I share
              the occasional Work-In-Progress update and random doodles/sketches
              alongside finished pieces, or at my Furaffinity page where I
              upload my finished artworks.</q-card-section
            >
          </div>
        </q-card>
      </div>
      <div class="column text-center col full-width">
        <q-card class="bg-accent q-pa-md column">
          <q-card-section
            >This website, too, is one of my most recent projects where I have
            set out to learn how they can be made, and to have a more organized
            place for my online presence. It is still being worked on.
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
