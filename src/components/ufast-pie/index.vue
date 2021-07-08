<template>
  <div class="pie-content">
    <div class="switch">
      <div class="title" v-if=" typeof $data._pieConfig.customTitle == 'string'">
        {{ $data._pieConfig.customTitle }}
      </div>
      <div class="select" v-if="typeof $data._pieConfig.customTitle == 'object'">
        <el-select
          v-model="$data._pieConfig.titleValue"
          placeholder="请选择"
          @change="changeTitle"
          size="mini"
        >
          <el-option
            v-for="item in $data._pieConfig.customTitle"
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
            v-for="(item, index) in $data._pieConfig.switchTable"
            :key="index"
            >{{ item.name }}</el-radio-button
          >
        </el-radio-group>
      </div>
    </div>
    <div class="canvas">
      <div :id="'pie' + $data._pieConfig.id" style="min-height: 300px"></div>
      <ul class="data">
        <li>25%</li>
        <li>25%</li>
        <li>25%</li>
        <li>25%</li>
      </ul>
      <ul class="data">
        <li>25%</li>
        <li>25%</li>
        <li>25%</li>
        <li>25%</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { EleResize } from "@/util/esresise.js";
export default {
  components: {},
  data() {
    return {
      radio: "1",
      _pieConfig: {},
    };
  },
  props: {
    pieConfig: {},
  },
  computed: {},
  //监控data中的数据变化
  watch: {
    pieConfig: {
      deep: true, //深度监听设置为 true
      handler: function (newV, oldV) {
        this.$data._pieConfig = newV;
        this.initEcharts();
      },
    },
  },
  created() {
    this.$data._pieConfig = this.pieConfig;

    // 有渐变色 且双层环
    if(this.$data._pieConfig.startColor) {
        this.$data._pieConfig.series[0]?.data.map((item, index) => {
      item.itemStyle = {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: this.$data._pieConfig.startColor[index], // 0% 处的颜色
            },
            {
              offset: 1,
              color: this.$data._pieConfig.endColor[index], // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      };
    });
    this.$data._pieConfig.series[1]?.data.map((item, index) => {
      item.itemStyle = {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: this.$data._pieConfig.borderStartColor[index], // 0% 处的颜色
              },
              {
                offset: 1,
                color: this.$data._pieConfig.borderEndColor[index], // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
        },
      };
    });
    }
    
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("pie" + this.$data._pieConfig.id)
      );
      let resizeDiv = document.getElementById("pie" + this.$data._pieConfig.id);
      var option = {
        legend: this.$data._pieConfig.legend,
        // grid: [
        //   {
        //     left: "6%",
        //     bottom: "10%",
        //     top: "10%",
        //     right: "0%",
        //   },
        // ],
        tooltip:this.$data._pieConfig.tooltip,
        title:this.$data._pieConfig.title,
        series: this.$data._pieConfig.series,
      };
      myChart.setOption(option);
      let listeners = function () {
        myChart.resize();
      };
      EleResize.on(resizeDiv, listeners);
    },
    chageTitle(e) {
      this.$emit("changeTitle", e);
    },
    change(e) {
      this.$emit("change", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-content {
  .switch {
    display: flex;
    justify-content: space-between;
  }
  .canvas {
    position: relative;
    ul,
    li {
      list-style-type: none;
    }
    ul{
        position: absolute;
        right: 13%;
        top: 16%;
    }
    li{
        width: 50px;
        margin-bottom: 25px;
    }
    .data:nth-of-type(2){
        right: 5%;
    }
  }
}
</style>
