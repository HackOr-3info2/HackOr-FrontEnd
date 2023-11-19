<template>
  <button>
    <RouterLink :to="link">
      {{ text }}
    </RouterLink>
  </button>
</template>

<script setup>
defineProps({
  link: String,
  text: String
})
</script>

<style scoped>
button {
  display: inline-block;
  padding: 0.7em 2em;
  position: relative;
  overflow: hidden;
  border: 3px solid var(--text-color-lg);
  transition: transform 0.2s;
  z-index: 1;
  border-radius: 25px;
  cursor: pointer;
  background-color: var(--text-color-lg);
  font-weight: 500;
  color: white;
}
button:hover {
  transform: scale(1.05);

}
</style>
