<template>
  <div class="dd">
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      test: "hahah",
      options: {
        title: { text: "在Vue中使用echarts" },
        tooltip: {
          show: false,
        },
        series: [
          {
            radius: ["55%", "65%"],
            center: ["40%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: () => {
                  return this.test;
                },
                textStyle: {
                  fontSize: 40,
                  color: "#cccccc",
                },
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            name: "民警训练总量",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
            ],
          },
          // 边框的设置
          {
            radius: ["50%", "55%"],
            center: ["40%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            animation: false,
            tooltip: {
              show: false,
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
            ],
          },
        ],
      },
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
      this.test = 'jlsdgjkdl'
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.options);
    },
  },
};
</script>
<style lang="scss" scoped></style>
