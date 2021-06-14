import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Test",
    name: "Test",
    component: () => import("../views/Test.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/core/login/Index.vue"),
    meta: { title: "Login" }
  },
  {
    path: "/not-authorized",
    name: "NotAuthorized",
    component: () => import("../views/core/not-authorized/Index.vue"),
    props: true,
    meta: { title: "Not Authorized" }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/core/not-found/Index.vue"),
    meta: { title: "Not Found" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
