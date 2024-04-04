<script setup>
import Title from "@/components/ui_element/Title.vue";
import BasketCard from "@/components/card/BasketCard.vue";
import BasketAside from "../components/partials/BasketAside.vue";
import { useCartStore } from "@/stores/cart";
import NotFound from "../components/ui_element/NotFound.vue";
import Basket from "../assets/images/ui/basket.jpg";
import { onMounted } from "vue";
import ProductSlider from "@/components/slider/ProductSlider.vue";

const cartStore = useCartStore();

const getAllProducts = () => {
  cartStore.getAll();
};

onMounted(() => {
  getAllProducts();
});
</script>

<template>
  <main class="basket">
    <div class="container py-10">
      <Title
        v-if="cartStore.cartData?.length > 0"
        :text="'Savatingiz, ' + cartStore.cartData?.length + ' ta buyurtma'"
      />
      <div class="flex items-start mt-6" v-if="cartStore.cartData?.length > 0">
        <div class="w-3/4 pr-3">
          <div class="border border-gray-300 p-3">
            <nav class="flex items-center justify-between pb-4 pt-1">
              <!-- 1 -->
              <label class="flex items-center">
                <input type="checkbox" class="w-5 h-5 mr-2" />
                <span class="text-sm text-gray-600">Hammasini yechish</span>
              </label>
              <!-- 2 -->
              <p class="flex items-center">
                <span class="text-xs text-gray-500 font-semibold mr-2"
                  >Yetkazib berishning eng yaqin sanasi:</span
                >
                <span
                  class="inline-block border border-[#7000FF] py-1 px-2 rounded text-xs text-[#7000FF]"
                  >M12 22 (Erta)</span
                >
              </p>
            </nav>
            <BasketCard
              v-for="(item, index) in cartStore.cartData"
              :key="index + 'sdasdfj'"
              :data="item"
            />
          </div>
        </div>
        <div class="w-1/4">
          <BasketAside
            :price="cartStore.getTotalPrice"
            :count="cartStore.getTotalCount"
          />
        </div>
      </div>
      <NotFound
        v-else
        title="Savatga qoʻshing"
        info="Mahsulotdagi savat belgisini bosing. Akkauntga kiring va barcha tanlanganlar saqlanib qoladi"
        :url="Basket"
      />
    </div>
    <ProductSlider word="tops" title="Top maxsulotlar" class="mb-8" />
  </main>
</template>

<style lang="scss" scoped></style>
