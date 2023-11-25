<script setup>
defineProps({
  descricao: String,
})
</script>
<template>
  <div class="card">
    <dl class="desc">
      <div>
        <dd class="title">{{ descricao }}</dd>
      </div>
    </dl>
  </div>
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


.desc {
  margin: 0 2em;
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
