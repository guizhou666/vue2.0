<template>
  <div class='flow-picture' ref="flowPicture">
    <div class="left-content" ref="leftContent">
      <div class="one-box" :style="{ top: (newTreeData[0].childrenList.length > 6) ? '52px' : '' }">
        <img class="icon-img" src="../../assets/images/groupFour.png" alt="">
        <p>云端框架</p>
      </div>
      <div class="short-line line" :style="{ top: (newTreeData[0].childrenList.length > 6) ? '348px' : '' }"></div>
    </div>
    <div class="centre-content">
      <div class="centre-item" v-for="(item, index) in newTreeData" :key="index" :style="{ 'top': top(item, index) }">
        <!-- <p>边缘节点名称：{{ item.nodeName }} {{ item.top }}</p> -->
        <img class="icon-img" src="../../assets/images/groupTwo.png" alt="">
        <p>{{ item.nodeName }}</p>
        <div class="left-line line"></div>
        <div class="right-line line"></div>
        <div class="left-bottom-line line" v-if="index !== newTreeData.length - 1"
          :style="{ 'height': height(item, index) }"></div>
      </div>
    </div>
    <div class="right-content" ref="rightContent"
      :class="{ 'special-right-content': (newTreeData[0].childrenList.length > 6 && newTreeData.length === 1) }">
      <div v-for="(item, index) in newTreeData" :key="index">
        <div class="big-content" v-for="(v, index2) in item.childrenList" :key="index2">
          <div class="right-item" @click="clickDevice(index, index2)">
            <span>设备名称:{{ v.deviceName }}</span><br>
            <span>所属产品:{{ v.productName }}</span>
            <div class="left-line line"></div>
            <div v-if="index2 != (item.childrenList.length - 1)" class="vertical-line"></div>
          </div>
        </div>
      </div>
    </div>
    <img class="jiantou" src="../../assets/images/左箭头.png" alt="" v-if="showImg" ref="moveImg">
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      newTreeData: [],
      childrenList: [],
      paddingTop: '',
      timer: null,
      showImg: false,
      timerout: null,
      timerout2: null,
      timerout3: null,
      timerout4: null,
      timerout5: null,
    };
  },
  props: {
    treeData: {}
  },
  computed: {},
  //监控data中的数据变化
  watch: {
    treeData(val) {
      this.newTreeData = val;
    }
  },
  created() {
    this.newTreeData = this.treeData;
  },
  mounted() {
    this.newTreeData.forEach(item => {
      this.childrenList.push(...item.childrenList)
    });
    // 如果子节点过少则上下居中
    const flowPictureRef = this.$refs.flowPicture;
    const height = flowPictureRef.offsetHeight;
    const childrenLength = this.childrenList.length;
    console.log(childrenLength)
    if (height > childrenLength * 100) {
      console.log(childrenLength)
      this.paddingTop = Number(height / 2 - childrenLength * 100 / 2);
      this.$refs.rightContent.style.paddingTop = this.paddingTop + 'px';
    }
  },
  methods: {
    top(item, index) {
      // 首位节点top特殊处理
      if (index == 0) {
        // if (item.childrenList.length < 4) {
        //   console.log(Number(item.childrenList.length / 2 * 100 - 40 + this.paddingTop))
        //   this.$set(item, 'top', Number(item.childrenList.length / 2 * 100 - 40 + this.paddingTop));
        //   return item.childrenList.length / 2 * 100 - 40 + this.paddingTop + 'px'
        // }// 第三层子数据超过三个父级top固定
        // else {
        //   this.$set(item, 'dreamTop', Number(item.childrenList.length / 2 * 100 - 40 + this.paddingTop))
        //   this.$set(item, 'top', Number(100 - 40 + this.paddingTop))
        //   return 100 - 40 + this.paddingTop + 'px'
        // }
        if (this.newTreeData.length > 1) {
          if (item.childrenList.length === 1) {
            this.$set(item, 'top', Number(item.childrenList.length / 2 * 100 - 40 + this.paddingTop));
            return item.childrenList.length / 2 * 100 - 40 + this.paddingTop + 'px'
          }
          this.$set(item, 'dreamTop', Number(item.childrenList.length / 2 * 100 - 40 + this.paddingTop))
          this.$set(item, 'top', Number(100 - 40 + this.paddingTop))
          return 100 - 40 + this.paddingTop + 'px'
        } else {
          console.log('-----1')
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
    clickDevice(index, index2) {
      this.showImg = false;
      this.showImg = true;
      clearTimeout(this.timerout);
      clearTimeout(this.timerout2);
      clearTimeout(this.timerout3);
      clearTimeout(this.timerout4);
      clearTimeout(this.timerout5);
      clearInterval(this.timer);
      this.$nextTick(() => {
        const moveDom = this.$refs.moveImg;
        moveDom.style.left = '765px';
        moveDom.style.transform = 'rotate(0deg)';
        if (index == 0) {
          moveDom.style.top = (this.newTreeData[index].id + index2 - 1) * 100 + 25 + this.paddingTop + 'px'
        } else {
          moveDom.style.top = (this.newTreeData[index].id + index2) * 100 + 25 + this.paddingTop + 'px'
        }
        this.timerout = setTimeout(() => {
          moveDom.style.left = '725px';
        }, 500);

        this.timerout2 = setTimeout(() => {
          moveDom.style.left = '676px';
          if (this.newTreeData[index].top != moveDom.offsetTop - 15.5) {
            if (this.newTreeData[index].top < moveDom.offsetTop) {
              moveDom.style.transform = 'rotate(90deg)';
            } else {
              moveDom.style.transform = 'rotate(-90deg)';
            }
          }
          this.timer = setInterval(() => {
            if (this.treeData[index].top < (moveDom.offsetTop - 40)) {
              moveDom.style.top = moveDom.offsetTop - 50 + 'px';
              console.log(this.treeData[index].top)
              console.log(moveDom.offsetTop)
            } else if (this.treeData[index].top == moveDom.offsetTop - 15.5) {
              moveDom.style.left = '626px';
              moveDom.style.transform = 'rotate(0deg)';
              this.timerout3 = setTimeout(() => {
                moveDom.style.left = '326px';
                this.timerout4 = setTimeout(() => {
                  moveDom.style.left = '214px';
                  const scrollTop = this.$refs.flowPicture.scrollTop;
                  moveDom.style.top = 307 + scrollTop + 'px';
                  this.timerout5 = setTimeout(() => {
                    this.clickDevice(index, index2);
                  }, 500);
                }, 500);
              }, 500);
              clearInterval(this.timer);
            }
            else if (this.treeData[index].top > (moveDom.offsetTop - 40)) {
              moveDom.style.top = moveDom.offsetTop + 50 + 'px';
            }
            else {
            }
          }, 500);
        }, 1000);
      })
    },
  },
}
</script>
<style lang='scss' scoped>
.flow-picture {
  width: 100%;
  height: 100%;
  // margin: 20px auto;
  border: 1px solid #cccccc;
  overflow: auto;
  display: flex;
  position: relative;

  .left-content {
    width: 300px;
    height: 100%;
    // border-right: 2px solid #44aaf0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    // position: fixed;

    .one-box {
      height: 150px;
      position: relative;
      top: 34px;
      // border: 1px solid;
      // display: flex;
      // align-items: center;
      // justify-content: center;

      p {
        // writing-mode: vertical-lr;
        // /* 将字体竖直 */
        // text-orientation: upright;
        // /* 确保文字正确方向 */
        // // transform: rotate(-180deg);
        // /* 旋转文字，使其朝上 */
        // text-align: center;
        // /* 水平居中 */
        // line-height: 1;
        // /* 垂直居中 */
        // letter-spacing: 10px;
        margin-top: 5px;
      }
    }

    .short-line {
      position: absolute;
      left: calc(50% + 40px);
      width: calc(50% - 40px);
    }
  }

  .centre-content {
    width: 400px;
    height: 100%;
    position: relative;
    // margin-left: 300px;

    .centre-item {
      width: 200px;
      // height: 80px;
      height: 150px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // border: 1px solid;
      position: absolute;
      margin-left: 100px;
      position: absolute;

      .left-line {
        // width: 100px;
        width: 168px;
        position: absolute;
        left: -101px;
        top: 38px;
      }

      .left-bottom-line {
        width: 2px;
        position: absolute;
        left: -101px;
        background-color: #44aaf0;
        top: 40px;
        height: 100px;
      }

      .right-line {
        // width: 100px;
        width: 168px;
        position: absolute;
        right: -101px;
        top: 40px;
      }
    }
  }

  .right-content {
    .big-content {
      height: 100px;
      padding: 10px 0px;
    }

    .right-item {
      width: 300px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid;
      position: absolute;
      margin-left: 100px;
      position: relative;
      cursor: pointer;

      .left-line {
        width: 100px;
        position: absolute;
        left: -101px;
        top: 39px;
      }

      .vertical-line {
        width: 2px;
        height: 100px;
        border-left: 2px solid #44aaf0;
        position: absolute;
        left: -101px;
        top: 39px;
      }
    }
  }

  .special-right-content {
    overflow: auto;
    width: calc(100% - 700px);
  }

  .line {
    height: 2px;
    border-bottom: 2px solid;
    color: #44aaf0;
  }

  .jiantou {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    // left: -50px;
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
}
</style>