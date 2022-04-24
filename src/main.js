import Vue from 'vue'
import App from './App.vue'
import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';
import VCharts from 'v-charts'
import echarts from 'echarts'
import Distpicker from 'v-distpicker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import router from './router'
import MyUI from '@components'
import start from '@/micros'
// import AMap from 'vue-amap' // 这个引入的最好放在引入的vue上面
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//     key: '93af9ec3feec730470580925be5233de', // 你的key
//     plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.AMapManager', 'AMap.Marker'], //应用功能项
//     v: '1.4.4', //版本
//     uiVersion: '1.0' //ui版本
// })  

Vue.component('v-distpicker', Distpicker);
Vue.use(VCharts);
Vue.use(ElementUI);
Vue.use(MyUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios;
import {
    pca,
    pcaa
} from 'area-data';
import { Axis } from 'echarts/lib/export';
pca['86']
pcaa['130000'] // 等同于 AreaData['130000']
Vue.config.productionTip = false

Vue.use(VueAreaLinkage);
new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
start();