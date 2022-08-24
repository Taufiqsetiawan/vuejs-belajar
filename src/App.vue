<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>


  <div>
    <nav class="navbar"
      style=" background-color: #364E68; margin-top: -180px; margin-left: -35px; width:1709px; height:90px;">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">
          <img src="/jaz.jpeg" alt="" width="50" height="24"
            class="d-inline-block align-text-top">
          Taufiq setiawan - vue js
        </a>
        <ul class="nav-right">
          <li>
            <RouterLink to="/personal">My Personal</RouterLink>
           
          </li>
          <li>
             <RouterLink to="/skill">My Skill</RouterLink>
          </li>
        </ul>
      </div>
    </nav>


    <div class="card-header">
    </div>
    <div class="card-body">
      <div style="width:1090px; margin-left: 60px; ">
        <RouterView />
      </div>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
  </div>


</template>

<style>
.nav-right {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin-right: 30px;
}

.nav-right a {
  color: white;
  position: relative;
  text-decoration: none;
  width: auto;
  font-size: 20px;
  font-weight: bold;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
