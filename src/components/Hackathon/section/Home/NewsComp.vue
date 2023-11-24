<template>
    <section>
        <h3>Você sabia que temos uma newsletter?</h3>
        <div class="inputGroup">
    <input autocomplete="off" required="" type="email" />
    <label for="name">Digite seu email aqui</label>
    <div class="icone">
        <!-- podia fazer uma aniação bacana aqui -->
      <box-icon color="var(--black)" name="send"></box-icon>
    </div>
  </div>

    </section>
</template>

<script>
import InputNormal from '../../../GVC/input/texto/InputNormal.vue'
export default {
  components: { InputNormal },

}
</script >

<style scoped>
section {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center ;
    margin: 5em
}
input {
    width: 20em
}
.inputGroup {
  max-width: 100%;
  position: relative;
}
.icone {
  position: absolute;
  top: 23%;
  right: 3%;
}
.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: var(--border-rds);
  width: 50em;
}

.inputGroup label {
  position: absolute;
  left: 0;
  padding: 0.8em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.inputGroup :is(input:focus, input:valid) ~ label {
  transform: translateY(-50%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: var(--bg-light);
}

.inputGroup :is(input:focus, input:valid) {
  border-color: var(--black);
}
</style>