<script setup>
import Footer from "@/components/partials/Footer.vue";
import Header from "@/components/partials/Header.vue";
</script>

<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.main {
  min-height: 50vh;
}
</style>
