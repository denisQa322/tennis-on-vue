import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    children: [
      {
        path: "general",
        component: () => import("../views/clubRules/GeneralView.vue"),
      },
      {
        path: "definitions",
        component: () => import("../views/clubRules/DefinitionsView.vue"),
      },
      {
        path: "schedule",
        component: () => import("../views/clubRules/ScheduleView.vue"),
      },
      {
        path: "pay",
        component: () => import("../views/clubRules/PayView.vue"),
      },
      {
        path: "rules-on-place",
        component: () => import("../views/clubRules/RulesOnPlaceView.vue"),
      },
      {
        path: "other",
        component: () => import("../views/clubRules/OtherView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
