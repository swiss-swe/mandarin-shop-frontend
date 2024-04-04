<script setup></script>
<template>
  <footer class="footer pb-12 pt-8 bg-white">
    <div class="container flex gap-8 flex-wrap">
      <div class="w-72">
        <header class="header">Biz haqimizda</header>
        <div class="mt-3">
          <router-link to="#" class="block header-text"
            >Topshirish punktlari</router-link
          >
          <router-link to="#" class="header-text">Vakansiyalar</router-link>
        </div>
      </div>
      <div class="w-72">
        <header class="header">Foydalanuvchilarga</header>
        <div class="mt-3">
          <router-link to="#" class="block header-text"
            >Biz bilan bog'lanish</router-link
          >
          <router-link to="#" class="header-text">Savol-Javob</router-link>
        </div>
      </div>
      <div class="w-64">
        <header class="header">Tadbirkorlarga</header>
        <div class="mt-3">
          <router-link to="#" class="block header-text"
            >Uzumda soting</router-link
          >
          <router-link to="#" class="header-text"
            >Sotuvchi kabinetiga kirish</router-link
          >
        </div>
      </div>
      <div class="w-72">
        <header class="header">Ilovani yuklab olish</header>
        <div class="mt-4 flex items-center">
          <i class="bx bxl-apple"></i>
          <span class="text-sm pr-5">AppStore</span>
          <i class="bx bxl-play-store text-blue-500"></i>
          <span class="text-sm">Google Play</span>
        </div>
      </div>

      <div class="w-72">
        <header class="header">Mandarin ijtimoiy tarmoqlarda</header>
        <div class="mt-4 flex items-center">
          <i class="bx bx1 bxl-instagram-alt text-pink-500 mx-1"></i>
          <i class="bx bx1 bxl-telegram mx-1"></i>
          <i class="bx bx1 bxl-youtube text-red-700 mx-2"></i>
          <i class="bx bx1 bxl-facebook-square text-blue-900 mx-2"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bx {
  font-size: 30px;
}
.bx1 {
  font-size: 37px;
}

.bxl-telegram {
  color: rgb(94, 167, 251);
}
</style>
