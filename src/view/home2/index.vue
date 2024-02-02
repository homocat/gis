<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="relative bg-slate-800 h-screen -z-50">
    <Header class="absolute z-20 bg-slate-800 opacity-80"></Header>
    <router-view class="absolute z-10"/>
  </div>
</template>

<style scoped>

</style>