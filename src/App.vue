<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- <debounce :list='list' :msg.sync="msg"></debounce> -->
    <!-- <hr> -->
    <!-- <span>{{list}} --- {{msg}}</span> -->
    <v-chart></v-chart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import vChart from './components/v-chart.vue'
// import debounce from './components/debounce'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    vChart
    // debounce,
  },
  data() {
      return {
          list:[1,2,3,4],
          msg:'yang'
      }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
