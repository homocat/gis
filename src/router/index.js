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
  ...routerList,
  {
    path: "/",
    redirect: "/home2"
  },
  {
    path: "/home",
    component: () => import("@/view/home/index.vue")
  },
  {
    path: "/home2",
    component: () => import("@/view/home2/index.vue")
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router