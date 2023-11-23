<script setup>
import { RouterLink } from 'vue-router'
import ButtonPrimaryNo from '../../../GVC/Buttons/ButtonPrimaryNo.vue'
import ButtonSecondary from '../../../GVC/Buttons/ButtonSecondary.vue'
import InputNormal from '../../../GVC/input/texto/InputNormal.vue'
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
        <RouterLink to="/login">
          <ButtonPrimaryNo text="Login" />
        </RouterLink>
        <RouterLink to="/login">
          <ButtonSecondary text="Registar-se" link="/login" />
        </RouterLink>
      </div>
<!--       <div class="newsletter">
        <InputNormal />
      </div> -->
    </div>
    <div>
      <img src="../../../../assets/phones/SVG/DrawKit_Vector_Illustrations_Coffe call.svg" alt="">
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  padding: 2em;
  margin: 3em 5em 0 5em;
  border-radius: var(--border-rds);
  background-color: var(--black);
  color: var(--white);
  height: 80vh;
  
  border: 4px solid var(--black);
}
.content {
  width: 50%;
  margin-right: 2em;
}
.all-buttons {
  display: flex;
  gap: 1em;
  width: fit-content;
  margin-top: 5em;
}
img {
  width: 30em;
}
</style>
