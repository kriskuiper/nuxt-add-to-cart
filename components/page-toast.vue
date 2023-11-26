<template>
  <output class="page-toast">
    <slot />

    <button v-if="isClosable" @click="$emit('close')">
      <span class="visually-hidden">Close</span>
      <X />
    </button>
  </output>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";

type ToastProps = {
  isClosable?: boolean;
};

defineProps<ToastProps>();
</script>

<style>
.page-toast {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightgreen;
  border: 1px solid green;
  color: green;
  padding: 1rem;
}
</style>
