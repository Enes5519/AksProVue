<script>
import categories from "./almin-products.js";
import ProductList from "@/components/ProductList";
import ZoomImage from "@/components/ZoomImage";

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
  methods: {
    getImagePath(path) {
      const productPath = this.$route.params.product;
      return require(`@/assets/images/profil-sistemleri/almin/${productPath + "/"}${path}.jpg`);
    },
    getCategoryNames() {
      const obj = {};
      for (const [item, value] of Object.entries(categories)) {
        if (item === "") {
          continue;
        }
        obj[item] = value.title;
      }

      return obj;
    },
    setZoomImage(zoomImagePath, zoomImageAlt) {
      this.zoomImagePath = zoomImagePath;
      this.zoomImageAlt = zoomImageAlt;
    },
  },
};
</script>

<template>
  <product-list :title="category.title">
    <template #category>
      <router-link v-for="(name, path) in getCategoryNames()" :key="name" :to="path">
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
