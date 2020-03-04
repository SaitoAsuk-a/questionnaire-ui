<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
    import vHeader from './components/Header'

    export default {
        name: 'App',
        components: {
            vHeader
        }
    }
</script>

<style>

  @import url(./style/reset.css);

  #app {
    min-width: 110rem;
    height: 100%;
    font-family: arial;
    background-color: #efefef;
    overflow: auto;
  }
</style>
