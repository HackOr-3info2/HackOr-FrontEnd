<template>
  <div >
    <div class="container">
      <div class="mainbox">
        <div class="iconContainer">
          <svg
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            class="search_icon"
          >
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            ></path>
          </svg>
        </div>
        <input class="search_input" placeholder="search" type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  position: relative;
  box-sizing: border-box;
  width: fit-content;
}

.mainbox {
  box-sizing: border-box;
  position: relative;
  width: 25em;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  border-radius: 160px;
  background-color: var(--text-color-lg);
  transition: all 0.3s ease;
}


.search_input {
  box-sizing: border-box;
  height: 100%;
  width: 21em;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: white;
  transition: all 0.3s ease;
}

.search_input::placeholder {
  color: rgba(255, 255, 255, 0.776);
}

.iconContainer {
  box-sizing: border-box;
  padding-top: 5px;
  width: fit-content;
  transition: all 0.3s ease;
}

.search_icon {
  box-sizing: border-box;
  fill: white;
  font-size: 1.3em;
}
</style>
