<script>
import categories from "./rescara-products.js";
import ProductList from "@/components/ProductList";
import WithLink from "@/components/WithLink";

export default {
  name: "Rescara",
  components: { WithLink, ProductList },
  data() {
    return {
      category: categories[this.$route.params.product],
    };
  },
  methods: {
    getImagePath(path) {
      const productPath = this.$route.params.product;
      return require(`@/assets/images/profil-sistemleri/rescara/${productPath === "" ? "" : productPath + "/"}${path}`);
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
        <template v-for="product in category.products" :key="product.path">
          <template v-if="category.hasBottomText">
            <WithLink :to="product.to" :useRouter="category.useRouter">
              <figure>
                <img :src="getImagePath(product.path)" :alt="product.alt" />
                <figcaption>{{ product.alt }}</figcaption>
              </figure>
            </WithLink>
          </template>
          <template v-else>
            <WithLink :to="product.to" :useRouter="category.useRouter">
              <img :src="getImagePath(product.path)" :alt="product.alt" />
            </WithLink>
          </template>
        </template>
      </div>
    </template>
  </product-list>
</template>
