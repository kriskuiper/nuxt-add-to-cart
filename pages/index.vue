<template>
  <div class="container">
    <h1 class="homepage__title">Awesome women's clothing</h1>

    <section class="homepage__product-grid">
      <product-card
        v-for="product in products"
        :product="product"
        :href="`/products/${product.id}`"
      />
    </section>
  </div>
</template>

<script setup>
// TODO: clean up data fetching from API
const response = await fetch(
  "https://fakestoreapi.com/products/category/women's clothing"
);
const products = await response.json();
</script>

<style lang="scss">
.homepage__title {
  margin-bottom: 2rem;
}

.homepage__product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media ($media-md) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  @media ($media-lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
