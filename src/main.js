import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "animate.css/animate.css";
import "./base-styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
