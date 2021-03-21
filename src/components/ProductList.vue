<template>
  <main class="Product container">
    <aside class="Product-category" v-if="hasCategory">
      <slot name="category" />
    </aside>
    <section class="Product-list">
      <h1 class="title">{{ title }}</h1>
      <hr />
      <slot name="products" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    title: String,
  },
  data() {
    return {
      hasCategory: false,
    };
  },
  beforeMount() {
    this.hasCategory = this.$slots.category !== undefined;
  },
};
</script>
