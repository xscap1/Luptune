import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import Meta from "vue-meta";

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.use(router);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
