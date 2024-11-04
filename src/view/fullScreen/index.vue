<template>
  <div class="content">
    <p ref="appRef" :style="messageStyle">{{ text }}</p>
    <button @click="changeColor">更换颜色</button>
    <i class="iconfont  el-icon-iot-jixiaoshujuchaxun"></i>
    <div class="big-box">
      <div class="small-box">ddd</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '这里是一段文字',
      color: 'green'
    }
  },
  computed: {
    messageStyle() {
      return {
        '--main-color': this.color
      }
    }
  },
  methods: {
    changeColor() {
      // document.documentElement.style.setProperty('--main-color', 'red');
      // console.log(this.$refs.appRef)
      // this.$refs.appRef.setProperty('--main-color', 'red')
      this.color = 'red'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: var(--main-color);
}

.content {
  width: 100%;
  height: 100%;
  position: relative;

  .big-box {
    width: 300px;
    height: 300px;
    background-color: bisque;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .small-box {
      width: 100px;
      height: 100px;
      background-color: aquamarine;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transform: scale(0.8,0.8);
    }
  }
}
</style>