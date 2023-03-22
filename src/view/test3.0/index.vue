<template>
  <div class="content">
    <van-checkbox v-model="checked" @change="change(arguments,'haha')">复选框</van-checkbox>
    <div class="box" @click="clickBox()">
        <div class="buttom">
            <button @click.prevent.self="clickButtom()">点击</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        checked:true
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    console.log(this.$store)
  },
  mounted() {},
  methods: {
    change(e,str){
        console.log(e[0],str)
    },
    clickBox(){
        console.log('点击了外圈')
    },
    clickButtom(){
        console.log('点击了内圈')
    }
  },
};
</script>
<style lang="scss" scoped>
    .content{
        width: 100%;
        .box{
            width: 300px;
            height: 400px;
            background-color: aquamarine;
            position: relative;
            .buttom{
                height: 80px;
                width: 100%;
                background-color: bisque;
                position: absolute;
                bottom: 10px;
                left: 0;
            }
        }
    }
</style>
