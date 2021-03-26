<script>
import categories from "./rescara-products.js";
import ProductList from "@/components/ProductList";
import WithLink from "@/components/WithLink";
import getCategoryNames from "@/utils/getCategoryNames";

export default {
  name: "Rescara",
  components: { WithLink, ProductList },
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
      const productPath = this.$route.params.product;
      return require(`@/assets/images/profil-sistemleri/rescara/${productPath === "" ? "" : productPath + "/"}${path}`);
    },
  },
  computed: {
    categoryNames() {
      return getCategoryNames(categories);
    },
  },
};
</script>

<template>
  <product-list v-if="category !== undefined" :title="category.title">
    <template #category v-if="category.hasCategory">
      <router-link v-for="(name, path) in categoryNames" :key="name" :to="path">
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
