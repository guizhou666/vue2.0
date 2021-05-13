import Vue from 'vue'
import App from './App.vue'
import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';
import VCharts from 'v-charts'

import Distpicker from 'v-distpicker'

Vue.component('v-distpicker', Distpicker);
Vue.use(VCharts);

import {
    pca,
    pcaa
} from 'area-data';
pca['86']
pcaa['130000'] // 等同于 AreaData['130000']
Vue.config.productionTip = false

Vue.use(VueAreaLinkage);
new Vue({
  render: h => h(App),
}).$mount('#app')
