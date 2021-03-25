import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "@/views/PageNotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profil-serileri/rescara/:product?",
    name: "RescaraProfilSerileri",
    component: () => import(/* webpackChunkName: "rescara-profil-serileri" */ "../views/profil-serileri/Rescara.vue"),
  },
  {
    path: "/profil-serileri/almin/:product?",
    name: "AlminProfilSerileri",
    component: () => import(/* webpackChunkName: "almin-profil-serileri" */ "../views/profil-serileri/Almin.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
