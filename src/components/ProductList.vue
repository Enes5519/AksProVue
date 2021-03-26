<template>
  <main class="Product container">
    <aside class="Product-category" v-if="$slots.category !== undefined">
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
  name: "ProductList",
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
.Product {
  & > &-category {
    display: flex;
    flex-direction: column;
    background-color: $color-primary;

    & > a {
      padding: 0.625rem 1.25rem;
      color: #fff;
      border-bottom: 1px solid $color-dark;

      &:hover {
        background-color: $color-dark;
      }
    }

    & + .Product-list {
      margin-left: 2rem;
    }
  }

  & > &-list > .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem 2rem;
    width: 100%;

    &[small] {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    & a:focus {
      outline: none;

      img {
        border: 2px dashed $color-dark-gray;
      }
    }

    & img {
      width: 100%;
      border: 2px dashed $color-border;
    }

    & figcaption {
      text-align: center;
    }
  }
}

@media (max-width: $breakpoint-large) {
  .Product {
    & > &-category {
      order: 2;
      margin-top: 1rem;
      width: 100%;

      & + .Product-list {
        margin-left: 0;
      }
    }

    & > &-list > .products {
      grid-template-columns: 1fr;
    }
  }
}
</style>
