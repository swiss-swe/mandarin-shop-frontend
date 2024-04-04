<script setup>
import SingleProductSlider from "@/components/slider/SingleProductSlider.vue";
import ProductExtraInfo from "@/components/partials/ProductExtraInfo.vue";
import ProductInfoCard from "@/components/card/ProductInfoCard.vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";
import { onMounted } from "vue";

const route = useRoute();
const productSrote = useProductStore();

onMounted(async () => {
  await productSrote.getById(route.params.id);
});
</script>

<template>
  <main class="single-product">
    <div class="container py-4 flex items-center">
      <SingleProductSlider
        class="w-[40%]"
        :images="productSrote.product.data?.images"
      />
      <ProductInfoCard class="w-[60%]" :data="productSrote.product.data" />
    </div>
    <ProductExtraInfo :info="productSrote.product.data" />
  </main>
</template>

<style scoped></style>
