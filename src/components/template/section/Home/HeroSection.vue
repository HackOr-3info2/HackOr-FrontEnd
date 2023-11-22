<script setup>
import ButtonPrimaryNo from '../../GVC/Buttons/ButtonPrimaryNo.vue'
import ButtonSecondaryNo from '../../GVC/Buttons/ButtonSecondaryNo.vue'
</script>

<template>
  <section class="animate__animated animate__fadeInUp">
    <div class="content">
      <p>
        Corrupti similique placeat, aliquid saepe modi dolores repellat expedita illo. Aliquam nobis
        aspernatur non labore a quis dolorum necessitatibus porro sequi? Quis!
      </p>
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <div class="all-buttons">
        <ButtonPrimaryNo text="Login" link="/login" />
        <ButtonSecondaryNo text="Registar-se" link="/login" />
      </div>
    </div>
    <div>
<!--       <img src="../../../assets/team-up.svg" alt="" /> -->
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  padding: 2em;
  margin: 3em 5em 0 5em;
  position: absolute;
  border-top-left-radius: 2em;
  height: 80vh;
  border-top-right-radius: 2em;
  border: 4px solid var(--black);
  bottom: 0;
}
.content {
  width: 50%;
  margin-right: 2em;
}
.all-buttons {
  display: flex;
  gap: 1em;
  width: fit-content;
  margin-top: 5em
}
img {
  width: 30em;
}
</style>
