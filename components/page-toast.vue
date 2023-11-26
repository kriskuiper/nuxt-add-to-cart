<template>
  <output class="page-toast">
    <span class="page-toast__message">
      {{ message }}
    </span>

    <button v-if="isClosable">
      <span class="visually-hidden">Close</span>
    </button>
  </output>
</template>

<script setup lang="ts">
type ToastProps = {
  message: string;
  isClosable?: boolean;
};

defineProps<ToastProps>();
</script>

<style>
.page-toast {
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
