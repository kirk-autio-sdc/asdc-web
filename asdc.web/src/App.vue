<template>
  <div id="nav">
    <img alt="logo" src="/logo.png" />
    <div class="routes">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
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
  background-color: antiquewhite;
  display: flex;
  width: 100%;
  height: 85px;
  align-items: center;
  
  .routes {
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    
    a {
      display: inline-flex;
      width: 100px;
      text-decoration: none;
      font-weight: bold;
      color: #666;

      &.router-link-exact-active {
        color: #FF914D;
      }
    }
  }
  
  img {
    height: 120px;
  }
}
</style>
