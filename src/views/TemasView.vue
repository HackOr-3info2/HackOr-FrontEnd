<script setup>
import {ref, onMounted} from 'vue';
import CardTema from '../components/Hackathon/section/Adminstracao/Temas/CardTema.vue'
import NavComp from '../components/Hackathon/section/Adminstracao/Temas/NavComp.vue'
import TemasApi from "../services/temas";

const temasApi = new TemasApi();
const temas = ref([]);

onMounted(async() => {
  temas.value = await temasApi.buscarTodosOsTemas()
})

</script>

<template>
  <main>
    <h2>Temas</h2>
    <NavComp />
    <div class="all-temas">
      <CardTema v-for="tema in temas" :key="tema.id" :descricao="tema.descricao" />
    </div>
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
