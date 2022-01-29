<template>
  <div class="consistent-code">
    <div>
      Maintainable code is easy to read and understand which can be accomplished through code conventions. Autio Software uses the following conventions:
    
      Have code read like a sentence by using variables fully qualified and descriptive of what they represent:
    </div>
    <CodeBlock>
      <keyword value="public" /> <keyword type="property" value="Response" /> <keyword type="method" value="GetAddressResponse" />()<br />
      { <br />
      <div class="indent">
        <keyword value="var" /> address = <keyword type="property" value="LocationApi" />.<keyword type="method" value="GetAddress" />();<br />
        <keyword value="var" /> response = <keyword value="new" /> <keyword type="method" value="AddressResponse" />(address);<br />
        <br />
        <comment>code running against response/address</comment>
        <br />
        <keyword value="return" /> response;
      </div>
      } <br />
    </CodeBlock>
    <div>
      Keep consistent file layouts along with consistent spacing and naming conventions:
    </div>
    <CodeBlock>
      <comment>variable names should be in camelCase</comment>
      <keyword value="var" /> camelCase = ...;
      <br /><br />
      <comment>method names should be in PascalCase, but parameters should be camelCase</comment>
      <keyword value="public" /> <Keyword type="method" value="PascalCase" />(<keyword value="string" /> camelCase)
      <br /><br />
      <comment>class, struct, record names should be PascalCase</comment>
      <keyword value="public class" /> <keyword type="class" value="PascalCase" />
      <br /><br />
      <comment>exposed properties should be PascalCase</comment>
      <keyword value="public property" /> <keyword type="property" value="PascalCase" /> { <keyword type="method" value="get"/>; }
      <br /><br />
      <comment>constants should be UPPER_SNAKE_CASE</comment>
      <keyword value="const int" /> UPPER_SNAKE_CASE = <keyword type="constant" value="1" />;
      <br /><br />
      <comment>Class Layout</comment>
      <keyword value="public class" /> <keyword type="class" value="MyClass"/>
      <br />{
      <div class="indent">
        <comment>constants and static variables/methods</comment>
        <br />
        <comment>private member variables</comment>
        <br />
        <comment>constructors</comment>
        <comment>static constructors</comment>
        <br />
        <comment>protected properties</comment>
        <comment>public properties</comment>
        <br />
        <comment>private methods</comment>
        <comment>protected methods</comment>
        <comment>public methods</comment>
      </div>
      }<br />
    </CodeBlock>
    <div>
      Keep nesting to a minimum. Deeply nested code is hard to read.  Nesting can be reduced by exiting methods early.  It is also good practise to assert parameter values at the top of methods and exit/throw exceptions early.
      <code-block kind="bad">
        <keyword value="public void" /> <keyword type="method" /> (<keyword type="class" value="Response" /> response)<br />
        {
        <div class="indent">
          <keyword value="if" /> (response.Success)<br />
          {
          <div class="indent">
            <comment>...</comment>
          </div>
          }
        </div>
        }
      </code-block>
      <code-block kind="good">
        <keyword value="public void" /> <keyword type="method" /> (<keyword type="class" value="Response" /> response)<br />
        {
        <div class="indent">
          <keyword value="if" /> (!response.Success) <keyword value="return" />;<br />
          <comment>...</comment>
        </div>
        }
      </code-block>
    </div>
  </div>
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