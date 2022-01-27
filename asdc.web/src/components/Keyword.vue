<template>
  <span :class="type">{{value}}</span>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    value: String,
    type: {
      type: String,
      default: "keyword",
      validator: (value: string) => ["keyword", "constant", "method", "class"].includes(value)
    }
  }
})
export default class Keyword extends Vue {}
</script>

<style scoped lang="scss">
  @import "public/styles";
  
  .keyword {
    color: #6C95EB;
  }

  .constant {
    color: #ed94c0;
  }

  .method {
    color: $orange;
  }
  
  .class,
  .property {
    color: #c191ff;
  }
</style>