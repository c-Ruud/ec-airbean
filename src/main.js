import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import menuJSON from "./assets/data/menu.json";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      menu: menuJSON.menu,
    };
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
