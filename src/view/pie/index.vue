<template>
  <div class="pie-content">
    <div class="li-pie">
      <ufast-pie :pieConfig="pieConfig2" @change="change"></ufast-pie>
    </div>
    <div class="li-pie">
      <!-- <ufast-pie :pieConfig="pieConfig2" @change="change"></ufast-pie> -->
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
      pieConfig: {
        width: "350px",
        height: "250px",
        customTitle: "浏览量来源分布",
        switchTable: [
          { id: "1", name: "购电意向" },
          { id: "2", name: "售电意向" },
          { id: "3", name: "零售套餐" },
          { id: "4", name: "用电需求" },
        ],
        startColor: ["#0157be", "#7a18ed", "#00bbce", "#ea865a"],
        endColor: ["#0367d4", "#2743ed", "#00c4a5", "#ea2e41"],
        borderStartColor: ["#05acff", "#ee36ff", "#05fcfb", "#ffa597"],
        borderEndColor: ["#09c1ff", "#8171ff", "#05ffff", "#ff6584"],
        title: {
          text: "购电意向浏览量\n      100人次",
          left: "18%",
          top: "45%",
          textStyle: {
            lineHeight: 20,
            fontWeight: "normal",
            color: "#000",
            fontSize: "15",
          },
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: "25%",
          top: "20%",
          bottom: "20%",
          icon: "circle",
          itemGap: 30, //这个值是用来调图例之间的间距
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
                  return 'xxxx';
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
      pieConfig2: {
        width: "350px",
        height: "250px",
        customTitle: "浏览量来源分布",
        switchTable: [
          { id: "1", name: "购电意向" },
          { id: "2", name: "售电意向" },
          { id: "3", name: "零售套餐" },
          { id: "4", name: "用电需求" },
        ],
        startColor: ["#0157be", "#7a18ed", "#00bbce", "#ea865a"],
        endColor: ["#0367d4", "#2743ed", "#00c4a5", "#ea2e41"],
        borderStartColor: ["#05acff", "#ee36ff", "#05fcfb", "#ffa597"],
        borderEndColor: ["#09c1ff", "#8171ff", "#05ffff", "#ff6584"],
        title: {
          text: "购电意向浏览量\n      100人次",
          left: "18%",
          top: "45%",
          textStyle: {
            lineHeight: 20,
            fontWeight: "normal",
            color: "#000",
            fontSize: "15",
          },
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: "25%",
          top: "20%",
          bottom: "20%",
          icon: "circle",
          itemGap: 30, //这个值是用来调图例之间的间距
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
                  return 'xxxx';
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
  created() {},
  mounted() {},
  methods: {
    change(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-content {
  width: 100%;
  .li-pie {
    margin: 20px;
    width: 40%;
  }
}
</style>
