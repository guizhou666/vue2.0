<template>
  <div style="overflow: auto">
    <li>年龄{{ info.age }}</li>
    <li>年龄2{{ info2.age }}</li>
    <li>年龄3{{ age }}</li>
    <button @click="upage">年龄增长</button>
    <p>Has published books:</p>
    <span>{{ hasbook }}</span>
    <p>{{ fullName }}</p>
    <button @click="changeName">修改姓</button>
    <ul>
      <li v-for="value in myObject">
        {{ value }}
      </li>
    </ul>
    <!-- `greet` 是上面定义过的方法名 -->
    <button @click="greet">Greet</button>
    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <li ref="salary">salary:{{ salary }}</li>
    <h4>{{ tableData }}</h4>
    <test :tableData="tableData"></test>
    <el-checkbox-group v-model="checkList.info">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref, computed, onMounted } from '@vue/composition-api'
import test from './test.vue'
export default {
  components: { test },
  name: '',
  setup(props) {
    const info = ref({ age: 18 })

    const info2 = info.value;

    const { age } = ref(info.value).value
    const upage = () => {
      ++info.value.age;
    }
    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })
    let tableData = reactive([{ name: '李四' }])
    const fullName = computed({
      // getter
      get() {
        return firstName.value + ' ' + lastName.value
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
      }
    })
    const firstName = ref('John')
    const lastName = ref('Doe')

    const changeName = () => {
      firstName.value = '杨'
    }
    const hasbook = computed(() => author.books.length > 0 ? 'Yes' : 'No')

    const myObject = reactive({
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    })
    const name = ref('Vue.js')

    function greet(event) {
      alert(`Hello ${name.value}!`)
      // `event` 是 DOM 原生事件
      if (event) {
        alert(event.target.tagName)
      }
    }
    function warn(message, event) {
      // 这里可以访问原生事件
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }

    const salary = ref(null);
    const checkList = ref({
      info: []
    })
    const ruleForm = ref({
      type:[]
    })
    const rules = ref({})
    onMounted(() => {
      console.log('onMounted')
      console.log(salary.value)
      setTimeout(() => {
        tableData = [{ name: '张三' }]
        console.log(tableData)
      }, 2000);
    })
    return {
      info, upage, info2, age, author, hasbook, firstName, lastName, fullName, changeName, myObject, greet, warn, salary, tableData, checkList, ruleForm, rules
    }
  }
}



</script>

<style lang='scss' scoped></style>