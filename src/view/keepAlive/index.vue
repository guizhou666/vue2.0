<template>
    <div class=''>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
        console.log('--------create 主页面')
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang='scss' scoped></style>