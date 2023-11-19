<script setup>
import InputButtonBorder from './input/pesquisa/InputButtonBorder.vue'
</script>

<template>
  <nav id="navbar" class="animate__animated animate__fadeInDown" ref="navbar">
    <div>
      <a href="/" exact>
        <h1>Template</h1>
      </a>
    </div>
    <div>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <div class="nav-links">
        <ul class="links">
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 1</a>
          </li>
        </ul>
        <ul class="redes-sociais mobile">
          <li>
            <a href="#"
              ><box-icon size="2em" color="#fff" type="logo" name="facebook-square"></box-icon
            ></a>
          </li>
          <li>
            <a href="#"><box-icon size="2em" color="#fff" name="twitter" type="logo"></box-icon></a>
          </li>
          <li>
            <a href="#"
              ><box-icon size="2em" color="#fff" name="instagram" type="logo"></box-icon
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="redes-sociais">
      <li>
        <a href="#"
          ><box-icon size="2em" color="#fff" type="logo" name="facebook-square"></box-icon
        ></a>
      </li>
      <li>
        <a href="#"><box-icon size="2em" color="#fff" name="twitter" type="logo"></box-icon></a>
      </li>
      <li>
        <a href="#"><box-icon size="2em" color="#fff" name="instagram" type="logo"></box-icon></a>
      </li>
    <InputButtonBorder />
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--text-color-lg);
  height: 73px;
  padding: 40px 145px;
  width: -webkit-fill-available;
  width: -moz-available;
  justify-content: space-between;
  display: flex;
  z-index: 99;
  align-items: center;
  transition: 0.4s;
  color: #fff;
}

img {
  width: 3em;
}
.redes-sociais {
    gap: 1em;
    display: flex;
    align-items: center;
}
#logo-respon-id {
  display: none;
}

input[type='checkbox'] {
  display: none;
}

i {
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
}

ul {
  list-style: none;
}
.links a {
  background: transparent;
  border: none;
  position: relative;
  transition: 0.3s ease;
}
.links a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 0;
  background-color: #fff;
  transition: 0.3s ease;
}

.links a:hover::before {
  width: 100%;
}

.links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #fff;
  transition: 0.4s ease;
  z-index: -1;
}

.mobile {
  display: flex;
}

a,
h1 {
  color: #fff;
  display: flex
}

@media only screen and (min-width: 1280px) {
  .nav-links {
    display: flex;
    gap: 10vh;
    align-items: center;
    /* justify-content: space-between; */
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  .links li {
    margin: 0 15px;
  }

  i {
    display: none;
  }

  input[type='checkbox'] {
    display: none;
  }

  .mobile {
    display: none;
  }
}

@media only screen and (max-width: 1280px) {
  nav .menu-btn i {
    display: block;
  }

  #logo-respon-id {
    display: none;
  }

  #click:checked ~ .menu-btn i:before {
    content: '\f00d';
  }

  .redes-sociais {
    display: none;
  }

  .nav-links {
    z-index: 5;
    position: absolute;
    height: 87vh;
    display: flex;
    text-align: center;
    top: 80px;
    padding: 20px;
    list-style: none;
    width: 40%;
    left: 100%;
    background: #131518;
    transition: all var(--effect) cubic-bezier(0, 0.29, 0.68, 0.94);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  #click:checked ~ .nav-links {
    left: 60%;
  }

  ul li {
    width: 100%;
    margin: 30px 0;
  }
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 600px) {
  nav {
    padding: 40px 25px;
    justify-content: space-between;
  }

  nav img {
    width: 10em;
  }

  nav .nav-links {
    width: 100%;
  }

  #click:checked ~ .nav-links {
    left: 0%;
  }
}

@media only screen and (max-width: 425px) {
  nav {
    padding: 40px 10px;
  }
}
</style>
