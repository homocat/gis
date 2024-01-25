<script setup>

</script>

<template>
  <div class="app">
    <div class="ui">
      <!-- nav -->
    </div>
    <div class="cesium">
      <router-view class="router" />
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  z-index: -2;
}

.ui {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 80px;
  margin: 10px;
  background: rgba(18, 46, 95, 0.432);
  /* border: 2px solid rgba(18, 46, 95, 0.28); */
  box-shadow: 1px 2px 13px  rgba(18, 46, 95, 0.432);
  backdrop-filter: blur(1px);
  z-index: 10;
}

.cesium {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
