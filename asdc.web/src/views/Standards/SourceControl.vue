<template>
  <h3>GitHub</h3>
  <div>
    GitHub is free to use and is an excellent tool for maintaining source for an entire team to use.
    <ul>
      <li>When making a change to source, make sure to branch off of the main branch</li>
      <li>Do not merge code directly into the main branch. All code should be worked on in a seperate branch and merged to the main branch through a pull request.</li>
      <li>Pull Requests should be reviewed and marked as approved prior to merging back to the main branch.  I recommend doing a squash merge in order to break down the merge into 1 set of changes.</li>
      <li>Once a Pull Request is completed, delete the old branch in order to keep the repository clean.</li>
      <li>DO NOT SUBMIT CODE THAT WILL BREAK THE BUILD!</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class SourceControl extends Vue {}
</script>

<style scoped>

</style>