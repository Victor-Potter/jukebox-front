<template>
  <div id="nav" class="container-fluid shadow text-center bg-light">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Sobre</router-link> |
    <router-link to="/login">Faça seu Login</router-link> |
    <!-- <router-link to="/register">Faça seu Registro</router-link> -->
  </div>
  <router-view/>
</template>

<style lang="scss" src="@/assets/scss/app.scss" scoped />

