<script>
import categories from "./akspro.js";
import ProductList from "@/components/ProductList";
import ZoomImage from "@/components/ZoomImage";
import getCategoryNames from "@/utils/getCategoryNames";

export default {
  name: "Alumet",
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
      return require(`@/assets/images/aksesuarlar/${productPath === "" ? "" : productPath + "/"}${path}`);
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
      <router-link v-for="(name, path) in categoryNames" :key="name" :to="path">
        {{ name }}
      </router-link>
    </template>
    <template #products v-if="$route.params.product !== ''">
      <div class="products">
        <template v-for="product in category.products || category.productCount" :key="product.path">
          <template v-if="category.productCount === undefined">
            <figure>
              <img
                :src="getImagePath(product.path)"
                :alt="product.alt"
                @click="setZoomImage(getImagePath(product.path), product.alt)"
                data-can-large
              />
              <figcaption>{{ product.alt }}</figcaption>
            </figure>
          </template>
          <template v-else>
            <img
              :src="getImagePath(product + '.jpg')"
              :alt="category.imageAlt"
              @click="setZoomImage(getImagePath(product + '.jpg'), category.imageAlt)"
              data-can-large
            />
          </template>
        </template>
      </div>
      <ZoomImage :path="zoomImagePath" :alt="zoomImageAlt" />
    </template>
  </product-list>
</template>
