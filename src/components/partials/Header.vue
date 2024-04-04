<script setup>
import { useLogin } from "@/composables/Login";

const { showLoginModal, onSubmitLogin } = useLogin();

import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useLikeStore } from "@/stores/like";
import { useCartStore } from "@/stores/cart";
import { useCategoryStore } from "@/stores/category";
import { useRouter } from "vue-router";

const likeStore = useLikeStore();
const cartStore = useCartStore();
const categoryStore = useCategoryStore();
const { getLike } = storeToRefs(likeStore);
const { getProduct } = storeToRefs(cartStore);
const isShowCatalog = ref(false);
const router = useRouter();

const goToFilter = (queryString) => {
  router.push({
    name: "category",
    query: {
      filter: queryString,
    },
  });
};

const seachText = ref("");
const goToSearch = () => {
  if (seachText.value) {
    router.push({
      name: "category",
      query: {
        search: seachText.value,
      },
    });
    seachText.value = "";
  }
};

onMounted(() => {
  categoryStore.getCategory();

  window.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      goToSearch();
    }
  });
});
</script>
<template>
  <header class="header bg-white">
    <!-- top -->
    <div class="bg-[#F2F4F7] py-2">
      <div class="container flex justify-between items-center">
        <div class="flex items-center">
          <p class="flex items-center mr-3">
            <i class="bx bx-location-plus mr-1"></i>
            <span class="text-sm text-gray-600">Shaxar:</span>
            <span class="font-semibold text-sm">Toshkent</span>
          </p>
          <p class="font-semibold text-sm">Topshitish punktlari</p>
        </div>
        <p class="text-gray-500 text-sm">
          Buyurtmangizni bir kunda yetkazib beramiz
        </p>
        <div class="flex items-center">
          <router-link
            to="#"
            class="text-sm text-gray-500 hover:text-black duration-200 font-semibold mr-5"
            >Savol-Javoblar</router-link
          >
          <router-link
            to="#"
            class="text-sm text-gray-500 hover:text-black duration-200 font-semibold mr-5"
            >Buyurtmalarim</router-link
          >
          <router-link
            to="#"
            class="text-sm text-gray-500 hover:text-black duration-200 font-semibold"
            >O'zbekcha</router-link
          >
        </div>
      </div>
    </div>
    <!-- filter -->
    <div class="container flex items-center justify-between py-4">
      <router-link to="/" class="text-2xl lowercase text-[#7000FF] font-bold"
        >mandarin</router-link
      >

      <div class="flex">
        <button
          type="button"
          @click="isShowCatalog = !isShowCatalog"
          class="py-2 px-6 border-none outline-none bg-[#F0F0FF] rounded mr-4 text-[#7000FF] text-sm flex items-center"
        >
          <i v-if="!isShowCatalog" class="bx bx-category-alt mr-2"></i>
          <i v-else class="bx bx-x mr-2"></i>
          <span class="font-semibold">Katalog</span>
        </button>

        <div class="flex">
          <input
            type="text"
            class="py-2 px-4 border border-gray-300 border-r-0 outline-none placeholder:text-gray-600 rounded-l text-[#7000FF] text-sm bg-white w-[500px]"
            placeholder="Maxsulotlar va turkumlar izlash"
            v-model="seachText"
          />
          <button
            @click="goToSearch"
            class="w-[80px] py-2 px-6 border border-gray-300 border-l-0 outline-none bg-[#F0F0FF] rounded-r text-gray-600 text-sm"
          >
            <i class="bx bx-search scale-150"></i>
          </button>
        </div>
      </div>

      <div class="flex items-center">
        <div
          to="/"
          class="flex items-center text-xl cursor-pointer"
          @click="showLoginModal = true"
        >
          <i class="bx bx-user mr-2"></i>
          <span class="text-sm">Kirish</span>
        </div>
        <router-link to="/favorite" class="flex items-center mx-5 text-xl">
          <div class="relative" :class="getLike?.length ? 'mr-2' : 'mr-1'">
            <i class="bx bx-heart"></i>
            <div
              v-if="getLike?.length"
              class="absolute top-3 -right-[5px] w-4 h-4 rounded-full bg-[#7000FF] text-[9px] text-white flex items-center justify-center font-semibold"
            >
              {{ getLike?.length }}
            </div>
          </div>
          <span class="text-sm">Saralanganlar</span>
        </router-link>
        <router-link to="/cart" class="flex items-center text-xl">
          <div class="relative" :class="getProduct?.length ? 'mr-2' : 'mr-1'">
            <i class="bx bx-shopping-bag mr-1"></i>
            <div
              v-if="getProduct?.length"
              class="absolute top-3 -right-[5px] w-4 h-4 rounded-full bg-[#7000FF] text-[9px] text-white flex items-center justify-center font-semibold"
            >
              {{ getProduct?.length }}
            </div>
          </div>
          <span class="text-sm">Savat</span>
        </router-link>
      </div>
    </div>
    <!-- nav -->
    <nav class="pb-3 container flex items-center justify-between">
      <span
        v-for="(item, index) in categoryStore.categories.data?.slice(0, 12)"
        :key="index + '-link-item'"
        @click="goToFilter(item)"
        class="nav_category relative text-gray-500 hover:text-black duration-200 capitalize cursor-pointer"
      >
        {{ item }}
      </span>
      <span
        @click="isShowCatalog = !isShowCatalog"
        class="flex items-center cursor-pointer text-gray-500 hover:text-black duration-200 capitalize"
      >
        <span class="mr-1">Yana</span>
        <i class="bx bx-chevron-down text-sm"></i>
      </span>
    </nav>
    <!-- login modal -->
    <section
      v-if="showLoginModal"
      class="modal w-full h-screen fixed z-50 flex items-center justify-center top-0 left-0"
    >
      <div class="w-[30%] bg-white rounded-xl h-auto p-7">
        <div class="text-right">
          <button
            class="py-1 px-2.5 bg-gray-300 rounded-full text-gray-500 font-bold"
            @click="showLoginModal = false"
          >
            X
          </button>
        </div>
        <form @submit.prevent="onSubmitLogin" class="text-left">
          <div>
            <h2 class="text-2xl font-semibold mb-3">Введите номер телефона</h2>
            <p class="text-[18px] text-gray-700 mb-7">
              Отправим смс с кодом подтверждения
            </p>
            <input
              class="bg-gray-200 p-3 w-full block rounded-lg mb-7"
              placeholder="+998 00 000-00-00"
              type="tel"
              name=""
              id=""
            />
            <button
              class="w-full bg-blue-600 p-3 rounded-lg text-white text-xl mb-32"
            >
              Получить код
            </button>
          </div>
          <div class="text-center">
            <p>Авторизуясь, вы соглашаетесь</p>
            <a class="text-blue-400" href="/"
              >c политикой обработки персональных данных</a
            >
          </div>
        </form>
      </div>
    </section>
  </header>

  <!-- category sub menu -->
  <section
    v-if="isShowCatalog"
    class="catalogs w-full bg-[#00000057] absolute left-0 z-30"
    @click="isShowCatalog = !isShowCatalog"
  >
    <div class="container h-full">
      <div class="flex relative h-full">
        <ul
          class="categories_menu w-[20%] h-full overflow-y-auto bg-white absolute top-0 left-[16.5%]"
        >
          <li class="menu-item py-1 px-4 hover:bg-[#F0F0FF] text-[#7000FF]">
            <div class="flex items-center justify-between">
              <span>All</span>
              <!-- <i class="bx bx-chevron-right text-lg"></i> -->
            </div>
            <!-- <div
              class="sub_menu absolute top-0 left-1/4 bg-[#F0F0FF] h-full w-3/4 p-4"
            >
              All
            </div> -->
          </li>
          <li
            v-for="(item, index) in categoryStore.categories.data"
            :key="index + '-category-item'"
            class="menu-item py-1 px-4 hover:bg-[#F0F0FF] text-[#7000FF]"
            @click="goToFilter(item)"
          >
            <div
              class="flex items-center justify-between cursor-pointer capitalize"
            >
              <span>{{ item }}</span>
              <!-- <i class="bx bx-chevron-right text-lg"></i> -->
            </div>
            <!-- <div
              class="sub_menu absolute top-0 left-1/4 bg-[#F0F0FF] h-full w-3/4 p-4"
            >
              {{ item }}
            </div> -->
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
.nav_category::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 1.2px;
  width: 0;
  background-color: #000;
  transition: 0.2s;
}
.nav_category:hover::before {
  width: 100%;
}
.catalogs {
  height: calc(100vh - 100px);
  top: 100px;
}
.menu-item .sub_menu {
  opacity: 0;
  visibility: hidden;
}
.menu-item:hover .sub_menu {
  opacity: 1;
  visibility: visible;
}
.categories_menu::-webkit-scrollbar {
  display: none;
}
.modal {
  background-color: #00000073;
}
</style>
