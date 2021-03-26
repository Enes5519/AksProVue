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
    path: "/kompozit-paneller/:product",
    name: "KompozitPanel",
    component: () => import(/* webpackChunkName: "kompozit-paneller" */ "../views/kompozit-paneller/KompozitPanel.vue"),
  },
  {
    path: "/aksesuarlar/akspro/:product?",
    name: "AksProAksesuarlar",
    component: () => import(/* webpackChunkName: "akspro-aksesuarlar" */ "../views/aksesuarlar/AksPro.vue"),
  },
  {
    path: "/aksesuarlar/soudal",
    name: "SoudalAksesuarlar",
    component: () => import(/* webpackChunkName: "soudal-aksesuarlar" */ "../views/aksesuarlar/Soudal.vue"),
  },
  {
    path: "/aksesuarlar/soudal/acryrub-silikonize-mastik",
    name: "AcryrubSilikonizeMastik",
    component: () =>
      import(
        /* webpackChunkName: "acryrub-silikonize-mastik" */ "../views/aksesuarlar/soudal/AcryrybSilikonizeMastik.vue"
      ),
  },
  {
    path: "/aksesuarlar/soudal/butyrub",
    name: "Butyrub",
    component: () => import(/* webpackChunkName: "butyrub" */ "../views/aksesuarlar/soudal/Butyrub.vue"),
  },
  {
    path: "/aksesuarlar/soudal/firecryl-fr",
    name: "FirecrylFr",
    component: () => import(/* webpackChunkName: "firecryl-fr" */ "../views/aksesuarlar/soudal/FirecrylFr.vue"),
  },
  {
    path: "/aksesuarlar/soudal/fix-all-crystal",
    name: "FixAllCrystal",
    component: () => import(/* webpackChunkName: "fix-all-crystal" */ "../views/aksesuarlar/soudal/FixAllCrystal.vue"),
  },
  {
    path: "/aksesuarlar/soudal/silirub-no5",
    name: "SilirubNO5",
    component: () => import(/* webpackChunkName: "silirub-no5" */ "../views/aksesuarlar/soudal/SilirubNO5.vue"),
  },
  {
    path: "/aksesuarlar/soudal/silirub-s",
    name: "SilirubS",
    component: () => import(/* webpackChunkName: "silirub-s" */ "../views/aksesuarlar/soudal/SilirubS.vue"),
  },
  {
    path: "/aksesuarlar/soudal/silirub-ws",
    name: "SilirubWS",
    component: () => import(/* webpackChunkName: "silirub-ws" */ "../views/aksesuarlar/soudal/SilirubWS.vue"),
  },
  {
    path: "/aksesuarlar/soudal/soudaflex-40-fc",
    name: "Soudaflex40FC",
    component: () => import(/* webpackChunkName: "soudaflex-40-fc" */ "../views/aksesuarlar/soudal/Soudaflex40FC.vue"),
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
