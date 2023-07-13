<template>
    <div class='dd'>
        <!-- <item :list="list"></item> -->
        <item :row-num="4" :list="list">
          <template v-slot:rightArrows="{ data }">
            <div :class="{ success: data.id < 5 }">------&gt;</div>
          </template>
          <template v-slot:leftArrows="{ data }">
            <div :class="{ error: data.id >= 5 }">&lt;------</div>
          </template>
          <template v-slot:bottomArrows>
            <img class="bottom-img" src="../../assets/images/dottom_img.png" alt="" />
          </template>
          <template v-slot:content="{ data }">
            <div class="width-200">
              <p>{{ data.title }}</p>
              <p>{{ data.content }}</p>
              <p>{{ data.timestamp }}</p>
            </div>
          </template>
        </item>
    </div>
</template>

<script>
import item from './item'
export default {
components: {
    item
},
data() {
    return {
        list: [
            { id: 1, title: "--标题1", content: "内容1", timestamp: "2021-05-16" },
            { id: 2, title: "标题2", content: "内容2", timestamp: "2021-05-17" },
            { id: 3, title: "标题3", content: "内容3", timestamp: "2021-05-18" },
            { id: 4, title: "标题4", content: "内容4", timestamp: "2021-05-19" },
            { id: 5, title: "标题5", content: "内容5", timestamp: "2021-05-20" },
            { id: 6, title: "标题6", content: "内容6", timestamp: "2021-05-21" },
            { id: 7, title: "标题7", content: "内容7", timestamp: "2021-05-22" },
            { id: 8, title: "标题8", content: "内容8", timestamp: "2021-05-23" },
            { id: 9, title: "标题9", content: "内容9", timestamp: "2021-05-24" },
            { id: 10, title: "标题10", content: "内容10", timestamp: "2021-05-25" },
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
.dd{
    width: 600px;
    height: 600px;
    margin: 0 auto;
}
</style>