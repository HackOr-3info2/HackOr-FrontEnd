<script setup>
import ProfileTop from '../components/Hackathon/section/Profile/ProfileTop.vue'
import PerfilDetalhes from '../components/Hackathon/section/Profile/PerfilDetalhes.vue'
</script>

<template>
  <div class="header"></div>
  <main>
    <ProfileTop
      image="https://avatars.githubusercontent.com/u/48130339?v=4"
      nome="Eduardo da Silva"
      user="edudasilva"
      descricao="Hands-on with cloud computing, devops tools, full-stack, programming concepts and open source/leading frameworks."
    />
    <PerfilDetalhes />
  </main>
</template>

<style scoped>
main {
  padding: 10vh 25em 0 25em;
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -10;
  height: 25vh;
  background-color: #265e81;
}
</style>
