<script setup>
import native from "@/router/modules/native.js";
import {ref} from "vue";
import themesConfig from "@/config/themes.config.js";

const themes = themesConfig.themes
const theme = ref("bumblebee")
</script>

<template>
  <div class="flex relative justify-center"
       :data-theme="theme">
    <details v-if="$route.path === `/native/home`"
             class="dropdown absolute z-10 items-end shadow-xl left-0 m-3">
      <summary class="m-0 btn">主题</summary>
      <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li v-for="item in themes">
          <a @click="() => theme = item">{{ item }}</a>
        </li>
      </ul>
    </details>

    <div class="relative primary-content w-screen h-auto">
      <router-view class="z-10 w-screen h-screen"></router-view>
    </div>

    <ul id="native-nav"
        class="fixed w-auto m-3 shadow-lg flex justify-center
        bottom-1 menu menu-horizontal bg-accent rounded-box">
      <template v-for="(item, index) in native.children">

      <li v-if="item.path !== '/login'">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>