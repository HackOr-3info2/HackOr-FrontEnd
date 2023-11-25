<template>
  <section>
    <h3>Equipes</h3>
    <div class="all-members">
      <CardEquipe
        image="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
        nomeHackathon="Queremos ajuda do Eduardo"
        tema="Gereniador de Hackathons"
        turma="3INFO"
        edicao="2023"
        avaliacao="10/10"
      />
      <CardEquipe
        image="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
        nomeHackathon="Queremos ajuda do Eduardo"
        tema="Gereniador de Hackathons"
        turma="3INFO"
        edicao="2023"
        avaliacao="10/10"
      />
      <CardEquipe
        image="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
        nomeHackathon="Queremos ajuda do Eduardo"
        tema="Gereniador de Hackathons"
        turma="3INFO"
        edicao="2023"
        avaliacao="10/10"
      />
    </div>
  </section>
</template>

<script setup>
import CardEquipe from './CardEquipe.vue'
</script>

<style scoped>
.all-members {
  display: flex;
  gap: 1em;
  margin-top: 1em;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
