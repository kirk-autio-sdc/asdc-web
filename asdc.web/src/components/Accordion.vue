<template>
  <div class="accordion-container">
    <div class="accordion-header" :class="openClass" @click="open = !open">
      <div class="accordion-header-content"><slot name="header"></slot></div>
      <i class="arrow" :class="openClass"></i>
    </div>
    <div class="accordion-body" v-if="open">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      open: false
    };
  },
  computed: {
    openClass() {
      return this.open ? ["open"] : ["close"];
    }
  }
})
export default class Accordion extends Vue {}
</script>

<style scoped lang="scss">
  @import "public/styles";
  
  .accordion-container {
    margin: 15px 0;
  }
  
  .accordion-header {
    display: flex;
    border: 1px solid white;
    background-color: $grey;
    align-items: baseline;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    
    &.open {
      border-radius: 10px 10px 0 0;
      border-bottom: 0;
    }
  }
  
  .accordion-header-content {
    flex-grow: 1;
  }
  
  .accordion-body {
    padding: 15px 15px;
    border: 1px solid white;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    background-color: $grey;
  }
  
  .arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 6px;
    height: 2px;
    
    &.open {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
    
    &.close {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
</style>