<template>
  <div class="pie-content">
    <div class="li-pie">
      <ufast-pie :pieConfig="pieConfig" @change="change"></ufast-pie>
    </div>
    <div class="li-pie">
      <ufast-pie :pieConfig="pieConfig2" @change="change"></ufast-pie>
    </div>
  </div>
</template>

<script>
import ufastPie from "@/components/ufast-pie";
export default {
  components: {
    ufastPie,
  },
  data() {
    return {
      basePieConfig: {
        width: "450px",
        height: "350px",
        startColor: ["#0157be", "#7a18ed", "#00bbce", "#ea865a", "#00bbce", "#ea865a"],
        endColor: ["#0367d4", "#2743ed", "#00c4a5", "#ea2e41", "#00bbce", "#ea865a"],
        borderStartColor: [
          "#05acff",
          "#ee36ff",
          "#05fcfb",
          "#ffa597",
          "#00bbce",
          "#ea865a",
        ],
        borderEndColor: [
          "#09c1ff",
          "#8171ff",
          "#05ffff",
          "#ff6584",
          "#00bbce",
          "#ea865a",
        ],
        legend: {
          type: "plain",
          orient: "vertical",
          right: "5%",
          top: "20%",
          bottom: "20%",
          icon: "circle",
          itemGap: 30, //这个值是用来调图例之间的间距
        },
        title: {
          text: "",
          left: "13%",
          top: "45%",
          textStyle: {
            lineHeight: 22,
            fontWeight: "normal",
            color: "#000",
            fontSize: "20",
          },
        },
      },
      pieConfig: {
        customTitle: "浏览量来源分布",
        switchTable: [
          { id: "1", name: "购电意向" },
          { id: "2", name: "售电意向" },
          { id: "3", name: "零售套餐" },
          { id: "4", name: "用电需求" },
        ],
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
                  return "xxxx";
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
            data: [],
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
            data: [],
          },
        ],
      },
      pieConfig2: {
        customTitle: "浏览量来源分布",
        switchTable: [
          { id: "1", name: "购电意向" },
          { id: "2", name: "售电意向" },
          { id: "3", name: "零售套餐" },
          { id: "4", name: "用电需求" },
        ],
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
                  return "xxxx";
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
            data: [],
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
            data: [],
          },
        ],
      },
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    // this.pieConfig = JSON.parse(
    //   JSON.stringify({ ...this.basePieConfig, ...this.pieConfig })
    // );
    this._getData();
  },
  mounted() {},
  methods: {
    change(e) {
      console.log(e);
    },
    _getData() {
      setTimeout(() => {
        const data = [
          { value: 1048, name: "搜索引擎" },
          { value: 735, name: "直接访问" },
          { value: 580, name: "邮件营销" },
        ];
        this.pieConfig.series[0].data = data;
        this.pieConfig.series[1].data = data;
        this.pieConfig = JSON.parse(
          JSON.stringify({ ...this.basePieConfig, ...this.pieConfig })
        );
        this.pieConfig2.series[0].data = data;
        this.pieConfig2.series[1].data = data;
        this.pieConfig2 = JSON.parse(
          JSON.stringify({ ...this.basePieConfig, ...this.pieConfig2 })
        );
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .li-pie {
    margin: 20px;
    width: 40%;
  }
}
</style>
