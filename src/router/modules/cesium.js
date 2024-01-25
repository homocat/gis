export default {
  path: "/cesium",
  component: () => import("@/view/cesium/index.vue"),
  children: [
    {
      path: "/cesium",
      component: () => import("@/view/cesium/Cesium.vue")
    },
    {
      path: "/cesium/3dtiles",
      component: () => import("@/view/cesium/3DTiles.vue")
    }
  ]
}