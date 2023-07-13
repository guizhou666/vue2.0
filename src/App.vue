<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <!-- <HelloWorld/> -->
        <!-- <debounce :list='list' :msg.sync="msg"></debounce> -->
        <!-- <hr> -->
        <!-- <span>{{list}} --- {{msg}}</span> -->
        <!-- <v-chart></v-chart> -->
        <keep-alive :include="cacheCompounted">
            <router-view></router-view>
        </keep-alive>
        <!-- 新添加，微应用的容器 -->
        <!-- <div id="order-container"></div> -->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import vChart from './components/v-chart.vue'
// import debounce from './components/debounce'
// import iotBar from './components/iot-bar'
export default {
    name: "App",
    components: {
        // HelloWorld,
        // vChart
        // debounce,
        // iotBar
    },
    data() {
        return {
            list: [1, 2, 3, 4],
            msg: "yang",
            isCollapse: false,
            cacheCompounted: ['']
        };
    },
    computed: {
        
    },
    methods: {
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #F5F5F6;
    /* margin-top: 60px; */
    /* width: 100%;
  height: 100%; */
    height: 100%;
}

body,
html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

* {
    box-sizing: border-box;
}
</style>
