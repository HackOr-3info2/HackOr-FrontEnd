<script setup></script>

<template>
  <section>
    <h3>Configurações do sistema</h3>
    <div>
        <h4>Temas</h4>
        <div class="content">
            <div class="card">
                <img src="../../../../assets/light.png" alt="">
            </div>
            <div class="card"></div>
        </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 3em;
}
.content {
    justify-content: space-between;
    display: flex;
}
.card {
    width: 48%;
    height: 40vh;
    border-radius: var(--border-rds);

    border: 5px solid var(--primary-color-lg)
}
.card img {
    width: 100%;
}
.card:hover {
    outline: 6px solid #58585888;
}
</style>
