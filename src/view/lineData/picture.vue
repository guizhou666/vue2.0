<template>
  <div class='flow-picture' ref="flowPicture">
    <div class="left-left">
      <div class="big-content" v-for="(v, index) in newDeviceList" :key="index">
        <div class="right-item">
          <span>设备名称:{{ v.deviceName }}</span>
          <span>所属产品:{{ v.productName }}</span>
          <span>所属产品:{{ v.productName }}</span>
        </div>
      </div>
    </div>
    <div class="left-content" ref="leftContent">
      <div class="one-box card-size">
        <!-- <img class="icon-img" src="../../assets/images/groupFour.png" alt=""> -->
        <!-- <p></p> -->
        边缘节点名称ABC
      </div>
      <div class="one-box card-size cloud-frame">
        云端框架
      </div>
    </div>
    <div class="centre-content">
      <div class="centre-item card-size" v-for="(item, index) in newTreeData" :key="index"
        :style="{ 'top': top(item, index) }">
        {{ item.nodeName }} {{ item.top }}
        <!-- <p>边缘节点名称：{{ item.nodeName }} {{ item.top }}</p> -->
        <!-- <img class="icon-img" src="../../assets/images/groupTwo.png" alt=""> -->
        <!-- <p>{{ item.nodeName }}</p> -->
      </div>
    </div>
    <div class="right-content" ref="rightContent"
     >
      <div v-for="(item, index) in newTreeData" :key="index">
        <div class="big-content" v-for="(v, index2) in item.childrenList" :key="index2">
          <div class="right-item">
            <span>设备名称:{{ v.deviceName }}</span>
            <span>所属产品:{{ v.productName }}</span>
            <span>所属产品:{{ v.productName }}</span>
          </div>
        </div>
      </div>
    </div>
    <svg class="svg-picture" ref="svgPicture">
      <line x1="650" y1="160" x2="650" y2="428" stroke="#02ca7f" />
      <template v-for="(item, index) in newTreeData">
        <polyline :points="'750,480 800,480 800,' + (item.top + 50) + ' 900,' + (item.top + 50)"
            :class="item.status ? 'line-green' : 'line-red'" fill="none" />
          <template v-for="(v, index2) in item.childrenList">
            <polyline
              :points="'1100,' + (item.top + 50) + ' 1150,' + (item.top + 50) + ' 1150,' + (60 + (v.id - 1) * 120) + ' 1300,' + (60 + (v.id - 1) * 120)"
              :class="v.status ? 'line-green' : 'line-red'" fill="none" />
          </template>
      </template>
      <template v-for="(item, index) in newDeviceList">
        <polyline :class="item.status ? 'line-green' : 'line-red'"
          :points="'550,480 500,480 500,' + (60 + index * 120) + ' 300,' + (60 + index * 120)" stroke-width="2"
          fill="none" />
      </template>
    </svg>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      newTreeData: [],
      newDeviceList: [],
      childrenList: [],
      paddingTop: '',
      edgeToedgList: []
    };
  },
  props: {
    treeData: {},
    deviceList: {},
  },
  computed: {},
  //监控data中的数据变化
  watch: {
    treeData(val) {
      this.newTreeData = val;
    },
    deviceList(val) {
      const arr1 = val.filter(item => item.status == 0)
      const arr2 = val.filter(item => item.status == 1)
      const arr = [...arr2, ...arr1]
      this.newDeviceList = arr;
    }
  },
  created() {
    this.newTreeData = this.treeData;
    const arr1 = this.deviceList.filter(item => item.status == 0)
    const arr2 = this.deviceList.filter(item => item.status == 1)
    const arr = [...arr2, ...arr1]
    this.newDeviceList = arr;
  },
  mounted() {
    this.newTreeData.forEach((item, index) => {
      item.childrenList.forEach((v, index2) => {
        if (index === 0) {
          this.$set(v, 'id', item.id + index2)
        } else {
          this.$set(v, 'id', item.id + index2 + 1)
        }
      })
      this.childrenList.push(...item.childrenList)
    });
    const flowPictureRef = this.$refs.flowPicture;
    const scrollHeight = flowPictureRef.scrollHeight;
    this.$refs.svgPicture.style.height = scrollHeight;
  },
  methods: {
    top(item, index) {
      // 首位节点top特殊处理
      if (index == 0) {
        if (this.newTreeData.length > 1) {
          if (item.childrenList.length === 1) {
            this.$set(item, 'top', Number(item.childrenList.length / 2 * 100 - 40 + this.paddingTop));
            return item.childrenList.length / 2 * 100 - 40 + this.paddingTop + 'px'
          }
          this.$set(item, 'dreamTop', Number(item.childrenList.length / 2 * 100 - 40 + this.paddingTop))
          this.$set(item, 'top', Number(100 - 40 + this.paddingTop))
          return 100 - 40 + this.paddingTop + 'px'
        } else {
          const newLength = (item.childrenList.length > 7) ? 7 : item.childrenList.length;
          console.log(newLength)
          this.$set(item, 'top', Number(newLength / 2 * 100 - 40 + this.paddingTop));
          return newLength / 2 * 100 - 40 + this.paddingTop + 'px'
        }
      } else if (index == this.newTreeData.length - 1 && item.childrenList.length > 3) {
        this.$set(item, 'dreamTop', Number(item.id * 100 + 10 + this.paddingTop))
        this.$set(item, 'top', Number(this.childrenList.length * 100 - 140))
        return this.childrenList.length * 100 - 140 + 'px'
      }// 中间节点top正常
      else {
        if (item.childrenList.length === 1) {
          this.$set(item, 'top', Number(item.id * 100 + 10 + this.paddingTop))
          return item.id * 100 + 10 + this.paddingTop + 'px'
        } else {
          this.$set(item, 'top', Number(item.id * 100 + (item.childrenList.length / 2) * 100 - 40 + this.paddingTop))
          return item.id * 100 + (item.childrenList.length / 2) * 100 - 40 + this.paddingTop + 'px'
        }
      }
    },
    height(item, index) {
      item.height = this.newTreeData[index + 1].top - item.top;
      return this.newTreeData[index + 1].top - item.top + 'px';
    },

  },
}
</script>
<style lang='scss' scoped>
.flow-picture {
  color: #cccccc;
  width: 100%;
  height: 100%;
  // margin: 20px auto;
  border: 1px solid #cccccc;
  overflow: auto;
  display: flex;
  position: relative;

  .card-size {
    width: 200px;
    height: 100px;
    line-height: 100px;
    border-radius: 5px;
    background-color: #224166;
    border: 1px solid #3e6aae;
  }

  .left-left {
    width: 500px;
    height: 100%;
  }

  .left-content {
    width: 300px;
    height: 100%;
    // border-right: 2px solid #44aaf0;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: sticky;
    top: 0;
    // position: fixed;

    .one-box {
      background-color: #3085b1;
      position: relative;
      top: 34px;
      // p {
      //   margin-top: 5px;
      // }
    }

    .cloud-frame {
      position: absolute;
      top: 60px;
    }
  }

  .centre-content {
    width: 400px;
    height: 100%;
    position: relative;
    // margin-left: 300px;

    .centre-item {
      margin-left: 100px;
      position: absolute;
    }
  }

  .right-content,
  .left-left {
    .big-content {
      height: 120px;
      padding: 10px 0px;
    }

    .right-item {
      width: 200px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid;
      position: absolute;
      margin-left: 100px;
      position: relative;
      border-radius: 5px;
      background-color: #224166;
      border: 1px solid #3e6aae;

      span {
        display: inline-block;
        width: 100%;
        text-align: center;
      }
    }
  }

  .special-right-content {
    overflow: auto;
    width: calc(100% - 700px);
  }

  .icon-img {
    width: 80px;
    height: 80px;
  }

  p {
    margin: 0;
    position: relative;
    bottom: 3px;
  }

  .svg-picture {
    width: 90%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    .line-green {
      stroke: #02ca7f;
      stroke-width:2
    }

    .line-red {
      stroke: #fe0100;
      stroke-width:2
    }
  }
}</style>