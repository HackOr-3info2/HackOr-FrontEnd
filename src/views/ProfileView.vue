<script setup>
import SideBar from '../components/GVC/SideBar.vue'
import ProfileTop from '../components/template/section/Profile/ProfileTop.vue'
import AtvComp from '../components/template/section/Profile/AtvComp.vue'
</script>

<template>
  <SideBar />
  <div class="header"></div>
  <main>
    <ProfileTop />
    <AtvComp />
  </main>
</template>

<style scoped>
main {
  padding: 10vh 25em 0 25em;
}
.header {
  position: absolute;
  top: 0;
  border-bottom: 5px solid var(--black);
  width: 100%;
  z-index: -10;
  height: 25vh;
  background-color: #265e81;
}
</style>
