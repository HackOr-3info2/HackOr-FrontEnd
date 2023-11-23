<script setup>
import { ref } from 'vue';
const theme = ref('sun')

const toggleTheme = () => {
  theme.value = theme.value === 'sun' ? 'moon' : 'sun'
  updateTheme()
}

const updateTheme = () => {
  document.body.classList.toggle('light-mode', theme.value === 'sun')
  document.body.classList.toggle('dark-mode', theme.value === 'moon')
}
</script>

<template>
  <section>
    <h3>Configurações do sistema</h3>
    <div>
      <h4>Temas</h4>
      <div class="content">
        <div class="card">
          <img @click="toggleTheme(theme)" src="../../../../assets/light_preview.svg" alt="" />
        </div>
        <div class="card">
          <img @click="toggleTheme(theme)" src="../../../../assets/dark_preview.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 3em;
}
.content {
  justify-content: space-between;
  display: flex;
}
.card {
  width: 48%;
  cursor: pointer;
  border-radius: var(--border-rds);
  border: 5px solid;
}
.card img {
  border-top-left-radius: var(--border-rds);
  border-top-right-radius: var(--border-rds);
  width: 100%;
}
.card:hover {
  outline: 6px solid #58585888;
}
body.dark-mode .card:hover {
  outline: 6px solid #ffffff88;
}  
</style>
