<template>
  <div class="nav">
    <div class="container-nav">
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
      <ButtonIcon nameIcon="plus" @click="toggleModal" />
      <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
      <section id="modal-content" :class="[{ hide: modalHidden }]">
        <div>
          <div class="header">
            <h3>Adicionar novas equipes</h3>
            <ButtonIcon nameIcon="x" @click="toggleModal" />
          </div>
          <form>
            <div class="inputGroup">
              <input autocomplete="off" required="" type="text" />
              <label for="name">Nome</label>
            </div>
            <div class="inputGroup">
              <select id="temaSelect" v-model="selectedThemes" multiple="multiple">
                <option value="aaa">aa</option>
                <option value="bbb">bb</option>
                <option value="ccc">cc</option>
                <option value="ddd">dd</option>
              </select>
              <label for="name">Equipe</label>
            </div>
            <div class="inputGroup">
              <select id="temaSelect" v-model="selectedThemes">
                <option value="aaa">aa</option>
                <option value="bbb">bb</option>
                <option value="ccc">cc</option>
                <option value="ddd">dd</option>
              </select>
              <label label for="name"> Tema</label>
            </div>
            <div class="inputGroup">
              <select id="temaSelect" v-model="selectedThemes">
                <option value="aaa">aa</option>
                <option value="bbb">bb</option>
                <option value="ccc">cc</option>
                <option value="ddd">dd</option>
              </select>
              <label label for="name">Turma</label>
            </div>
            <div class="inputGroup data">
              <input autocomplete="off" required="" type="date" />
              <label for="name">Edição</label>
            </div>
            <ButtonSecondary text="Cadastrar"/>
          </form>
        </div>
      </section>    
      <ButtonIcon nameIcon="filter-alt" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import ButtonIcon from '../../../../GVC/Buttons/ButtonIcon.vue'
import ButtonSecondary from '../../../../GVC/Buttons/ButtonSecondary.vue'
const modalHidden = ref(true)
const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}

const selectedThemes = ref([])

onMounted(() => {
  if (window.jQuery) {
    setupSelect2()
  } else {
    console.error('jQuery is not available. Make sure it is included before this component.')
  }
})

function setupSelect2() {
  const temaSelect = ref(null)

  temaSelect.value = $('#temaSelect')

  temaSelect.value.select2({
    placeholder: '',
    allowClear: true,
    tags: true
  })
}
</script>

<style scoped>
.nav {
  margin-bottom: 3em;
}
body.modal-open {
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  transition:
    opacity 0.2s,
    pointer-events 0.2s;
}

.modal-overlay.hide {
  opacity: 0;
  pointer-events: none;
}
#modal-content form {
  overflow-y: scroll;
  height: 50vh;
  display: flex;
  padding: 1em 0;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
}
form button {
    width: fit-content;
}
#modal-content {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  overflow-y: hidden;
  height: 65vh;
  display: flex;
  gap: 1em;
  flex-direction: column;
  width: 50%;
  background-color: white;
  border-radius: 30px;
  z-index: 100;
  transition:
    opacity 0.2s,
    pointer-events 0.2s;
  opacity: 1;
  pointer-events: all;
}
#modal-content.hide,
.hide {
  opacity: 0;
  pointer-events: none;
}
.container-nav {
  position: relative;
  display: flex;
  gap: 1em;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
}
.container button {
  margin: 0 5px;
  width: 50px;
  height: 50px;
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

.inputGroup {
  max-width: 100%;
  position: relative;
}

.inputGroup input,
.inputGroup #temaSelect {
    font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(200, 200, 200) !important;
  background-color: transparent;
  border-radius: var(--border-rds) !important;
  width: 100%;
}
#temaSelect {
  padding: 1em;
}
.select2-container--default .select2-selection--multiple .select2-selection__rendered {
    padding: 0.6em !important;

}
.inputGroup label {
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.inputGroup :is(input:focus, input:valid, select:focus, select:valid) ~ label, .data input ~ label {
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
