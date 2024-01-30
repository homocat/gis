import {createWebHistory} from "vue-router";
import {createRouter} from "vue-router";

import demos from "./modules/demos";
import cesium from "./modules/cesium";
import native from "@/router/modules/native.js";

const routerList = []
routerList.push(
    demos,
    cesium,
    native
)


const routes = [
    ...routerList,
    {
        path: "/",
        component: () => import("@/view/home/index.vue"),
        redirect: "/native"
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router