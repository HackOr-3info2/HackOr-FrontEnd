<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../../../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const user = reactive({
  email: '',
  password: ''
})

// function login() {
//   authStore.login({ ...user })
// }

async function submit() {
  try {
    await authStore.login(user)
    router.push('/hackathon')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="login-content">
    <h2>Entre na sua conta</h2>
    <form @submit.prevent="submit">
      <div class="all-inputs">
        <div class="inputGroup">
          <input
            v-model="user.email"
            class="email"
            autocomplete="off"
            required
            placeholder="email"
            type="email"
          />
          <label for="name">Email</label>
        </div>
        <div class="inputGroup">
          <input
            autocomplete="off"
            required=""
            v-model="user.password"
            type="password"

          />
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
      <button type="submit">entrar</button>
    </form>
  </div>
</template>

<style scoped>
.login-content{
  outline: 4px solid var(--bg-black);
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
  margin-bottom: 0.8em;
}
.clear {
  clear: both;
}
.icone {
  position: absolute;
  top: 23%;
  left: 89%;
  cursor: pointer;
}

button {
  display: inline-block;
  padding: 0.7em 2em;
  position: relative;
  overflow: hidden;
  transition: color 0.2s;
  z-index: 1;
  border-radius: var(--border-rds);
  cursor: pointer;
  background-color: #fff;
  font-weight: 500;
  color: var(--text-color-lg);
}

button:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: var(--bg-black);
  height: 150px;
  width: 200px;
  border-radius: var(--border-rds);
}

button:hover {
  color: #fff;
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
input::placeholder {
  color: transparent;
}
.inputGroup label {
  position: absolute;
  display: block;
  top: 0;
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
.inputGroup .email:invalid:not(:placeholder-shown) ~ label {
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
