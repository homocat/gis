<script setup>
import {ref, watch} from "vue";

const search = ref('');

const mockList = [
  {id: 1, content: "asd"},
  {id: 2, content: "asd"},
  {id: 3, content: "asd"},
]

const filterdList = ref([]);

watch(search, (search, _) => {
  filterdList.value = mockList.filter(item => {
    console.log(search)
    return item.id == search
  })
})
</script>

<template>
  <div class="flex flex-col items-center">
    <input class="w-1/2 bg-amber-300 opacity-50 h-[30px] m-5" v-model="search">

    <ul class="w-1/2 h-1/2 bg-slate-800 text-amber-50 m-5">
      <template v-for="(item, index) in search ? filterdList : mockList">
        <li class="m-1 p-2">
          {{ item.content }}
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>