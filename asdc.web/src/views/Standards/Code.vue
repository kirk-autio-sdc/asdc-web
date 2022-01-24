<template>
  <div>
    <h3>Keep Code Consistent</h3>
    <div>
    Keeping code consistent through a project makes it more readable. Deciphering and finding code becomese much simpler. Also, having consistent spacing and naming conventions shows care and pride in your work.  My recommendations for naming conventions and layout are:
    </div>
    <CodeBlock>
      <comment>variable names should be in camelCase</comment>
      <keyword value="var" /> camelCase = ...;
      <br/><br/>
      <comment>method names should be in PascalCase, but parameters should be camelCase</comment>
      <keyword value="public" /> <Keyword type="method" value="PascalCase" />(<keyword value="string" /> camelCase)
      <br/><br/>
      <comment>class, struct, record names should be PascalCase</comment>
      <keyword value="public class" /> <keyword type="class" value="PascalCase" />
      <br/><br/>
      <comment>constants should be UPPER_SNAKE_CASE</comment>
      <keyword value="const int" /> UPPER_SNAKE_CASE = <keyword type="constant" value="1" />;
      <br/><br/>
      <comment>Class Layout</comment>
      <keyword value="public class" /> <keyword type="class" value="MyClass"/>
      <br/>{
      <div class="indent">
        <comment>constants and static variables/methods</comment>
        <br/>
        <comment>private member variables</comment>
        <br/>
        <comment>constructors</comment>
        <comment>static constructors</comment>
        <br/>
        <comment>protected properties</comment>
        <comment>public properties</comment>
        <br/>
        <comment>private methods</comment>
        <comment>protected methods</comment>
        <comment>public methods</comment>
      </div>
      }<br/>
    </CodeBlock>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CodeBlock from "@/components/CodeBlock.vue";
import Comment from "@/components/Comment.vue";
import Keyword from "@/components/Keyword.vue";

@Options({
  components: {CodeBlock, Comment, Keyword}
})
export default class CodeStandards extends Vue {}
</script>

<style scoped lang="scss">
  .indent {
    padding: 0 1rem;
  }
</style>