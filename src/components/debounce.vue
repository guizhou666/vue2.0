<template>
  <div class="mian-content">
    <div class="content" ref="content" @mousemove="test">
      {{ count }}
    </div>
    <div>
        {{list}} ======={{msg}}
    </div>
    <button @click="change"> 改变</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      count: 0,
      timer:''
    };
  },
  props:{
      list:{},
      msg:{}
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {
    //   this.$refs.content.onmousemove = this.getUserAction();
  },
  methods: {
      change(){
        //   this.msg = 'gui'
          this.$emit("update:msg", 'gui')
          this.list.push(5)
      },
    getUserAction() {
      this.count++;
    },
    test(){
        const test = this.debounce(this.getUserAction,1000);
        test();
    },
    debounce(func, wait) {   
      return (() => {
           clearTimeout(this.timer);
        this.timer = setTimeout(func,wait);
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.mian-content {
  .content {
    width: 500px;
    height: 200px;
    background-color: #cccccc;
    margin: 0 auto;
  }
}
</style>
