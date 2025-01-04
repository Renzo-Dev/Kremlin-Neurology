<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./src/components/navbar/Navbar.vue";
import Footer from "./src/components/footer/Footer.vue";
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}
</style>
