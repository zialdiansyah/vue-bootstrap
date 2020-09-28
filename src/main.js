import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import Album from "./pages/album";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/album", component: Album }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
