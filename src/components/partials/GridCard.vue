<script setup>
import Title from "@/components/ui_element/Title.vue";
import ProductCard from "../card/ProductCard.vue";

const props = defineProps({
  title: String,
  data: Array,
});
</script>

<template>
  <section class="mb-10">
    <div class="container mb-4" v-if="props.title">
      <Title link="/category" :text="props.title" />
    </div>
    <div class="container flex flex-wrap">
      <div
        class="card"
        v-for="(item, index) in props.data"
        :key="index + '-sddasdfs'"
      >
        <ProductCard :data="item" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  width: calc(100% / 5 - 20px);
  margin: 10px;
}
</style>
