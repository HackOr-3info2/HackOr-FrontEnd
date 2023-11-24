<script setup>
defineProps ({
    nome: String,
    image: String,
    user: String,
    descricao: String
})
</script>
<template>
    <section>
        <div class="content">
            <img :src="image" class="icon-profile" alt="imagem de perfil"/>
            <div class="nome-user">
                <h2>{{ nome }}</h2>
                <h4>@{{ user }}</h4>
            </div>
            <p>{{ descricao }}</p>
        </div>  
    </section>
</template>
<style scoped>

.icon-profile {
    width: 11em;
    border-radius: 50%;
}
.nome-user {
    display: flex;
    align-items: center;
    gap: 1em
    
}
.content {
margin-top: 1em
}
</style>
