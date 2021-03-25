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
  name: "ProductList",
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

<style lang="scss">
.Product {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 61%;

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

  & > &-info,
  & > &-list {
    display: flex;
    flex-direction: column;
    flex: 1;

    & > .title {
      font-size: 2rem;
      letter-spacing: 1px;
      line-height: 1;

      & + hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-color: $color-black;
      }
    }
  }

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
    flex-direction: column;
    align-items: center;

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
