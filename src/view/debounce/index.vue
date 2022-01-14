<template>
  <div class="content-box">
    <el-input @input="change" v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
import {debounce} from './index'
export default {
  components: {},
  data() {
    return {
      input: "",
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {
  },
  created() {},
  mounted() {},
  methods: { 
    // change:debounce((e) =>{
    //   console.log(e);
    // },500),

    change:function(e){
        console.log(e);
        // const test = debounce(() => {console.log(e)});
        
    }
  },
};
</script>
<style lang="scss" scoped>
.content-box {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid #cccccc;
}
</style>
