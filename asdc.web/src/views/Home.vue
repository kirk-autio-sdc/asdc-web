<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/profile.png" />
      <div>
        <h1>Expert in <span class="underline">Web Applications</span></h1>
        <i>Save time and money hiring developers with experience.</i>
        <h1><span class="underline">20 years</span> of development experience</h1>
        <i>Make your development team better by sharing knowledge.  Mentorship and best practises will reduce mistakes and ensure progress.</i>
      </div>
    </div>
    <div class="content">
      <h1>Helping businesses succeed since 2020</h1>
      <div class="partners">
        <img src="../assets/aps_logo2000.png" />
        <img src="../assets/Alberta-government-logo2.png" />
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.banner {
  display: flex;
  align-items: center;
  background: $grey;
  width: 100vw;
  min-width: 600px
}

img {
  object-fit: fill;
  height: 100%;
}

.partners {
  display: flex;
  flex-flow: row;
  justify-content: center;
  
  & img {
    height: 150px;
  }
}
</style>