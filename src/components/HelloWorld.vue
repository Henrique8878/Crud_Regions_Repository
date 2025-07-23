<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <span>Henrique</span>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
