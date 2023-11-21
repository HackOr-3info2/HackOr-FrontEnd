<template>
  <section>
    <div class="nav">
      <RouterLink to="/">Retornar a home</RouterLink>
    </div>
    <LoginComp />

  </section>
</template>

<script setup>
import LoginComp from "../components/template/section/LoginComp.vue"
</script>

<style scoped>
a {
  text-decoration: underline;
}
a:hover {
  text-decoration: none
}
.login-content {
  border: 3px solid var(--black);
  border-radius: var(--border-rds);
  height: 88vh;
  width: 30em;
}
.login-content {
  background-color: white;
    padding: 1.5em 3em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.nav {
  position: absolute;
  top: 1%;
  left: 1%;
}

</style>
