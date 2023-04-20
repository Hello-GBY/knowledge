import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
Vue.config.productionTip = false


// 使用VueX

new Vue({
  store,
  aaa: class MyTest {
    constructor() {
      this.aaa= 10
    }
  },
  render: h => h(App),
  mounted : function () {
    console.log('初始化', this);
  }
}).$mount('#app')
