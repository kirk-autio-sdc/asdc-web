<template>
  <div class="content">
    <div class="guess" v-for="guess in guesses" :key="guess">
      <div class="kirkle-input" v-for="index in wordLength" :key="index">{{guess?.[index-1]}}</div>
    </div>
    
    <keyboard :key-style="getKeyStyle" @keyPress="handleKeyPress" @delete="deleteLast" @enter="submitGuess" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Keyboard from "@/components/Keyboard.vue";

@Options({
  components: {Keyboard},
})
export default class Kirkle extends Vue {
  wordLength = 5;
  guesses = [""];
  
  public getKeyStyle(key: string) {
    return key == "A" 
      ? ["correct"]
        : key == "Z" 
          ? ["wrong"]
            : key === "B" ? ["miss"] : ["unused"];
  }

  public handleKeyPress(key: string) {
    this.guesses = [...this.guesses.slice(0, -1), this.guesses.slice(-1) + key];
  }
  
  public deleteLast() {
    this.guesses = [...this.guesses.slice(0,-1), this.guesses.slice(-1)[0].slice(0, -1)];
  }
  
  public submitGuess() {
    console.log('submit');
  }
}
</script>

<style scoped lang="scss">
  .kirkle-input {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    font-size: 3.5rem;
    border: 2px solid $grey;
    border-radius: 1rem;
    background: black;
    margin-right: 0.25rem;
  }
  
  .guess {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
</style>

<style lang="scss">
  .correct {
    background: $green;
    border: 1px solid white;
  }
  
  .miss {
    background: $orange;
    color: white;
    border: 1px solid white;
  }
  
  .wrong {
    background: $dark-grey;
    color: white;
    border: 1px solid $dark-grey;
  }
  
  .unused {
    background: $grey;
    color: white;
    border: 1px solid $orange;
  }
</style>