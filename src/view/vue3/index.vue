<template>
  <div>
    <button @click="increment">
      {{ count }}
    </button>
  </div>
</template>

<script>
import { reactive, ref, computed, onMounted } from "@vue/composition-api";
// export default {
//   setup() {
//     const count = ref(0)

//     function increment() {
//       // 在 JavaScript 中需要 .value
//       count.value++
//     }

//     // 不要忘记同时暴露 increment 函数
//     return {
//       count,
//       increment
//     }
//   }
// }
</script>
<script setup>
import { reactive, ref, computed, onMounted } from "@vue/composition-api";
const count = ref(0);

function increment() {
  // 在 JavaScript 中需要 .value
  count.value++;
}
</script>
<style lang='scss' scoped>
</style>