<script setup></script>
<template>
  <nav>
    <ul>
      <li>
        <a href="#">
          <box-icon name="circle-three-quarter" color="#fff" size="2em" type="solid"></box-icon>
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <box-icon name="file-image" color="#fff" size="2em" type="solid"></box-icon>
          <span>Images</span>
        </a>
      </li>
      <li>
        <a href="#">
          <box-icon name="file-find" color="#fff" size="2em" type="solid"></box-icon>
          <span>Files</span>
        </a>
      </li>
      <li>
        <a href="#">
          <box-icon name="game" color="#fff" size="2em" type="solid"></box-icon> <span>Games</span>
        </a>
      </li>
      <li>
        <RouterLink to="/crud">
          <box-icon color="#fff" size="2em" name="book-bookmark" type="solid"></box-icon>
          <span>Books</span>
        </RouterLink>
      </li>
    </ul>
    <ul>
      <li>
        <RouterLink to="/settings">
          <box-icon name="cog" color="#fff" size="2em" type="solid"></box-icon>
          <span>Settings</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/profile">
          <box-icon type="solid" color="#fff" size="2em" name="user-circle"></box-icon>
          <span>Profile</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  top: 2%;
  left: 2%;
  border-radius: var(--border-rds);
  height: 96vh;
  margin-right: auto;
  background-color: var(--bg-black);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  position: fixed;
}

ul {
  list-style: none;
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
  border-radius: var(--border-rds);
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
  font-size: 0.8em;
  border: 3px solid var(--black);
  padding: 0.5rem 1rem;
  border-radius: var(--border-rds);
  left: calc(100% + 1.5rem);
  transform-origin: center left;
  transform: scale(0);
  opacity: 0;
  transition: 0.15s ease;
}
</style>
