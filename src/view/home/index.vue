<template>
  <div class="content-box">
    <div class="left">
      <p>
        <router-link to="/micorder/about">子应用</router-link>
      </p>
      <p>
        <router-link to="/product">商品</router-link>
      </p>
      <p>
        <router-link to="/shopping">购买</router-link>
      </p>
    </div>
    <div class="content">
      <header></header>
       <router-view />
      <div id="order-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
.content-box {
  height: 100%;
  display: flex;
  .left {
    width: 200px;
    height: 100%;
    background-color: aquamarine;
  }
  .content {
    flex: 1;
    background-color: rgb(171, 214, 214);
    header {
      height: 100px;
      background-color: yellowgreen;
    }
  }
}
</style>
