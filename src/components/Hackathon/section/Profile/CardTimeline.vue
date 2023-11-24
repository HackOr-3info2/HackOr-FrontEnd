<script setup>
defineProps ({
  nomeHackathon: String,
  tema: String,
  edicao: Number,
  avaliacao: String 
})
</script>
<template>
    <div class="card">
      <div class="logo">
        <img src="../../../../assets/eu.jpg" />
      </div>
      <dl class="desc">
        <div>
          <dt>{{ nomeHackathon }}</dt>
          <dd>{{ tema }}</dd>
        </div>
        <div>
          <dd>Edição</dd>
          <dt>{{ edicao }}</dt>
        </div>
        <div>
          <dd>Avaliação</dd>
          <dt>{{ avaliacao }}</dt>
        </div>
      </dl>
    </div>
</template>
<style scoped>

.card {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1em 0;
  font-size: 0.875rem;
}
@media (max-width: 1000px) {
  .card {
    align-items: flex-start;
    flex-direction: column;
  }
}
.card + * {
  margin-top: 2rem;
}

.logo {
  background-color: var(--primary-color-lg);
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
}
.logo img {
  border-radius: 10px;
  width: 100%;
}

.desc {
  margin-left: 2rem;
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
  color: var(--primary-color-lg);
  margin-top: 2px;
}
.desc dt {
  width: max-content;
  font-weight: bold;  
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
