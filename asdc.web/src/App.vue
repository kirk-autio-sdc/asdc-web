<template>
  <header id="nav">
    <img alt="logo" src="/logo-txt.png" />
    <div class="routes">
      <router-link to="/">Home</router-link>
      <router-link to="/standards">Standards</router-link>
      <router-link to="/games">Games</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <hr />
    <div class="footer content">
      <a href="https://www.linkedin.com/in/kirk-autio-07023bb/" aria-label="linked in"><linked-in></linked-in></a>
      <span class="footer contact">Contact: <a href="mailto: info@autio-software.com">info@autio-software.com</a></span>
    </div>
  </footer>
</template>


<script lang="ts">
import LinkedIn from "@/icons/linkedIn.vue";
import {Options, Vue} from "vue-class-component";

@Options({
  components: { LinkedIn }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "public/styles";

#nav {
  margin-bottom: 30px;
  background-color: #222;
  display: flex;
  width: 100%;

  .routes {
    margin: auto;
    max-width: 1000px;

    a {
      display: inline-flex;
      margin: auto 50px auto 0;
      text-decoration: none;
      font-weight: bold;
      color: lightgray;

      &.router-link-active {
        color: white;
      }
    }
  }

  img {
    object-fit: contain;
    height: 100%;
    max-height: 85px;
    align-self: flex-start;
  }
}

.footer.content {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}

.footer.contact {
  margin-left: 30px;
}

@media screen and (max-width: 650px) {
  #nav {
    flex-flow: column;
  }
   
  .routes {
    padding-top: 15px;
  }
}
</style>