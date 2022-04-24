<template>
  <div class="">
    <h1>哈哈哈{{ people.children.name }}</h1>
    <button @click="changeName">按钮</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      people: {
        children: {
          name: "张三",
        },
      },
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeName() {
      this.people.children.name = "李四";
    },
  },
};
</script>
<style lang="scss" scoped></style>
