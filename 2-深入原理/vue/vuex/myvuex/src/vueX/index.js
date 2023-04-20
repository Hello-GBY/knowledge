//定义一个Vue,让全局都可以使用这个Vuelet Vue;
// import Vue from 'vue'
class Store {
    constructor(options) {
        this.options = options
        // this.state = new Vue({
        //     data:{
        //         state: options.state
        //     }
        // })
        
        // let getters = options.getters || {}
        // this.getters = getters

        // Object.keys(getters).forEach((getter) => {
        //     Object.defineProperty(this.getters, getter, {
        //         get: () => {
        //             console.log('获取了值！')
        //             return 'sdal'
        //         }
        //     })
        // })
    }
}

const install = function (_vue) {
    console.log('vueX 注册');
    var vue = _vue;
    
    // 混入
    vue.mixin({
        //表示在组件创建之前自动调用，每个组件都有这个钩子
        beforeCreate() {
            console.log('vueX beforeCreate');
            console.log('this: ', this);
            console.log('this.$options',this.$options);

            //判断如果是main.js的话，就把$store挂到上面
            //todo: 测试一下 为什么需要这么写 为什么不是直接加在原型上呢 直接就能用到了啊
            if(this.$options && this.$options.store) {
                this.$store = this.$options.store
            }else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })

}

export default {
    install,
    Store
}