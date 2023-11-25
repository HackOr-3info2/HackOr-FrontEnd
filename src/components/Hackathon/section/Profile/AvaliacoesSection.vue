<template>
  <section>
    <h3>Minhas avaliações</h3>
    <div class="all">
      <AvaliacoesCard
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
import AvaliacoesCard from './AvaliacoesCard.vue'
</script>

<style scoped>
.all {
  display: flex;
  flex-direction: column;
}
</style>
