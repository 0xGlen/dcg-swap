<template>
    <div>
        <h1 class="text-center mt-5">Pools</h1>
        <div class="row justify-content-center">
        <div class="col-4">
        <PoolModule pairname="DCAR-USDC" tokenimage1="dcar-coin.png" tokenimage2="usdc.png"/>
        </div>
        <div class="col-4">
        <PoolModule pairname="DCAU-USDT" tokenimage1="dcau-coin.png" tokenimage2="usdt.png"/>
        </div>
        </div>
    </div>
</template>

<script setup>
import PoolModule from '@/components/PoolModule.vue'

</script>

<style>

</style>