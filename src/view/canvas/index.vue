<template>
  <div class='canvas-container'>
    <div class="btn-container">
      <el-button type="success" @click="drawLine">画直线</el-button>
      <el-button type="success" @click="drawBrokenLine">画折线</el-button>
    </div>
    <!-- 1、创建 canvas 元素 -->
    <canvas ref="canvas" id="c" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      domCanvas: null,
      cxt: null
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {

  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.domCanvas = this.$refs.canvas;
      this.cxt = this.domCanvas.getContext("2d");
    },
    drawLine() {
      // 4、绘制图形
      this.cxt.moveTo(20, 100) // 起点坐标 (x, y)
      this.cxt.lineTo(200, 100) // 终点坐标 (x, y)
      this.cxt.stroke() // 将起点和终点连接起来
      // 4、绘制图形
      this.cxt.moveTo(20, 120.5) // 起点坐标 (x, y)
      this.cxt.lineTo(200, 120.5) // 终点坐标 (x, y)
      this.cxt.stroke() // 将起点和终点连接起来
      this.drawLine2();
    },
    drawLine2() {
      this.cxt.beginPath();
      const cxt = this.$refs.canvas.getContext("2d");
      console.log(cxt)
      cxt.lineWidth = 5;
      cxt.strokeStyle = 'pink';
      cxt.lineCap = 'round';
      cxt.moveTo(100, 100) // 起点坐标 (x, y)
      cxt.lineTo(200, 200) // 终点坐标 (x, y)
      cxt.stroke() // 将起点和终点连接起来
    },
    drawBrokenLine() {
      this.cxt.moveTo(50, 200)
      this.cxt.lineTo(100, 50)
      this.cxt.lineTo(200, 200)
      this.cxt.lineTo(250, 50)
      this.cxt.stroke()
    }
  },
}
</script>
<style lang='scss' scoped>
.canvas-container {
  margin-top: 100px;

  .btn-container {
    width: 200px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
  }
}
</style>