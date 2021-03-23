<template>
  <product-list :title="products.title">
    <template #products>
      <div class="products">
        <img
          v-for="product in products.products"
          :key="product[0]"
          :src="getImagePath(product[0])"
          :alt="product[1]"
        />
      </div>
    </template>
  </product-list>
</template>

<script>
import rescaraProducts from './rescara-products.js';
import ProductList from '@/components/ProductList';

export default {
  name: 'Rescara',
  components: { ProductList },
  data() {
    return {
      products: rescaraProducts[this.$route.params.product],
    };
  },
  methods: {
    getImagePath(path) {
      return require('@/assets/images/profil-sistemleri/rescara/' + path);
    },
  },
};
</script>
