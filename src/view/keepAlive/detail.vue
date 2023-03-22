<template>
    <div class='detail'>
        我是详情页
        <button @click="()=>{$router.back()}">返回</button>
        <button @click="()=>{$router.push({path:'/keep-alive/detail/mast-detail',query:{name:$route.query.name}})}">下一层</button>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    //监控data中的数据变化
    watch: {},
    created() {
        console.log('--------详情')
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang='scss' scoped></style>