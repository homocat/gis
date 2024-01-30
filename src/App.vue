<script setup>
import getNavList from "@/router/util.js";

const {demosList, cesiumList} = getNavList()
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}

.router {
  width: 100%;
  height: 100%;
}
</style>