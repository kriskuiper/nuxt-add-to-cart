<template>
  <NuxtLink :to="href" :title="product.title" class="product-card">
    <figure class="product-card__image-container">
      <img
        :src="product.image"
        :alt="product.title"
        class="product-card__image"
      />
    </figure>
    <NuxtLink :to="`/products/${product.id}`"> to product </NuxtLink>
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
</style>
