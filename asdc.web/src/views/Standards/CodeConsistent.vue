<template>
  <accordion>
    <template #header>
      <h3>1. Keep Code Consistent</h3>
    </template>
    <template #content>
      <div>
        Make your code easier to understand by keeping consistent spacing and naming conventions.  The conventions we follow are:
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
        <comment>exposed properties should be PascalCase</comment>
        <keyword value="public property" /> <keyword type="property" value="PascalCase" /> { <keyword type="method" value="get"/>; }
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
    </template>
  </accordion>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CodeBlock from "@/components/CodeBlock.vue";
import Keyword from "@/components/Keyword.vue";
import Comment from "@/components/Comment.vue";
import Accordion from "@/components/Accordion.vue";

@Options({
  components: { CodeBlock, Keyword, Comment, Accordion }
})
export default class CodeConsistent extends Vue {}
</script>

<style scoped>

</style>