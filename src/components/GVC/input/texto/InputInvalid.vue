<template>
  <div class="inputGroup">
    <input
      autocomplete="off"
      required
      pattern="[A-Za-z]{3,}"
      title="Pelo menos 3 letras"
      type="text"
      @input="handleInput"
    />
    <label  for="name">Validado</label>
  </div>
</template>

<script>
export default {

};
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
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.inputGroup input:focus~label,
.inputGroup input:valid~label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: var(--bg-light);
}

.inputGroup input:valid {
  border-color: green;
}

.inputGroup input:invalid:focus {
  border-color: red;
}
</style>
