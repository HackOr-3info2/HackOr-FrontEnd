<script setup>
import ButtonPrimary from '../../GVC/Buttons/ButtonPrimary.vue'
</script>

<template>
  <div class="login-content">
    <h1>logo</h1>
    <h2>Entre na sua conta</h2>
    <form @submit.prevent="submit">
      <div class="all-inputs">
        <div class="inputGroup">
          <input autocomplete="off" required="" type="email" />
          <label for="name">Email</label>
        </div>
        <div class="inputGroup">
          <input autocomplete="off" required="" type="email" />
          <label for="name">Senha</label>
        </div>
      </div>
      <div class="lembrar">
        <label class="checkBox">
          <input id="ch1" type="checkbox" />
          <div class="transition"></div>
        </label>
        <span>Lembrar de mim</span>
      </div>
      <ButtonPrimary text="entrar" link="/" />
    </form>
    <div class="accounts">
      <hr />
      <div class="content">
        <box-icon size="2.1em" color="var(--black)" type="logo" name="gmail"></box-icon>
        <box-icon size="2.1em" color="var(--black)" name="facebook" type="logo"></box-icon>
        <box-icon size="2.1em" color="var(--black)" name="twitter" type="logo"></box-icon>
        <box-icon size="2.1em" color="var(--black)" type="logo" name="instagram"></box-icon>
      </div>
      <div class="registrar">
        <span>Não tem conta?</span>
        <RouterLink to="/profile">Acesse aqui</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 1.5em;
}
.accounts {
  margin-top: 10em;
}
.accounts hr {
  overflow: visible;
  padding: 0;
  margin-bottom: 0.5em;
  border: none;
  border-top: medium solid var(--black);
  color: var(--text-color-lg);
  text-align: center;
}
.registrar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
}
.registrar a {
    font-weight: bold;
    text-decoration: underline;
}
.registrar a:hover {
    font-weight: bold;
    text-decoration: none;
}
.lembrar {
  display: flex;
  align-items: center;
  gap: 0.78em;
  margin-bottom: .8em;
}
.clear {
  clear: both;
}

.checkBox {
  display: block;
  cursor: pointer;
  width: 17px;
  height: 17px;
  border: 3px solid rgba(255, 255, 255, 0);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px 3px var(--black);
}

.checkBox div {
  width: 60px;
  height: 60px;
  background-color: var(--bg-black);
  top: -52px;
  left: -52px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type='checkbox']:checked + div {
  left: -10px;
  top: -10px;
}

.checkBox input[type='checkbox'] {
  position: absolute;
  left: 50px;
  visibility: hidden;
}

.transition {
  transition: 300ms ease;
}
.accounts hr::after {
  content: 'ou se preferir';
  display: inline-block;
  position: relative;
  top: -0.7em;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  color: rgb(104, 104, 104);
  padding: 0 0.25em;
  background: white;
}
.accounts .content {
  display: flex;
  gap: 1em;
  justify-content: center;
}
.all-inputs {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em 0;
}
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
  border-radius: var(--border-rds);
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
  border-color: var(--black);
}
</style>
