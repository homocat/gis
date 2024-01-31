<script setup>
import * as Cesium from "cesium"
import {initViewer} from "@/util/initViewer.js";
import {onMounted} from "vue";

onMounted(() => {

  var viewer = initViewer();
  var redBox = viewer.entities.add({
    name: 'Red box with black outline',
    position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
    box: {
      dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.BLACK
    }
  });
  viewer.zoomTo(viewer.entities);
})

</script>

<template>
  <div class="flex w-screen overflow-hidden h-screen relative -z-10">
    <div id="cesiumContainer" class="absolute z-0 w-screen h-screen"></div>
  </div>
</template>

<style scoped>

</style>