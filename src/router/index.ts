import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("~/pages/pie"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
