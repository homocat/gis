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
    component: () => import("@/view/home/index.vue")
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router