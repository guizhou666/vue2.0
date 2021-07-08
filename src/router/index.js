import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const RouterEcharts = [{
        path: '/',
        component: () => import("@/components/HelloWorld.vue")
    },
    {
        path:'/bar',
        component:() => import("@/view/bar")
    },
    {
        path:'/pie',
        component:() => import("@/view/pie")
    },
    {
        path:'/line',
        component:() => import("@/view/line")
    },

]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: RouterEcharts
})