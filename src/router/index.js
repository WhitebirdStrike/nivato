import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Profil from "../views/ProfilView.vue";
import ResourceView from "../views/ResourcesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profil",
      name: "prof",
      component: Profil,
    },
    {
      path: "/Resources",
      name: "Resource",
      component: ResourceView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
