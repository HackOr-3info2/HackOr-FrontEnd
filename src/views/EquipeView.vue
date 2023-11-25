<script setup>
import CarouselComp from '../components/Hackathon/section/Adminstracao/Equipes/CarouselComp.vue'
import MembrosComp from '../components/Hackathon/section/Adminstracao/Equipes/MembrosComp.vue'

import { ref, onMounted } from 'vue'
const equipeApi = new EquipeApi()
const equipes = ref([])

onMounted(async () => {
  equipes.value = await equipeApi.buscarTodosAsEquipes()
  
})

const carouselImages = [
  {
    src: 'https://fabricadesoftware.surge.sh/img/Projects/FabricaPortal/image1.png'
  },
  {
    src: 'https://fabricadesoftware.surge.sh/img/Projects/FabricaPortal/image2.png'
  },
  {
    src: 'https://fabricadesoftware.surge.sh/img/Projects/FabricaPortal/image3.png'
  }
]

</script>


<template>
  <main>
    <img
      class="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
      alt=""
    />
    <div class="title">
      <h2>Queremos ajuda do Eduardo</h2>
      <h4>Tema: Gerenciamento de hackthons</h4>
    </div>
    <CarouselComp :images="carouselImages" />
    <section>
      <h3>Detalhes</h3>
      <div class="card-detalhes">
        <span>Edição</span>
        <span>2023</span>
      </div>
      <div class="card-detalhes">
        <span>Turmas</span>
        <span>3INFO2</span>
      </div>
      <div class="card-detalhes">
        <span>Tecnologias</span>
        <div>
          <span class="lang"> Django</span>
          <span class="lang">Vue.js </span>
        </div>
      </div>
    </section>
    <MembrosComp />
    <section class="avaliacoes">
      <h3>Avaliação</h3>
      <div>
        <span> Ainda não há avaliações </span>
      </div>
    </section>
  </main>
</template>


<style scoped>
main {
  padding: 5em 25em;
}
section {
    margin: 2em 0
}
.avaliacoes span {
  font-style: italic;
  font-size: 1.2em;
}
.card-detalhes {
  display: flex;
  width: 100%;
  margin: 1em 0;
  justify-content: space-between;
}
.card-detalhes .lang {
  background-color: var(--primary-color-lg);
  border-radius: var(--border-rds);
  color: white;
  padding: 0.4em;
  font-size: 1em;
}
.card-detalhes div {
  display: flex;
  gap: 1em;
}
.title {
  line-height: 2em;
  margin: 2em 0;
}
.title h4 {
  color: rgb(66, 66, 66);
}
.logo {
  width: 10em;
  margin-bottom: 1em;
}
</style>
