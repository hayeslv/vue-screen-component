import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("~/pages/index"),
    children: [
      { path: "/loading", name: "Loading", component: () => import("~/pages/Loading") },
      { path: "/message", name: "Message", component: () => import("~/pages/Message") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
