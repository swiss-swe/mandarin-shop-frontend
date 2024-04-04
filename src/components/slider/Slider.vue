<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner1 from "@/assets/images/banner/banner_1.jpg";
import Banner2 from "@/assets/images/banner/banner_2.jpg";
import Banner3 from "@/assets/images/banner/banner_3.jpg";
import Banner4 from "@/assets/images/banner/banner_4.jpg";
import Banner5 from "@/assets/images/banner/banner_5.jpg";
import Banner6 from "@/assets/images/banner/banner_6.jpg";

const modules = [Navigation, Pagination, Autoplay];

const imagesArr = ref([Banner1, Banner2, Banner3, Banner4, Banner5, Banner6]);
</script>

<template>
  <section class="w-full mx-auto overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="rounded-2xl"
    >
      <swiper-slide
        v-for="(item, index) in imagesArr"
        :key="index + '-intro-slider-item'"
        class="w-full relative"
      >
        <div class="w-full pt-[calc(100%/3)] overflow-hidden">
          <img
            :src="item"
            class="top-0 left-0 w-full h-full object-cover absolute rounded-2xl"
            alt=""
          />
        </div>
      </swiper-slide>
    </swiper>
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
