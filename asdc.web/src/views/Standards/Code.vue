<template>
  <div>
    <code-consistent></code-consistent>
    <code-sentence></code-sentence>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CodeConsistent from "@/views/Standards/CodeConsistent.vue";
import CodeSentence from "@/views/Standards/CodeSentence.vue";

@Options({
  components: { CodeConsistent, CodeSentence }
})
export default class CodeStandards extends Vue {}
</script>

<style scoped lang="scss"></style>
