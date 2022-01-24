<template>
  <header id="nav">
    <img alt="logo" src="/logo-txt.png" />
    <div class="routes">
      <router-link to="/">Home</router-link>
      <router-link to="/standards">Standards</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@import "public/styles";
</style>
