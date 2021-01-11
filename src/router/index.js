import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Intro from "../views/Intro.vue";
//import Orderontheway from "../views/Orderontheway.vue";
import Menu from "../views/Menu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  /*  {
    path: "/orderontheway",
    name: "Orderontheway",
    component: Orderontheway,
  }, */
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
