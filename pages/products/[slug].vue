<template>
  <div class="container product-page">
    <figure class="product-page__gallery">
      <img
        :src="product.image"
        :alt="product.title"
        fetchpriority="high"
        class="product-page__gallery-image"
      />
    </figure>

    <section class="product-page__content">
      <h1 class="product-page__title">{{ product.title }}</h1>
      <p class="product-page__description">{{ product.description }}</p>

      <button @click="handleAddToCart">Add to cart</button>

      <div v-if="toastShouldShow">
        <page-toast is-closable @close="() => showToast(false)">
          <div>
            <span class="product-page__success-message"
              >Product successfully added!</span
            >
            <NuxtLink to="/checkout/cart" class="product-page__go-to-cart-link"
              >Go to cart</NuxtLink
            >
          </div>
        </page-toast>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { addItem } = useCart();
const route = useRoute();

const toastShouldShow = ref(false);

// TODO: clean up data fetching from API
const response = await fetch(
  `https://fakestoreapi.com/products/${route.params.slug}`
);
const product = await response.json();

const handleAddToCart = () => {
  // TODO: in a real world there would be some error handling here
  addItem(product);
  showToast(true);
};

const showToast = (shouldShow: boolean) => {
  toastShouldShow.value = shouldShow;
};
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

.product-page__success-message {
  font-weight: bold;
}

.product-page__go-to-cart-link {
  display: block;
}
</style>
