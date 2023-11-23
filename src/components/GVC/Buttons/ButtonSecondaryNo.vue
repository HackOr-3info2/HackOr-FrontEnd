<template>
  <button>
    {{ text }}
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
  border: 3px solid var(--black);
  transition: transform 0.2s;
  z-index: 1;
  border-radius: var(--border-rds);
  cursor: pointer;
  background-color: var(--bg-black);
  font-weight: 500;
  color: white;
}
button:hover {
  transform: scale(1.05);
}
</style>
