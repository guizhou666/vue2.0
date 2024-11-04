<template>
  <div class="">
    <div v-for="(item, index) in list" :key="index">
      <el-upload
        :key="index"
        action="#"
        :on-success="handleSuccessReplace(item.id)"
        :show-file-list="false"
        :file-list="item.fileList"
      >
        替换
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.list = [{id:1,fileList:[]},{id:2,fileList:[]},{id:3,fileList:[]}]
    }, 1000);
  },
  methods: {
    handleSuccessReplace(id){
      console.log(id)
    }
  },
};
</script>
<style lang="scss" scoped></style>
