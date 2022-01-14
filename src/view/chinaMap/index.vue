<template>
  <div class="">
    <div :id="id" style="width: 500px; height: 500px" />
  </div>
</template>

<script>
import { chinaMap } from "./chinaMap.js";
import { mapInfo } from "./geoCoordMapInfo";
export default {
  components: {},
  data() {
    return {
      id: "map",
      chart: null,
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    this._initEchart();
  },
  mounted() {},
  methods: {
    _initEchart() {
      const params = {
        codeEnum: "WHOLENETWORKMAP_CODE",
      };
      this.$http
        .get("/service/303/api/v1.0/transaction/analysis", { params })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.initChart(res.data.data);
          }
        });
    },
    initChart(res) {
      res.map((el) => {
        el.name = el.regName;
        el.value = el.registeredNumber;
      });
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.$echarts.registerMap("chinaMap", chinaMap);
      this.chart.clear();
      this.chart.setOption(this.getMapChart(res));
    },
    getMapChart(resData) {
      //地图图表配置
      var data = resData;
      //城市设置[经度，纬度]
      var geoCoordMap = mapInfo;
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].registeredNumber),
            });
          }
        }

        return res;
      };
      console.log(convertData(data));
      return {
        // 网格
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
          backgroundColor: "rgba(0,0,0,0)",
          borderWidth: 1,
          borderColor: "#fff",
          shadowBlur: 15,
        },
        tooltip: {
          triggerOn: "click",
          enterable: true,
          formatter: function (params) {
            if (params.data) {
              var strHtml =
                '<div style="width:140px;border-radius:5px;color:#fff;font-size:12px">' +
                '    <div style="height:24px;line-height:20px;width:100%;border-bottom:1px solid #ccc">' +
                '        <span style="margin-left:15px">' +
                params.name +
                "</span>" +
                '        <span style="float:right; margin-right:10px;color:#5396E3;cursor:pointer"   onclick="mapTooltipClick(\'' +
                params.data.bcId +
                "')\">详情></span>" +
                "    </div>" +
                '    <div style="width:100%; ">' +
                '        <div style="height:24px;line-height:24px;padding-left:10px; ">' +
                "            <span>边缘代理数：</span>" +
                '            <span style="float:right;margin-right:10px">' +
                params.data.edgeCount +
                " </span>" +
                "        </div>" +
                '       <div style="height:24px;line-height:24px;padding-left:10px; ">' +
                "            <span>感知终端数：</span>" +
                '            <span style="float:right;margin-right:10px">' +
                params.data.senseCount +
                " </span>" +
                "        </div>" +
                "    </div>" +
                "</div>";
              return strHtml;
            }
          },
        },
        geo: {
          map: "chinaMap",
          label: {
            normal: {
              show: false,
              color: "pink",
            },
            emphasis: {
              show: false,
              color: "pink",
            },
          },
          silent: false,
          roam: true,
          // zoom: this.num,
          itemStyle: {
            normal: {
              borderWidth: 1,
              shadowColor: "rgba(0, 0, 0, 0.2)",
              borderColor: "#fff",
            },
            emphasis: {
              areaColor: "#fff", //鼠标悬浮后身份区域颜色
            },
          },
          // 部分不展示省市名
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              selected: false,
              name: "云南",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              name: "贵州",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              name: "广西",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              name: "广东",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              name: "香港",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              name: "澳门",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              name: "海南",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
            {
              name: "台湾",
              itemStyle: {
                normal: { opacity: 1, areaColor: "#eee" },
              },
              label: { show: false },
            },
          ],
        },
        visualMap: {
          show: true,
          min: 1,
          max: 1000,
          left: "5",
          top: "bottom",
          itemHeight: 10,
          itemGap: 2,
          seriesIndex: [1],
          pieces: [
            {
              min: 5001,
              label: "5000",
              color: "#ffe649",
            },
            {
              max: 5000,
              min: 501,
              label: "500",
              color: "#ffe5b0",
            },
            {
              max: 500,
              min: 101,
              label: "100",
              color: "#ffd7ac",
            },
            {
              max: 100,
              min: 0,
              label: "0",
              color: "#ffa478",
            },
          ],
        },

        series: [
          {
            name: "散点",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: function (val) {
              let value = 3;
              return value;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                // color: "yellow",
                // textShadowColor: "#66a4f5",
                // textBorderColor: "#66a4f5",
                // textShadowOffsetX: 1,
                // textShadowOffsetY: 1,
                // textShadowBlur: 1,
                // shadowColor: 5,
                fontSize: "12px",
                color: "#333",
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                // color: "yellow" || "orange",
                color: function (e) {
                  let resColor = "";
                  resData.map((el) => {
                    if (el.name == e.name) {
                      resColor = el.onlineStatus == "1" ? "#00FF00" : "#FFC000";
                    }
                  });
                  return resColor;
                },
              },
            },
            zlevel: 1,
          },
          {
            type: "map",
            map: "chinaMap",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#ccc",
                },
              },
            },
            roam: true,
            animation: false,
            data: resData,
            itemStyle: {
              normal: {
                areaColor: "#000",
                borderColor: "#a18a3a",
                borderWidth: 1,
              },
              emphasis: {
                show: false,
                areaColor: null,
              },
            },
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped></style>
