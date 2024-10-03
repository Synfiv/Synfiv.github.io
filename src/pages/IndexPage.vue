<template>
  <q-page class="column flex-center" style="max-width: 100%;" padding>


    <!-- Main Div-->
    <div
      style="max-width: 100%;"
      class="  column flex-center rounded-borders"
      >
      <!-- Avatar Image and Name -->
      <div class="flex flex-center q-pa-sm">
        <q-card-section style="width: fit-content;" class="q-pa-sm">

          <!-- Outline -->
          <div style="width: 100%;" class="bg-info avatar-container">

              <!-- Artist Badge -->
              <q-chip style="border-radius: 75px; height: 40px;" class="bg-accent text-h4 text-secondary text-weight-medium">

                <!-- Avatar -->
                <div>
                  <q-avatar rounded size="75px">
                    <q-img src="SaruAvatar.svg"></q-img>
                  </q-avatar>
                </div>

                <!-- Name -->
                <div> Saru </div>

              </q-chip>
          </div>
        </q-card-section>
      </div>

        <q-separator size="2px" style="width: 60%;" class="rounded-borders bg-accent"></q-separator>

      <!-- Intro Text -->
      <q-card-section style="width: 40%; min-width: 300px;" class="flex flex-center text-center text-para text-weight-medium q-px-sm text-accent">
            <div>
              I'm Saru, I'm a 25 year old hobbyist 2D/3D digital artist living in Berlin who likes to work with Sketches, Drawings, Animations and more
            </div>
      </q-card-section>
      <q-separator size="2px" style="width: 60%;" class="rounded-borders bg-accent"></q-separator>

      <!-- Commission Status -->
      <q-card-section>
        <div  style="width: 100%;" class="bg-info avatar-container">
          <div style="border-radius: 100px;" class="q-pa-md text-h6 text-center text-secondary text-weight-bold bg-accent">
            I'm currently <span class="text-primary">accepting</span> commissions
          </div>
        </div>
      </q-card-section>

    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>

    <!-- Navigation Buttons -->
    <div class="q-py-md full-width flex-center justify-center text-no-wrap  row">
      <q-btn disable to="/Showcase" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-5 text-h5 text-weight-medium" text-color="secondary" color="accent" label="Showcase (WIP)" />
      <div class="q-py-md full-width flex-center justify-center text-no-wrap q-gutter-y-md q-gutter-x-xs row">
        <q-btn to="/AboutPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="About Me" />
        <q-btn to="/PricesPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="Commissions" />
        <q-btn to="/termsPage" exact style="min-height: 50px;" no-caps class="col-xs-9 col-md-3 text-h6" text-color="secondary" color="accent" label="Terms" />
      </div>
    </div>

    <q-separator size="4px" style="width: 95%;" class="rounded-borders bg-accent"></q-separator>
  </div>

    <!-- Social Media Links -->
    <div class="text-weight-medium q-pa-sm text-accent text-center">
      You can find my works on my accounts:
    </div>
    <div class="row q-gutter-xl justify-around">
      <div class="q-pa-xs bg-accent round-container">
        <q-btn
        round
        href="https://bsky.app/profile/synfiv.bsky.social"
        target="_blank"
        color="secondary"
        style="min-height: 50px; min-width: 50px;"
        >
          <q-icon><q-img src="./website/bluesky.svg"></q-img></q-icon>

        </q-btn>
      </div>
      <div class="q-pa-xs bg-accent round-container">
        <q-btn
        round
        href="https://twitter.com/SynfIV"
        target="_blank"
        color="secondary"
        style="min-height: 50px; min-width: 50px;"
        >
          <q-icon><q-img src="./website/twitter.svg"></q-img></q-icon>
        </q-btn>
      </div>
      <div class="q-pa-xs bg-accent round-container">
        <q-btn
        round
        href="https://www.furaffinity.net/user/synfiv"
        target="_blank"
        color="secondary"
        style="min-height: 50px; min-width: 50px;"
        >
          <q-icon><q-img src="./website/furaffinity.svg"></q-img></q-icon>
        </q-btn>
      </div>
      <div class="q-pa-xs bg-accent round-container">
        <q-btn
        round
        href="https://trello.com/b/0wQ8K87Z/synfiv"
        target="_blank"
        color="secondary"
        style="min-height: 50px; min-width: 50px;"
        >
          <q-icon><q-img src="./website/trello.svg"></q-img></q-icon>
        </q-btn>
      </div>
          </div>

  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
