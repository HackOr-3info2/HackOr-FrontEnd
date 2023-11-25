<script setup></script>
<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/hackathon">
          <box-icon
            name="circle-three-quarter"
            color="var(--gray)"
            size="2em"
            type="solid"
          ></box-icon>
          <span>Hackathon</span>
        </RouterLink>
      </li>
      <li>
        <a href="#">
          <box-icon name="file-image" color="var(--gray)" size="2em" type="solid"></box-icon>
          <span>Images</span>
        </a>
      </li>
      <li>
        <a href="#">
          <box-icon name="file-find" color="var(--gray)" size="2em" type="solid"></box-icon>
          <span>Files</span>
        </a>
      </li>
      <li>
        <RouterLink to="/equipes">
          <box-icon name="child" color="var(--gray)" size="2em"></box-icon> <span>Equipes</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/temas">
          <box-icon color="var(--gray)" size="2em" name="book-bookmark" type="solid"></box-icon>
          <span>Temas</span>
        </RouterLink>
      </li>
    </ul>
    <ul>
      <li>
        <RouterLink to="/settings">
          <box-icon name="cog" color="var(--gray)" size="2em" type="solid"></box-icon>
          <span>Settings</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/profile">
          <box-icon type="solid" color="var(--gray)" size="2em" name="user-circle"></box-icon>
          <span>Profile</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  height: 100vh;
  margin-right: auto;
  background-color: var(--bg-black);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  position: fixed;
}
nav * {
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
  z-index: 1000;

  transform: scale(0);
  opacity: 0;
  transition: 0.15s ease;
}
</style>
