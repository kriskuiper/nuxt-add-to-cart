<template>
  <div>
    <h1>Cart</h1>

    <div v-for="item in cart">
      <h2>{{ item.title }}</h2>

      <button @click="() => removeItem(item)"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { cart, removeItem } = useCart();
</script>

<style scoped></style>
