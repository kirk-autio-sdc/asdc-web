<template>
  <div class="comments">
    //<slot/>
    <br/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class Comment extends Vue {}
</script>

<style scoped lang="scss">
  .comments {
    color: #999;
  }
</style>