<script setup>
import { onMounted } from 'vue';
import { initViewer } from "@/util/initViewer"
import * as Cesium from "cesium"

onMounted(() => {
  const viewer = initViewer()

  let positionCartesian = new Cesium.Cartesian3(1332761, -4662399, 4137888)
  viewer.scene.camera.setView({
    destination: positionCartesian,
    orientation: {
      heading: 0.60,
      pitch: -0.66
    }
  });

  var NewYork = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(3839)
    })
  )
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>