<script setup>
import getNavList from "@/router/util.js";

const {demosList, cesiumList} = getNavList()
</script>

<template>
  <div class="app relative -z-50 flex h-screen bg-red-600">
    <div class="absolute z-20 flex flex-col w-[15%]  bg-slate-800 h-screen p-5">
      <!-- demos -->
      <h2 class="text-amber-50 text-2xl">demos</h2>
      <template
          v-for="(item, index) in demosList"
          class="text-2xl "
      >
        <router-link :to="item.path" class="text-amber-500 p-2 hover:text-amber-300">
          {{ item.name }}
        </router-link>
      </template>
      <!-- cesium -->
      <h2 class="text-amber-50 mt-3 text-2xl">cesium</h2>
      <template
          v-for="(item, index) in cesiumList"
          class="text-2xl "
      >
        <router-link :to="item.path" class="text-amber-500 p-2 hover:text-amber-300">
          {{ item.name }}
        </router-link>
      </template>
    </div>

    <RouterView class="absolute z-10 w-[85%] right-0"/>
  </div>
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