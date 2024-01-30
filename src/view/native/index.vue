<script setup>
import native from "@/router/modules/native.js";
</script>

<template>
  <div class="flex flex-col relative items-center justify-center w-screen h-screen">
    <div class="bg-red-600">
      <router-view></router-view>
    </div>
    <ul id="native-nav" class="w-auto m-5 flex justify-center absolute bottom-0 menu menu-horizontal bg-base-200 rounded-box">
      <li v-for="(item, index) in native.children">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>