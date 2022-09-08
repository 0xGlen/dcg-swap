<template>
        <div class="card text-center mx-auto mt-5" style="width: 18rem" >
         <div class="card-header">
        <h5>
            {{ pairname }}
            <img :src="require(`@/assets/${tokenimage1}`)" alt="" width="20" height="20">
            <img :src="require(`@/assets/${tokenimage2}`)" alt="" width="20" height="20">
            
        </h5>
        </div>
        <div class="card-body">
        <h5 class="card-title">Total Staked</h5>
        <p class="card-text">APR</p>
        <a href="#" class="btn btn-secondary">Deposit</a>
  </div>
</div>
</template>

<script setup>
const props = defineProps([
    'pairname',
    'tokenimage1',
    'tokenimage2'
])

</script>

<style>

</style>