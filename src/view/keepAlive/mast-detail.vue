<template>
    <div class=''>
        <button @click="$router.go(-1)">返回</button>
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
        console.log('-------mast-detail')
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang='scss' scoped></style>