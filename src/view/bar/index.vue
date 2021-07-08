<template>
  <div class="echarts">
    <div class="bar-content">
      <div class="iot-bar iot-bar-one">
        <iot-bar :barConfig="barConfig" :key="1" @change="change"></iot-bar>
      </div>
      <div class="iot-bar iot-bar-two">
        <iot-bar :barConfig="barConfig2" :key="2" @changeTitle="changeTitle"></iot-bar>
      </div>
      <div class="iot-bar iot-bar-three">
        <iot-bar :barConfig="barConfig3" :key="3"></iot-bar>
      </div>
    </div>
  </div>
</template>

<script>
import iotBar from "@/components/iot-bar";
export default {
  components: {
    iotBar,
  },
  data() {
    return {
      barConfig: {
        id: 1,
        title: "浏览量趋势",
        switchTable: [],
        xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        series: [
          {
            name: "",
            type: "bar",
            data: [120, 200, 150, 80, 70, 110, 130],
            itemStyle: {
              normal: {
                color: "#3ba1ff",
              },
            },
          },
        ],
      },
      barConfig2: {
        id: 2,
        title: [{value:'1',name:'日活跃用户量趋势图'},{value:'2',name:'月活跃用户量趋势图'}],
        titleValue:'',
        color:['#2ec7c9','#b6a2de','#3ba1ff'],
        legend:{
            show:true,
        },
        switchTable: [],
        xAxis: ["10月", "11月", "12月", "01月", "02月", "03月", "04月"],
        series: [
          {
            name: "购电意向",
            type: "bar",
            data: [20, 200, 50, 80, 70, 110, 30],
            
          },
          {
            name: "零售套餐",
            type: "bar",
            data: [120, 30, 10, 80, 70, 10, 30],
           
          },
          {
            name: "售电意向",
            type: "bar",
            data: [120, 100, 140, 80, 70, 140, 130],
            
          },
        ],
      },
      barConfig3: {
        id: 3,
        title: "洽谈量趋势",
        color:['#2ec7c9','#b6a2de','#3ba1ff'],
        legend:{
            show:true,
        },
        switchTable: [],
        xAxis: ["10月", "11月", "12月", "01月", "02月", "03月", "04月"],
        series: [
          {
            name: "购电意向",
            type: "bar",
            stack:'111',//堆叠
            data: [20, 200, 50, 80, 70, 110, 30],
            
          },
          {
            name: "零售套餐",
            type: "bar",
            stack:'111',//堆叠
            data: [120, 30, 10, 80, 70, 10, 30],
           
          },
          {
            name: "售电意向",
            type: "bar",
            stack:'111',//堆叠
            data: [120, 100, 140, 80, 70, 140, 130],
            
          },
        ],
      },
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    this.barConfig.switchTable = [
      { id: "1", name: "购电意向" },
      { id: "2", name: "售电意向" },
      { id: "3", name: "零售套餐" },
      { id: "4", name: "用电需求" },
    ];
  },
  mounted() {},
  methods: {
    change(e) {
      console.log(e);
      switch (e) {
        case "1":
          this.barConfig.series[0].data = [120, 200, 150, 80, 70, 110, 130];
          break;
        case "2":
          this.barConfig.series[0].data = [20, 100, 10, 180, 170, 10, 130];
          break;
        case "3":
          this.barConfig.series[0].data = [220, 200, 150, 80, 80, 110, 90];
          break;
        case "4":
          this.barConfig.series[0].data = [160, 200, 120, 80, 70, 310, 130];
          break;

        default:
          break;
      }
    },
    changeTitle(e){
        console.log(e);
    }
  },
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  .bar-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    // height: 100%;
    .iot-bar {
      width: 50%;
      padding: 20px 2%;
    }
  }
}
</style>
