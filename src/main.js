import { createApp } from "vue";
import App from "./App.vue";
import Vue3Geolocation from "vue3-geolocation";

import "./assets/main.css";

const app = createApp(App);
app.use(Vue3Geolocation);
app.mount("#app");
