<template>
  <div class=''>
    <h5>我是子组件test {{ tableData }}</h5>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {

    };
  },
  props: {
    tableData: {}
  },
  watch: {
    tableData:{
      handler(val){
        console.log(val)
      },
      deep:true
    }
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    // console.log(this.tableData)
  },
  mounted() {

  },
  methods: {

  },
}
</script>
<style lang='scss' scoped></style>