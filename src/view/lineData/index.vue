<template>
  <div class='flow-piciture-content'>
    <flowComponents :treeData="treeData" :deviceList="deviceList"></flowComponents>
  </div>
</template>

<script>
import flowComponents from './picture.vue';
export default {
  components: { flowComponents },
  data() {
    return {
      treeData: [
        {
          nodeName: 'Edge1',
          id: 1,
          status:1,
          childrenList: [
            { deviceName: '设备名称1', productName: '产品名称1', status: 1 },
            { deviceName: '设备名称2', productName: '产品名称2', status: 1 },
            { deviceName: '设备名称3', productName: '产品名称3', status: 0 },
            { deviceName: '设备名称4', productName: '产品名称4', status: 0 },
            // { deviceName: '设备名称4', productName: '产品名称4' },
            // { deviceName: '设备名称4', productName: '产品名称4' },
            // { deviceName: '设备名称4', productName: '产品名称4' },
            // { deviceName: '设备名称4', productName: '产品名称4' },
            // { deviceName: '设备名称4', productName: '产品名称4' },
            // { deviceName: '设备名称4', productName: '产品名称4' },
          ]
        },
        {
          nodeName: 'Edge2',
          id: 4,
          status: 1,
          childrenList: [
            { deviceName: '设备名称5', productName: '产品名称1' },
            { deviceName: '设备名称6', productName: '产品名称1', status: 1 },
            { deviceName: '设备名称7', productName: '产品名称1' },
          ]
        },
        // {
        //   nodeName: 'Edge3',
        //   id: 7,
        //   status: 0,
        //   childrenList: [
        //     { deviceName: '设备名称8', productName: '产品名称1' },
        //     { deviceName: '设备名称9', productName: '产品名称1' },
        //     { deviceName: '设备名称10', productName: '产品名称1' },
        //     { deviceName: '设备名称11', productName: '产品名称1' },
        //     { deviceName: '设备名称12', productName: '产品名称1' },
        //     // { deviceName: '设备名称1', productName: '产品名称1' },
        //   ]
        // },
        // {
        //   nodeName: 'Edge4',
        //   id: 7,
        //   childrenList: [
        //     { deviceName: '设备名称1', productName: '产品名称1' },
        //     { deviceName: '设备名称2', productName: '产品名称1' },
        //     { deviceName: '设备名称3', productName: '产品名称1' },
        //     { deviceName: '设备名称4', productName: '产品名称1' },
        //   ]
        // },
        // {
        //   nodeName: 'Edge5',
        //   id: 11,
        //   childrenList: [
        //     { deviceName: '设备名称1', productName: '产品名称1' },
        //     { deviceName: '设备名称2', productName: '产品名称1' },
        //   ]
        // },
      ],
      deviceList: [
        { deviceName: '设备名称1', productName: '产品名称1', status: 1 },
        { deviceName: '设备名称2', productName: '产品名称2', status: 1 },
        { deviceName: '设备名称3', productName: '产品名称3', status: 0 },
        { deviceName: '设备名称4', productName: '产品名称4', status: 1 },
        { deviceName: '设备名称4', productName: '产品名称4', status: 1 },
        { deviceName: '设备名称4', productName: '产品名称4', status: 1 },
        { deviceName: '设备名称4', productName: '产品名称4', status: 1 },
      ]
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
.flow-piciture-content {
  width: 1700px;
  height: 95%;
  margin: 0 auto;
  background-color: #1e3246;
}
</style>