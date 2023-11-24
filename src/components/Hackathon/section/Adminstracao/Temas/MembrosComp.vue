<template>
  <h3>Membros</h3>
  <div class="all-members">
    <CardMembro />
  </div>
</template>

<script setup>
import CardMembro from './CardMembro.vue'
</script>

<style scoped>
.all-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
