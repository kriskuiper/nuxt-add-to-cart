<template>
  <div>
    <h1>Hello world!</h1>

    <section class="product-grid">
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
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
