export default {
    path: "/native",
    component: () => import("@/view/native/index.vue"),
    redirect: "/native/home",
    children: [
        {
            path: "/native/home",
            name: "首页",
            component: () => import("@/view/native/view/Home.vue")
        },
        {
            path: "/native/forum",
            name: "论坛",
            component: () => import("@/view/native/view/Forum.vue")
        },
        {
            path: "/native/reserve",
            name: "预定",
            component: () => import("@/view/native/view/Reserve.vue")
        },
        {
            path: "/native/mall",
            name: "商城",
            component: () => import("@/view/native/view/Mall.vue")
        }
    ]
}