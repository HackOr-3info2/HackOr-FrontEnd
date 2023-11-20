<template>
  <section>
    <div class="nav">
      <RouterLink to="/">Retornar a home</RouterLink>
    </div>
    <div class="login-content">
      <form @submit.prevent="submit">
        <h2>Entre na sua conta</h2>
        <div class="inputGroup">
          <input autocomplete="off" required="" type="email" />
          <label for="name">Email</label>
        </div>
        <div class="inputGroup">
          <input autocomplete="off" required="" type="email" />
          <label for="name">Senha</label>
        </div>
        <div class="inputGroup">
          <input autocomplete="off" required="" type="email" />
          <label for="name">Confirme sua senha</label>
        </div>
        <ButtonPrimary text="entrar" link="/" />
      </form>
    </div>
    <div class="black">
<!--         <div class="image"></div>
 -->      <div class="content">
        <h2>"Construímos relações sólidas baseadas na transparência e na busca pela satisfação plena dos nossos clientes"</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimary from '../components/GVC/Buttons/ButtonPrimary.vue'
</script>

<style scoped>
a {
  text-decoration: underline;
}
.login-content, .black {
  border: 3px solid var(--text-color-lg);
  border-radius: 2em;
  height: 80vh;
  width: 30em;
}
.login-content {
    background-color: white;
    padding: 1.5em;
    z-index: 2;
}
.black h2 {
    font-size: 2em;
    text-emphasis: unset;
}
.black {
    background-color: var(--text-color-lg);
    margin-left: -4em;
    padding: 1em
}
.black * {
    color: white
    
}
.black .content {
    width: calc(100% - 4em);
    float: right;
    margin-top: 1em;

}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.black img {
}
.image {
    border-radius: 1.6em;
    width: 100%;
    height: 57vh;
    background-image: url('/src/assets/background.jpg');
    background-size: contain;
    /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); */
}


.nav {
  position: absolute;
  top: 1%;
  left: 1%;
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
