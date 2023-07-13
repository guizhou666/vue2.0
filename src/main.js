import Vue from 'vue'
import App from './App.vue'
import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VCharts from 'v-charts'
import echarts from 'echarts'
import Distpicker from 'v-distpicker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import router from './router'
import MyUI from '@components'
// import start from '@/micros'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/index'
import VueCompositionApi from '@vue/composition-api'
Vue.use(Vant);
Vue.use(VueCompositionApi)

Vue.component('v-distpicker', Distpicker);
Vue.use(VCharts);
Vue.use(ElementUI, {
    size: "small"
});
Vue.use(MyUI)
import {
    Icon
} from 'vant';
Vue.use(Icon);


// npmb 流程图
import {
    vuePlugin
} from "@/packages/highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";
Vue.use(vuePlugin);
import ResetPopover from "@/util/resetPopover";
Vue.directive("r-popover", ResetPopover);
import Common from "@/packages/components/common";
Vue.use(Common);
import "./packages/theme/index.scss";

Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios;
// Vue.prototype.$store = store;
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
// start();