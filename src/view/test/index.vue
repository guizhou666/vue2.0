<template>
  <div class="box">
    dsjlkgl
    <txt :lists="lists" name="yang"></txt>
  </div>
</template>

<script>
import txt from "@/components/txt";
export default {
  components: { txt },
  data() {
    return {
      lists: ["连雨不知春去", "一晴方觉夏深",'lkjsdddddddddddddddddddddddd','jsdlgjlsdjgksdjglsdkjglsdjgls','sjdlgklsdgjlskgsss'],
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
}
</style>
