<template>
  <product-list :title="category.title">
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
  methods: {
    getImagePath(path) {
      return require(`@/assets/images/kompozit-paneller/${path}`);
    },
    getPDFPath(path) {
      return require(`@/assets/pdf/kompozit-paneller/${path}`);
    },
  },
};
</script>
