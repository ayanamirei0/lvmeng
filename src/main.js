// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
require("babel-polyfill");
import 'es6-promise/auto'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store/'
import 'lib-flexible'   //rem布局
import http from './service/ajax'
import fastclick from 'fastclick'
import VueScroller from 'vue-scroller'
import './common/style/font.css'

import selectCity from './components/common/selectCity/selectCity.vue'
// import tip from './components/common/tip.vue'

Vue.use(VueScroller)
Vue.use(ElementUI);
fastclick.attach(document.body) //解决移动端点击300ms延时
Vue.config.productionTip = false

// 引入mockjs
require('./mock/mock.js')

//注册公共的组件
Vue.component('selectCity', selectCity)
// Vue.component('tip', tip)

Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
