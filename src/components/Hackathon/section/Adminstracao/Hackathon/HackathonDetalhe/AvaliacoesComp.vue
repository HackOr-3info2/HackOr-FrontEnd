<template>
  <section>
    <h3>Classificação</h3>
    <div class="all-members">
      <CardRank
        image="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
        nomeHackathon="Queremos ajuda do Eduardo"
        tema="Gereniador de Hackathons"
        turma="3INFO"
        edicao="2023"
        avaliacao="10/10"
      />
      <CardRank
        image="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
        nomeHackathon="Queremos ajuda do Eduardo"
        tema="Gereniador de Hackathons"
        turma="3INFO"
        edicao="2023"
        avaliacao="10/10"
      />
      <CardRank
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
import CardRank from './CardRank.vue'
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
