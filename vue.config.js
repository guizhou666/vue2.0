const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    lintOnSave: true,
     devServer: {
        //  port: port,
        //  open: true,
         overlay: {
             warnings: false,
             errors: true
         },
         proxy: {
             '/service/101': {
                 // target: 'http://192.168.30.10:10101',
                 // target: 'http://192.168.20.40:10101', 
                 target: 'http://192.168.10.48',
                 ws: true,
                 changeOrign: true
             },
             '/service/103': {
                 // target: 'http://192.168.30.10:10103',
                 // target: 'http://192.168.20.40:10103', // 要访问的接口域名
                 target: 'http://192.168.20.89', // 要访问的接口域名
                 ws: true, // 是否启用websockets
                 changeOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                 //   pathRewrite: {
                 //     "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
                 //   },
             },
             '/service/107': {
                 target: 'http://192.168.20.89',
                 // target: 'http://192.168.20.40:10086',
                 changeOrign: true
             },
             '/service/302': {
                 target: 'http://192.168.10.48',
                 // target: 'http://192.168.20.40:10086',
                 changeOrign: true
             },
             '/service/303': {
                 // target: 'http://192.168.20.73:10303',
                 target: 'http://192.168.10.48',
                 // target: 'http://192.168.20.40:10086',
                 changeOrign: true
             },
         },
         // 开启mock server
         // after: require('./mock/mock-server.js')
     },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@/packages', resolve('src/packges'))
        // 这里只写了部分，可以自己再添加，按这种格式 .set('', resolve(''))
    },
     configureWebpack(config) {
         // ...

         config.externals = {
             'AMap': 'AMap' // 高德地图配置
         }
     }
};