
<template>
    <div class="Hbox" :style="{ width: (Mapwidth - 230) + 'px' }" id="Hbox">
        <div class="mapBOX" id="GDcontainer">
        </div>
    </div>
</template>


<script>
var map;
export default {
    data() {
        return {
            Mapwidth: document.documentElement.clientWidth,
            mapList: [],
        };
    },
    mounted() {
        this.initAMap()
        this.init()
    },
    created() {
    },
    watch: {
        Mapwidth: (val) => {
            var newWidth = document.getElementById("Hbox")
            if (newWidth) {
                newWidth.style.width = Number(val) + 'px'
            }
        },
    },
    methods: {
        initAMap() {
            // 百度地图API功能
            map = new BMap.Map("GDcontainer", { minZoom: 0, maxZoom: 13 }); // 创建Map实例（minZoom、maxZoom：设置地图最小、最大缩放级别）
            map.centerAndZoom(new BMap.Point(107.505583, 26.317692), 10); // 设置中心点
            //先清除所有内容
            map.clearOverlays();
            map.enableScrollWheelZoom();     //开启鼠标滚轮缩放
        },
        init() {
            this.mapList = [
                { lng: '107.505583', lat: '-26.317692', listType: 1 },
                { lng: '107.51775', lat: '-26.365743', listType: 1 },
                { lng: '107.524074', lat: '-26.399921', listType: 1 },
                { lng: '107.549371', lat: '-26.452722', listType: 4 },
                { lng: '107.563168', lat: '-26.488426', listType: 5 },
                { lng: '107.570642', lat: '-26.50705', listType: 4 },
            ]
            let newdatas = []
            this.mapList.forEach((item, index) => {
                if (item.lat != null) {
                    //---------------------------------标点开始---------------------------------
                    let point = new BMap.Point(item.lng, 0 - (item.lat))
                    let myIcon = new BMap.Icon(`require('../../assets/svg/point.svg')`, new BMap.Size(23, 27));
                    myIcon.setImageSize(new BMap.Size(23, 28));
                    let label = new BMap.Label(`添加文本`, {       // 创建文本标注
                        position: point,                          // 设置标注的地理位置
                        offset: new BMap.Size(-6, -11)           // 设置标注的偏移量
                    })
                    let marker = new BMap.Marker(point, { icon: myIcon })
                    map.addOverlay(marker)
                    map.addOverlay(label)
                    label.setStyle({                              // 设置label的样式
                        color: '#000',
                        fontSize: '10px',
                        border: '0px solid #1E90FF',
                        background: 'transparent',
                    })
                    //---------------------------------标点结束---------------------------------
                    //---------------------------------连线开始---------------------------------
                    newdatas.push(new BMap.Point(item.lng, 0 - (item.lat)),)
                    //---------------------------------连线结束---------------------------------
                }
            })
            var polyline = new BMap.Polyline(newdatas, { strokeColor: "#F59A23", strokeWeight: 2, strokeOpacity: 1 });
            map.addOverlay(polyline);

        }
    },
}
</script>
<style lang='scss' scoped>
.mapBOX {
    height: 100%;
    width: 100%;
}
</style>
