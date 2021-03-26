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
  name: "ProductInfo",
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
.Product {
  & > &-info > p + table {
    margin-top: 2rem;
  }

  & > &-info > table {
    border-collapse: collapse;
    width: 100%;

    & > thead {
      background-color: $color-gray;
      color: $color-dark-gray;
    }

    th {
      font-weight: 500;
    }

    tr:hover {
      background-color: $color-gray;
    }

    td,
    th {
      border: 1px solid $color-border;
      padding: 0.5rem;
    }
  }
}
</style>
