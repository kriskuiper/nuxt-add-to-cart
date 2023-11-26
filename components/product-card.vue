<template>
  <NuxtLink
    :to="href"
    :title="product.title"
    class="product-card"
    data-testid="product-card-link"
  >
    <figure class="product-card__image-container">
      <img
        :src="product.image"
        :alt="product.title"
        class="product-card__image"
      />
    </figure>

    <p class="product-card__title">
      {{ product.title }}
    </p>

    <dl>
      <dt class="visually-hidden">Price:</dt>
      <dd class="product-card__price">{{ product.price }}</dd>
    </dl>

    <menu v-if="$slots.actions">
      <slot name="actions" />
    </menu>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from "@/types/api";

type ProductCardProps = {
  href: string;
  product: Product;
};

defineProps<ProductCardProps>();
</script>

<style lang="scss">
.product-card__image {
  width: 100%;
  aspect-ratio: 5/8;
  object-fit: cover;
}

.product-card__title {
  font-weight: bold;
}

.product-card__price {
  color: grey;
}
</style>
