<template>
  <div style="width: 100%;height: 100vh;position: relative;">
    <el-button type="primary" size="default" @click="deleteLine">删除连线</el-button>

    <div style="width: 100%;height: 100%">
      <div class="map" id="map"></div>
    </div>

    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-title" class="popup-title"></div>
      <div id="popup-content" class="popup-content"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import { Cluster, OSM } from 'ol/source';
import Overlay from 'ol/Overlay';
import {
  Tile as TileLayer,
  Vector as VectorLayer,
} from 'ol/layer';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ'
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import GeoJSON from 'ol/format/GeoJSON';
import {
  Fill,
  Stroke,
  Icon,
  Style,
  Text,
  Circle
} from 'ol/style'
import { asString } from 'ol/color'
import { FullScreen, defaults as defaultControls, ScaleLine } from 'ol/control';
export default {
  data() {
    return {
      visible: false,
      showDialog: false,
      mapObj: null,
      mapDom: null,
      mapPointList: [],
      clusterList: [],
      pointLayerSource: null,
      pointLayer: null,
      Geofencing: { // 地理围栏数据
        "type": "FeatureCollection",
        "features": []
      },
      currentDeviceId: '', // 当前点击的设备ID
      // Geofencing,
      // pointList: [], // 坐标点数据
      // attributeList: [], // 属性列表
      grey: require('@/assets/monitoring/circle1.png'),
      green: require('@/assets/monitoring/circle2.png'),
      orange: require('@/assets/monitoring/circle3.png'),
      red: require('@/assets/monitoring/circle4.png'),
      vector_line: null,
      feature: null,
      popup: null,
      list: [
        {
          Type: "客厅",
          lat: 25.763332248147847,
          lon: 118.72016345937209,
          stationName: "598客厅1",
          id: "kt-1",
          status: "工作中",
        },
        {
          Type: "客厅",
          lat: 25.885031687253477,
          lon: 119.03663979738225,
          stationName: "598客厅2",
          id: "kt-2",
          status: "工作中",
        },
        {
          Type: "客厅",
          lat: 25.925370164900034,
          lon: 118.92771748456889,
          stationName: "598客厅3",
          id: "kt-3",
          status: "工作中",
        },
        {
          Type: "客厅",
          lat: 25.14121010407155,
          lon: 119.2422051573077,
          stationName: "598客厅4",
          id: "kt-4",
          status: "工作中",
        },
        {
          Type: "客厅",
          lat: 25.391146158648255,
          lon: 119.30266730860016,
          stationName: "598客厅5",
          id: "kt-5",
          status: "未使用",
        },
        {
          Type: "客厅",
          lat: 25.168627870360282,
          lon: 118.63668719446594,
          stationName: "598客厅6",
          id: "kt-6",
          status: "未使用",
        },
        {
          Type: "客厅",
          lat: 26.0348090803394,
          lon: 118.58949773692949,
          stationName: "598客厅7",
          id: "kt-7",
          status: "故障",
          statusType: "温度异常",
          overlayItem:null
        },
      ]
    };
  },
  computed: {
    // ...mapState({
    //   pointList: state => state.dataSource.pointList, //点位数据
    //   attributeList: state => state.dataSource.attributeList //设备属性数据
    // })
  },
  watch: {
    'pointList'() {
      setTimeout(() => {
        // this.addPoint()
      }, 1000)
    }
  },
  created() {
    // this.getAreas()
    // this.getDeviceList()
  },
  mounted() {
    this.initMap()
  },
  methods: {
    // 初始化地图
    initMap() {
      //声明连线数组
      var coordinatesPolygon = new Array();
      //声明连线要展示的图层 (图层的添加顺序会用心覆盖效果)
      // var vector_line;



      const source = new VectorSource();
      const count = 20;
      const pointList = [
        [118.72016345937209, 25.763332248147847],
        [119.03663979738225, 25.885031687253477],
        [118.92771748456889, 25.925370164900034],
        [119.2422051573077, 25.14121010407155],
        [119.30266730860016, 25.391146158648255],
        [118.63668719446594, 25.168627870360282],
        [118.58949773692949, 26.0348090803394],
        [119.00772028688684, 25.098725475269408],
        [119.05625794406936, 25.63741246916329],
        [118.64097863382855, 25.422980738514596],
        [118.37042957191787, 26.066098425832337],
        [119.17315108878192, 25.789235903591088],
        [119.0073254406291, 25.414438530799984],
        [118.39197472852575, 25.46573939018655],
        [118.80410438128803, 25.787458265976102],
        [118.76897444015982, 25.56954965476317],
        [118.98120523152527, 25.712787686370195],
        [119.27462725093856, 25.297207770912664],
        [118.5645601687627, 25.47110392303864],
        [118.57009825509411, 25.801075653911965]
      ]
      for (let i = 0; i < pointList.length; i++) {
        const coordinates = [pointList[i][0], pointList[i][1]];
        var feature = new Feature(new Point(coordinates));

        source.addFeature(feature);
      }
      // coordinatesPolygon.push([pointList[14][0], pointList[14][1]], [pointList[1][0], pointList[1][1]])
      // coordinatesPolygon.push([pointList[2][0], pointList[2][1]], [pointList[1][0], pointList[1][1]])
      // coordinatesPolygon.push([pointList[16][0], pointList[16][1]], [pointList[1][0], pointList[1][1]])
      // 聚合
      var cluster = new Cluster({
        source: source,
        distance: 100
      })

      // 创建图层
      var layer = new VectorLayer({
        source: cluster,
        style: function (feature) {
          var size = feature.get('features').length;
          var style = new Style({
            image: new Circle({
              radius: 20,
              stroke: new Stroke({
                color: 'white'
              }),
              fill: new Fill({
                color: 'blue'
              })
            }),
            text: new Text({
              text: size.toString(),
              fill: new Fill({
                color: 'white'
              })
            })
          })
          return style;
        }
      });

      // 获取地图容器
      this.mapDom = document.getElementById('map')
      // 初始化地图配置
      this.mapObj = new Map({
        // layers: [layer],
        target: 'map', // 地图容器
        view: new View({
          center: [119, 26], // 地图中心点
          zoom: 10, // 缩放
          projection: 'EPSG:4326', // 坐标系
        })
      })
      // 添加一个使用离线瓦片地图的层
      const offlineMapLayer = new TileLayer({
        source: new XYZ({
          // url: 'http://192.168.10.89/courseware/tiles/{x}/{y}/{z}.jpg' // 设置本地离线瓦片所在路径
          url: 'http://192.168.10.89/courseware/tiles/10/124/5.jpg' // 设置本地离线瓦片所在路径
        })
      })
      // 将图层添加到地图
      // this.mapObj.addLayer(offlineMapLayer)
      // this.toline(coordinatesPolygon);
      // this.mapObj.addLayer(layer)
      //单击获取地图坐标
      // this.mapObj.on('singleclick', (evt) => {
      //   console.log(evt.coordinate);
      //   this.clickMap(evt);
      // });

      // 点击地图展示弹窗
      this.popup = new Overlay({
        element: document.getElementById('popup'),
        positioning: 'bottom-center',       //相对于其位置属性的实际位置
        stopEvent: false,                   //事件冒泡
      });
      this.mapObj.addOverlay(this.popup);
      this.mapAddOverlay()
    },
    // 删除连线
    deleteLine() {
      // var drwaSource = new VectorSource({
      //   wrapX: false
      // })
      const vectorSource = this.mapObj.getLayers().getArray()[0].getSource();
      console.log(vectorSource)
      // vectorSource.addFeature(this.feature);
      // 删除线要素
      vectorSource.removeFeature(this.feature);
    },
    toline(coordinatesPolygon) {
      var source = new VectorSource()
      this.vector_line = new VectorLayer({
        source: source,
        style: new Style({
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.1)'
          }),
          stroke: new Stroke({//地图连线的样式
            color: 'green',//颜色
            lineJoin: 'bevel',
            width: 5//宽度
          }),
          image: new Circle({
            radius: 10,
            fill: new Fill({
              color: '#ffcc33'
            })
          })
        })
      })
      //多边形此处注意一定要是[坐标数组]
      console.log("画线的坐标集合为=" + coordinatesPolygon);
      var plygon = new Polygon([coordinatesPolygon])
      //多边形要素类
      this.feature = new Feature({
        geometry: plygon,
      });

      source.addFeature(this.feature);
      this.mapObj.addLayer(this.vector_line);
    },
    //点击事件
    clickMap(evt) {
      var feature = this.mapObj.forEachFeatureAtPixel(evt.pixel, function (feature, layerVetor) { return feature; });
      if (feature) {
        console.log('聚合')
        if (feature.getProperties().features) { //聚合情况下
          console.log(feature.getProperties().features)
          if (feature.getProperties().features.length == 1) {
            let element = this.popup.getElement();       // 获取弹窗的DOM元素
            var coordinate = evt.coordinate;		//当前位置信息
            console.log(coordinate)
            this.popup.setPosition(coordinate);
            console.log(feature.getProperties())		//设置当前位置
            // featuerInfo = feature.getProperties().features[0].N.geometry.A;
            // featuerInfo = feature.getProperties().features[0].N.attribute;
            element.innerHTML = '<code>' + coordinate[0] + '</code>';	//弹窗内容

            // addFeatrueInfo(featuerInfo); //在popup中加载当前要素的具体信息
            if (this.popup.getPosition() == undefined) {
              this.popup.setPosition(coordinate);
            }
          } else { //有多个要素                                                   
            console.log('多个聚合')
            this.popup.setPosition(undefined);
          }
        } else {
          this.popup.setPosition(undefined);
        }
      } else {
        console.log('非聚合')
        this.popup.setPosition(undefined);
      }
    },
    // 新增自定义图层
    mapAddOverlay() {
      // 创建div的函数
      function createDiv({ id, status, statusType }, index) {
        // 创建一个div元素
        var elementDiv = document.createElement("div");
        elementDiv.className = "my-map-overlay";
        elementDiv.innerHTML = `
                  <div class='my-map-overlay-tag ${formatInfoClass(status)}'>
                    <span class='my-map-overlay-status'>${status === "故障" ? statusType : status
          }${id}</span>
                  </div>
                  `;
        // 设置div元素的cid属性
        elementDiv.setAttribute("myid", id);
        return elementDiv;
      }
      // 根据状态 加载对应的类名
      function formatInfoClass(status) {
        var className = "";
        switch (status) {
          case "工作中":
            className = "green";
            break;
          case "未使用":
            className = "gray";
            break;
          case "故障":
            className = "red";
            break;
        }
        return className;
      }
      // 循环创建循环覆盖层
      this.list.forEach((item, index) => {
        // 新建一个覆盖层
        var newMarker = new Overlay({
          // 设置位置为当前节点的坐标
          position: [item.lon, item.lat],
          // 设置覆盖层与位置之间的匹配方式
          positioning: "bottom-left",
          // 偏移量  默认值是 [0, 0] 正值分别向右和向下偏移
          // offset: [-50, 20],
          // 覆盖层元素
          element: createDiv(item, index),
          // 事件传播到地图视点的时候是否应该停止
          stopEvent: false,
        });
        this.mapObj.addOverlay(newMarker);
      });

      // 自定义div列表
      const domlist = document.getElementsByClassName("my-map-overlay");
      this.mapOverlayOver(domlist);
    },
    /**
     * 监听地图自定义图层的单击/移入/移出事件
     * @function mapOverlayOver
     * @param {Array} domlist  元素列表
     */
    mapOverlayOver(domlist) {
      console.log(domlist)
      Array.from(domlist).forEach((item) => {
        // 鼠标点击事件
        item.addEventListener("click", (e) => {
          console.log(e)
          const ev = e || window.event;
          const target = ev.path.filter(
            ({ className }) => className === "my-map-overlay"
          )[0];
          // // 获取在div上设置的myid
          const myid = target.getAttribute("myid");
          this.setMapZoomCenter(myid);
        });

        // 鼠标移入事件 创建浮窗
        item.addEventListener("mouseenter", (e) => {
          const ev = e || window.event;
          const target = ev.target || ev.srcElement;

          // 获取在div上设置的myid
          const myid = target.getAttribute("myid");
          // 在设备列表筛选符合条件的对象赋值
          const overlayItem = this.list.filter(({ id }) => id === myid);
          this.overlayItem = overlayItem[0];

          // getBoundingClientRect用于获取元素相对于视窗的位置集合
          const { top, left } = target.getBoundingClientRect();
          this.addTootipDom(top + 30, left + 100);
        });

        // 鼠标移出事件 删除浮窗
        item.addEventListener("mouseleave", (e) => {
          this.removeTootipDom();
          // mapOverlayInfo.setAttribute("style", "display: none");
        });
      });
    },
    addTootipDom(top, left) {
      // const mapOverlayInfo = document.getElementById("map-overlay-info");
      // if (mapOverlayInfo) {
      //   mapOverlayInfo.parentNode.removeChild(mapOverlayInfo);
      // }
      const parentDom = document.getElementById("map");
      const childDom = document.createElement("div");
      childDom.setAttribute("id", "map-overlay-info");
      childDom.innerHTML = `
      <div class="info-shape"></div>
        <p>名称：${this.overlayItem.stationName}</p>
        <p>状态：${this.overlayItem.status}</p>
        <p>故障名称：${this.overlayItem.statusType}</p>
      `;
      childDom.setAttribute(
        "style",
        `top: ${top}px; left: ${left}px; display: block`
      );
      parentDom.appendChild(childDom);
    },
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}

::v-deep .appmain__wrap--body {
  padding: 0 !important;
}

.popup {
  display: none;
  width: 300px;
  max-height: 650px;
  position: absolute;
  right: 20px;
  top: 20px;
}

.popup .title {
  padding: 10px 15px;
  background-color: #409eff;
  color: #fff;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: space-between;
}

.close {
  cursor: pointer;
}

.item {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}

.content {
  max-height: 700px;
  overflow: auto;
  padding: 0 15px 15px 15px;
  background-color: #fff;
}
</style>
