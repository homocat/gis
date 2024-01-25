<script setup>
import { initViewer } from '@/util/initViewer';
import { onMounted } from 'vue';

onMounted(() => {
  const viewer = initViewer()
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
