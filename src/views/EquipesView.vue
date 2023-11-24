<script setup>
import TabelaComp from '../components/Hackathon/section/Adminstracao/Equipes/TabelaComp.vue'
import ButtonIcon from '../components/GVC/Buttons/ButtonIcon.vue';
import CardEquipe from "../components/Hackathon/section/Adminstracao/Equipes/cardEquipe.vue"
</script>

<template>
  <main>
    <h2>Equipes</h2>
    <div>
      <nav>
        <div class="container">
          <div class="mainbox">
            <div class="iconContainer">
              <svg
                viewBox="0 0 512 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                class="search_icon"
              >
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                ></path>
              </svg>
            </div>
            <input class="search_input" placeholder="search" type="text" />
          </div>
          <ButtonIcon nameIcon="plus" />
          <ButtonIcon nameIcon="filter-alt" />
        </div>
      </nav>
    </div>
    <div>
        <CardEquipe nomeHackathon="Queremos ajuda do Eduardo" tema="Gereniador de Hackathons" edicao="2023" avaliacao="10/10"/>
    </div>
    <TabelaComp />
  </main>
</template>

<style scoped>
main {
  padding: 5em 10em;
}
.container {
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
}
.container button {
    margin: 0 5px;
    width: 50px;
    height: 50px
}

.mainbox {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-rds);
  background-color: var(--bg-black);
  transition: all 0.3s ease;
}


.search_input {
  box-sizing: border-box;
  height: 100%;
  width: 94%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: white;
  transition: all 0.3s ease;
}

.search_input::placeholder {
  color: rgba(255, 255, 255, 0.776);
}

.iconContainer {
  box-sizing: border-box;
  padding-top: 5px;
  width: fit-content;
  transition: all 0.3s ease;
}

.search_icon {
  box-sizing: border-box;
  fill: white;
  font-size: 1.3em;
}
</style>
