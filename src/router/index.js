import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const RouterEcharts = [{
        path: '/hslg',
        component: () => import("@/view/map")
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
    {
        path:'/selected',
        component:() => import("@/view/selected")
    },
    {
        path:'/map',
        component:() => import("@/view/map")
    },
    {
        path:'/huan',
        component:() => import("@/view/huan")
    },
    {
        path:'/dialog',
        component: () => import("@/view/dialog")
    },
    {
        path: '/',
        component: () => import("@/view/debounce")
    },
    {
        path:'/chinaMap',
        component: () => import("@/view/chinaMap")
    },
    {
        path:'/mixinTest',
        component: () => import("@/view/mixinTest")
    },
    {
        path:'/test',
        component: () => import("@/view/test")
    },
    {
        path:'/home',
        component: () => import("@/view/home")
    }

]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: RouterEcharts
})