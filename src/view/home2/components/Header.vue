<script setup>
import getNavList from "@/router/util.js";

const navList = getNavList()
</script>

<template>
  <div class="flex w-screen">
    <div class="flex flex-1 w-1/3 flex-row flex-wrap">
      <dv-decoration-10 style="height: 5px; width: 100%;"></dv-decoration-10>
      <div class="flex flex-row justify-center w-1/4 h-[90%] items-center" v-for="(nav, index) in navList" :key="index">
        <el-dropdown trigger="click" class="flex items-center justify-center bg-red-600 w-2/3">
        <span class="text-sm box-border text-blue-500 w-auto bg-red-600 h-auto">
          {{ nav.name }}
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="(item, idx) in nav.children" :key="idx">
                <router-link :to="item.path">
                  {{ item.name }}
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

    <div class="w-1/3">
      <div class="flex items-center">
        <dv-decoration-8 style="height: 50px; width: 30%;flex: 1"></dv-decoration-8>
        <div class="text-xl text-blue-400 text-nowrap w-[40%] flex justify-center mb-0">光伏巡检系统</div>
        <dv-decoration-8 :reverse="true" style="height: 50px; width: 30%;flex: 1"></dv-decoration-8>
      </div>
    </div>

    <div class="flex-1 w-1/3">
      <div>
        <dv-decoration-10 style="height: 5px; width: 100%;"></dv-decoration-10>
      </div>
    </div>
  </div>
</template>

<style scoped></style>