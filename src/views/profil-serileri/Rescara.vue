<script>
import categories from './rescara-products.js';
import ProductList from '@/components/ProductList';

export default {
  name: 'Rescara',
  components: { ProductList },
  data() {
    return {
      category: categories[this.$route.params.product],
    };
  },
  methods: {
    getImagePath(path) {
      const productPath = this.$route.params.product;
      return require(`@/assets/images/profil-sistemleri/rescara/${productPath === '' ? '' : productPath + '/'}${path}`);
    },
    getCategoryNames() {
      const obj = {};
      for (const [item, value] of Object.entries(categories).filter(([item]) => item !== '')) {
        obj[item] = value.title;
      }

      return obj;
    },
  },
};
</script>

<template>
  <product-list :title="category.title">
    <template #category v-if="category.hasCategory">
      <router-link v-for="(name, path) in getCategoryNames()" :key="name" :to="'profil-sistemleri/rescara/' + path">
        {{ name }}
      </router-link>
    </template>
    <template #products>
      <div class="products">
        <template v-if="category.hasBottomText">
          <figure v-for="product in category.products" :key="product.path">
            <img :src="getImagePath(product.path)" :alt="product.alt" />
            <figcaption>{{ product.alt }}</figcaption>
          </figure>
        </template>
        <img
          v-else
          v-for="product in category.products"
          :key="product.path"
          :src="getImagePath(product.path)"
          :alt="product.alt"
        />
      </div>
    </template>
  </product-list>
</template>
