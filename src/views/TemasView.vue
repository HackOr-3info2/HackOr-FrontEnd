<script setup>
import CardEquipe from '../components/Hackathon/section/Adminstracao/Temas/CardTema.vue'
import NavComp from '../components/Hackathon/section/Adminstracao/Temas/NavComp.vue'
</script>

<template>
  <main>
    <h2>Temas</h2>
    <NavComp />
    <div class="all-temas">
      <RouterLink to="/equipe/id">
        <CardEquipe
          nomeHackathon="Queremos ajuda do Eduardo"
          tema="Gereniador de Hackathons"
          turma="3INFO"
          quantidade="10"
          edicao="2023"
          avaliacao="10/10"
        />
      </RouterLink>
    </div>
    <button>
      <span> Ver mais temas </span>
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
.all-temas {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
