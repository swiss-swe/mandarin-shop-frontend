import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/FavoriteView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/BasketView.vue"),
    },
    {
      path: "/products",
      redirect: "/category",
    },
    {
      path: "/products/:id",
      name: "single-product",
      component: () => import("../views/SingleView.vue"),
    },
  ],
});

export default router;
