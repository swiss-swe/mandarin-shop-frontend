<script setup>
const props = defineProps({
  link: String,
  text: String,
});
</script>

<template>
  <router-link :to="props.link || '#'">
    <h2 class="flex items-end text-4xl font-bold">
      <span class="mr-3">{{ props.text }}</span>
      <i class="bx bx-chevron-right"></i>
    </h2>
  </router-link>
</template>

<style lang="scss" scoped></style>
