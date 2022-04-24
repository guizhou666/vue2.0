const testMixin = {
    data() {
        return {
            message: 'hellow'
        }
    },
    mounted() {
        console.log('0.1')
        console.log(this.message);
        this.test();
    },
    methods: {
        test(){
            console.log('test mixin')
        }
    },
}
export {
    testMixin
}