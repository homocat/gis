<script setup>
import { onMounted } from "vue";
import { addCameraController } from "@/util/cameraController.js";
import * as Cesium from "cesium";

let viewFerryBuilding, viewPier39, viewSkyline, d = 0
onMounted(() => {
  const viewer = new Cesium.Viewer("viewer", {
    terrain: Cesium.Terrain.fromWorldTerrain(),
  });
  addCameraController(viewer, 0.5, 20)

  // Aerometrex San Francisco High Resolution 3D Model with Street Level Enhanced 3D
  //   const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(1415196, {
  //     maximumScreenSpaceError: 4,
  //   });
  //   viewer.scene.primitives.add(tileset);

  // Ferry Building – Street Level Enhanced mesh with a resolution of ~6mm per pixel
  viewFerryBuilding = (duration) => {
    viewer.scene.camera.flyTo({
      destination: new Cesium.Cartesian3(
        -2703541.419456986,
        -4261164.971874713,
        3887416.257562123
      ),
      orientation: new Cesium.HeadingPitchRoll(
        5.959123393581913,
        -0.03131876941215883,
        0.0000033030489428043097
      ),
      duration: duration,
    });
  }

  // Pier 39 - 2 cm/pixel resolution
  viewPier39 = () => {
    viewer.scene.camera.flyTo({
      destination: new Cesium.Cartesian3(
        -2704263.584923937,
        -4259336.981155519,
        3888978.5732662966
      ),
      orientation: new Cesium.HeadingPitchRoll(
        2.4287691459386607,
        -0.49459905591668996,
        0.0000029701571779838787
      ),
    });
  }

  // Skyline - 2 cm/pixel resolution
  viewSkyline = () => {
    viewer.scene.camera.flyTo({
      destination: new Cesium.Cartesian3(
        -2702979.5635104137,
        -4261981.190435306,
        3887092.144148863
      ),
      orientation: new Cesium.HeadingPitchRoll(
        4.534265054628527,
        -0.08846186652294352,
        0.0000075141499165098935
      ),
    });
  }

  // Lombard Street - 2 cm/pixel resolution
  function viewLombardStreet() {
    viewer.scene.camera.flyTo({
      destination: new Cesium.Cartesian3(
        -2705631.6783492276,
        -4259449.36938678,
        3887903.89229016
      ),
      orientation: new Cesium.HeadingPitchRoll(
        5.999439616451804,
        -0.20513082834763674,
        4.7213266807233367e-7
      ),
    });
  }

  // Sandcastle.addToolbarMenu([
  //   {
  //     text: "Ferry Building",
  //     onselect: viewFerryBuilding,
  //   },
  //   {
  //     text: "Pier 39",
  //     onselect: viewPier39,
  //   },
  //   {
  //     text: "Skyline",
  //     onselect: viewSkyline,
  //   },
  //   {
  //     text: "Lombard Street",
  //     onselect: viewLombardStreet,
  //   },
  // ]);

  viewFerryBuilding(0);

})
</script>

<template>
  <div class="flex w-screen overflow-hidden h-screen relative -z-10">
    <div id="viewer" class="w-screen h-screen"></div>
    <div class="flex items-end m-5 absolute right-0 top-[10%] z-10 h-auto w-[300px]">
      <dv-border-box-10>
        <div class="h-[100%] justify-start rounded-xl flex flex-1 flex-col p-10 ">
          <button @click="() => viewFerryBuilding(3)" class="btn bg-amber-300 m-1">viewFerryBuilding</button>
          <button @click="viewPier39" class="btn bg-amber-300 m-1">viewPier39</button>
          <button @click="viewSkyline" class="btn bg-amber-300 m-1">viewSkyline</button>
        </div>
      </dv-border-box-10>
    </div>
  </div>
</template>

<style scoped></style>