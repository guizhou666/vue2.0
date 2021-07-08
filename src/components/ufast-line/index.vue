<template>
  <div class="line-box">
    <div class="switch">
      <div class="title" v-if="typeof $data._lineConfig.title == 'string'">
        {{ $data._lineConfig.title }}
      </div>
      <div class="select" v-if="typeof $data._lineConfig.title == 'object'">
        <el-select
          v-model="$data._lineConfig.titleValue"
          placeholder="请选择"
          @change="changeTitle"
          size="mini"
        >
          <el-option
            v-for="item in $data._lineConfig.title"
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
            v-for="(item, index) in $data._lineConfig.switchTable"
            :key="index"
            >{{ item.name }}</el-radio-button
          >
        </el-radio-group>
      </div>
    </div>
    <div :id="'line' + $data._lineConfig.id" style="min-height: 300px"></div>
  </div>
</template>

<script>
import { EleResize } from "@/util/esresise.js";
export default {
  components: {},
  data() {
    return {
      radio: "1",
      _lineConfig: {},
    };
  },
   props: {
    lineConfig: {},
  },
  computed: {},
  //监控data中的数据变化
  watch: {
      lineConfig: {
      deep: true, //深度监听设置为 true
      handler: function (newV, oldV) {
        console.log(newV);
        this.$data._lineConfig = newV;
        this.initEcharts();
      },
    },
  },
  created() {
      this.$data._lineConfig = this.lineConfig;
  },
  mounted() {
      this.initEcharts();
  },
  methods: {
       initEcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("line" + this.$data._lineConfig.id)
      );
      let resizeDiv = document.getElementById("line" + this.$data._lineConfig.id);
      var option = {
        xAxis: {
          type: "category",
          data: this.$data._lineConfig.xAxis,
        },
        tooltip: {
        trigger: 'axis'
    },
        color: this.$data._lineConfig.color,
        legend: this.$data._lineConfig.legend,
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
        series: this.$data._lineConfig.series,
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
<style lang="scss" scoped></style>
