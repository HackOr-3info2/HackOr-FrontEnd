<script setup>
import CardHack from '../components/Hackathon/section/Adminstracao/Hackathon/CardHack.vue'
import NavComp from '../components/Hackathon/section/Adminstracao/Hackathon/NavComp.vue'
</script>

<template>
  <main>
    <div class="bem-vindo">
      <div>
        <h3>Bem-vindo ao hackathon, Eduardo</h3>
        <p>
          Seja muito bem-vindo ao hackathon! Estamos empolgados em tê-lo conosco nesta jornada de
          inovação e criatividade.
        </p>
      </div>
      <img src="../../src/assets/phones/SVG/DrawKit_Vector_Illustrations_Coffe call.svg" alt="" />
    </div>
    <NavComp />
    <h3></h3>
    <div class="all-equipes">
      <RouterLink to="/hackathon/id">
        <CardHack
          image="https://upload.wikimedia.org/wikipedia/commons/d/db/IFC_2014_logo.svg"
          nomeHackathon="Hackathon segundo série (2023) "
          tema="Gereniador de Hackathons"
          inicio="22/06/2023"
          fim="22/06/2023"
          status="Concluído"
          avaliacao="10/10"
        />
      </RouterLink>
    </div>
    <button>
      <span> Ver mais Hackathons </span>
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

.bem-vindo * {
  color: var(--black);
}
.bem-vindo h3 {
  margin-bottom: 0.5em;
}
.bem-vindo {
  border-radius: var(--border-rds);
  padding: 2em 16em 2em 2em;
  border: 5px solid #6f36f7;
  margin-bottom: 5em;
  display: flex;
}
.bem-vindo div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bem-vindo img {
  width: 22em;
  margin-top: 1em;
  position: absolute;
  right: 8%;
  top: -4%;
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
