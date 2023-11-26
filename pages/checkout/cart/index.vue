<template>
  <div>
    <h1>Cart</h1>

    <product-card
      v-for="item in cart"
      :product="item"
      :href="`/products/${item.id}`"
    >
      <template #actions>
        <button @click.prevent="() => removeItem(item)">
          Remove from cart
        </button>
      </template>
    </product-card>
  </div>
</template>

<script setup lang="ts">
const { cart, removeItem } = useCart();
</script>

<style scoped></style>
