<script>
import categories from "./almin-products.js";
import ProductList from "@/components/ProductList";
import ZoomImage from "@/components/ZoomImage";
import getCategoryNames from "@/utils/getCategoryNames";

export default {
  name: "Almin",
  components: { ZoomImage, ProductList },
  data() {
    return {
      category: categories[this.$route.params.product],
      zoomImagePath: "",
      zoomImageAlt: "",
    };
  },
  beforeCreate() {
    if (!categories[this.$route.params.product]) {
      this.$router.replace("/404");
    }
  },
  computed: {
    categoryNames() {
      return getCategoryNames(categories);
    },
  },
  methods: {
    getImagePath(path) {
      const productPath = this.$route.params.product;
      return `/cdn/images/profil-sistemleri/almin/${productPath + "/"}${path}.jpg`;
    },
    setZoomImage(zoomImagePath, zoomImageAlt) {
      this.zoomImagePath = zoomImagePath;
      this.zoomImageAlt = zoomImageAlt;
    },
  },
};
</script>

<template>
  <product-list v-if="category !== undefined" :title="category.title">
    <template #category>
      <router-link v-for="(name, path) in categoryNames" :key="name" :to="'/profil-serileri/almin/' + path">
        {{ name }}
      </router-link>
    </template>
    <template #products v-if="$route.params.product !== ''">
      <div class="products">
        <template v-for="productIndex in category.productCount" :key="productIndex">
          <img
            :src="getImagePath(productIndex)"
            :alt="category.imageAlt"
            @click="setZoomImage(getImagePath(productIndex), category.imageAlt)"
            data-can-large=""
          />
        </template>
      </div>
      <ZoomImage :path="zoomImagePath" :alt="zoomImageAlt" />
    </template>
  </product-list>
</template>
