<template>
<div class="inputGroup">
    <input autocomplete="off" required="" type="datetime-local">
    <label for="name">Calendário</label>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.inputGroup {
  max-width: 100%;
  position: relative;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 160px;
  width: 100%;
}

.inputGroup label {
  position: absolute;
  left: 0;
  margin-left: 0.5em;
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: var(--bg-light);
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}
.inputGroup :is(input:focus, input:valid) {
  border-color: var(--text-color-lg);
}
</style>
