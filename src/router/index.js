import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

import demos from "./modules/demos";
import cesium from "./modules/cesium";

const routerList = []
routerList.push(
  demos,
  cesium,
)


const routes = [
  {
    path: "/",
    redirect: "/home2"
  },
  {
    path: "/home",
    component: () => import("@/view/home/index.vue"),
    children: routerList
  },
  {
    path: "/home2",
    component: () => import("@/view/home2/index.vue"),
    children: routerList
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router