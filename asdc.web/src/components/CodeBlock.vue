<template>
  <div class="code">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class CodeBlock extends Vue {}
</script>

<style scoped lang="scss">
  .code {
    margin: 15px 0 15px 0;
    padding: 15px;
    border: 1px solid #7ed957;
    background-color: black;
    color: lightgray;
    font-family: monospace;
  }
</style>