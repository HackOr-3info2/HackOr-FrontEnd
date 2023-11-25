<template>
  <div class="header"></div>
  <main>
    <div class="title">
      <h2>Hackathon Terceira Série (2023)</h2>
      <h4>Tema: Gerenciamento de hackathons</h4>
    </div>
    <CarouselComp :images="carouselImages" />
    <section class="detalhes">
      <h3>Detalhes</h3>
      <div class="card-detalhes">
        <span>Campi</span>
        <span>Araquari</span>
      </div>
      <div class="card-detalhes">
        <span>Status</span>
        <span>Concluído</span>
      </div>
      <div class="card-detalhes">
        <span>Tema</span>
        <span>Gerenciamento de hackathons</span>
      </div>
      <div class="card-detalhes">
        <span>Início</span>
        <span>22/05/2023</span>
      </div>
      <div class="card-detalhes">
        <span>Final</span>
        <span>22/05/2023</span>
      </div>
    </section>
    <EquipesComp />
    <AvaliacoesComp />
  </main>
</template>

<script setup>
import CarouselComp from '../components/Hackathon/section/Adminstracao/Equipes/CarouselComp.vue'
import EquipesComp from '../components/Hackathon/section/Adminstracao/Hackathon/EquipesComp.vue'
import AvaliacoesComp from '../components/Hackathon/section/Adminstracao/Hackathon/HackathonDetalhe/AvaliacoesComp.vue'
const carouselImages = [
  {
    src: 'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0624.jpeg'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn--TQzIlY50TMkB4PcWoa76mYwLyM3xJIFfo5wmxrdaRQMCvfeLhWZFrn1KFE0yZjC1Y&usqp=CAU'
  },
  {
    src: 'https://www.mjvinnovation.com/wp-content/uploads/2021/07/como-selecionar-os-participantes-do-seu-hackathon.jpeg'
  }
]
</script>

<style scoped>
main {
  padding: 5em 25em;
}
.header {
  height: 32vh;
  width: 100%;
  background: url(https://noticias.memoria.araquari.ifc.edu.br/wp-content/uploads/sites/11/2022/07/IMG_0638.jpeg)
    no-repeat;
  background-size: cover;
  background-position: center;
}
section {
  margin: 3em 0;
}
.avaliacoes span {
  font-style: italic;
  font-size: 1.2em;
}
.detalhes {
  padding: 2em 1em;
  background-color: var(--gray);
  border-radius: var(--border-rds);
}
.card-detalhes {
  display: flex;
  width: 100%;
  margin: 1em 0;
  justify-content: space-between;
}
.card-detalhes span:nth-child(1) {
  font-weight: 600;
  color: var(--text-color-lg);
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
}
.title h4 {
  color: rgb(66, 66, 66);
}
.logo {
  width: 10em;
  margin-bottom: 1em;
}
</style>
