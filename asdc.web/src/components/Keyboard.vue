<template>
  <div class="keyboard row" v-for="row in keyRows" :key="row">
    <button :class="keyClassFor(key)" v-for="key in row" :key="key" @click.prevent="$emit('keyPress', key)">{{replace(key)}}</button>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    keyStyle: {
      type: Function
    }
  },
  emits: ["keyPress", "enter", "delete"],
  beforeMount() {
    window.onkeydown = (event: KeyboardEvent) => {
      if (/^[a-zA-Z]{1}$/.test(event.key)) {
        this.$emit('keyPress', event.key);
        return;
      }
      
      switch (event.key) {
        case "Enter":
          this.$emit('enter');
          break;
        case "Backspace": 
          this.$emit("delete");
          break;
      }
    } 
  }
})
export default class Keyboard extends Vue {
  keyStyle!: (key: string) => string[];
  
  keyRows = [
      "QWERTYUIOP",
      "ASDFGHJKL",
      "\rZXCVBNM~"
  ]
  
  public replace(key: string) {
    return this.getKeyInfo(key).text;
  }
  
  public keyClassFor(key: string) {
    return this.getKeyInfo(key).style;
  }
  
  public getKeyInfo(key: string) {
    const style = [...this.keyStyle(key), "keyboard", "button"];
    
    switch (key) {
      case "\r": return {text: "Enter", style: [...style, "wide"]};
      case "~": return {text: "Delete", style: [...style, "wide"]};
      default: return {text: key, style: style};
    }
  }
}
</script>

<style scoped lang="scss">
  .keyboard {
    display: flex;
    justify-content: center;  
    
    & .button {
      height: 50px;
      width: 50px;
      justify-content: center;
      align-items: center;
      margin: 0.25rem;
      border-radius: 0.5rem;
      
      &:active {
        background: $light-orange;
        color: $grey;
      }
      
      &.wide {
        width: 70px;
      }
    }
  }
</style>