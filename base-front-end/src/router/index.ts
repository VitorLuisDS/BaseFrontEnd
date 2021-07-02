import { ModuleCode } from "@/constants/ModuleCode";
import { PageMeta } from "@/constants/page-metas/PageMeta";
import { CorePageCode } from "@/constants/pages-codes/core/CorePageCodes";
import { SecurityPageCode } from "@/constants/pages-codes/security/SecurityPageCode";
import { CorePageTitle } from "@/constants/pages-titles/core/CorePageTitle";
import { SecurityPageTitle } from "@/constants/pages-titles/security/SecurityPageTitle";
import { Page } from "@/models/security/authorization/Page";
import { authorizationRepository } from "@/repositories/security/authorization.repository";
import { authorizationService } from "@/services/security/authorization.service";
import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from "vue-router";

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
      name: ModuleCode.Security,
      component: () => import("../views/security/Index.vue"),
      meta: {
        [PageMeta.Title]: SecurityPageTitle.SecurityHome,
        [PageMeta.ModuleCode]: ModuleCode.Security,
        [PageMeta.RequiresAuth]: true,
        [PageMeta.PageCode]: SecurityPageCode.SecurityHome
      },
      children: [{
        path: "Pages",
        name: SecurityPageCode.Pages,
        component: () => import("../views/security/pages/Index.vue"),
        meta: {
          [PageMeta.Title]: SecurityPageTitle.Pages,
          [PageMeta.RequiresAuth]: true,
          [PageMeta.PageCode]: SecurityPageCode.Pages
        },
      }]
    }]
  },
  {
    path: "/Login",
    name: CorePageCode.Login,
    component: () => import("../views/core/login/Index.vue"),
    meta: { [PageMeta.Title]: CorePageTitle.Login }
  },
  {
    path: "/not-authorized",
    name: CorePageCode.NotAuthorized,
    component: () => import("../views/core/not-authorized/Index.vue"),
    props: true,
    meta: { [PageMeta.Title]: CorePageTitle.NotAuthorized }
  },
  {
    path: "/:pathMatch(.*)*",
    name: CorePageCode.NotFound,
    component: () => import("../views/core/not-found/Index.vue"),
    meta: { [PageMeta.Title]: CorePageTitle.NotFound }
  }
];

function getPageFromRoute(to: RouteLocationNormalized): Page {
  return {
    moduleCode: to.meta[PageMeta.ModuleCode] as ModuleCode,
    pageCode: to.meta[PageMeta.PageCode] as SecurityPageCode
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  if (to.meta[PageMeta.RequiresAuth]) {
    await authorizationRepository().setNextPageAsync(getPageFromRoute(to));
    return await authorizationService.authorizeUserToPageAsync(to);
  }
  return true;
});

export default router;
