<template>
  <label class="popup">
    <input type="checkbox" />
    <div class="burger" tabindex="0">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="popup-window">
      <legend>Actions</legend>
      <ul>
        <li>
          <button>
            <span>Colloborators</span>
          </button>
        </li>
        <li>
          <button>
            <span>Magic Link</span>
          </button>
        </li>
        <hr />
        <li>
          <button>
            <span>Clone</span>
          </button>
        </li>
        <li>
          <button>
            <span>Edit</span>
          </button>
        </li>
        <hr />
        <li>
          <button>
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </nav>
  </label>
</template>

<script>
export default {}
</script>

<style scoped>
.popup {
  display: inline-block;
  text-rendering: optimizeLegibility;
  position: relative;
}

.popup input {
  display: none;
}

.burger {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: var(--text-color-lg);
  width: 2.125em;
  height: 2.125em;
  border-radius: 1.0625em;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  outline: 0.225em solid transparent;
  outline-offset: 0;
}

.burger span {
  height: 0.125em;
  width: 1.125em;
  background: #fff;
  border-radius: 0.1875em;
  position: absolute;
  transition: 0.3s;
}

.burger span:nth-child(1) {
  top: 0.5em;
}

.burger span:nth-child(2) {
  bottom: 0.5em;
}

.burger span:nth-child(3) {
  top: 50%;
  transform: translateY(-50%);
}

.popup-window {
  transform: scale(0.8);
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding: 0.625em 0.25em;
  background: #fff;
  z-index: 999;
  border-radius: 1.5em;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  border: 0.125em solid #363636;
  top: 2.75em;
  left: 0;
  right: unset;
  transition: all 0.1s ease-in-out;
}

.popup-window legend {
  padding: 0.25em 1rem;
  margin: 0;
  color: #777;
  font-size: 0.625em;
  text-transform: uppercase;
}

.popup-window ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.popup-window ul button {
  outline: none;
  width: 100%;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 12px;
  padding: 0.375em 1rem;
  white-space: nowrap;
  border-radius: 0.375em;
  cursor: pointer;
  column-gap: 0.875em;
}


.popup-window hr {
  margin: 0.3125em 0;
  border: none;
  border-bottom: 0.0625em solid #ccc;
}

.popup-window ul button:hover,
.popup-window ul button:focus-visible{
  color: #fff;
  background: var(--text-color-lg);
}

.popup-window ul button:hover span {
    color: white
}
.burger:hover {
  transform: scale(1.1);
}

.burger:active {
  transform: scale(0.95);
}

.burger:focus:not(:hover) {
  outline-color: var(--text-color-lg);
  outline-offset: 0.2em;
}

.popup input:checked + .burger span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.popup input:checked + .burger span:nth-child(2) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

.popup input:checked + .burger span:nth-child(3) {
  transform: translateX(calc(-3.25em - 1.125em));
}

.popup input:checked ~ nav {
  transform: scale(1);
  visibility: visible;
  opacity: 1;
}
</style>
