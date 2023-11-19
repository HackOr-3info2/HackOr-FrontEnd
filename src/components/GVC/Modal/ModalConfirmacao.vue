<template>
  <div>
    <ButtonPrimary text="Confirmação" link="/" @click="toggleModal" />
    <ModalContent
      v-if="!modalHidden"
      @close="toggleModal"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at cumque quibusdam, ea earum veniam reiciendis harum sunt culpa commodi! Provident optio facilis nihil laudantium nesciunt aspernatur ratione assumenda sapiente."
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ButtonPrimary from '../Buttons/ButtonPrimary.vue'
import ModalContent from './content/ModalConfirmacao.vue'

const modalHidden = ref(true)

const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}
</script>

<style scoped></style>
