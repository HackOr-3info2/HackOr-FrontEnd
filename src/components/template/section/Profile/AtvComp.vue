<script setup>
import CardTimeline from "./CardTimeline.vue";
</script>
<template>
  <section>
    <h3>Timeline</h3>
    <CardTimeline />
    <CardTimeline />
    <CardTimeline />
  </section>
</template>
<style scoped>
section {
  margin-top: 3em;
  padding: 1.1em;
  border-radius: var(--border-rds);
  border: 3px solid var(--primary-color-lg);
}
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
  border-radius: 4px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 45%;
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
.desc div {
  width: calc(100% / 3 - 1rem);
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
