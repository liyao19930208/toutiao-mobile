import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  动态设置rem基准值
import 'amfe-flexible'
//  引入iconfont字体文件
import '@/less/iconfont.less'
//  引入 vant组件库导入所有组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入基础样式
import '@/styles/index.less'
//  注册vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
