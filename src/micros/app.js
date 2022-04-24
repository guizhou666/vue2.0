/*
 * @Author: karson 
 * @Date: 2021-09-10 16:04:57 
 * @Last Modified by:  karson 
 * @Last Modified time: 2021-09-10 16:04:57 
 */
const apps = [{
    name: 'micro-app-plugin',
    entry: '//localhost:8088',
    container: '#plugin-container',
    activeRule: '#/micplugin'
}]

// 导出的是registerMicroApps的第一个参数，是一个对象数组，其中数组每个字段的作用如下：
// （1）name：微应用的名称，后面改造微应用的时候一定要与这个name对应
// （2）entry：微应用运行的域名加端口，我用的是本地8088端口
// （3）container：启动微应用需要一个dom容器，里面就是这个dom容器的 id
// （4）activeRule：触发启动微应用的规则，当检测到url中含有activeRule的值时，将启动微应用



export default apps