<template>
    <div>
      <ButtonPrimary text="Confirmação" @click="toggleModal" />
      <div class="modal-overlay" @click="toggleModal" v-show="!modalHidden"></div>
      <section id="modal-content" :class="{ hide: modalHidden }">
        <div>
          <div class="header">
            <h2>Você tem certeza?</h2>
          </div>
          <div class="content">
            <p>{{ text }}</p>
            <div class="all-buttons">
              <ButtonPrimaryNo link="/" @click="toggleModal" text="Não" />
              <ButtonSecondaryNo link="/" text="Sim" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue'
import ButtonPrimaryNo from '../../Buttons/ButtonPrimaryNo.vue'
import ButtonSecondaryNo from '../../Buttons/ButtonSecondaryNo.vue'

const modalHidden = ref(false)

defineProps({
    text: String
})
const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}

onMounted(() => {
  document.body.classList.toggle('modal-open', !modalHidden.value)
})
</script>


<style scoped>
body.modal-open {
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
    margin: 0.5em 0;
    text-wrap: wrap;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition:
    opacity 0.2s,
    pointer-events 0.2s;
}
.all-buttons {
  display: flex;
  gap: 1em;
  float: right;
}
.modal-overlay.hide {
  opacity: 0;
  pointer-events: none;
}
#modal-content {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid var(--text-color-lg);
  padding: 2em;
  overflow-y: hidden;
  display: flex;
  gap: 1em;
  flex-direction: column;
  width: 40%;
  background-color: white;
  border-radius: 30px;
  z-index: 1000;
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
</style>