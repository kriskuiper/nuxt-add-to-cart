<template>
  <div class="product-page">
    <figure class="product-page__gallery">
      <img
        :src="product.image"
        :alt="product.title"
        fetchpriority="high"
        class="product-page__gallery-image"
      />
    </figure>

    <section class="product-page__content">
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>

      <button @click="addToCart">Add to cart</button>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

// TODO: clean up data fetching from API
const response = await fetch(
  `https://fakestoreapi.com/products/${route.params.slug}`
);
const product = await response.json();

function addToCart() {
  console.warn("TODO: add to cart");
}
</script>

<style lang="scss">
.product-page {
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.product-page__gallery {
  grid-column-start: 1;
  grid-column-end: 3;
}

.product-page__gallery-image {
  width: 100%;
}

.product-page__content {
  grid-column-start: 3;
  grid-column-end: -1;
}
</style>
