<template>
  <div class="cart-item">
    <figure class="cart-item__image-container">
      <img :src="item.image" :alt="item.title" class="cart-item__image" />
      <figcaption class="cart-item__title">
        {{ item.title }}
      </figcaption>
    </figure>

    <div>
      <button aria-label="Remove item" @click="$emit('remove-button-click')">
        <Trash />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trash } from "lucide-vue-next";
import type { Product } from "@/types/api";

type CartItemProps = {
  item: Product;
};

defineProps<CartItemProps>();
</script>

<style>
.cart-item {
  display: flex;
  border: 1px solid lightgray;
  padding: 1rem;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 0.5rem;
}

.cart-item__image-container {
  display: flex;
  gap: 1rem;
}

.cart-item__image {
  max-width: 100px;
}
</style>
