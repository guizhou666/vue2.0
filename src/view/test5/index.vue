<template>
  <div class="demo">
    <li :id="'myVideo' + index" v-for="(item, index) in list" :key="index">
      {{ item.name }}
    </li>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        { id: 0, name: "张三" },
        { id: 1, name: "李四" },
        { id: 2, name: "王五" },
        { id: 3, name: "赵六" },
        { id: 4, name: "马奇" },
        { id: 5, name: "小六" },
      ],
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {
    this.printDom();
  },
  methods: {
    printDom() {
      for (let index = 0; index < this.list.length; index++) {
        var videoDom = document.getElementById("myVideo" + index);
        console.log(videoDom)
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.demo {
  width: 400px;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    border: 1px solid #333333;
    width: 100px;
  }
}
</style>
