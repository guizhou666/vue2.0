<template>
  <div class="ht-select">
    <el-tooltip
      class="item"
      effect="dark"
      :content="selectInputValue"
      placement="top-start"
    >
      <el-select
        v-model="selectInputValue"
        filterable
        placeholder="请选择"
        :popper-append-to-body="false"
      >
        <div class="tool-box">
          <div class="tool-box-item" @click="handleSelectAll">
            <img
              style="vertical-align: text-bottom; margin-right: 6px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEmSURBVHgBvZK/TsMwEMbPUZVkIzxBeQMYmMNSVh6hKBJDMtCFGYbuMOcPEImdiZEuPABDR5jaN3C3JFKSfl/VLlWsSB160sn2+X6+82eL7FmSJC/wT+kxxaSmaR6iKFpg/obYFdYjpdSYcwO3sJAwtyxrBugXgQvbti95COIa62WXk1HEsyyboMoZoGkQBFqOamh5Esfxe1+eQtJT27YfvFeappyPt+KcY//EwK0GEEaQTHF+MPqEeAgOfAU8NIB6Iw4rAfAB3hGSQwwKC6r15vGO4jiO4BkojKD127quh4hNi6LohFzXlQFG/pAvQHy/e0CPGEfwU7hnKKj5c/yqqmZYPBMkFIbhvCzLb1T/73Lk/23EQTVCNxDoeidOnuceWvUMreo1rcuYZB0YL0AAAAAASUVORK5CYII="
            />全选
          </div>
          <div class="tool-box-item" @click="handleEmptyAll">
            <img
              style="vertical-align: text-bottom; margin-right: 6px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgBvVLLDYMwDI1DuHcDOgKb9DMEAnFpF2lPiI9YoR82YYF+RuAOiD5LWEpbLuVQS1ZiO+/FfgkVRTHAnmo07KswDHcS53lOWA7wteSIyFMAPtQPxkTwu1YzbTbQYKarnUjTdOk4ziIIgjpJEk75WusmiqInBzjPS0WfTDjsu657wXbTti0ZY05d123jOK7tczTVhoBZ7imQmppxbI8YBNkVCFj5L3I9vpNtvrSHVreIz5yTYlmWKssy4hsPb0wQwmqvZnDf943UUeOLjv//AEZYJMGC4A0HiXkmtGrrQAL04DerUMH3Eowg1mFlkXsv3cd8F9+N750AAAAASUVORK5CYII="
            />清空
          </div>
          <div class="tool-box-item" @click="handleInvert">
            <img
              style="vertical-align: text-bottom; margin-right: 6px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgBvVLLDYMwDI1DuHcDOgKb9DMEAnFpF2lPiI9YoR82YYF+RuAOiD5LWEpbLuVQS1ZiO+/FfgkVRTHAnmo07KswDHcS53lOWA7wteSIyFMAPtQPxkTwu1YzbTbQYKarnUjTdOk4ziIIgjpJEk75WusmiqInBzjPS0WfTDjsu657wXbTti0ZY05d123jOK7tczTVhoBZ7imQmppxbI8YBNkVCFj5L3I9vpNtvrSHVreIz5yTYlmWKssy4hsPb0wQwmqvZnDf943UUeOLjv//AEZYJMGC4A0HiXkmtGrrQAL04DerUMH3Eowg1mFlkXsv3cd8F9+N750AAAAASUVORK5CYII="
            />反选
          </div>
        </div>
        <el-checkbox-group v-model="checkList" @change="checkboxClick">
          <el-option
            :label="st[option.label]"
            :value="st[option.code]"
            v-for="st in selectData"
            :key="st[option.code]"
          >
            <div style="display: flex; align-items: center">
              <div>
                <el-checkbox
                  :label="st[option.code]"
                  style="display: flex; align-items: center"
                >
                  <div style="margin-left: 6px">
                    {{ st[option.label] }}
                  </div>
                </el-checkbox>
              </div>
            </div>
          </el-option>
        </el-checkbox-group>
      </el-select>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "ht-selectCheckBox", //多选下拉处理
  props: {
    selectData: {
      type: Array,
    },
    value: {
    },
    option: {
      type: Object,
      default: {
        label: "label",
        code: "code",
      },
    },
  },
  data() {
    return { workGroupCode: "", checkList: [], selectInputValue: "" };
  },
  watch: {
    value: {
      handler(newVal) {
        if (!!newVal && this.selectData.length != 0) {
          console.log('111111111111111')
          this.checkList = newVal && newVal.split(',');
          this.handleFilterSelect();
        }
      },
      deep: true,
    },
    selectData: {
      handler(newVal) {
        if (newVal.length != 0 && !!this.value) {
          console.log('22222222222',this.value)
          this.checkList = this.value.split(',');
          this.handleFilterSelect();
        } else {
          this.handleSelectAll();
        }
      },
      deep: true,
    },
  },
  methods: {
    handleFilterSelect() {
      let t = this
      let checkAll = this.selectData.filter((item) =>
        this.checkList.includes(item[this.option.code])
      );
      console.log(this.checkList,'==================')
      let arr = checkAll.map(item => item[t.option.code]);
      let names = checkAll.map(item => item[t.option.label]);
      this.selectInputValue = names.join();
      console.log(arr,'================')
      console.log(arr.join(),'-----------------')
      // this.$emit("input", arr.join());
      // this.$emit("updateAssignProcessName", t.selectInputValue);
    },
    checkboxClick(e) {
      this.checkList = e;
      this.handleFilterSelect();
    },
    //全选
    handleSelectAll() {
      let arr = this.selectData.map((item) => item[this.option.code]);
      let names = this.selectData.map((item) => item[this.option.label]);
      this.selectInputValue = names.join();
      this.checkList = arr;
      this.$emit("input", arr.join());
      this.$emit("updateAssignProcessName", this.selectInputValue);
    },
    //反选
    handleInvert() {
      let invertArr = this.selectData.filter(
        (item) => !this.checkList.includes(item[this.option.code])
      );
      let arr = invertArr.map((item) => item[this.option.code]);
      let names = invertArr.map((item) => item[this.option.label]);
      this.selectInputValue = names.join();
      this.checkList = arr;
      this.$emit("input", arr.join());
      this.$emit("updateAssignProcessName", this.selectInputValue);
    },
    //清空
    handleEmptyAll() {
      this.selectInputValue = "";
      this.checkList = [];
      this.$emit("input", "");
      this.$emit("updateAssignProcessName", this.selectInputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.tool-box {
  height: 26px;
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tool-box-item {
  cursor: pointer;
}
::v-deep .ht-select .el-input .el-input__inner {
  min-width: auto;
  height: 20px;
  padding: 0 10px 0 10px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 20px;
  border: 1px solid #eaeaea;
  border-radius: 2px;
}

::v-deep .el-checkbox__label {
  width: 100%;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  // background: red;
}
::v-deep .el-checkbox__label {
  height: 34px;
  line-height: 34px;
  font-size: 12px;
}
// ::v-deep .el-select-dropdown__empty {
//   display: none;
// }
</style>
