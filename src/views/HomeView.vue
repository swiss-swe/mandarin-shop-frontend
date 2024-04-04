<script setup>
import Slider from "@/components/slider/Slider.vue";
import GridCard from "@/components/partials/GridCard.vue";
import Banner from "@/components/ui_element/Banner.vue";
import Rec1 from "@/assets/images/banner/rec_1.jpg";
import Rec2 from "@/assets/images/banner/rec_2.jpg";
import { useProductStore } from "@/stores/product";
import { ref, onMounted } from "vue";
import ProductSlider from "../components/slider/ProductSlider.vue";
import Loader from "@/components/ui_element/Loader.vue";
import NotFound from "@/components/ui_element/NotFound.vue";

const productStore = useProductStore();
const count = ref(10);

function showAgain() {
  if (count.value < productStore.products.data?.length - 10) {
    count.value += 10;
  } else {
    count.value = productStore.products.data?.length;
  }
}

onMounted(() => {
  productStore.getProducts();
});
</script>
<template>
  <div class="home">
    <div class="container pt-2 pb-16">
      <Slider />
    </div>
    <Loader v-if="productStore.products.loading" />
    <template v-else-if="productStore.products.data?.length > 0">
      <GridCard
        title="Katta sotuvlar"
        :data="productStore.products.data.slice(0, count)"
      />
      <LinkBtn
        v-if="productStore.products.data?.length - count > 0"
        @click="showAgain"
        class="w-1/2 block mx-auto bg-gray-200 mb-10 hover:bg-gray-300 duration-200"
      >
        Yana ko'rstish {{ productStore.products.data?.length - count }}
      </LinkBtn>
      <router-link to="/category" v-else>
        <LinkBtn
          class="w-1/2 block mx-auto bg-gray-200 mb-10 hover:bg-gray-300 duration-200"
        >
          To'liq maxsulotlarni ko'rish
        </LinkBtn>
      </router-link>
    </template>
    <template v-else>
      <NotFound
        title="Maxsulotlar topilmadi"
        info="Elektron do'konga hali maxsulotlar qo'shilmagan"
      />
    </template>
    <ProductSlider word="laptops" title="Noutbuklar" class="mb-14" />
    <Banner link="/category" :img="Rec1" class="mb-10" />
    <ProductSlider word="smartphones" title="Smartfonlar" class="mb-14" />
    <ProductSlider word="mens-shoes" title="Oyoq kiyimlar" class="mb-14" />
    <Banner link="/category" :img="Rec2" class="mb-10" />
    <ProductSlider word="tops" title="Top maxsulotlar" class="mb-8" />
    <!-- <GridCard title="Muddatli to'lov" :data="productStore.products.data" /> -->
  </div>
</template>

<style scoped></style>
