<template>
  <div class='ant-vx6'>
    <div id="container"></div>
  </div>
</template>

<script>
import { Graph,Shape } from '@antv/x6';
export default {
  components: {},
  data() {
    return {
      data: {
        // 节点
        nodes: [
          {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40,       // Number，必选，节点位置的 x 值
            y: 40,       // Number，必选，节点位置的 y 值
            width: 80,   // Number，可选，节点大小的 width 值
            height: 40,  // Number，可选，节点大小的 height 值
            label: 'hello', // String，节点标签
          },
          {
            id: 'node2', // String，节点的唯一标识
            x: 160,      // Number，必选，节点位置的 x 值
            y: 180,      // Number，必选，节点位置的 y 值
            width: 80,   // Number，可选，节点大小的 width 值
            height: 40,  // Number，可选，节点大小的 height 值
            label: 'world', // String，节点标签
          },
        ],
        // 边
        edges: [
          {
            source: 'node1', // String，必须，起始节点 id
            target: 'node2', // String，必须，目标节点 id
            attrs: {
              line: {
                stroke: 'orange',
              },
            }
          },
        ],
      },
      graph: null,
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const graph = new Graph({
        panning: true,
        container: document.getElementById('container'),
        width: 800,
        height: 600,
        background: {
          color: '#fffbe6', // 设置画布背景颜色
        },
        grid: {
          size: 10,      // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      });
      this.graph = graph;
      // this.graph.zoom();
      // this.graph.centerContent(); // 内容居中

      const rect = new Shape.Rect({
        id: 'node1',
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        angle: 30,
        // label: 'rect',
        attrs: {
          body: {
            fill: 'blue',
          },
          label: {
            text: this.render(),
            fill: 'white',
          },
        },
        zIndex: 2,
      })
      const circle = new Shape.Circle({
        id: 'node2',
        x: 280,
        y: 200,
        width: 60,
        height: 60,
        label: 'circle',
        zIndex: 2,
      })

      const edge = new Shape.Edge({
        id: 'edge1',
        source: rect,
        target: circle,
        zIndex: 1,
      })

      // 注册自定义节点
      // Graph.registerNode('custom-rect', {
      //   inherit: 'rect', // 继承自 Shape.Rect
      //   width: 300, // 默认宽度
      //   height: 40, // 默认高度
      //   attrs: {
      //     body: {
      //       rx: 10, // 圆角矩形
      //       ry: 10,
      //       strokeWidth: 1,
      //       fill: '#5755a1',
      //       stroke: '#5755a1',
      //     },
      //     label: {
      //       fill: '#fff',
      //       fontSize: 18,
      //       refX: 10, // x 轴偏移，类似 css 中的 margin-left
      //       textAnchor: 'left', // 左对齐
      //     }
      //   },
      // })
      // graph.addNode({
      //   x: 100,
      //   y: 60,
      //   shape: 'custom-rect',
      //   label: 'My Custom Rect', // label 继承于基类的自定义选项
      // });
      // 创建一个图形节点
      graph.addNode(rect)
      graph.addNode(circle)
      graph.addEdge(edge)
      
      // this.graph.fromJSON(this.data)
    },
    render(){
      const h = this.$createElement
     h('div',
        {
          style: {
            color: 'green'
          }
        }, [
        h('p', 'some messages...some messages...'),
        h('p', 'some messages...some messages...')
      ])
      // return h('span', { class: 'operation__title' },[]);
    }
  },
}
</script>
<style lang='scss' scoped>
.ant-vx6{
  width: 100%;
  height: 100%;
  #container{
    margin: 0 auto;
  }
}
</style>