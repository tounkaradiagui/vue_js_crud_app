<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header class="text-white">
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-dark  navbar-dark">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">Student CRUD</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div classcollapse=" navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/">Accueil</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">A Propos</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/students">Etudiants</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

