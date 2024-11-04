<template>
  <div class="table-content">
    <div>
      <thead>哈哈哈哈</thead>
      <header>
        <h3>开工报告</h3>
        <p>(基础土建)</p>
      </header>
      <div class="table-item">
        <table>
          <tr>
            <td>项目名称</td>
            <td></td>
            <td>项目编号</td>
            <td>系统带出</td>
          </tr>
          <tr>
            <td>设计单位</td>
            <td>系统带出</td>
            <td>监理单位</td>
            <td>系统带出</td>
          </tr>
          <tr>
            <td>施工单位</td>
            <td>系统带出</td>
            <td>施工地点</td>
            <td>系统带出</td>
          </tr>
          <tr>
            <td>计划开工日期</td>
            <td>系统带出</td>
            <td>计划完工日期</td>
            <td>系统带出</td>
          </tr>
        </table>
        <div class="project-ready_case">
          <div class="left">
            工&nbsp;&nbsp;&nbsp;程&nbsp;&nbsp;&nbsp;准&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;&nbsp;情&nbsp;&nbsp;&nbsp;况
          </div>
          <div class="right">
            <h5>建设单位、施工单位、监理单位项目负责人：</h5>
            <span>建设单位项目负责人：</span>
            <span>xxxx</span>
            <span>监理单位项目负责人：</span>
            <span>xxxx</span>
            <span>施工单位项目负责人</span>
            <span>xxxx</span>
            <h5>工程准备情况或存在的主要问题：</h5>
            <span>该站点已完成选址、征地及相关协调、地勘、设计会审工作，设计会审后图纸已下放，按施工组织设计完成准备工作，主要材料设备已进场，并完成到货检查，具备开工条件。</span>
            <el-form>
              <el-form-item label="提前或推迟开工原因：" class="is-required">
                <el-input maxlength="500" style="width: 70%" class="project-textarea1" type="textarea" placeholder="请输入内容" resize="none">
                </el-input>
              </el-form-item>
              <el-form-item label="其他：" class="is-required">
                <el-input style="width: 70%" maxlength="500" class="project-textarea1" type="textarea" placeholder="请输入内容" resize="none">
                </el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="case-two">
          <span style="margin-left: 20px">
            本工程拟于<span>x年x月x日</span>正式开工，特此报告。
          </span>
          <span style="text-align: right; margin-right: 20px; margin: 10px 0px">施工单位(签章): <span>人员名字</span></span>
          <div class="people">
            <span style="text-align: left">主送：<span>xxx</span></span>
            <span style="text-align: right; margin-right: 20px">抄送：<span>xxx</span></span>
          </div>
        </div>
        <div class="bottom-item">
          <div class="bottom-left first">
            <span style="text-align: left">监理审核意见(签字)： <span>xxxx</span></span>
            <span style="text-align: right">(盖章)</span>
            <span style="text-align: right">x年x月x日</span>
          </div>
          <div class="bottom-left">
            <span style="text-align: left">监理审核意见(签字)： <span>xxxx</span></span>
            <span style="text-align: right">(盖章)</span>
            <span style="text-align: right">x年x月x日</span>
          </div>
        </div>
        <span class="tip">本表一式三份，审批后建设单位留一份，送监理一份，施工单位一份。</span>
      </div>
    </div>
    <div style="width: 70%; margin: 0 auto">
      <h5 style="float: left">开工站点清单：</h5>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="date" label="站点名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="项目编码" width="180">
        </el-table-column>
        <el-table-column prop="address">
          <template slot="header">
            <span><span style="color: red;margin-right:5px">*</span>计划开工时间</span>
          </template>
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.time" type="date" placeholder="选择日期">
            </el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="计划完工时间">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.time" type="date" placeholder="选择日期">
            </el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="备注">
          <template slot-scope="scope">
            <el-input v-model="scope.row.remark" placeholder="请输入内容"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
      ">
      <el-button class="btns-fr-btn" style="width: 100px" type="primary" size="mini" @click="confirm">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    console.log("--------");
  },
  mounted() {},
  methods: {
  confirm(){
    console.log('--------')
    if(1==1){
      if(1==1){
        if(1==1){
          return;
        };
        console.log(11)
      };
      console.log(222)
    }
  }
  },
};
</script>
<style lang="scss" scoped>
.table-content {
  width: 80%;
  height: 100%;
  border: 1px solid #333333;
  margin: 0 auto;

  & > div {
    text-align: center;

    h3 {
      letter-spacing: 40px;
      text-indent: 40px;
    }

    .table-item {
      table {
        border-collapse: collapse; //添加边框线合并
        width: 70%;
        margin: 0 auto;

        tr {
          td:nth-of-type(odd) {
            width: 120px;
          }

          td:nth-of-type(even) {
          }
        }
      }

      table,
      td,
      th {
        border: 1px solid #333333;
      }

      .project-ready_case {
        width: 70%;
        margin: 0 auto;
        height: 350px;
        border: 1px solid #333333;
        border-top: none;
        display: flex;

        .left {
          width: 70px;
          border-right: 1px solid #333333;
          height: 100%;
          display: flex;
          justify-content: center;
          /* 水平居中 */
          align-items: center;
          /* 垂直居中 */
          writing-mode: vertical-rl;
          /* 垂直方向从右到左 */
          text-align: center;
          /* 文本在垂直方向居中 */
        }

        .right {
          text-align: left;
          padding: 10px;
          line-height: 21px;

          h5 {
            margin-top: 0px;
            margin-bottom: 0px;
          }

          span {
            display: block;
            font-size: 14px;
          }
        }
      }

      .case-two {
        height: 100px;
        width: 70%;
        margin: 0 auto;
        border: 1px solid #333333;
        border-top: none;
        padding: 10px;

        & > span {
          display: block;
        }

        span {
          font-size: 14px;
          text-align: left;
        }

        .people {
          display: flex;

          span {
            width: 50%;
          }
        }
      }

      .bottom-item {
        display: flex;
        border: 1px solid #333333;
        border-top: none;
        height: 100px;
        width: 70%;
        margin: 0 auto;
        // padding: 10px;

        & > div {
          width: 50%;

          & > span {
            font-size: 14px;
            display: block;
            margin: 10px;
          }
        }

        .first {
          border-right: 1px solid #333333;
        }
      }

      .tip {
        font-size: 14px;
        margin-top: 5px;
        display: block;
        width: 70%;
        margin: 10px auto;
        text-align: left;
      }
    }
  }
}
</style>
