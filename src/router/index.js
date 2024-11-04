import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const RouterEcharts = [
  {
    path: "/hslg",
    component: () => import("@/view/map"),
  },
  {
    path: "/bar",
    component: () => import("@/view/bar"),
  },
  {
    path: "/pie",
    component: () => import("@/view/pie"),
  },
  {
    path: "/line",
    component: () => import("@/view/line"),
  },
  {
    path: "/selected",
    component: () => import("@/view/selected"),
  },
  {
    path: "/map",
    component: () => import("@/view/map"),
  },
  {
    path: "/huan",
    component: () => import("@/view/huan"),
  },
  {
    path: "/dialog",
    component: () => import("@/view/dialog"),
  },
  {
    path: "/",
    component: () => import("@/view/home"),
    children: [
      {
        path: "product",
        component: () => import("@/view/product"),
      },
      {
        path: "shopping",
        component: () => import("@/view/shopping"),
      },
    ],
  },
  {
    path: "/chinaMap",
    component: () => import("@/view/chinaMap"),
  },
  {
    path: "/mixinTest",
    component: () => import("@/view/mixinTest"),
  },
  {
    path: "/test",
    component: () => import("@/view/test"),
  },
  {
    path: "/test2.0",
    component: () => import("@/view/test2.0"),
  },
  {
    path: "/test3.0",
    component: () => import("@/view/test3.0"),
  },
  {
    path: "/test4.0",
    component: () => import("@/view/test4.0"),
  },
  {
    path: "/pdfView",
    component: () => import("@/view/pdfView"),
  },
  {
    path: "/npmb",
    component: () => import("@/view/npmb"),
  },
  // {
  //     path: '/flvDemo',
  //     component: () => import("@/view/flvDemo")
  // },
  // {
  //     path: '/flvDemo2',
  //     component: () => import("@/view/flvDemo2")
  // },
  {
    path: "/test5",
    component: () => import("@/view/test5"),
  },
  {
    path: "/offlineMpa",
    component: () => import("@/view/offlineMpa"),
  },
  {
    path: "/keep-alive",
    component: () => import("@/view/keepAlive"),
    redirect: "/keep-alive/table",
    children: [
      {
        path: "table",
        component: () => import("@/view/keepAlive/table.vue"),
      },
      {
        path: "detail",
        component: () => import("@/view/keepAlive/detail.vue"),
        children: [
          {
            path: "mast-detail",
            component: () => import("@/view/keepAlive/mast-detail.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/snake",
    component: () => import("@/view/snake"),
  },
  {
    path: "/autoRpx",
    component: () => import("@/view/autoRpx"),
  },
  {
    path: "/testTag",
    component: () => import("@/view/testTag"),
  },
  {
    path: "/vueTreeselect",
    component: () => import("@/view/vueTreeselect"),
  },
  {
    path: "/flowPicture",
    component: () => import("@/view/flowPicture"),
  },
  {
    path: "/vue3",
    component: () => import("@/view/vue3"),
  },
  {
    path: "/pagination",
    component: () => import("@/view/pagination"),
  },
  {
    path: "/oldemo",
    component: () => import("@/view/olDemo"),
  },
  {
    path: "/canvas",
    component: () => import("@/view/canvas"),
  },
  {
    path: "/fullScreen",
    component: () => import("@/view/fullScreen"),
  },
  {
    path: "/antV",
    component: () => import("@/view/antV"),
  },
  {
    path: "/gojs",
    component: () => import("@/view/gojs"),
  },
  {
    path: "/lineData",
    component: () => import("@/view/lineData"),
  },
  {
    path: "/uploadDemo",
    component: () => import("@/view/uploadDemo"),
  },
  {
    path: "/elImage",
    component: () => import("@/view/elImage"),
  },
  {
    path: "/tableContent",
    component: () => import("@/view/tableContent"),
  },
  {
    path: "/trigger",
    component: () => import("@/view/trigger"),
  },
  // {
  //     path: '/product',
  //     component: () => import("@/view/product")
  // },
  // {
  //     path:'/home',
  //     component: () => import("@/view/home")
  // }
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: RouterEcharts
})