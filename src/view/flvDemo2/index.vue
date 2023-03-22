<template>
  <div class="demo-list">
    <flvItem title="1" :videoUrl="videoUrlList[0]" num="1"></flvItem>
    <flvItem title="1" :videoUrl="videoUrlList[1]" num="2"></flvItem>
    <flvItem title="1" :videoUrl="videoUrlList[2]" num="3"></flvItem>
    <flvItem title="1" :videoUrl="videoUrlList[3]" num="4"></flvItem>
    <flvItem title="1" :videoUrl="videoUrlList[4]" num="5"></flvItem>
    <flvItem title="1" :videoUrl="videoUrlList[5]" num="6"></flvItem>
  </div>
</template>

<script>
import flvItem from "./item.vue";
export default {
  components: { flvItem },
  data() {
    return {};
  },
  computed: {
    demo(){
        return demo
    },
    videoUrlList(){
        return videoUrlList
    }
  },
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.demo-list{
    display: flex;
    width:100%;
    flex-wrap: wrap;

}
</style>
