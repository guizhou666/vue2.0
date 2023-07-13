<template>
    <div class='test-tag'>
        hahah
        <dialog-test :form="form" formName="userInfo" :key="1"></dialog-test>
        <dialog-test :form="form" formName="heloo" :key="2"></dialog-test>
        <!-- <dialog-test :form="form" formName="userInfo" :key="3"></dialog-test> -->
        <button @click="skip">跳转</button>
    </div>
</template>

<script>
import dialogTest from '../dialog'
export default {
    components: {
        dialogTest
    },
    data() {
        return {
            obj:{
                show: false
            },
            form:{

            }
        };
    },
    computed: {},
    //监控data中的数据变化
    watch: {},
    created() {
        setTimeout(() => {
            this.obj = {show:true}
        }, 2000);
        console.log('------------')
    },
    mounted() {

    },
    methods: {
        skip(){
            this.$router.push({path:'/vueTreeselect'})
        }
    },
}
</script>
<style lang='scss' scoped></style>