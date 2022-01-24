<template>
  <div class="standards">
    <div class="standardLinks">
      <router-link to="/standards/">Code</router-link>
      <router-link to="/standards/sourceControl">Source Control</router-link> 
      <router-link to="/standards/testing">Testing</router-link>
    </div>
    <div class="standardContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Standards extends Vue {}
</script>

<style scoped lang="scss">
  .standards {
    max-width: 1000px;
    margin: auto;
    
    a {
      margin: 0 50px 0 0;
      text-decoration: none;
      font-weight: bold;
      color: white;

      &.router-link-exact-active {
        color: #ff914d;
      }
    }
  }

  .standardLinks {
    text-align: left;
    margin-bottom: 30px;
  }
  
  .standardContent {
    width: 100%;
    text-align: left;
  }
</style>
