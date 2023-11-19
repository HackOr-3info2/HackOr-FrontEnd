<template>
  <ButtonPrimary text="Normal" @click="toggleModal" link="/" />
  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <section id="modal-content" :class="[{ hide: modalHidden }]">
    <div>
      <div class="header">
        <h2>lorem ipsum</h2>
        <ButtonIcon nameIcon="x" @click="toggleModal" />
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente libero unde minus,
          possimus aspernatur aut quasi debitis impedit placeat molestiae praesentium dolor
          perferendis, eveniet nisi sint. Ducimus magni ex ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse impedit velit eaque sit exercitationem corporis
          voluptatibus id ipsum numquam omnis est quisquam vitae possimus perferendis, error quas
          optio odit sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse impedit
          velit eaque sit exercitationem corporis voluptatibus id ipsum numquam omnis est quisquam
          vitae possimus perferendis, error quas optio odit sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse impedit velit eaque sit exercitationem corporis
          voluptatibus id ipsum numquam omnis est quisquam vitae possimus perferendis, error quas
          optio odit sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse impedit
          velit eaque sit exercitationem corporis voluptatibus id ipsum numquam omnis est quisquam
          vitae possimus perferendis, error quas optio odit sapiente.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ButtonPrimary from '../Buttons/ButtonPrimary.vue'
import ButtonIcon from '../Buttons/ButtonIcon.vue'
const modalHidden = ref(true)
const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}
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
.content {
  overflow-y: scroll;
  height: 50vh;
}
#modal-content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid var(--text-color-lg);
    padding: 0em 1em 2em 1em;
    overflow-y: hidden;
    height: 65vh;
    display: flex;
    gap: 1em;
    flex-direction: column;
    width: 50%;
    background-color: white;
    border-radius: 30px;
    z-index: 100;
    transition: opacity 0.2s,
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
