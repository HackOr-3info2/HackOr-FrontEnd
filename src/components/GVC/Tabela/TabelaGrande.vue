<template>
  <div class="content">
    <h3>Tabela grande</h3>
    <div class="table-hidden">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>
                <span> ID </span>
              </th>
              <th>
                <div class="th">
                  <span> Nome </span>
                  <box-icon
                    color="white"
                    size="2em"
                    @click="sortTable('name')"
                    name="filter"
                  ></box-icon>
                </div>
              </th>
              <th>
                <div class="th">
                  <span> Email </span>
                  <box-icon
                    color="white"
                    size="2em"
                    @click="sortTable('email')"
                    name="filter"
                  ></box-icon>
                </div>
              </th>
              <th>
                <div class="th">
                  <span> Idade </span>
                </div>
              </th>
              <th>
                <div class="th">
                  <span> Cidade </span>
                  <box-icon
                    color="white"
                    size="2em"
                    @click="sortTable('city')"
                    name="filter"
                  ></box-icon>
                </div>
              </th>
              <th>
                <div class="th">
                  <span> Telefone </span>
                </div>
              </th>
              <th>
                <div class="th">
                  <span> Gênero </span>
                </div>
              </th>
              <th>
                <div class="th">
                  <span> Data de Registro </span>
                </div>
              </th>
              <th>
                <div class="th"><span>Manutenção</span></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedData" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.city }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.registeredDate }}</td>
              <td>
                <div class="container-manutencao">
                  <ButtonIcon nameIcon="edit" />
                  <ButtonIcon nameIcon="trash-alt" @click="toggleModal(index)" />
                  <ModalContent
                    v-if="!modalHidden[index]"
                    @close="toggleModal(index)"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at cumque quibusdam, ea earum veniam reiciendis harum sunt culpa commodi! Provident optio facilis nihil laudantium nesciunt aspernatur ratione assumenda sapiente."
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="all-buttons">
      <ButtonPrimaryNo
        @click="changePage(-1)"
        text="Anterior"
        link="/"
        :disabled="currentPage === 1"
      />
      <span>{{ currentPage }}</span>
      <ButtonSecondaryNo
        @click="changePage(1)"
        text="Próxima"
        link="/"
        :disabled="currentPage === totalPages"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ModalContent from '../Modal/content/ModalConfirmacao.vue'
import ButtonSecondaryNo from '../Buttons/ButtonSecondaryNo.vue'
import ButtonIcon from '../Buttons/ButtonIcon.vue'
import ButtonPrimaryNo from '../Buttons/ButtonPrimaryNo.vue'
const data = ref([
  {
    id: 1,
    name: 'Geovana',
    email: 'usuario1@example.com',
    age: 25,
    city: 'São Paulo',
    phone: '123-456-7890',
    gender: 'Feminino',
    registeredDate: '2023-01-01'
  },
  {
    id: 2,
    name: 'Gregory',
    email: 'usuario2@example.com',
    age: 30,
    city: 'Rio de Janeiro',
    phone: '987-654-3210',
    gender: 'Masculino',
    registeredDate: '2023-02-15'
  },
  {
    id: 3,
    name: 'Gustavo',
    email: 'usuario3@example.com',
    age: 28,
    city: 'Brasília',
    phone: '555-123-4567',
    gender: 'Masculino',
    registeredDate: '2023-03-20'
  },
  {
    id: 4,
    name: 'Victor',
    email: 'usuario4@example.com',
    age: 22,
    city: 'Salvador',
    phone: '111-222-3333',
    gender: 'Masculino',
    registeredDate: '2023-04-10'
  },
  {
    id: 5,
    name: 'Maria',
    email: 'usuario5@example.com',
    age: 27,
    city: 'Recife',
    phone: '999-888-7777',
    gender: 'Feminino',
    registeredDate: '2023-05-05'
  },
  {
    id: 6,
    name: 'Vitor',
    email: 'usuario6@example.com',
    age: 32,
    city: 'Porto Alegre',
    phone: '444-555-6666',
    gender: 'Masculino',
    registeredDate: '2023-06-30'
  }
])
const modalHidden = ref(Array(data.value.length).fill(false));

const toggleModal = (index) => {
  modalHidden.value[index] = !modalHidden.value[index];
};

let sortField = ref('')
let sortOrder = ref('asc')

const sortedData = computed(() => {
  return [...data.value].sort((a, b) => {
    const order = sortOrder.value === 'asc' ? 1 : -1
    if (sortField.value) {
      return a[sortField.value].localeCompare(b[sortField.value]) * order
    }
    return 0
  })
})

const sortTable = (field) => {
  if (sortField.value === field) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortOrder.value = 'asc'
  }
}
const itemsPerPage = 3
let currentPage = ref(1)

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return sortedData.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(sortedData.value.length / itemsPerPage))

const changePage = (increment) => {
  currentPage.value += increment
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 0em;
  outline: 3px solid var(--text-color-lg);
}
.content {
  margin-top: 3em;
}
.all-buttons {
  margin-top: 1em;
  float: right;
}
thead tr th {
  padding: 1.5em 1em;
  border: 0;
  border: 2px solid var(--text-color-lg);
  color: white;
  background-color: var(--text-color-lg);
}
span {
  color: white;
}
.table-hidden {
  overflow: hidden;
  border: 3px solid;
  border-radius: 2em;
}
.table-wrapper {
  overflow-x: auto;
  max-width: 100%;
}
.container-manutencao {
  display: flex;
  gap: 1em;
}
.th {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
th,
td {
  border: 2px solid rgb(200, 200, 200);
  padding: 1em 1.5em;
  text-align: left;
  width: fit-content;
  text-wrap: nowrap;
}
</style>
