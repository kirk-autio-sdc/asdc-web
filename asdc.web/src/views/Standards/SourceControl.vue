<template>
  <div class="source-control">
    <div>
      <h4>Quality Assurance should be automated as much as possible.</h4>  With a proper CI/CD solution code errors can be caught before they are deployed.  Autio Software stores its source in 
      <a href="https://github.com/kirk-autio-sdc/asdc-web" target="_blank">GitHub</a> with triggered Actions.  All work must be done in a separate branch and then merged back into the main branches through a Pull Request.  
      This allows code to be reviewed prior to check-in.  When code is checked into a branch an action is triggered to ensure that the project will build and that all tests pass.
    </div>
    <div>
      <br/>
      Deployment is done through build actions to avoid mistakes and enforce consistency across deployments.  Below is a standard build file that Autio Software uses:
    </div>
    <code-block lang="yml">
      <keyword value="name" />: Build and Deploy <br />
      <br />
      <keyword value="on" />:<br />
      <div class="indent">
        <keyword value="push" />:
        <div class="indent"><keyword value="branches" />: [ master ]</div>
      </div>
      <br />
      <keyword value="env" />:<br />
      <div class="indent"><keyword value="app" />: publish-app</div>
      <br />
      <keyword value="jobs" />:<br />
      <div class="indent">
        <keyword value="build" />:<br />
        <div class="indent">
          <keyword value="runs-on" />: ubuntu-latest 
          <br /><br />
          <keyword value="steps" />:<br />
          <div class="indent">
            - <keyword value="uses" />: actions/checkout@v2<br />
            <br />
            - <keyword value="name" />: NPM Install<br />
            <div class="indent">
              <keyword value="run" />: npm install
            </div>
            <br />
            - <keyword value="name" />: Build files
            <div class="indent">
              <keyword value="run" />: npm run build -- --dest <span v-text="`$\{\{ env.app }}`" />
            </div>
            <br />
            - <keyword value="name" />: Upload artifacts
            <div class="indent">
              <keyword value="uses" />: actions/upload-artifacts@v2<br />
              <keyword value="with" />:
              <div class="indent">
                <keyword value="name" />: app<br />
                <keyword value="path" />: <span v-text="`$\{\{ env.app }}`" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <keyword value="deploy" />:<br />
        <div class="indent">
          <keyword value="needs" />: [ build ]<br />
          <keyword value="runs-on" />: ubuntu-latest<br />
          <br />
          <keyword value="steps" />:<br />
          <div class="indent">
            - <keyword value="name" />: Get artifacts
            <div class="indent">
              <keyword value="uses" />: actions/download-artifacts@v2<br/>
              <keyword value="with" />:
              <div class="indent">
                <keyword value="name" />: app<br />
                <keyword value="path" />: <span v-text="`$\{\{ env.app }}`" />
              </div>
            </div>
            <br />
            - <keyword value="name" />: Deploy
            <div class="indent">
              <keyword value="uses" />: azure/webapps-deploy@v2
              <keyword value="with" />:
              <div class="indent">
                <keyword value="app-name" />: '<span v-text="`$\{\{ secrets.AZURE_APP }}`" />'<br />
                <keyword value="slot-name" />: 'production'<br />
                <keyword value="publish-profile" />: <span v-text="`$\{\{ secrets.PUBLISH_PROFILE }}`" /><br />
                <keyword value="package" />: '<span v-text="`$\{\{ env.app }}`" />'
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </code-block>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CodeBlock from "@/components/CodeBlock.vue";
import Keyword from "@/components/Keyword.vue";

@Options({
  components: {Keyword, CodeBlock },
})
export default class SourceControl extends Vue {}
</script>

<style scoped>

</style>