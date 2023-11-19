<template>
  <div class="content">
    <h3>Tabela pequena</h3>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedData" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
    <div class="all-buttons">
      <ButtonPrimaryNo @click="changePage(-1)" text="Anterior" link="/" :disabled="currentPage === 1" />
      <span>{{ currentPage }}</span>
      <ButtonSecondaryNo @click="changePage(1)" text="Próxima" link="/" :disabled="currentPage === totalPages" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ButtonSecondaryNo from "../Buttons/ButtonSecondaryNo.vue"
import ButtonPrimaryNo from "../Buttons/ButtonPrimaryNo.vue"
const data = ref([
  { id: 1, name: 'Geovana', email: 'usuario1@example.com' },
  { id: 2, name: 'Gregory', email: 'usuario2@example.com' },
  { id: 3, name: 'Gustavo', email: 'usuario3@example.com' },
  { id: 4, name: 'Victor', email: 'usuario4@example.com' },
  { id: 5, name: 'Maria', email: 'usuario5@example.com' },
  { id: 6, name: 'Vitor', email: 'usuario6@example.com' }
])

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
const itemsPerPage = 3; 
let currentPage = ref(1);

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return sortedData.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(sortedData.value.length / itemsPerPage));

const changePage = (increment) => {
  currentPage.value += increment;
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow: hidden;
  border-radius: 2em;
  outline: 3px solid var(--text-color-lg);
}
.content {
  margin-top: 3em
}
.all-buttons {
    margin-top: 1em;
    float: right
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
}
</style>
