<template>
  <div class='test-five'>
    <div class="box">测试哈哈哈哈</div>
    <svg class="svg-picture" ref="svgPicture">
      <line x1="0" y1="0" x2="200" y2="50" stroke="#02ca7f" />
      <line x1="0" y1="0" x2="200" y2="50" stroke="red" />
    </svg>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>
.test-five {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #cccccc;
  position: relative;
  background-color: blanchedalmond;

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid #cccccc;
    cursor: pointer;
    z-index: 999;
    position: relative;
    background-color: aquamarine;
  }
  .svg-picture{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>