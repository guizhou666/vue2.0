<template>
  <div class='pagination-container'>
    <div v-if="currentPage != 1" @click="clickPage(currentPage - 1)">&lt;上一页</div>
    <ul>
      <li :class="{ 'active': (item == currentPage) }" v-for="(item, index) in pageList" :key="index"
        @click="clickPage(item)">{{ item }}</li>
    </ul>
    <div @click="clickPage(currentPage+1)">下一页&gt;</div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      pageList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentPage: 1
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
    clickPage(item) {
      this.currentPage = item;
      let num = this.pageList[5];
      if (item > 6) {
        let num2 = item - num;
        for (let index = 0; index < this.pageList.length; index++) {
          this.pageList[index] = this.pageList[index] + num2
        }
      }else{
        this.pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    }
  },
}
</script>
<style lang='scss' scoped>
.pagination-container {
  margin: 100px auto;
  display: flex;
  box-sizing: border-box;
  background-color: #F5F5F6;

  div,
  li {
    border-radius: 6px;
    text-align: center;
    height: 36px;
    line-height: 36px;
    border: none;
    cursor: pointer;
    color: #2f75ee;
    background-color: #fff;

    &:hover {
      background: #2f75ee;
      color: #fff;
    }
  }

  li.active {
    background: #2f75ee;
    color: #fff;
  }

  div {
    width: 80px;
    margin: 0px 10px;
  }

  ul,
  li {
    list-style: none;
  }

  ul {
    display: flex;

    li {
      width: 36px;
      margin: 0 10px;
    }
  }
}
</style>