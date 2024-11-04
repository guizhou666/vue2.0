<template>
<div class='trigger-box'>
    <div :class="[showBtn === 1 ? 'active' : '']" @click="triggerButton(1)">运行情况</div>
    <div :class="showBtn === 2 ? 'active' : ''" @click="triggerButton(2)">故障情况</div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
    showBtn:1
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
    triggerButton(e){
        this.showBtn = e;
    }
},
}
</script>
<style lang='scss' scoped>
.trigger-box{
    width: 300px;
    height: 50px;
    background-color: chocolate;
    border-radius: 25px;
    margin: 50px auto;
    display: flex;
    div{
        cursor: pointer;
        width: 150px;
        line-height: 50px;
        color: #ffffff;
    }
    .active{
        height: 100%;
        background-color: green;
        border-radius: 25px;
        // transition: 200ms;
    }
    
}
</style>