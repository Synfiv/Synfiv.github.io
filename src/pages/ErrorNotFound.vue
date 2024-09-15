<template>
  <div
    class="fullscreen bg-primary text-accent text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h1">Not much to see here...</div>

      <q-btn
        class="q-mt-xl"
        color="secondary"
        text-color="black"
        unelevated
        to="/"
        label="Go Back?"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>
