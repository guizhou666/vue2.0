<template>
  <div class='go-js'>
    <div class="flowChart" id="flowChart"></div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {

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
    // 初始化
    init() {
      var $ = go.GraphObject.make
      var myDiagram = $(go.Diagram, "flowChart")  // 获取节点
      var myModel = $(go.Model)
      const data = '杨'
      myModel.nodeDataArray = [
        { key: `看数据管理${data}` },
        { key: "王权富贵" },
        { key: "涂山红红" }
      ]
       myModel.linkDataArray = [
        { from: "东方月初", to: "涂山红红" }
      ];
      myDiagram.model = myModel
    }

  },
}
</script>
<style lang='scss' scoped>
.flowChart {
  width: 800px;
  height: 400px;
  margin: 10% auto;
  background-color: rgb(236, 236, 236);
}
</style>