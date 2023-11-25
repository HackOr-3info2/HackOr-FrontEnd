<script setup>
import ProfileTop from '../components/Hackathon/section/Profile/ProfileTop.vue'
import PerfilDetalhes from '../components/Hackathon/section/Profile/PerfilDetalhes.vue'
import AvaliacoesSection from '../components/Hackathon/section/Profile/AvaliacoesSection.vue'
</script>

<template>
  <div class="header"></div>
  <main>
    <ProfileTop
      image="https://avatars.githubusercontent.com/u/48130339?v=4"
      nome="Eduardo da Silva"
      user="edudasilva"
    />
    <PerfilDetalhes
      descricao="Hands-on with cloud computing, devops tools, full-stack, programming concepts and open source/leading frameworks."
    />
    <AvaliacoesSection />
  </main>
</template>

<style scoped>  
main {
  padding: 10vh 25em 0 25em;
}
section {
  margin: 2.5em 0
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -10;
  height: 25vh;
  background-color: #265e81;
  border-bottom: 4px solid var(--text-color-lg);
}
</style>
