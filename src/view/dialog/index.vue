<template>
  <div class="dd">
    <el-button type="primary" @click="showDialog">Primary</el-button>
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
  methods: {
    showDialog() {
      this.$dialog({
        title: "测试",
        width: 1200,
         action: 'add',
        // options:{},
        view: () => import('../line'),
        showFooter: true,
        confirmButtonText: "下发至对应的仿真机",
      }).then((res) => {});
    },
  },
};
</script>
<style lang="scss" scoped></style>
