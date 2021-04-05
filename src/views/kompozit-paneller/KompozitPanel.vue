<script>
import categories from "./kompozit-paneller.js";
import ProductList from "@/components/ProductList";

export default {
  name: "KompozitPanel",
  components: { ProductList },
  data() {
    return {
      category: categories[this.$route.params.product],
    };
  },
  beforeCreate() {
    if (!categories[this.$route.params.product]) {
      this.$router.replace("/404");
    }
  },
  methods: {
    getImagePath(path) {
      return `/cdn/images/kompozit-paneller/${path}`;
    },
    getPDFPath(path) {
      return `/cdn/pdf/kompozit-paneller/${path}`;
    },
  },
};
</script>

<template>
  <product-list v-if="category !== undefined" :title="category.title">
    <template #products>
      <div class="products">
        <template v-for="product in category.products" :key="product.path">
          <a :href="getPDFPath(product.to)" target="_blank">
            <img :src="getImagePath(product.path)" :alt="product.alt" />
          </a>
        </template>
      </div>
    </template>
  </product-list>
</template>
