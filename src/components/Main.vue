<template>
  <div>
    <section class="header">
      <v-header/>
    </section>
    <section class="main">
      <div class="main-left">
        <side-left/>
      </div>
      <div class="main-right">
        <side-right/>
      </div>
    </section>
    <section class="footer">
      <v-footer/>
    </section>
  </div>
</template>

<script>
  import VHeader from './VHeader'
  import VFooter from './VFooter'
  import SideLeft from './SideLeft'
  import SideRight from './SideRight'

  export default {
    data () {
      return {

      }
    },
    components: {
      VHeader,
      VFooter,
      SideLeft,
      SideRight
    }
  }

</script>
<style>
  .header {
    width: 100%;
    height: 60px;
    background: green;
  }
  .main {
    margin: 5px auto;
    width: 1280px;
    min-height: 600px;
    height: auto;
    background: yellow;
  }
  .main-left {
    float: left;
    width: 250px;
    min-height: 500px;
    height: auto;
    background: gray;
  }
  .main-right {
    float: left;
    margin-left: 5px;
    width: 950px;
    min-height: 600px;
    height: auto;
    background: darkgray;
  }
  .footer {
    width: 100%;
    height: 60px;
    background: green;
  }
</style>
