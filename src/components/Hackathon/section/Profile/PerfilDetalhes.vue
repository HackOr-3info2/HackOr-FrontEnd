<script setup>
defineProps ({
    descricao: String,

})
</script>
<template>
  <section>
    <div class="profile_desc">
      {{ descricao }}
      
    </div>
    <div class="profile">
      <div class="profile_items">
          <img class="li_indicator" src="../../../../assets/lista.svg" alt="círculo vazado no meio de cor roxa">
          <div>
            <h4 class="title">Telefone</h4>
            <p class="item_desc">(45) 99245-0913</p>
          </div>
        </div>
        <div class="profile_items-l">
          
          <div>
            <h4 class="title">Currículo Lattes</h4>
            <p class="item_desc">(45) 99245-0913</p>
          </div>
          <img class="li_indicator-l" src="../../../../assets/lista.svg" alt="círculo vazado no meio de cor roxa">
        </div>
        <div class="profile_items">
          <img class="li_indicator" src="../../../../assets/lista.svg" alt="círculo vazado no meio de cor roxa">
          <div>
            <h4 class="title">Campus</h4>
            <p class="item_desc">Ifc Araquari</p>
          </div>
        </div>
        <div class="profile_items-l">
          
          <div>
            <h4 class="title">Formação</h4>
            <p class="item_desc">Mestrado em Sistemas de informação</p>
          </div>
          <img class="li_indicator-l" src="../../../../assets/lista.svg" alt="círculo vazado no meio de cor roxa">
        </div>
    </div>
      
  </section>
</template>
<style scoped>
.item_desc{
  opacity: 0.8;
  font-size: medium;
  
}
.profile{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.li_indicator{
  width: 5%;
  margin-right: 10%;
  margin-bottom: 8%;
}
.li_indicator-l{
  width: 5%;
  margin-left: 10%;
  margin-bottom: 8%;
}
.profile_items{
  display: flex;
  flex-direction: row;
  width: 40%;
  margin-bottom: 5%;
}
.profile_items-l{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
  text-align: end;
}
.profile_desc{
  display: flex;
  align-items: center;
 background-color: var(--gray);
 outline: 3px solid var(--text-color-lg);
  padding: 1em;
  border-radius: var(--border-rds);
  margin-bottom: 1em;
  max-height: 45vh;
  word-break: break-all;
  margin-bottom: 10%;
  
}
dd {
  font-weight: 600;
  font-size: 1.2em;
}
h3 {
}
.desc {
  display: flex;
  justify-content: space-between;
}
.desc div {
  margin: 1em 0
}
</style>
