import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Intro from "../views/Intro.vue";
//import Orderontheway from "../views/Orderontheway.vue";
import Menu from "../views/Menu.vue";
import Profile from "../views/Profile.vue";
import Orderontheway from "../views/Orderontheway.vue";
//import Myorderpage from "../views/Myorderpage.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/orderontheway",
    name: "Orderontheway",
    component: Orderontheway,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  /*   {
    path: "/myorderpage",
    name: "Myorderpage",
    component: Myorderpage,
  }, */
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
