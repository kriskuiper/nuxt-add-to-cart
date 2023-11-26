<template>
  <header class="header">
    <p class="header__logo">MyStore</p>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
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
