export default {
  path: "/cesium",
  component: () => import("@/view/cesium/index.vue"),
  children: [
    {
      path: "/cesium",
      name: "cesium 键盘移动",
      component: () => import("@/view/cesium/Cesium.vue")
    },
    {
      path: "/cesium/3dtiles",
      name: "3d 模型",
      component: () => import("@/view/cesium/3DTiles.vue")
    }
  ]
}