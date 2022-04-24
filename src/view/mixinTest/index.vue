<template>
  <div class="content-box">hh</div>
</template>

<script>
import { testMixin } from "./testmixin.mixin";
export default {
  components: {},
  mixins: [testMixin],
  data() {
    return {
      message: "lkj",
    };
  },

  computed: {},
  //监控data中的数据变化
  watch: {},
  mounted() {
    console.log('0.2')
    console.log(this.message);
    this.test();
  },
//   mounted() {},
  methods: {
       test(){
            console.log('test components')
        }
  },
};
</script>
<style lang="scss" scoped></style>
