<script setup>
import PessoaisComp from '../components/template/section/Settings/PessoaisComp.vue';
import SistemaComp from '../components/template/section/Settings/SistemaComp.vue';

</script>

<template>
  <main>
    <h2>Configurações</h2>
    <div class="header">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eaque autem quia itaque soluta
        ullam ut. Maxime soluta provident eligendi asperiores autem eaque fugit eos, delectus
        veniam, accusamus aperiam in.
      </p>
    </div>
    <PessoaisComp />
    <SistemaComp />
  </main>
</template>

<style scoped>
main {
  padding: 5em 25em;
}
.header {
  border: 4px solid ;
  padding: 2em;
  margin-top: 2em;
  border-radius: var(--border-rds);
}

</style>
