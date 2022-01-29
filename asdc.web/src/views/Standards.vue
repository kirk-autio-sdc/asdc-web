<template>
  <div class="standards">
    <div class="standardLinks">
      <router-link to="/standards/">Write maintainable code</router-link>
      <router-link to="/standards/codeExtensible/">Write extensible code</router-link>
      <router-link to="/standards/sourceControl">Continuous Integration/Delivery</router-link>
<!--      <router-link to="/standards/testing">Testing</router-link>-->
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
a {
  margin: 0 50px 0 0;
  text-decoration: none;
  font-weight: bold;
  color: white;

  &.router-link-exact-active {
    color: #ff914d;
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
