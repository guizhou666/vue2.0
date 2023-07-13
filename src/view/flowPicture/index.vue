<template>
  <div class='flow-piciture-content'>
    <flowComponents :treeData="treeData"></flowComponents>
  </div>
</template>

<script>
import flowComponents from './flowComponents.vue';
export default {
  components: { flowComponents },
  data() {
    return {
      treeData: [
        {
          nodeName: 'Edge1',
          id: 1,
          childrenList: [
            { deviceName: '设备名称1', productName: '产品名称1' },
            { deviceName: '设备名称2', productName: '产品名称2' },
            { deviceName: '设备名称3', productName: '产品名称3' },
            { deviceName: '设备名称4', productName: '产品名称4' },
            { deviceName: '设备名称4', productName: '产品名称4' },
          ]
        },
        {
          nodeName: 'Edge2',
          id: 5,
          childrenList: [
            { deviceName: '设备名称1', productName: '产品名称1' },
          ]
        },
        {
          nodeName: 'Edge3',
          id: 6,
          childrenList: [
            { deviceName: '设备名称1', productName: '产品名称1' },
          ]
        },
        {
          nodeName: 'Edge4',
          id: 7,
          childrenList: [
            { deviceName: '设备名称1', productName: '产品名称1' },
            { deviceName: '设备名称2', productName: '产品名称1' },
            { deviceName: '设备名称3', productName: '产品名称1' },
            { deviceName: '设备名称4', productName: '产品名称1' },
          ]
        },
        {
          nodeName: 'Edge5',
          id: 11,
          childrenList: [
            { deviceName: '设备名称1', productName: '产品名称1' },
            { deviceName: '设备名称2', productName: '产品名称1' },
          ]
        },
      ],
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

  },
}
</script>
<style lang='scss' scoped>
.flow-piciture-content{
  width: 1500px;
  height: 600px;
  margin: 0 auto;
}
</style>