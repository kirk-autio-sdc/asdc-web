<template>
  <div class="content">
    <div class="guesses">
      <div class="guess" v-for="(guess, index) in [...guesses, currentGuess]" :key="index">
        <div :class="`kirkle-input ${index < guesses.length ? getLetterStyle(guess[letterIndex-1], letterIndex-1) : ''}`" v-for="letterIndex in word.length" :key="letterIndex">{{guess?.[letterIndex-1]}}</div>
      </div>  
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
  word = "ARISE";
  success = false;
  
  currentGuess = "";
  guesses: string[] = [];

  public getKeyStyle(key: string) {
    if (!this.guesses.length || this.guesses.every(g => !g.includes(key))) return ["unused"];
    
    let result = "wrong";
    for (let i = 0; i < this.word.length; i++) {
      if (this.guesses.some(g => this.word[i] === key && g[i] === key)) return ["correct"];
      if (this.guesses.some(g => g.includes(key) && this.word.includes(key))) result = "miss";
    }
    
    return [result];
  }
  
  public getLetterStyle(letter: string, letterIndex: number) {
    return letter !== this.word[letterIndex] 
        ? this.word.includes(letter) ? "miss" : "wrong"
        : "correct"; 
  }

  public handleKeyPress(key: string) {
    this.currentGuess = this.currentGuess + key;
  }
  
  public deleteLast() {
    if (!this.currentGuess) return;
    
    this.currentGuess = this.currentGuess.slice(0,-1);
  }
  
  public submitGuess() {
    if (this.currentGuess === this.word) {
      this.success = true;
      return;
    }
    
    this.guesses.push(this.currentGuess);
    this.currentGuess = "";
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
    font-size: 3rem;
    border: 2px solid $grey;
    border-radius: 1rem;
    background: black;
    margin-right: 0.25rem;
  }
  
  .guesses{
    margin-bottom: 2rem;
  }
  
  .guess {
    display: flex;
    justify-content: center;
  }
</style>

<style lang="scss">
  .correct {
    background: $orange !important;
    color: white !important;
    border: 1px solid white;
  }
  
  .miss {
    background: mediumslateblue !important;
    color: white !important;
    border: 1px solid white;
  }
  
  .wrong {
    background: $dark-grey !important;
    color: white !important;
    border: 1px solid $dark-grey;
  }
  
  .unused {
    background: $grey;
    color: white;
    border: 1px solid $orange;
  }
</style>