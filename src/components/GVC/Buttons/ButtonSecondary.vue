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
  border: 3px solid var(--black);
  transition: color 0.2s;
  z-index: 1;
  border-radius: var(--border-rds);
  cursor: pointer;
  background-color: var(--bg-black);
  font-weight: 500;
  color: white;
}

button:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: white;
  height: 150px;
  width: 200px;
  border-radius: var(--border-rds);
}

button:hover {
  color: var(--text-color-lg);
}

button:before {
  top: 100%;
  left: 100%;
  transition: all 0.5s;
}

button:hover:before {
  top: -30px;
  left: -30px;
}

button:active:before {
  background: var(--bg-black);
  transition: background 0s;
}
</style>
