<template>
  <div class="code" :class="getClass">
    <div class="code-header">
      <span class="language">{{lang}}</span>
    </div>
    
    <h3 v-if="kind === 'good'" :class="getClass">DO:</h3>
    <h3 v-if="kind === 'bad'" :class="getClass">DON'T DO:</h3>
    <h3 v-if="kind === 'avoid'" :class="getClass">AVOID:</h3>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    kind: {
      type: String,
      default: "",
      validator: (value: string) => ["", "good", "bad", "avoid"].includes(value)
    },
    lang: {
      type: String,
      default: "C#"
    }
  }
})
export default class CodeBlock extends Vue {
  public kind = "";
  public lang = "C#";
  
  get getClass(): string[] {
    switch (this.kind) {
      case 'good':
        return ['good-example'];
      case 'bad':
        return ['bad-example'];
      case 'avoid':
        return ['avoid-example'];
      default:
        return [];
    }
  }
}
</script>

<style scoped lang="scss">
  .code {
    margin: 15px 0 15px 0;
    padding: 15px;
    border: 1px solid $green;
    background-color: $dark-grey;
    color: lightgray;
    font-family: monospace;
    
    &.bad-example {
      border: 1px solid red;
      border-left: 20px solid red;
    }
    
    &.good-example {
      border: 1px solid $green;
      border-left: 20px solid $green;
    }
    
    &.avoid-example {
      border: 1px solid $light-orange;
      border-left: 20px solid $light-orange;
    }
    
    .code-header {
      position: relative;
      float: right;
      display: flex;
      margin-bottom: 15px;
      color: $light-orange;
    }

    h3 {
      margin: 0 0 15px;

      &.good-example {
        color: $green;
      }

      &.bad-example {
        color: lightcoral;;
      }
      
      &.avoid-example {
        color: $light-orange;
      }
    }
      
    .language {
      float: right;
      //text-align: right;
      width: 100%;
    }
  }
</style>