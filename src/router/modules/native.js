export default {
    path: "/native",
    component: () => import("@/view/native/index.vue"),
    redirect: "/native/home",
    children: [
        {
            path: "/native/index",
            name: "首页",
            component: () => import("@/view/native/view/Main.vue")
        },
        {
            path: "/native/reserve",
            name: "预定",
            component: () => import("@/view/native/view/Reserve.vue")
        },
        {
            path: "/native/home",
            name: "我的",
            component: () => import("@/view/native/view/Home.vue")
        },
        {
            path: "/native/forum",
            name: "论坛",
            component: () => import("@/view/native/view/Forum.vue")
        },
        {
            path: "/login",
            name: "登陆",
            component: () => import("@/view/native/view/Login.vue")
        },
        {
            path: "/native/mall",
            name: "商城",
            component: () => import("@/view/native/view/Mall.vue")
        }
    ]
}