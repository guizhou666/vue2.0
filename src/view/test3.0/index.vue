<template>
  <div class="content">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名2" width="180"><template slot-scope="scope">
          <div draggable @dragstart="handleDragStart($event, scope.row)" @dragover="handleDragOver($event)"
            @drop="handleDrop($event, scope.row)">{{ scope.row.name }}
          </div>
        </template></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column></el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checked: true,
      user: {
        people: {
          sex: 1
        }
      },
      tableData: [{ name: '张三', address: 'xxxxxxxxxxxxxxxxx' }, { name: '李四', date: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' }, { name: '王五' }]
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    console.log(this.$store)
  },
  mounted() { },
  methods: {
    handleDragStart(event, row) {
      this.draggingRowIndex = this.tableData.indexOf(row)
      console.log(this.draggingRowIndex)
    },
    handleDragOver(event) {
      event.preventDefault()
    },
    handleDrop(event, row) {
      const droppingRowIndex = this.tableData.indexOf(row)
      console.log(droppingRowIndex)
      const draggingRow = this.tableData[this.draggingRowIndex]
      this.tableData.splice(this.draggingRowIndex, 1)
      this.tableData.splice(droppingRowIndex, 0, draggingRow)
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;

  .box {
    width: 300px;
    height: 400px;
    background-color: aquamarine;
    position: relative;

    .buttom {
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
