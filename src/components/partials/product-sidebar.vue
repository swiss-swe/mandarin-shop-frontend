<script setup>
import { useCategoryStore } from "@/stores/category";
import { useRouter } from "vue-router";

const categoryStore = useCategoryStore();
const router = useRouter();

const getByFilter = (queryString) => {
  if (queryString) {
    router.push({
      name: "category",
      query: {
        filter: queryString,
      },
    });
  } else {
    router.push({ name: "category" });
  }
};
</script>

<template>
  <aside class="h-auto bg-purple pr-4 pb-6 flex flex-col">
    <h2 class="text-lg mb-3 font-semibold">Kategoriyalar</h2>
    <div class="text-gray-700 pl-4">
      <ol class="list-none cursor-pointer">
        <li
          @click="getByFilter(item)"
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 px-2 py-[5px]"
        >
          <span>Barcha maxsulotlar</span>
        </li>

        <li
          v-for="(item, index) in categoryStore.categories.data"
          :key="index + '-aside-item'"
          @click="getByFilter(item)"
          class="mt-[5px] hover:bg-slate-200 rounded-md active:bg-slate-100 px-2 py-[5px]"
        >
          <span>{{ item }}</span>
        </li>
      </ol>
    </div>
    <h2 class="text-lg mt-10 mb-2 font-semibold">Цена</h2>
    <div class="pl-6">
      <p class="text-sm">Очистить</p>
      <div class="mt-4">
        <div class="flex gap-2">
          <input
            type="text"
            class="border-2 border-gray-300 p-[5px] focus:border-black focus:outline-none w-[120px] rounded-md"
          />
          <input
            type="text"
            class="border-2 border-gray-300 focus:border-black focus:outline-none w-[120px] rounded-md"
          />
        </div>
        <div class="mt-[10px]">
          <input type="range" name="" id="" class="w-[70%]" />
        </div>
      </div>
    </div>
    <h2 class="text-lg mt-[30px] font-semibold">Бренд</h2>
    <div class="pl-6 mt-4">
      <div class="flex gap-x-3 mb-2 items-center">
        <input class="w-4 h-4" type="checkbox" name="" id="FPB" />
        <label for="FPB">FPB</label>
      </div>

      <div class="flex gap-x-3 mb-2 items-center">
        <input class="w-4 h-4" type="checkbox" name="" id="Nothing" />
        <label for="Nothing">Nothing</label>
      </div>

      <div class="flex gap-x-3 mb-2 items-center">
        <input class="w-4 h-4" type="checkbox" name="" id="SSMART" />
        <label for="SSMART">SSMART</label>
      </div>

      <div class="flex gap-x-3 mb-2 items-center">
        <input class="w-4 h-4" type="checkbox" name="" id="Acer" />
        <label for="Acer">Acer</label>
      </div>
      <p class="text-xs text-gray-500 cursor-pointer">Еще 61</p>
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  background-color: #fff;
  color: black;
}
</style>
