<script setup>
import CardDetalhes from './CardDetalhe.vue'
</script>
<template>
  <section>
    <h3>Mais informações</h3>
    <div>
      <dl class="desc">
        <div>
          <dd class="title">Telefone</dd>
          <dt>(45) 99245-0913</dt>
        </div>
        <div>
          <dd>Currículo Lattes</dd>
          <dt>https://incrivel.com</dt>
        </div>
      </dl>
      <div>
        <dd>Escola</dd>
        <dt>IFC - Araquari</dt>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  margin-top: 3em;
  border-radius: var(--border-rds);
}
dd {
  font-weight: 600;
  font-size: 1.2em;
}
h3 {
}
.desc {
  display: flex;
  justify-content: space-between;
}
.desc div {
  margin: 1em 0
}
</style>
