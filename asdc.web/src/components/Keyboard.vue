<template>
  <div class="keyboard row" v-for="row in keyRows" :key="row">
    <button :class="keyClassFor(key)" v-for="key in row" :key="key" @click.prevent="eventFor(key)">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" v-if="key === '~'" class="backspace">
        <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z" />
      </svg>
      {{replace(key)}}
    </button>
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
      if (event.ctrlKey || event.altKey || event.metaKey) return;
      
      if (/^[a-zA-Z]{1}$/.test(event.key)) {
        this.$emit('keyPress', event.key.toUpperCase());
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
  
  public eventFor(key: string) {
    console.log(this.getKeyInfo(key).event);
    return this.getKeyInfo(key).event(key);
  }
  
  public getKeyInfo(key: string) {
    const style = [...this.keyStyle(key), "keyboard", "button"];
    
    switch (key) {
      case "\r": return {text: "Enter", style: [...style, "wide"], event: () => this.$emit('enter')};
      case "~": return {text: "", style: [...style, "wide"], event: () => this.$emit('delete')};
      default: return {text: key.toUpperCase(), style: style, event: (key: string) => this.$emit('keyPress', key)};
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
      font-weight: bold;
      
      &:active {
        background: $light-orange;
        color: $grey;
      }
      
      &.wide {
        width: 70px;
      }
      
      .backspace {
        fill: white;
      }
    }
  }
</style>