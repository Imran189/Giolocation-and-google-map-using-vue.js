<script setup>
import mapViewVue from "./components/mapView.vue";
</script>

<template>
  <div class="app">
    <div class="container py-4">
      <header>
        <img
          alt="Vue logo"
          class="logo"
          src="./assets/logo.svg"
          width="100"
          height="100"
        />
      </header>
      <div class="row py-3">
        <div class="col-6"><mapViewVue /></div>
        <div class="col-6"><mapViewVue /></div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
.app {
  background-color: rgb(197, 231, 231);
  color: rgb(15, 15, 15);
  height: 100vh;
  width: 100%;
}
</style>
