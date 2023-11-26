<template>
  <header class="header">
    <p class="header__logo">MyStore</p>

    <NuxtLink to="/checkout/cart" class="header__cart-link"> Cart </NuxtLink>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 1rem;

  @media ($media-md) {
    padding: 1.25rem 1rem;
  }
}

.header__logo {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
