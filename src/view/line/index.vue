<template>
  <div class="line-content">
    <div class="line-li">
      <ufast-line :lineConfig="lineConfig"></ufast-line>
    </div>
  </div>
</template>

<script>
import ufastLine from "@/components/ufast-line";
export default {
  components: {
    ufastLine,
  },
  data() {
    return {
      lineConfig: {
        id: "1",
        switchTable: [
          { id: "1", name: "全部" },
          { id: "2", name: "火电" },
          { id: "3", name: "水电" },
          { id: "4", name: "风电" },
          { id: "5", name: "太阳能" },
          { id: "6", name: "核能" },
          { id: "7", name: "其他" },
        ],
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        xAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        color: ["#5470c6", "#5470c6", "#5470c6", "#5470c6", "#5470c6"],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "搜索5555引擎",
            type: "line",
            stack: "总555量",
            data: [820, 935552, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "搜索555引擎",
            type: "line",
            stack: "总555量",
            data: [820, 932, 905551, 934, 1290, 1330, 1320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.line-content {
  .line-li {
    width: 40%;
    margin: 20px;
  }
}
</style>
