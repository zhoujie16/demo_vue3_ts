import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/demo1",
    name: "demo1",
    component: () => import("@/pages/demo1/index.vue"),
  },
  {
    path: "/demo2",
    name: "demo2",
    component: () => import("@/pages/demo2/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
