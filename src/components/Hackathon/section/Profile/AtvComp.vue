<script setup>
import CardTimeline from "./CardTimeline.vue";
</script>
<template>
  <section>
    <h3>Histórico</h3>
    <CardTimeline nomeHackathon="Queremos ajuda do Eduardo" tema="Gereniador de Hackathons" edicao="2023" avaliacao="10/10"/>
  </section>
</template>
<style scoped>
section {
  margin-top: 3em;
  padding: 1.1em;
  border-radius: var(--border-rds);
  border: 3px solid ; 
}

</style>
