<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://images.uzum.uz/clo4nqlenntcj8aah5h0/original.jpg",
        "https://images.uzum.uz/clo4not6sfhsc0ung4eg/original.jpg",
        "https://images.uzum.uz/clo4nq56sfhsc0ung4fg/original.jpg",
        "https://images.uzum.uz/clpchfdenntcj8aapo7g/original.jpg",
        "https://images.uzum.uz/clpdea9s99oopol15afg/original.jpg",
        "https://images.uzum.uz/clpdea9s99oopol15ag0/original.jpg",
        "https://images.uzum.uz/clpdea9s99oopol15af0/original.jpg",
      ],
      currentIndex: 0,
    };
  },

  mounted: function () {},

  methods: {
    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
    onlick: function () {
      const img = this.images[0];
      console.log(img);
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<template>
  <div style="display: flex; gap: 20px">
    <transition-group
      style="
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 60vh;
        overflow-y: scroll;
        position: sticky;
      "
      name="fade"
      tag="div"
    >
      <div v-for="(image, index) in images" :key="index">
        <img @click="onlick" class="img1" :src="image" />
      </div>
    </transition-group>
    <transition-group name="fade" tag="div">
      <div style="display: flex" v-for="i in [currentIndex]" :key="i">
        <a class="prev" @click="prev" href="#">&#10094; </a>
        <img class="img" :src="currentImg" />
        <a class="next" @click="next" href="#">&#10095; </a>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  opacity: 1;
}

.img1 {
  height: 100px;
  width: 100%;
}
.img {
  height: 400px;
  width: 100%;
}

.prev,
.next {
  display: flex;
  align-items: center;
  cursor: pointer;
  top: 40%;
  width: auto;
  padding: 16px;
  color: blue;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 4px 0px 0px 4px;
  text-decoration: none;
  user-select: none;
}
</style>
