<template>
<div class="loader">
  <div class="loader__circle"></div>
  <div class="loader__circle"></div>
  <div class="loader__circle"></div>
  <div class="loader__circle"></div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 2em
}

.loader__circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 4px;
  background-color: var(--text-color-lg);
  animation: loader_901 1s ease-in-out infinite;
}

.loader__circle:nth-of-type(1) {
  animation-delay: 0;
}

.loader__circle:nth-of-type(2) {
  animation-delay: 0.25s;
}

.loader__circle:nth-of-type(3) {
  animation-delay: 0.5s;
}

.loader__circle:nth-of-type(4) {
  animation-delay: 0.75s;
}

@keyframes loader_901 {
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.2);
  }

  40% {
    transform: scale(1);
  }
}

</style>