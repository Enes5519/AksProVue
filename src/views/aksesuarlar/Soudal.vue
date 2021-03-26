<script>
import ProductList from "@/components/ProductList";
import category from "./soudal.js";

export default {
  name: "Soudal",
  components: { ProductList },
  data() {
    return {
      category,
    };
  },
  methods: {
    getImagePath(path) {
      return require(`@/assets/images/aksesuarlar/soudal/${path}`);
    },
  },
};
</script>

<template>
  <product-list :title="category.title">
    <template #products>
      <div class="products">
        <template v-for="product in category.products" :key="product.path">
          <router-link :to="product.to">
            <figure>
              <img :src="getImagePath(product.path)" :alt="product.alt" />
              <figcaption>{{ product.alt }}</figcaption>
            </figure>
          </router-link>
        </template>
      </div>
    </template>
  </product-list>
</template>
