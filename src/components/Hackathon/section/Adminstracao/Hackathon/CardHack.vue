<script setup>
defineProps({
  nomeHackathon: String,
  tema: String,
  status: String,
  avaliacao: String,
  turma: String,
  fim: String,
  inicio: String,
  image: String,
})
</script>
<template>
  <RouterLink to="/hackathon/id">
    <div class="card">
      <div class="logo">
        <img :src="image" />
      </div>
      <dl class="desc">
        <div>
          <dd class="title">{{ tema }}</dd>
        </div>
        <div>
          <dd>Status</dd>
          <dt>{{ status }}</dt>
        </div>
        <div>
          <dd>Início</dd>
          <dt>{{ inicio }}</dt>
        </div>
        <div>
          <dd>Fim</dd>
          <dt>{{ fim }}</dt>
        </div>
      </dl>
    </div>
  </RouterLink>
</template>
<style scoped>
.card {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2em 0;
  transition: transform 0.2s;
  padding: 23em 14em 0m 30em;
  background-color: var(--gray);
  border-radius: var(--border-rds);
  font-size: 0.875rem;
}
.card:hover {
  cursor: pointer;
  transform: scale(1.01);
}

@media (max-width: 1000px) {
  .card {
    align-items: flex-start;
    flex-direction: column;
  }
}

.logo {
  background-color: var(--primary-color-lg);
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  justify-content: center;
}
.logo img {
  border-radius: 10px;
  width: 100%;
}

.desc {
  margin: 0 5em 0 8em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
@media (max-width: 1000px) {
  .desc {
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 1rem;
  }
}
@media (max-width: 1000px) {
  .desc div {
    width: 100%;
  }
}
.desc div + div {
  margin-left: 1rem;
}
@media (max-width: 1000px) {
  .desc div + div {
    margin-left: 0;
    margin-top: 1rem;
  }
}
.desc dd {
  font-weight: bold;
  margin-top: 2px;
}
.desc dt {
  width: max-content;
}
body.dark-mode .desc dd {
  color: var(--primary-color-dk);
  margin-top: 2px;
}

.unid {
  margin-left: 2rem;
  font-size: 1.125rem;
  flex-shrink: 0;
  width: 15%;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1000px) {
  .unid {
    margin-left: 0;
    margin-top: 1.25rem;
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
