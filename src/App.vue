<template>
  <Header />
  <router-view :key="$route.fullPath" />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  title: "Alüminyum Profil Sistemleri, Kompozit Panel, Zengin Aksesuar Çeşitleri ve Proje Çözüm Merkezi",
};
</script>
