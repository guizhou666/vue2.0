<template>
  <div class="bar-content-box" ref="barContent">
    <div class="switch">
      <div class="title" v-if="typeof $data._barConfig.title == 'string'">
        {{ $data._barConfig.title }}
      </div>
      <div class="select" v-if="typeof $data._barConfig.title == 'object'">
        <el-select v-model="$data._barConfig.titleValue" placeholder="请选择" @change="changeTitle" size="mini">
          <el-option
            v-for="item in $data._barConfig.title"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="switch-content">
        <el-radio-group v-model="radio" size="mini" @change="change">
          <el-radio-button
            :label="item.id"
            v-for="(item, index) in $data._barConfig.switchTable"
            :key="index"
            >{{ item.name }}</el-radio-button
          >
        </el-radio-group>
      </div>
    </div>
    <div :id="'bar' + $data._barConfig.id" style="min-height: 300px"></div>
  </div>
</template>

<script>
import { EleResize } from "@/util/esresise.js";
export default {
  components: {},
  data() {
    return {
      radio: "1",
      _barConfig: {},
    };
  },
  props: {
    barConfig: {},
  },
  computed: {},
  //监控data中的数据变化
  watch: {
    barConfig: {
      deep: true, //深度监听设置为 true
      handler: function (newV, oldV) {
        console.log(newV);
        this.$data._barConfig = newV;
        this.initEcharts();
      },
    },
  },
  created() {
    this.$data._barConfig = this.barConfig;
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("bar" + this.$data._barConfig.id)
      );
      let resizeDiv = document.getElementById("bar" + this.$data._barConfig.id);
      var option = {
        xAxis: {
          type: "category",
          data: this.$data._barConfig.xAxis,
        },
        color: this.$data._barConfig.color,
        legend: this.$data._barConfig.legend,
        grid: [
          {
            left: "6%",
            bottom: "10%",
            top: "10%",
            right: "0%",
          },
        ],
        yAxis: {
          type: "value",
        },
        series: this.$data._barConfig.series,
      };
      myChart.setOption(option);
      let listeners = function () {
        myChart.resize();
      };
      EleResize.on(resizeDiv, listeners);
    },
    change(e) {
      this.$emit("change", e);
    },
    // 改变标题
    changeTitle(e){
        this.$emit('changeTitle',e)
    }
  },
};
</script>
<style lang="scss" scoped>
.bar-content-box {
  width: 100%;
  //   margin: 100px;
  .switch {
    display: flex;
    justify-content: space-between;
    // position: relative;
    // top: 20px;
  }
}
</style>
