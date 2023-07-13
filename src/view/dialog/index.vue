<template>
    <div class="dd">
        <!-- <el-button type="primary" @click="showDialog">Primary</el-button> -->
        <!-- <span>--{{ form }}</span> -->
        <span>{{ obj }}--------</span>
        <el-button type="primary" @click="changeLable">Primary</el-button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            obj:{}
        };
    },
    computed: {},
    props: {
        form: {},
        formName: {}
    },
    //监控data中的数据变化
    watch: {},
    created() {
        this.init()
    },
    mounted() {
        // this.form.userInfo = {lable:'哈哈'}
        // this.obj.user.name = 'yang'
    },
    methods: {
        init() {
            setTimeout(() => {
                console.log(this.formName)
                this.$set(this.form, this.formName, {});
                // const name = this.getName()
                // console.log(name)
                this.$set(this.form[this.formName], 'label', 'xxx')
            }, 200);
        },
        showDialog() {
            this.$dialog({
                title: "测试",
                width: 1200,
                action: 'add',
                // options:{},
                view: () => import('../line'),
                showFooter: true,
                confirmButtonText: "下发至对应的仿真机",
            }).then((res) => { });
        },
        getName() {
            setTimeout(() => {
                return '杨'
            }, 100);
        },
        changeLable() {
            this.form.userInfo.label = 'hahah'
        }
    },
};
</script>
<style lang="scss" scoped></style>
