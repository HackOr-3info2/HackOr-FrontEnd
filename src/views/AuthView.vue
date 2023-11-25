<template>
  <section>
    <LoginComp />
  </section>
</template>

<script setup>
import LoginComp from '../../src/components/Hackathon/section/LoginComp.vue'
</script>

<style scoped>
a {
  text-decoration: underline;
}
a:hover {
  text-decoration: none;
}
.login-content {
  background-color: var(--gray);
  border-radius: var(--border-rds);
  height: 60vh;
  width: 30em;
  box-shadow: var(--box-shadow);
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
@media only screen and (max-width: 500px) {
  .login-content {
    width: 25em;
  }
}
@media only screen and (max-width: 500px) {
  .login-content {
    padding: 1em;
    width: 15em;
  }
}
</style>
