<template>
  <main class="Product container">
    <section class="Product-info">
      <h1 class="title">{{ title }}</h1>
      <hr />
      <slot />
    </section>
  </main>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    title: String,
  },
};
</script>
