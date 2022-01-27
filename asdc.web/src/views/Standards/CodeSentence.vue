<template>
  <accordion>
    <template #header>
      <h3>2. Make code readable</h3>
    </template>
    <template #content> </template>
  </accordion>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Accordion from "@/components/Accordion.vue";

@Options({
  components: { Accordion }
})
export default class CodeSentence extends Vue {}
</script>

<style scoped></style>
