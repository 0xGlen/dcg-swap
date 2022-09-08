<template>
  <div class="d-flex flex-column min-vh-100">
  <Header/>
  <router-view/>
  </div>

  <div class="mt-auto">
  <Footer/>
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<style>
#app {
  font-family: Roboto, Segoe UI, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
