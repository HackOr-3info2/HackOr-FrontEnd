<template>
  <section id="hero-section">
    <div class="content">
      <h1>Bem-vindo ao hackathon</h1>
      <p>
        Em um mundo cada vez mais digitalizado, a inovação é a chave para enfrentar desafios
        complexos. Os hackathons emergiram como arenas dinâmicas onde mentes criativas convergem
        para criar soluções inovadoras.
      </p>
    </div>
    <div class="midia">
      <box-icon color="var(--white)" size="2em" type="logo" name="facebook-square"></box-icon>
      <box-icon color="var(--white)" size="2em" name="twitter" type="logo"></box-icon>
      <box-icon color="var(--white)" size="2em" name="github" type="logo"></box-icon>
      <box-icon color="var(--white)" size="2em" type="logo" name="linkedin-square"></box-icon>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  margin: 0;
  border-radius: 0;
  background: url(https://noticias.memoria.araquari.ifc.edu.br/wp-content/uploads/sites/11/2022/07/IMG_0638.jpeg)
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
}
.midia {
  position: absolute;
  bottom: 3%;
  gap: 1em;
  left: 2%;
  display: flex;
  flex-direction: column;
}
h1,
span,
p {
  color: var(--white);
}
section .content {
  width: 100%;
  background-color: #000000b5;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 9em;
  align-items: flex-start;
}
section .effect {
  position: relative;
  transition: var(--effect) ease;
}
section .text {
  position: relative;
  z-index: 1;
}
section .effect::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 18px;
  width: 0;
  background-color: var(--hero-section);
  transition: var(--effect) ease;
}

section:hover .effect::before {
  width: 100%;
}
p {
  width: 37em;
  margin: 7px 0;
}
@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 600px) {
}

@media only screen and (max-width: 600px) {
}
@media only screen and (max-width: 425px) {
}
@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.2em;
  }
}
@media only screen and (max-width: 888px) {
  h1 {
    font-size: 2.2em;
  }
  p {
    font-size: 1em;
    width: fit-content;
  }
  section .content {
    padding: 0 4em;
  }
}
@media only screen and (max-width: 600px) {
  .midia {
    flex-direction: row;
  }
  section .content {
    padding: 0 1em;
  }
}
</style>
