<template>
    <div class="keep-alive">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div v-for="(item,index) in tableData" :key="index">
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(row) {
            this.$router.push({path:'/keep-alive/detail',query:{name:row.name}})
        }
    },
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎1',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎2',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎3',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-03',
                name: '王小虎4',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }]
        }
    },
    computed:{
        newTable(){
            return this.tableData.splice(1)
        }
    },  
    created() {
        console.log('------create')
        const arr1 = [{name:'yang'},{name:'gui'}]
        const newarr1 = arr1.splice(1);
        console.log(arr1,newarr1)

        const arr2 = [1,2,3,4,5,6]
        const newarr2 = arr2.slice(1)
        console.log(arr2,newarr2)
    },
}
</script>
<style lang="scss" scoped>
.keep-alive {
    width: 50%;
}
</style>