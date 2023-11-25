<script setup>
import CardEquipe from '../components/Hackathon/section/Adminstracao/Equipes/CardEquipe.vue'
import NavComp from '../components/Hackathon/section/Adminstracao/Equipes/NavComp.vue'
</script>

<template>
  <main>
    <h2>Equipes</h2>
    <NavComp />
    <div class="all-equipes">
      <RouterLink to="/equipe/id">
        <CardEquipe
          image="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
          nomeHackathon="Queremos ajuda do Eduardo"
          tema="Gerenciador de Hackathons"
          turma="3INFO"
          edicao="2023"
          avaliacao="10/10"
        />
      </RouterLink>
    </div>
    <button>
      <span> Ver equipes de hackathons anterior </span>
      <box-icon name="chevron-down" color="#383838" size="1.5em" type="solid"></box-icon>
    </button>
  </main>
</template>

<style scoped>
main {
  padding: 5em 10em;
}
.nav {
  margin-bottom: 3em;
}
button {
  margin: 3em auto;
  padding: 0.6em;
  border-radius: var(--border-rds);
  border: 3px solid #383838;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 1em;
}
button span {
  font-size: 1.1em;
  font-weight: 600;
  color: #383838;
}
h2 {
  margin-bottom: 1em;
}
.all-equipes {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
