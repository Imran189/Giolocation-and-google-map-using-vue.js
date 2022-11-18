import { createApp } from "vue";
import App from "./App.vue";
import Vue3Geolocation from "vue3-geolocation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
const app = createApp(App);
app.use(Vue3Geolocation);
app.mount("#app");
