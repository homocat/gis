<script setup>
import { initViewer } from '@/util/initViewer';
import { onMounted } from 'vue';

onMounted(() => {
  const viewer = initViewer()
})
</script>

<template>
  <div class="test">
    <div id="cesiumContainer"></div>
  </div>
</template>

<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>