export default {
  path: "/demos",
  name: "demos",
  component: () => import("@/view/demos/index.vue"),
  children: [
    {
      path: "/demos/tailwind",
      name: "导入 tailwind",
      component: () => import("@/view/demos/TestTailwind.vue")
    },
    {
      path: "/demos/base",
      name: "基础布局",
      component: () => import("@/view/demos/BaseLayout.vue")
    }
  ]
}