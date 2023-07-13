<template>
    <div id="app">
        <treeselect :value="1"  :options="options" :normalizer="normalizer" />
        <button @click="back">返回</button>
    </div>
</template>

<script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
    // register the component
    name:'vuetreeSelect',
    components: { Treeselect },
    data() {
        return {
            // define the default value
            value: 1,
            // define options
            options: [{
                key: 1,
                name: 'a',
            }, {
                key: 2,
                name: 'b',
            }, {
                key: 3,
                name: 'c',
            }],
            normalizer(node) {
                return {
                    id: node.key,
                    label: node.name,
                }
            },
        }
    },
    created(){
        console.log('-------vuetreeSelect')
    },
    methods:{
        back(){
            this.$router.back()
        }
    },
    beforeRouteLeave (to, from, next) {
        const query = { foo: 'bar' };
        next({  query });
    }
}
</script>