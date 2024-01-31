export default {
  path: "/cesium",
  component: () => import("@/view/cesium/index.vue"),
  children: [
    {
      path: "/cesium/draw",
      name: "绘制图形",
      component: () => import("@/view/cesium/Draw.vue")
    },
    {
      path: "/cesium",
      name: "camera 控制器",
      component: () => import("@/view/cesium/Cesium.vue")
    },
    {
      path: "/cesium/3dtiles",
      name: "3d 模型",
      component: () => import("@/view/cesium/3DTiles.vue")
    },
    {
      path: "/cesium/widget",
      name: "widget",
      component: () => import("@/view/cesium/Widget.vue")
    },
  ]
}