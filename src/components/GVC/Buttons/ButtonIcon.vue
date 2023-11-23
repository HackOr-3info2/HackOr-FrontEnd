<template>
  <button>
    <box-icon color="var(--black)" :name="nameIcon"></box-icon>
  </button>
</template>

<script setup>
defineProps({
  nameIcon: String
})

</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  border: 3px solid var(--primary-color-lg);
  background-color: transparent;
  cursor: pointer;
  outline-offset: 0;
  outline: 0.225em solid transparent;
  border-radius: 50%;
}
button:focus,
button:hover {
  outline-color: var(--black);
  outline-offset: 0.2em;
}
body.dark-mode button {
  border: 3px solid var(--primary-color-dk);
}
body.dark-mode button:focus,
button:hover {
  outline-color: var(--primary-color-dk);
  outline-offset: 0.2em;
}
</style>
