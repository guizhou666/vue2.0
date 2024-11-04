<template>
  <div class="map-data">
    <div id="map"></div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import Point from "ol/geom/Point";
import { Fill, Stroke, Icon, Style, Text } from "ol/style";
import { defaults as defaultControls, ScaleLine } from "ol/control";
export default {
  components: {},
  data() {
    return {
      mapObj: null,
      mapDom: null,
      mapPointList: [],
      pointLayerSource: null,
      pointLayer: null,
      layer: null,
      clusterFeatures: null,
      pointItem: null,
      bezierLayer: null,
      bezierSource: null,
      bezierFeatures: [],
      pointList: [],
      dialogVisible:false
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {
    this.initMap([{ lon: 97.85336, lat: 33.71632 }]);
  },
  methods: {
    // 初始化地图
    initMap(data) {
      // 获取地图容器
      this.mapDom = document.getElementById("map");

      // 初始化地图配置
      this.mapObj = new Map({
        target: this.mapDom, // 地图容器
        view: new View({
          center: [parseFloat(data[0].lon), parseFloat(data[0].lat)], // 地图中心点
          // center: [97.85336, 33.71632], // 地图中心点
          zoom: 4, // 缩放
          maxZoom: 11,
          minZoom: 4,
          projection: "EPSG:4326", // 坐标系
        }),
      });
      this.mapObj.addControl(new ScaleLine());
      // 添加一个使用离线瓦片地图的层
      const offlineMapLayer = new TileLayer({
        source: new XYZ({
          // url: 'http://192.168.10.89' + '/courseware/tiles/10/124/5.jpg'
          // url: 'http://192.168.20.21:8083/tiles/{z}/{x}/{y}.png' // 设置本地离线瓦片所在路径
          // url: location.host+'/courseware/road/{z}/{x}/{y}.png' // 设置本地离线瓦片所在路径
          url: "http://192.168.10.170:30808" + "/courseware/satellite/{z}/{x}/{y}.png", // 设置本地离线瓦片所在路径
        }),
      });
      // // 将图层添加到地图
      this.mapObj.addLayer(offlineMapLayer);
      // 添加一个使用离线瓦片地图的层
      const offlineMapLayer2 = new TileLayer({
        source: new XYZ({
          // url: 'http://192.168.10.89' + '/courseware/tiles/10/124/5.jpg'
          // url: 'http://192.168.20.21:8084/tiles/{z}/{x}/{y}.png' // 设置本地离线瓦片所在路径
          // url: location.host+'/courseware/satellite/{z}/{x}/{y}.png' // 设置本地离线瓦片所在路径
          url: "http://192.168.10.170:30808" + "/courseware/road/{z}/{x}/{y}.png", // 设置本地离线瓦片所在路径
        }),
      });
      // // 将图层添加到地图
      this.mapObj.addLayer(offlineMapLayer2);
    },
  },
};
</script>
<style lang="scss" scoped>
.map-data,
#map {
  width: 100%;
  height: 100%;
}
</style>
