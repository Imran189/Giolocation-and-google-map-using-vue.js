<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },

  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<template>
  <div>
    <h1>Your coordinates:</h1>
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>

    <GoogleMap
      api-key="AIzaSyDUqAdgpKhUzV9eZmdTA5WSkg3N9z78WsI"
      style="width: 640px; height: 360px"
      :center="coordinates"
      :zoom="15"
    >
    </GoogleMap>
  </div>
</template>
