<template>
  <div class="textareaGroup">
    <textarea autocomplete="off" required="" type="text" />
    <label for="name">Normal</label>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.textareaGroup {
  max-width: 100%;
  position: relative;
}

.textareaGroup textarea {
  font-size: 100%;
  padding: 0.8em;
  height: 19vh;
  resize: none;
  overflow-y: hidden;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.textareaGroup label {
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.textareaGroup :is(textarea:focus, textarea:valid) ~ label {
  transform: translateY(-50%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: var(--bg-light);
}

.textareaGroup :is(textarea:focus, textarea:valid) {
  border-color: var(--text-color-lg);
}
</style>
