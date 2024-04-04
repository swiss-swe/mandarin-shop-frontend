<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "../card/ProductCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useProductStore } from "../../stores/product";
import Title from "../ui_element/Title.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  word: String,
  title: String,
});

const modules = [Navigation, Pagination, Autoplay];
const store = useProductStore();
const topProducts = ref(null);
onMounted(async () => {
  topProducts.value = await store.getTop(props.word);
});
</script>

<template>
  <section class="w-full mx-auto overflow-hidden">
    <div class="container">
      <Title link="/category" :text="props.title" />
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        class="mt-8"
      >
        <swiper-slide
          v-for="(item, index) in topProducts"
          :key="index + '-product-slider-item'"
          class="relative"
        >
          <ProductCard :data="item" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style>
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  background-color: #f2f4f7;
  opacity: 0.5;
  border-radius: 20px;
  border: 1px solid rgba(54, 54, 64, 0.25);
  outline: none;
  user-select: none;
}

.swiper-button-next::after {
  margin-right: 30px;
  padding: 8px 13px 8px 14px;
}

.swiper-button-prev::after {
  margin-left: 30px;
  padding: 8px 14px 8px 13px;
}

.swiper-pagination-bullet {
  background-color: #ffffff80;
  margin: 0 1px !important;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
