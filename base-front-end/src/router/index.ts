import { ModuleCode } from "@/constants/ModuleCode";
import { PageMeta } from "@/constants/page-metas/PageMeta";
import { PageCode } from "@/constants/pages-codes/security/PageCode";
import { PageAuthorizationRequest } from "@/models/security/authorization/PageAuthorizationRequest";
import { authorizationService } from "@/services/security/authorization.service";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/core/home/Index.vue"),
    meta: {
      [PageMeta.Title]: "Home"
    },
    children: [{
      path: "Security",
      name: "Security",
      component: () => import("../views/security/Index.vue"),
      meta: {
        [PageMeta.Title]: "Security",
        [PageMeta.ModuleCode]: ModuleCode.Security
      },
      children: [{
        path: "Pages",
        name: "Pages",
        component: () => import("../views/security/pages/Index.vue"),
        meta: {
          [PageMeta.Title]: "Pages",
          [PageMeta.RequiresAuth]: true,
          [PageMeta.PageCode]: PageCode.Pages
        },
      }]
    }]
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
    path: "/Login",
    name: "Login",
    component: () => import("../views/core/login/Index.vue"),
    meta: { [PageMeta.Title]: "Login" }
  },
  {
    path: "/not-authorized",
    name: "NotAuthorized",
    component: () => import("../views/core/not-authorized/Index.vue"),
    props: true,
    meta: { [PageMeta.Title]: "Not Authorized" }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/core/not-found/Index.vue"),
    meta: { [PageMeta.Title]: "Not Found" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  if (to.meta[PageMeta.RequiresAuth]) {
    const pageAuthorizationRequest = new PageAuthorizationRequest(
      to.meta[PageMeta.ModuleCode] as ModuleCode,
      to.meta[PageMeta.PageCode] as PageCode
    );

    let canAccessPage = false;

    await authorizationService.fillAllowedPageFunctionalitiesAync(pageAuthorizationRequest)
      .finally(() => {
        canAccessPage = authorizationService.canAccessCurrentPage();
      });

    return canAccessPage;
  } else {
    return true;
  }
});

export default router;
