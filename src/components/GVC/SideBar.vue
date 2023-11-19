<script setup></script>
<template>
  <ul>
    <li>
      <a href="#">
        <i class="ai-home"></i>
        <span>Dashboard</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="ai-image"></i>
        <span>Images</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="ai-file"></i>
        <span>Files</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="ai-game-controller"></i>
        <span>Games</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="ai-book-open"></i>
        <span>Books</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="ai-bell"></i>
        <span>Notifications</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="ai-gear"></i>
        <span>Settings</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="ai-person"></i>
        <span>Profile</span>
      </a>
    </li>
  </ul>
</template>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--text-color-lg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 2em;
}

li:nth-child(6) {
  margin-top: 5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #ffffff;
}

li + li {
  margin-top: 0.75rem;
}

a {
  color: var(--text-color-lg);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5em;
  position: relative;
}

a:hover,
a:focus,
a.active {
  background-color: #424247;
  outline: 0;
}

a:hover span,
a:focus span,
a.active span {
  transform: scale(1);
  opacity: 1;
}

a i {
  font-size: 1.375rem;
}

a span {
  position: absolute;
  background-color: white;
  white-space: nowrap;
  color: var(--text-color-lg);
  font-size: .8em;
  border: 3px solid var(--text-color-lg);
  padding: 0.5rem 1rem;
  border-radius: 1em;
  left: calc(100% + 1.5rem);
  transform-origin: center left;
  transform: scale(0);
  opacity: 0;
  transition: 0.15s ease;
}

</style>
