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
      pieConfig: {
        id: "1",
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
          left:'18%',
          top:'45%',
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
            radius: ["50%", "60%"],
            center: ["30%", "50%"],
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
            name: "民警训练总量",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
            ],
          },
          // 边框的设置
          {
            radius: ["45%", "51%"],
            center: ["30%", "50%"],
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
              { value: 484, name: "联盟广告" },
            ],
          },
        ],
      },
    pieConfig2:{
        id:'2',
        title: {
        text: '流量洽谈率',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#5d6374',
            fontSize: '26'
        },
        subtext: '30%',
        subtextStyle: {
            fontWeight: 'normal',
            color: '#5d6374',
            fontSize: '20'
        },
    },
    tooltip: {
        formatter: function(params) {
            return params.name + '：' + params.percent + ' %'
        }
    },
    // legend: {
    //     show: true,
    //     itemGap: 12,
    //     data: ['占比', '剩余']
    // },

    series: [{
        name: 'circle',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '66%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 35,
            name: '占比',
            itemStyle: {
                normal: {
                    color: { // 颜色渐变
                        colorStops: [{
                                    offset: 0,
                                    color: '#3a99ef' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#5eb0fb' // 100% 处的颜色
                                }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '剩余',
            value: 65,
            itemStyle: {
                normal: {
                    color: '#e4e7ee'
                }
            }
        }]
    }]
    }
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
    width: 25%;
  }
}
</style>
