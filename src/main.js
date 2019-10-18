import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import VueApexCharts from "vue-apexcharts";
import * as VueGoogleMaps from 'vue2-google-maps';

// Import Css
require('@/global-styles/main.css');

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VueApexCharts);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCP1ByiFhr0HsMfsQe8WWgH0VanGm4ZmTQ',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
