<template>
  <div class="inputGroup">
    <input autocomplete="off" required="" type="password" />
    <label for="name">Senha</label>
    <div class="icone">
      <box-icon color="var(--text-color-lg)" name="lock"></box-icon>
    </div>
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
.icone {
  position: absolute;
  top: 23%;
  left: 89%;
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

.inputGroup :is(input:focus, input:valid) ~ label {
  transform: translateY(-50%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: var(--bg-light);
}

.inputGroup :is(input:focus, input:valid) {
  border-color: var(--text-color-lg);
}
</style>
