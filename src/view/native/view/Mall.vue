<script setup>

</script>

<template>
  <div class="flex flex-col overflow-y justify-center wrap items-center bg-base-200 h-auto">
    <template v-for="i in 10">
      <div class="flex flex-col m-5 items-center card w-50 bg-base-100 shadow-xl">
        <figure class="w-50">
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/>
        </figure>
        <div class="card-body w-50 bg-base-300">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>