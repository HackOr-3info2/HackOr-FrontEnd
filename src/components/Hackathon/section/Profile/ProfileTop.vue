<script setup>
defineProps ({
    nome: String,
    image: String,
    user: String,
})
</script>
<template>
    <section>
        <div class="content">
            <img :src="image" class="icon-profile" alt="imagem de perfil"/>
            <div class="name_user">
                <h3>{{ nome }}</h3>
                <h4 class="low_op">{{ user }}</h4>
            </div>
        </div>  
    </section>
</template>
<style scoped>
.name_user{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
    margin-left: 2%;
    margin-top: 5%;
}
.content{
    display: flex;
    align-items: center;
}
.low_op {
    opacity: 0.8;
}

.icon-profile {
    width: 11em;
    border-radius: 50%;
    margin-bottom: 1em;
    outline: 4px solid var(--text-color-lg);
}
.nome-user {
    display: flex;
    align-items: center;
    gap: 1em
    
}   
</style>
