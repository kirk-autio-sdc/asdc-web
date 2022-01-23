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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

#nav {
  margin-bottom: 30px;
  background-color: #222;
  display: flex;
  width: 100%;
  height: 85px;
  
  .routes {
    margin: auto 0 auto 0;
    max-width: 1000px;
    
    a {
      display: inline-flex;
      margin: auto 50px auto 0;
      text-decoration: none;
      font-weight: bold;
      color: lightgray;

      &.router-link-exact-active {
        color: white;
      }
    }
  }
  
  img {
    height: 100%;
  }
}
</style>
