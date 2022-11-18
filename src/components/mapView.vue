<script setup>
import { ref, reactive } from "vue";

const coordinate = reactive({
  lat: 0,
  lag: 0,
});
</script>
<template>
  <div>
    <h1>Your coordinates:</h1>
    <p>{{ coordinate.lat }} Latitude, {{ coordinate.lag }} Longitude</p>
  </div>
</template>
