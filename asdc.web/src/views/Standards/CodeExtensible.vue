<template>
  <div class="code-extensible">
    <h3>Default to immutable</h3>
    <div>
      Immutable objects help to enforce code centralization, reduce problems with threading, and create cleaner code.  Properties should only be made mutable if absolutely necessary and should actually be changing.
      For example, a house's address should likely be immutable.  In the real world it would be very rare for an address to change.  It could really only change if street names were updated.  And even then instead of mutating the address,
      you could just create a new address object with the change.  
      <code-block kind="bad">
        <comment>Logic is scattered through the system and may be replicated.  It's not obvious that there may be constraints</comment>
        <keyword value="public class" /> <keyword type="class" value="Address" /><br />
        { <br />
        <div class="indent">
          <keyword value="public" /> <keyword type="class" value="string" /> <keyword type="property" value="PostalCode"/> { <keyword value="get" />; <keyword value="set" /> }<br />
          <keyword value="public" /> <keyword type="class" value="string" /> <keyword type="property" value="Street"/> { <keyword value="get" />; <keyword value="set" /> }<br />
          <keyword value="public" /> <keyword type="class" value="string" /> <keyword type="property" value="City"/> { <keyword value="get" />; <keyword value="set" /> }
        </div>
        }
      </code-block> 
      <code-block kind="good">
        <comment>Any logic pertaining to Address should be contained, ensure centralized logic and no duplication</comment>
        <keyword value="public class" /> <keyword type="class" value="Address" /><br />
        { <br />
        <div class="indent">
          <keyword value="public" /> Address(<keyword type="class" value="string" /> street, <keyword type="class" value="string" /> postalCode, <keyword type="class" value="IAddressChecker" /> addressChecker)<br />
          {<br />
          <div class="indent">
            <keyword value="if" /> (!addressChecker.IsValid(street, postalCode, city))<br />
            <div class="indent"><keyword value="throw new" /> <keyword value="method" /> <keyword type="method" value="AddressException" />(<keyword type="constant" value="&quot;Invalid Address&quot;" />);</div>
            <br />
            <keyword type="property" value="PostalCode"/> = postalCode;<br />
            <keyword type="property" value="Street"/> = street;<br />
            <keyword type="property" value="City"/> = city;
          </div>
          }<br />
          <br />
          <keyword value="public" /> <keyword type="class" value="string" /> <keyword type="property" value="PostalCode"/> { <keyword value="get" />; }<br />
          <keyword value="public" /> <keyword type="class" value="string" /> <keyword type="property" value="Street"/> { <keyword value="get" />; }<br />
          <keyword value="public" /> <keyword type="class" value="string" /> <keyword type="property" value="City"/> { <keyword value="get" />; }
        </div>
        }
      </code-block>
    </div>
    <h3>Favor composition over inheritance</h3>
    <div>
      Classes that use dependency injection to specify behaviour can be changed without affecting pre-existing code.  Existing code doesn't need to be retested; only the new behaviour class requires testing.
      <code-block kind="avoid">
        <keyword value="public abstract class" /> <keyword type="class" value="Container" /><br />
        { <br />
        <div class="indent">
          <keyword value="public abstract" /> <keyword type="class" value="string" /> <keyword type="property" value="Color"/> { <keyword value="get" />; }<br />
        </div>
        }<br />
        <br />
        <keyword value="public class" /> <keyword type="class" value="WarningContainer" /> : <keyword type="class" value="Container" /><br />
        { <br />
        <div class="indent">
          <keyword value="public override" /> <keyword type="class" value="string" /> <keyword type="property" value="Color"/> => <keyword type="constant" value="&quot;Orange&quot;" /><br />
        </div>
        }<br />
        <br />
        <keyword value="public class" /> <keyword type="class" value="ErrorContainer" /> : <keyword type="class" value="Container" /><br />
        { <br />
        <div class="indent">
          <keyword value="public override" /> <keyword type="class" value="string" /> <keyword type="property" value="Color"/> => <keyword type="constant" value="&quot;Red&quot;" /><br />
        </div>
        }
      </code-block>
      <code-block kind="good">
        <keyword value="public class" /> <keyword type="class" value="Container" /><br />
        { <br />
        <div class="indent">
          <comment>IStatus checker allows us to reuse status color coding across more than just this class.  </comment>
          <comment>Allows us to change colors rapidly by centralizing logic.</comment>
          <keyword value="public" /> Container(<keyword type="class" value="IStatusChecker" /> statusChecker, <keyword type="class" value="Status" /> status)<br />
          {<br />
          <div class="indent">
            <keyword type="property" value="Color"/> = statusChecker.ColorFor(status);
          </div>
          }<br />
          <br />
          <keyword value="public" /> <keyword type="class" value="string" /> <keyword type="property" value="Color"/> { <keyword value="get" />; }<br />
        </div>
        }
      </code-block>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CodeBlock from "@/components/CodeBlock.vue";
import Keyword from "@/components/Keyword.vue";
import Comment from "@/components/Comment.vue";

@Options({
  components: {Keyword, Comment, CodeBlock },
})
export default class CodeExtensible extends Vue {}
</script>

<style scoped>

</style>