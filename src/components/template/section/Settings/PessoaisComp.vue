<script setup>
import ButtonPrimary from '../../../GVC/Buttons/ButtonPrimary.vue'
import ButtonIcon from '../../../GVC/Buttons/ButtonIcon.vue'
</script>

<template>
  <section>
    <h3>Informações pessoais</h3>
    <div class="config">
      <div class="icon-header">
        <div class="icon">
          <img src="../../../../assets/eu.jpg" alt="" />
          <ButtonPrimary text="Editar" link="/a" />
        </div>
        <div class="header">
          <div class="container">
            <div class="alert">
              <ButtonIcon nameIcon="pencil" />
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="inputGroup">
          <input
            autocomplete="off"
            required=""
            placeholder="Geovana Sophia Horodeski"
            type="text"
          />
          <label for="name">Nome Completo</label>
        </div>
        <div class="inputGroup disabled">
          <input autocomplete="off" disabled placeholder="@horodeski" type="text" />
          <label for="name">User</label>
        </div>
        <div class="inputGroup">
          <textarea
            autocomplete="off"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            type="text"
          />
          <label for="name">Descrição</label>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 2em;
}
.icon {
  display: flex;
  align-items: flex-end;
}
.icon button {
  position: absolute;
}
.disabled input {
  cursor: not-allowed;
}
.icon-header {
  width: 38%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon img {
  border-radius: 50%;
  width: 80%;
}
.header {
  width: 100%;
}
.container {
  width: 100%;
  height: 15vh;
  margin-top: 2em;
  border-radius: var(--border-rds);
  background-color: #265e81;
}
.alert {
  width: 100%;
  display: flex;
  height: 15vh;
  align-items: flex-end;
  border-radius: var(--border-rds);
  justify-content: flex-end;
  padding: 1em;
}
.color {
  color: white;
}
.config {
  display: flex;
  margin-top: 4em;
  justify-content: space-between;
}
.content {
  border-radius: var(--border-rds);
  width: 60%;
  float: right;
  gap: 2em;
  display: flex;
  flex-direction: column;
  padding: 2em;
  border: 5px solid var(--primary-color-lg);
}
.inputGroup {
  max-width: 100%;
  position: relative;
}

.inputGroup input,
textarea {
  font-size: 100%;
  padding: 1.5em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: var(--border-rds);
  width: 100%;
}
textarea {
  resize: vertical;
  min-height: 13vh;
}
.inputGroup label {
  position: absolute;
  left: 0;
  transform: translateY(-50%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: var(--bg-light);
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.inputGroup :is(input:focus, input:valid) ~ label {
}

.inputGroup :is(input:focus, input:valid) {
  border-color: var(--black);
}
</style>
