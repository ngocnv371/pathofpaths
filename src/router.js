import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "./views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true
  },
  {
    path: "/:version",
    name: "home version",
    component: HomeView,
    props: true
  },
  {
    path: "/:version/:node",
    name: "home version node",
    component: HomeView,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
