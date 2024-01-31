<script setup>
import * as Cesium from "cesium"
import { initViewer } from '@/util/initViewer';
import { onMounted } from 'vue';
import HorizontalBar from '../../components/HorizontalBar.vue';
import MapChart from '../../components/MapChart.vue';
import RadarBar from '../../components/RadarBar.vue';
import Relation from '../../components/Relation.vue';
import RingBar from '../../components/RingBar.vue';
import TotalData from '../../components/TotalData.vue';
import VerticalBar from '../../components/VerticalBar.vue';
import WordCloud from '../../components/WordCloud.vue';
import { addCameraController } from '../../util/cameraController'

onMounted(async () => {
  const viewer = initViewer()

  const osmImageryProvider = new Cesium.WebMapTileServiceImageryProvider({

    url: '/geoserver/gwc/rest/wmts/ditu:w(6)/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png',

    layer: 'ditu:w(6)',

    format: 'image/png',

    style: 'raster',

    maximumLevel: 40,

    tileMatrixSetID: 'EPSG:900913'

  })
  viewer.imageryLayers.addImageryProvider(osmImageryProvider)



  // const cesiumTerrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
  //   '/terrain',
  //   {
  //     requestWaterMask: true, // 请求水体遮罩数据（可选）
  //     requestVertexNormals: true // 请求顶点法线用于光照效果（可选）
  //   }
  // )
  // viewer.scene.terrainProvider = cesiumTerrainProvider

  let positionCartesian = new Cesium.Cartesian3(1332761, -4662399, 4137888)
  viewer.scene.camera.setView({
    destination: positionCartesian,
    orientation: {
      heading: 0.60,
      pitch: -0.66
    }
  });
  addCameraController(viewer, 0.5, 200)
})
</script>

<template>
  <div class="flex w-screen overflow-hidden h-screen relative -z-10">
    <!-- left -->
<!--    <div class="flex-1 flex-col m-5 absolute z-10 bg-opacity-50 bg-slate-800 h-[95%] w-[300px]">-->
<!--      &lt;!&ndash; 横向柱状图 &ndash;&gt;-->
<!--      <HorizontalBar class=" h-1/3 box-border p-3" />-->
<!--      &lt;!&ndash; 雷达图 &ndash;&gt;-->
<!--      <RadarBar class=" h-1/3 box-border pb-4" />-->
<!--      &lt;!&ndash; 关系图 &ndash;&gt;-->
<!--      <Relation class=" h-1/3" />-->
<!--    </div>-->
    <!-- cesium -->
    <div id="cesiumContainer" class=" absolute z-0"></div>
    <!-- right -->
    <div class="flex-1 flex-col m-5 absolute right-0 z-10 bg-opacity-50 bg-slate-800 h-[95%] w-[300px]">
      <!-- 竖向柱状图 -->
      <VerticalBar class=" h-1/3 box-border pb-4" />
      <!-- 环状图 -->
      <RingBar class=" h-1/3 box-border pb-4" />
      <!-- 数据云图 -->
      <WordCloud class=" h-1/3" />
    </div>
  </div>
</template>

<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
