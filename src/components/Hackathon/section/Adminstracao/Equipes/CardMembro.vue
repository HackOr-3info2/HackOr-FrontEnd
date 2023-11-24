<template>
  <router-link to="/">
    <div class="card">
      <div class="header">
        <img src="https://avatars.githubusercontent.com/u/99155494?v=4" class="image" />
        <div>
          <h4>Gustavo de Paula</h4>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup></script>

<style scoped>

a {
  width: 49%;
  text-decoration: none;
}
.card, .card * {
    border-radius: 1em
}
.card {
  margin: 10px 0;
  padding: 10px;
  transition: transform;
  transform: scale(100%);
}

.card:hover {
  transform: scale(97%);
}

.header {
  display: flex;
  gap: 10px;
}

.image {
  height: 3rem;
  width: 3rem;
  object-fit: cover;
}
@media only screen and (max-width: 600px) {
  a {
    width: 100%;
  }
}
</style>
