<template>
  <div class="container">
    <h1>Cart</h1>

    <div class="cart-page__items">
      <cart-item
        v-for="item in cart"
        :item="item"
        @remove-button-click="() => removeItem(item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { cart, removeItem } = useCart();
</script>

<style>
.cart-page__items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
